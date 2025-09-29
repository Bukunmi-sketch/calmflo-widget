import UnauthorizedPage from "./unauthorizedPage";
import NetworkErrorPage from "./NetworkErrorPage";
import ErrorPage from "./Errorpage";

// Main Error Handler Component
const ErrorHandler = ({ 
  error, 
  widgetId, 
  onRetry, 
  onClose 
}) => {
  // Determine error type
  const getErrorType = () => {
    if (!error) return null;
    
    if (error.type === 'unauthorized' || error.status === 401 || error.status === 403) {
      return 'unauthorized';
    }
    
    if (error.type === 'network' || error.status === 0 || error.code === 'NETWORK_ERROR') {
      return 'network';
    }
    
    return 'general';
  };

  const errorType = getErrorType();

  if (!error || !errorType) {
    return null;
  }

  // Render appropriate error page based on type
  switch (errorType) {
    case 'unauthorized':
      return (
        <UnauthorizedPage 
          widgetId={widgetId}
          onClose={onClose}
          onRetry={onRetry}
        />
      );
      
    case 'network':
      return (
        <NetworkErrorPage 
          onRetry={onRetry}
          onClose={onClose}
        />
      );
      
    default:
      return (
        <ErrorPage 
          errorMessage={error.message || error.toString()}
          onRetry={onRetry}
          onClose={onClose}
        />
      );
  }
};

export default ErrorHandler;