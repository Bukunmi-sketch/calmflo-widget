// LoadingModal Component

import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";

const LoadingModal = ({ showLoadingModal, loadingMessages, currentLoadingMessage, continueInBackground, stopConnectionRequest }) => {
  return (
    <>
      {showLoadingModal && (
        <div className="inset-0 bg-black bg-opacity-50 z-[70] flex items-center absolute justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm transform animate-in slide-in-from-bottom-5">
            <div className="p-8 text-center">
              <Loader2 className="w-12 h-12 animate-spin mx-auto text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Connecting...</h3>
              <p className="text-sm text-gray-600 mb-6 min-h-[40px] flex items-center justify-center">
                <span className="animate-pulse">{loadingMessages[currentLoadingMessage]}</span>
              </p>
              <div className="space-y-2">
                <button
                  onClick={continueInBackground}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  Continue
                </button>
                <button
                  onClick={stopConnectionRequest}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  Stop Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingModal;
