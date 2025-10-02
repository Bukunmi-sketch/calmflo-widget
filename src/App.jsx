
// App.jsx
import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "./utils/userDetails";
import { sendHeartbeat } from "./utils/sendHeartbeat";
import { trackWidgetDeployment } from "./utils/trackWidgetDeployment";
import BothModernWidget from "./widgets/bothModern";
import defaultFormData from "./utils/defaultFormData";
import { createOrRetrieveUserId,getCookieValue } from "./utils/cookie";
import { leadDataExists } from "./utils/leads";
import { API_BASE_URL } from "./utils/url_config";
import './index.css';
import './App.css';

// ---- Main Widget Component ----
export default function ChatWidget({ widgetId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [userDetails, setUserDetails] = useState(null);
  const [errorTab, setErrorTab] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const [currentError, setCurrentError] = useState(null);
  const [loading, setLoading] = useState(false);


  createOrRetrieveUserId();
         const visitorId = getCookieValue('visitorId');
          const customerName = getCookieValue("na");
        
  
          

  const handleFetchDetails = async () => {
    try {
      setLoading(true);
      const details = await fetchUserDetails(widgetId);

      // If API responded with an error in payload
      if (details?.error) {
        throw {
          type: details.type || 'general',
          message: details.error,  // Now always a string
          status: details.status || 400
        };
      }

      setUserDetails(details.widgetDetails || {});  // Fallback to empty if undefined
      setErrorTab(details.error_tab || false);

      await trackWidgetDeployment(widgetId);
      sendHeartbeat(widgetId);
      setInterval(() => sendHeartbeat(widgetId), 24 * 60 * 60 * 1000); // daily
    } catch (error) {
      console.error(`Error fetching widget details for widgetId ${widgetId}:`, error);

      let normalizedError = {
        type: error.type || 'general',
        message: error.message || 'Unable to fetch user details.',
        status: error.status
      };

      // No need for instanceof TypeError check here, as it's handled in fetchUserDetails
      // Override for unauthorized if status indicates
      if (error.status === 401 || error.status === 403) {
        normalizedError.type = 'unauthorized';
        normalizedError.message = 'Widget not authorized for this domain';
      }
      // For network, use the pre-set type
      if (normalizedError.type === 'network') {
        normalizedError.code = 'NETWORK_ERROR';
      }

      setCurrentError(normalizedError);
    } finally {
      setLoading(false);
    }
  };


  const handleRetry = async () => {
    await handleFetchDetails();
  };

  const errorTypes = [
    { type: 'general', message: 'Unable to fetch user details.' },
    { type: 'unauthorized', status: 401, message: 'Widget not authorized for this domain' },
    { type: 'network', code: 'NETWORK_ERROR', message: 'Connection failed' },
    null // No error state
  ];

  // Utility function to save widget clicks
const saveWidgetClick = async (widgetId, visitorId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/save-clicks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ widgetId, visitorId }),
    });

    if (response.ok) {
      console.log("Click saved successfully");
    } else {
      console.error("Failed to save click");
    }
  } catch (error) {
    console.error("Error saving click:", error);
  }
};



  const toggleChat = async () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        handleFetchDetails();
        saveWidgetClick(widgetId, visitorId)
      }
      return next;
    });
  };

  console.log("API_BASE_URL:", API_BASE_URL);
console.log("ENV:", import.meta.env);

  return (
    <>
      <BothModernWidget
        formData={formData}
        isOpen={isOpen}
        toggleChat={toggleChat} // pass dynamic toggle
        widgetId={widgetId}
        error={currentError}
        loading={loading} // 👈 pass loader state
        onRetryConnection={handleRetry}
        userDetails={userDetails}
        visitorId={visitorId}
        leadDataExists={leadDataExists}
      />

    </>
  );
}

