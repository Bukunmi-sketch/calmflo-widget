// Network Error Page Component
import React, { useState } from 'react';
import { X, AlertCircle, Lock, RefreshCw, ExternalLink, Home } from 'lucide-react';


const NetworkErrorPage = ({ onRetry, onClose }) => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    if (onRetry) {
      await onRetry();
    } else {
      window.location.reload();
    }
    setIsRetrying(false);
  };

  return (
    <div className="absolute inset-0 bg-blue-50 flex flex-col z-999 items-center justify-center text-center p-8 animate-in fade-in-50 duration-300">
      {/* Network Icon */}
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <div className="relative">
          <div className="w-6 h-6 border-2 border-blue-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Network Error Content */}
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Connection Problem</h1>
      <p className="text-gray-600 text-sm mb-6 max-w-xs leading-relaxed">
        Unable to connect to our servers. Please check your internet connection and try again.
      </p>

      {/* Action Buttons */}
      <div className="space-y-3 w-full max-w-xs">
        <button 
          onClick={handleRetry}
          disabled={isRetrying}
          className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 px-6 rounded-full shadow-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:transform hover:scale-105"
        >
          {isRetrying ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </>
          )}
        </button>
      </div>

      {/* Close Button */}
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white/50 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Powered By */}
      <div className="absolute bottom-4 w-full">
        <p className="text-center text-xs text-gray-400">
          Powered by <span className="text-orange-500 font-semibold">Bucxai</span>
        </p>
      </div>
    </div>
  );
};

export default NetworkErrorPage