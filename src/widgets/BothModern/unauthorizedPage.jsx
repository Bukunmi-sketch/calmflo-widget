import React, { useState } from 'react';
import { X, AlertCircle, Lock, RefreshCw, ExternalLink, Home } from 'lucide-react';
import { API_BASE_URL } from '../../utils/url_config';

// Unauthorized Access Page Component
const UnauthorizedPage = ({ 
  widgetId,
  domain = window.location.hostname,
  onClose,
  onRetry 
}) => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    if (onRetry) {
      await onRetry();
    } else {
      // Default retry behavior
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    setIsRetrying(false);
  };

  return (
    <div className="absolute inset-0 bg-yellow-50 flex flex-col z-999 items-center justify-center text-center p-8 animate-in fade-in-50 duration-300">
      {/* Lock Icon */}
      <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <Lock className="w-10 h-10 text-yellow-600" />
      </div>

      {/* Unauthorized Content */}
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Widget Not Authorized</h1>
      <p className="text-gray-600 text-sm mb-4 max-w-xs leading-relaxed">
        This chat widget is not authorized to load on this website. Please verify your settings.
      </p>

      {/* Domain Info */}
      <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3 mb-4 max-w-xs">
        <p className="text-yellow-800 text-xs space-y-1">
          <span className="block"><span className="font-medium">Domain:</span> {domain}</span>
          {widgetId && <span className="block"><span className="font-medium">Widget ID:</span> {widgetId}</span>}
        </p>
      </div>

      <p className="text-gray-500 text-xs mb-6 max-w-xs">
        Create an account on Bucxai to configure the widget for this domain.
      </p>

      {/* Action Buttons */}
      <div className="space-y-3 w-full max-w-xs">
        <a 
          href={`${API_BASE_URL}/signup`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg font-medium transition-all duration-200 hover:transform hover:scale-105"
        >
          Create an Account
        </a>

        <button 
          onClick={handleRetry}
          disabled={isRetrying}
          className="w-full text-blue-600 hover:text-blue-700 text-sm font-medium py-2 transition-colors disabled:opacity-50 flex items-center justify-center space-x-1"
        >
          {isRetrying ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Retrying...</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              <span>Retry Connection</span>
            </>
          )}
        </button>

        <a 
          href={`${API_BASE_URL}/docs/widget-setup`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full text-gray-600 hover:text-gray-700 text-sm font-medium py-2 transition-colors flex items-center justify-center space-x-1 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Setup Documentation</span>
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

export default UnauthorizedPage;