import React from "react";
import { Phone } from "lucide-react"; 

const AcceptedModal = ({ 
  showAcceptedModal, 
  setShowAcceptedModal, 
  switchTab 
}) => {
  if (!showAcceptedModal) return null;

  return (
    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Phone className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Request Accepted!</h3>
          <p className="text-sm text-gray-600">
            Your live chat request has been accepted. An agent is ready to chat.
          </p>
          <button
            onClick={() => {
              setShowAcceptedModal(false);
              switchTab("livechat");
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm transition-colors w-full"
          >
            Start Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptedModal;
