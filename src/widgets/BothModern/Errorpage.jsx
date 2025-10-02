import React, { useState } from 'react';
import { X, AlertCircle, Lock, RefreshCw, ExternalLink, Home } from 'lucide-react';

// General Error Page Component
const ErrorPage = ({ 
  errorMessage = "Unable to fetch user details.", 
  onRetry, 
  onClose,
  showRetryButton = true 
}) => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    if (!onRetry) {
      window.location.reload();
      return;
    }

    setIsRetrying(true);
    await onRetry();
    setIsRetrying(false);
  };

  return (
    <div className="absolute inset-0 bg-red-50 z-999 flex flex-col items-center justify-center text-center p-8 animate-in fade-in-50 duration-300">
      {/* Error Icon */}
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>

      {/* Error Content */}
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Oops! Something Went Wrong</h1>
      <p className="text-gray-600 text-sm mb-4 max-w-xs leading-relaxed">
        We encountered an error while loading the chat widget. Please refresh the page or try again later.
      </p>
      
      {/* Error Details */}
      <div className="bg-red-100 border border-red-200 rounded-lg p-3 mb-6 max-w-xs">
        <p className="text-red-700 text-xs">
          <span className="font-medium">Error:</span> {errorMessage}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 w-full max-w-xs">
        {showRetryButton && (
          <button 
            onClick={handleRetry}
            disabled={isRetrying}
            className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 px-6 rounded-full shadow-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:transform hover:scale-105"
          >
            {isRetrying ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Retrying...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>Refresh Page</span>
              </>
            )}
          </button>
        )}

        <a 
          href="https://bucxai.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full text-blue-600 hover:text-blue-700 text-sm font-medium py-2 transition-colors flex items-center justify-center space-x-1 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Visit Calmflo for assistance</span>
        </a>
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
          Powered by <span className="text-black font-semibold">Calmflo</span>
        </p>
      </div>
    </div>
  );
};


export default ErrorPage;