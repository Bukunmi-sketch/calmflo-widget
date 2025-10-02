// // LeadsFormModal Component
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail, ArrowLeft } from "lucide-react";

import { useState } from "react";
import { API_BASE_URL } from "../../utils/url_config";

const LeadsFormModal = ({
  leadDataExists,
  userDetails,
  showLeadsForm,
  setShowLeadsForm,
  leadsForm,
  setLeadsForm,
  visitorId,
  widgetId
}) => {
  const [loading, setLoading] = useState(false);

  // Guard clause: if lead collection is disabled or lead data already exists, render nothing
  // Moved this to a return null to avoid setting state in render (which can cause issues)
  if (leadDataExists || userDetails?.enable_lead_collection) {
    return null;
  }

  const handleLeadsFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Build payload with correct field names for backend
      // Note: Standardized to 'fullName' in state and payload for consistency (adjust if backend expects 'fullname')
      const payload = {
        visitorid: visitorId,            
        fullName: leadsForm.fullName,   
        email: leadsForm.email,          
        message: leadsForm.message, 
        widgetId: widgetId, 
      };

      // Send to API
      const res = await fetch(`${API_BASE_URL}/api/save-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      // Save locally to prevent resubmission
      localStorage.setItem("leadData", JSON.stringify(payload));

      // Close modal after submit (removed duplicate setShowLeadsForm)
      setShowLeadsForm(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    showLeadsForm ? (
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
          <div className="bg-gray-100 text-black p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Get in Touch</h2>
              <button
                onClick={() => setShowLeadsForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Let us know how we can help you
            </p>
          </div>

          <form onSubmit={handleLeadsFormSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={leadsForm.fullName}
                onChange={(e) =>
                  setLeadsForm((prev) => ({ ...prev, fullName: e.target.value }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={leadsForm.email}
                onChange={(e) =>
                  setLeadsForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                rows={3}
                value={leadsForm.message}
                onChange={(e) =>
                  setLeadsForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                placeholder="Tell us more about how we can help..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-gray-900 hover:bg-gray-800"
              } text-white py-3 rounded-full font-medium transition-colors flex items-center justify-center`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" > <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /> </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default LeadsFormModal;