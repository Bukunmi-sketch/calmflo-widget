// import React, { useState } from 'react';

// export default function ChatWidget({ widgetId, userDetails }){
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('home');

//   return (
//     <>
//       {!isOpen && <ChatBubble onOpen={() => setIsOpen(true)} />}
//       {isOpen && (
//         <div className="chat-widget fixed bottom-5 right-5 ...">
//           {/* Header with close button */}
//           <button onClick={() => setIsOpen(false)}>Close</button>
//           {/* Tabs */}
//           <div className="tabs">
//             <button onClick={() => setActiveTab('home')}>Home</button>
//             <button onClick={() => setActiveTab('chat')}>Chat</button>
//             {/* ... */}
//           </div>
//           {/* Conditional content */}
//           {activeTab === 'home' && <HomeContent />}
//           {activeTab === 'chat' && <ChatContent />}
//           {/* ... */}
//         </div>
//       )}
//     </>
//   );
// };

// App.jsx
import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "./utils/userDetails";
import { sendHeartbeat } from "./utils/sendHeartbeat";
import { trackWidgetDeployment } from "./utils/trackWidgetDeployment";
import BothModernWidget from "./widgets/bothModern";
import defaultFormData from "./utils/defaultFormData";
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


  // const handleFetchDetails = async () => {
  //   try {
  //     setLoading(true);
  //     const details = await fetchUserDetails(widgetId);
  //     setUserDetails(details.widgetDetails);
  //     setErrorTab(details.error_tab);

  //     await trackWidgetDeployment(widgetId);
  //     sendHeartbeat(widgetId);
  //     setInterval(() => sendHeartbeat(widgetId), 24 * 60 * 60 * 1000); // daily
  //   } catch (error) {
  //     setCurrentError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // App.jsx
  // const handleFetchDetails = async () => {
  //   try {
  //     setLoading(true);
  //     const details = await fetchUserDetails(widgetId);

  //     // If API responded with an error in payload
  //     if (details?.error) {
  //       throw {
  //         type: 'general',
  //         message: details.error,
  //         status: details.status || 400
  //       };
  //     }

  //     setUserDetails(details.widgetDetails);
  //     setErrorTab(details.error_tab);

  //     await trackWidgetDeployment(widgetId);
  //     sendHeartbeat(widgetId);
  //     setInterval(() => sendHeartbeat(widgetId), 24 * 60 * 60 * 1000); // daily
  //   } catch (error) {
  //      console.error("Error fetching widget details:", error);

  // let normalizedError = {
  //   type: 'general',
  //   message: 'Unable to fetch user details.'
  // };

  // if (error?.status === 401 || error?.status === 403) {
  //   normalizedError = {
  //     type: 'unauthorized',
  //     message: 'Widget not authorized for this domain',
  //     status: error.status
  //   };
  // } else if (error instanceof TypeError && error.message == "Failed to fetch") {
  //   // Covers ERR_CONNECTION_REFUSED and other fetch-level network issues
  //   console.log("network issuess");
  //   normalizedError = {
  //     type: 'network',
  //     message: 'Connection failed',
  //     code: 'NETWORK_ERROR'
  //   };
  // } else if (error?.message?.includes("Network")) {
  //   normalizedError = {
  //     type: 'network',
  //     message: 'Connection failed',
  //     code: 'NETWORK_ERROR'
  //   };
  // } else if (error?.message) {
  //   normalizedError.message = error.message;
  // }

  //     setCurrentError(normalizedError);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


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


  const toggleChat = async () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        // only fetch when opening
        handleFetchDetails();
      }
      return next;
    });
  };

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
      />

    </>
  );
}

