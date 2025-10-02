// import { useState, useEffect, useRef, useMemo } from 'react';

// const useWebSocket = ({
//   widgetId,
//   userDetails,
//   isOpen,
//   // onOnlineStatus, // Callback for online status updates
//   onConnectionAccepted, // Callback for accepted connection
//   onRejection, // Callback for rejected connection
//   onIncomingMessage, // Callback for new messages/files
//   onTyping, // Callback for typing indicators
//   onError, // Callback for errors (e.g., show failed modal)
//   onConnecting, // Callback for connecting status
//   visitorId
// }) => {
//   const [conn, setConn] = useState(null);
//   const [retryCount, setRetryCount] = useState(0);
//   const maxRetries = 5;
//   const reconnectInterval = 5000;

//   const [isReceiverUserOnline, setIsReceiverUserOnlineInternal] = useState(false);
//   const [isRequestConnecting, setIsRequestConnecting] = useState(false);
//   const [connectionRequestAttempt, setConnectionRequestAttempt] = useState(0);
//   const maxRequestRetries = 3;
//   const retryRequestDelay = 5000;
//   const [connectionRequestTimeout, setConnectionRequestTimeout] = useState(null);
//   const [typingTimeout, setTypingTimeout] = useState(null);

//   const fromUserId = visitorId || 'visitor';
//   const receiverUserId = userDetails?.user_unique_id || 'agent';
//   // const widgetName = userDetails?.name || 'Assistant'; // Uncomment if needed in hook

//   // Utility functions
//   const generateUniqueId = () => {
//     return 'req-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
//   };


//   const connectionRequestID = useMemo(() => generateUniqueId(), []);


//   // Initiate connection
//   useEffect(() => {
//     if (isOpen && userDetails && !conn) {
//       initiateConnection();
//     }

//     return () => {
//       if (conn) {
//         conn.close();
//         setConn(null);
//       }
//     };
//   }, [isOpen, userDetails]);

//   const initiateConnection = () => {


//     onConnecting(true);
//     console.log("Receiver Onlineeee:", isReceiverUserOnline);
//     const logInterval = setInterval(() => {
//       console.log("Current Receiver Online Status after 5 seconds:", isReceiverUserOnline);
//     }, 5000);


//     const newConn = new WebSocket(`ws://localhost:3001?user_id=${fromUserId}&widgetid=${widgetId}`);
//     setConn(newConn);

//     newConn.onopen = () => {
//       console.log('Connection established');
//       onConnecting(false);
//       checkAgentActiveStatusOnPageLoad(receiverUserId,newConn);
//       setRetryCount(0);
//       updateOnlineStatus(isReceiverUserOnline);
//     };

//     newConn.onmessage = (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         console.log("Received data:", data);
//         handleWebSocketMessage(data);
//       } catch (e) {
//         console.error('Error parsing JSON:', e);
//         onError();
//       }
//     };

//     newConn.onerror = (error) => {
//       console.error('WebSocket Error:', error);
//       onError();
//     };

//     newConn.onclose = (event) => {
//       console.warn('Connection closed:', event);
//       onConnecting(false);
//       clearInterval(logInterval);
//       if (!event.wasClean) {
//         attemptWebSocketReconnect();
//       }
//     };

    
//   };

//   const attemptWebSocketReconnect = () => {
//     if (retryCount < maxRetries) {
//       setRetryCount((prev) => prev + 1);
//       setTimeout(() => {
//         console.log("Attempting to reconnect...");
//         initiateConnection();
//       }, reconnectInterval);
//     } else {
//       console.error("Max reconnection attempts reached.");
//       onError();
//     }
//   };

//   // const checkAgentActiveStatusOnPageLoad = (receiverId) => {
//   //   if (receiverId && conn && conn.readyState === WebSocket.OPEN) {
//   //     const statusCheckData = {
//   //       from_user: fromUserId,
//   //       to_user: receiverId,
//   //       check_status: true,
//   //     };
//   //     console.log("sending to check", statusCheckData);
//   //     sendWebSocketMessage(statusCheckData);
//   //   }
//   // };
//   const checkAgentActiveStatusOnPageLoad = (receiverId, socket) => {
//   if (receiverId && socket && socket.readyState === WebSocket.OPEN) {
//     const statusCheckData = {
//       from_user: fromUserId,
//       to_user: receiverId,
//       check_status: true,
//     };
//     console.log("sending to check", statusCheckData);
//     socket.send(JSON.stringify(statusCheckData)); // use socket directly
//   }
// };

//   const sendWebSocketMessage = (messageData) => {
//     if (conn && conn.readyState === WebSocket.OPEN) {
//       console.log("Sending message:", messageData);
//       conn.send(JSON.stringify(messageData));
//     } else {
//       console.error("WebSocket is not open.");
//     }
//   };

//   const handleWebSocketMessage = (data) => {
//     console.log('receiver_id', receiverUserId);
//     console.log('to_user', data.to_user);
//     if ( data.type === 'agent_status_check_on_page_load' && data.agent_online_status_check === true && data.agent_identity === receiverUserId && data.widget_identity === fromUserId ) {
//       handleRealOnlineStatus(data);
//     }
//     if (data.type === 'status_update' && data.to_user === receiverUserId) {
//       handleStatusUpdate(data);
//     }
//     if ( data.type === 'agent_status_check' && data.agent_online_status_check === true && data.agent_identity === receiverUserId ) {
//       handleOnlineStatus(data);
//       handleStatusUpdate(data);
//       handleRealOnlineStatus(data);
//     }
//     if (typeof data.agent_online === 'boolean' && data.type === 'agent_status' && data.me === receiverUserId) {
//       handleOnlineStatus(data);
//     } else if (data.rejected) {
//       handleRejection(data);
//     } else if (data.connection_accepted) {
//       handleConnectionAccepted(data);
//     } else if (data.from_user && (data.message_text || data.file)) {
//       handleIncomingMessage(data);
//     } else if (data.typing) {
//       handleTypingIndicator(data);
//     } else if (data.error) {
//       handleError(data);
//     }
//   };

//   const stopConnectionAttempt = () => {
//     clearTimeout(connectionRequestTimeout);
//     setIsRequestConnecting(false);
//     setConnectionRequestAttempt(0);
//     const connectionStopData = {
//       from_user: fromUserId,
//       to_user: receiverUserId,
//       // visitorName: connectionForm.name, // Pass from component if needed
//       widgetId: widgetId,
//       requestId: connectionRequestID,
//       stop_connection_request: true,
//     };
//     sendWebSocketMessage(connectionStopData);
//     console.log(connectionStopData);
//   };

//   const handleStatusUpdate = (data) => {
//     updateOnlineStatus(data.agent_online_status_check);
//     setIsReceiverUserOnlineInternal(data.agent_online_status_check);
//     // onOnlineStatus(data.agent_online_status_check);
//   };

//   const handleOnlineStatus = (data) => {
//     setIsReceiverUserOnlineInternal(data.agent_online_status_check);
//     updateOnlineStatus(data.agent_online_status_check);
//     // onOnlineStatus(data.agent_online_status_check);
//     if (!data.agent_online_status_check) {
//       onError();
//     }
//   };

//   const handleRealOnlineStatus = (data) => {
//     setIsReceiverUserOnlineInternal(data.agent_online_status_check);
//     updateOnlineStatus(data.agent_online_status_check);
//     // onOnlineStatus(data.agent_online_status_check);
//     if (!data.agent_online_status_check) {
//       onError();
//     }
//   };

//   const handleRejection = (data) => {
//     onRejection();
//     stopConnectionAttempt();
//   };

//   const handleConnectionAccepted = (data) => {
//     onConnectionAccepted();
//     stopConnectionAttempt();
//     const sixtyDaysInMilliseconds = 60 * 24 * 60 * 60 * 1000;
//     setLocalStorageWithExpiry(`accepted-${fromUserId}`, true, sixtyDaysInMilliseconds);
//   };

//   const handleIncomingMessage = (data) => {
//     const newMsg = {
//       id: data.message_id || Date.now(), // Fallback ID
//       text: data.message_text || (data.file ? data.file.name : ''),
//       sender: data.from_user === fromUserId ? 'user' : 'agent',
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//     };
//     if (data.file) {
//       newMsg.file = data.file;
//       newMsg.fileUrl = `http://localhost:8001/${data.file.url}`;
//       newMsg.isImage = data.file.name.match(/\.(jpeg|jpg|gif|png)$/i);
//     }
//     onIncomingMessage(newMsg);
//   };

//   const handleTypingIndicator = (data) => {
//     if (data.from_user !== fromUserId && data.to_user === fromUserId && data.typing === true) {
//       onTyping(true);
//       clearTimeout(typingTimeout);
//       const newTimeout = setTimeout(() => {
//         onTyping(false);
//       }, 500);
//       setTypingTimeout(newTimeout);
//     }
//   };

//   const handleError = (data) => {
//     onError();
//   };

//   const updateOnlineStatus = (status) => {
//     setIsReceiverUserOnlineInternal(status);
//     // onOnlineStatus(status);
//   };

//   // Modified to send real connection request
//   const handleConnectionRequest = (connectionForm) => { // Pass connectionForm from component
//     onConnecting(true);
//     // Send request
//     const requestData = {
//       from_user: fromUserId,
//       to_user: receiverUserId,
//       visitorName: connectionForm.name,
//       title: connectionForm.title,
//       message: connectionForm.message,
//       connection_request: true,
//       requestId: connectionRequestID,
//       widgetId: widgetId,
//     };
//     sendWebSocketMessage(requestData);

//     setIsRequestConnecting(true);

//     // Timeout for failure
//     const timeout = setTimeout(() => {
//       onConnecting(false);
//       onError();
//     }, 60000); // 1 minute
//     setConnectionRequestTimeout(timeout);
//   };

//   // Utility for localStorage (move to utils if shared)
//   const setLocalStorageWithExpiry = (key, value, ttl) => {
//     const now = new Date();
//     const item = {
//       value,
//       expiry: now.getTime() + ttl,
//     };
//     localStorage.setItem(key, JSON.stringify(item));
//   };

//   return {
//     isReceiverUserOnline,
//     isRequestConnecting,
//     sendWebSocketMessage,
//     handleConnectionRequest,
//     stopConnectionAttempt,
//     setIsReceiverUserOnlineInternal,
//     // Expose more if needed
//   };
// };

// export default useWebSocket;




import { useState, useEffect, useRef, useMemo } from 'react';

const useWebSocket = ({
  widgetId,
  userDetails,
  isOpen,
  // onOnlineStatus, // Callback for online status updates
  onConnectionAccepted, // Callback for accepted connection
  onRejection, // Callback for rejected connection
  onIncomingMessage, // Callback for new messages/files
  onTyping, // Callback for typing indicators
  onError, // Callback for errors (e.g., show failed modal)
  onConnecting, // Callback for connecting status
  visitorId
}) => {
  const connRef = useRef(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 5;
  const reconnectInterval = 5000;

  const [isReceiverUserOnline, setIsReceiverUserOnlineInternal] = useState(false);
  const [isRequestConnecting, setIsRequestConnecting] = useState(false);
  const [connectionRequestAttempt, setConnectionRequestAttempt] = useState(0);
  const maxRequestRetries = 3;
  const retryRequestDelay = 5000;
  const [connectionRequestTimeout, setConnectionRequestTimeout] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const fromUserId = visitorId || 'visitor';
  const receiverUserId = userDetails?.user_unique_id || 'agent';
  // const widgetName = userDetails?.name || 'Assistant'; // Uncomment if needed in hook

  // Utility functions
  const generateUniqueId = () => {
    return 'req-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };

  const connectionRequestID = useMemo(() => generateUniqueId(), []);

  // Initiate connection
  useEffect(() => {
    if (isOpen && userDetails && !connRef.current) {
      initiateConnection();
    }

    return () => {
      if (connRef.current) {
        connRef.current.close();
        connRef.current = null;
      }
    };
  }, [isOpen, userDetails]);

  const initiateConnection = () => {
    onConnecting(true);
    console.log("Receiver Onlineeee:", isReceiverUserOnline);
    let logInterval = setInterval(() => {
      console.log("Current Receiver Online Status after 5 seconds:", isReceiverUserOnline);
    }, 5000);

    const newConn = new WebSocket(`ws://localhost:3001?user_id=${fromUserId}&widgetid=${widgetId}`);
    connRef.current = newConn;

    newConn.onopen = () => {
      console.log('Connection established');
      onConnecting(false);
      checkAgentActiveStatusOnPageLoad(receiverUserId);
      setRetryCount(0);
      updateOnlineStatus(isReceiverUserOnline);
    };

    newConn.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);
        handleWebSocketMessage(data);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        onError();
      }
    };

    newConn.onerror = (error) => {
      console.error('WebSocket Error:', error);
      onError();
    };

    newConn.onclose = (event) => {
      console.warn('Connection closed:', event);
      onConnecting(false);
      clearInterval(logInterval);
      if (!event.wasClean) {
        attemptWebSocketReconnect();
      }
    };
  };

  const attemptWebSocketReconnect = () => {
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
      setTimeout(() => {
        console.log("Attempting to reconnect...");
        initiateConnection();
      }, reconnectInterval);
    } else {
      console.error("Max reconnection attempts reached.");
      onError();
    }
  };

  const checkAgentActiveStatusOnPageLoad = (receiverId) => {
    if (receiverId && connRef.current && connRef.current.readyState === WebSocket.OPEN) {
      const statusCheckData = {
        from_user: fromUserId,
        to_user: receiverId,
        check_status: true,
      };
      console.log("sending to check", statusCheckData);
      connRef.current.send(JSON.stringify(statusCheckData));
    }
  };

  const sendWebSocketMessage = (messageData) => {
    if (connRef.current && connRef.current.readyState === WebSocket.OPEN) {
      console.log("Sending message:", messageData);
      connRef.current.send(JSON.stringify(messageData));
    } else {
      console.error("WebSocket is not open.");
    }
  };

  const handleWebSocketMessage = (data) => {
    console.log('receiver_id', receiverUserId);
    console.log('to_user', data.to_user);
    if ( data.type === 'agent_status_check_on_page_load' && data.agent_online_status_check === true && data.agent_identity === receiverUserId && data.widget_identity === fromUserId ) {
      handleRealOnlineStatus(data);
    }
    if (data.type === 'status_update' && data.to_user === receiverUserId) {
      handleStatusUpdate(data);
    }
    if ( data.type === 'agent_status_check' && data.agent_online_status_check === true && data.agent_identity === receiverUserId ) {
      handleOnlineStatus(data);
      handleStatusUpdate(data);
      handleRealOnlineStatus(data);
    }
    if (typeof data.agent_online === 'boolean' && data.type === 'agent_status' && data.me === receiverUserId) {
      handleOnlineStatus(data);
    } else if (data.rejected) {
      handleRejection(data);
    } else if (data.connection_accepted) {
      handleConnectionAccepted(data);
    } else if (data.from_user && (data.message_text || data.file)) {
      handleIncomingMessage(data);
    } else if (data.typing) {
      handleTypingIndicator(data);
    } else if (data.error) {
      handleError(data);
    }
  };

  const stopConnectionAttempt = () => {
    clearTimeout(connectionRequestTimeout);
    setIsRequestConnecting(false);
    setConnectionRequestAttempt(0);
    const connectionStopData = {
      from_user: fromUserId,
      to_user: receiverUserId,
      // visitorName: connectionForm.name, // Pass from component if needed
      widgetId: widgetId,
      requestId: connectionRequestID,
      stop_connection_request: true,
    };
    sendWebSocketMessage(connectionStopData);
    console.log(connectionStopData);
  };

  const handleStatusUpdate = (data) => {
    updateOnlineStatus(data.agent_online_status_check);
    setIsReceiverUserOnlineInternal(data.agent_online_status_check);
    // onOnlineStatus(data.agent_online_status_check);
  };

  const handleOnlineStatus = (data) => {
    setIsReceiverUserOnlineInternal(data.agent_online_status_check);
    updateOnlineStatus(data.agent_online_status_check);
    // onOnlineStatus(data.agent_online_status_check);
    if (!data.agent_online_status_check) {
      onError();
    }
  };

  const handleRealOnlineStatus = (data) => {
    setIsReceiverUserOnlineInternal(data.agent_online_status_check);
    updateOnlineStatus(data.agent_online_status_check);
    // onOnlineStatus(data.agent_online_status_check);
    if (!data.agent_online_status_check) {
      onError();
    }
  };

  const handleRejection = (data) => {
    onRejection();
    stopConnectionAttempt();
  };

  const handleConnectionAccepted = (data) => {
    onConnectionAccepted();
    stopConnectionAttempt();
    const sixtyDaysInMilliseconds = 60 * 24 * 60 * 60 * 1000;
    setLocalStorageWithExpiry(`accepted-${fromUserId}`, true, sixtyDaysInMilliseconds);
  };

  const handleIncomingMessage = (data) => {
    const newMsg = {
      id: data.message_id || Date.now(), // Fallback ID
      text: data.message_text || (data.file ? data.file.name : ''),
      sender: data.from_user === fromUserId ? 'user' : 'agent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    if (data.file) {
      newMsg.file = data.file;
      newMsg.fileUrl = `http://localhost:8001/${data.file.url}`;
      newMsg.isImage = data.file.name.match(/\.(jpeg|jpg|gif|png)$/i);
    }
    onIncomingMessage(newMsg);
  };

  const handleTypingIndicator = (data) => {
    if (data.from_user !== fromUserId && data.to_user === fromUserId && data.typing === true) {
      onTyping(true);
      clearTimeout(typingTimeout);
      const newTimeout = setTimeout(() => {
        onTyping(false);
      }, 500);
      setTypingTimeout(newTimeout);
    }
  };

  const handleError = (data) => {
    onError();
  };

  const updateOnlineStatus = (status) => {
    setIsReceiverUserOnlineInternal(status);
    // onOnlineStatus(status);
  };

  // Modified to send real connection request
  const handleConnectionRequest = (connectionForm) => { // Pass connectionForm from component
    onConnecting(true);
    // Send request
    const requestData = {
      from_user: fromUserId,
      to_user: receiverUserId,
      visitorName: connectionForm.name,
      title: connectionForm.title,
      message: connectionForm.message,
      connection_request: true,
      requestId: connectionRequestID,
      widgetId: widgetId,
    };
    sendWebSocketMessage(requestData);

    setIsRequestConnecting(true);

    // Timeout for failure
    const timeout = setTimeout(() => {
      onConnecting(false);
      onError();
    }, 60000); // 1 minute
    setConnectionRequestTimeout(timeout);
  };

  // Utility for localStorage (move to utils if shared)
  const setLocalStorageWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  return {
    isReceiverUserOnline,
    isRequestConnecting,
    sendWebSocketMessage,
    handleConnectionRequest,
    stopConnectionAttempt,
    setIsReceiverUserOnlineInternal,
    // Expose more if needed
  };
};

export default useWebSocket;