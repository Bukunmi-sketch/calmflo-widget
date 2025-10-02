import React, { useState, useEffect, useMemo } from "react";
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";
import ConnectionFailedModal from "./BothModern/ConnectionFailedModal";
import PopupAnimation from "./BothModern/PopupAnimation";
import ChatBubble from "./BothModern/ChatBubble";
import WidgetHeader from "./BothModern/WidgetHeader";
import HomeTab from "./BothModern/HomeTab";
import ChatTab from "./BothModern/chatTab";
import LivechatTab from "./BothModern/LivechatTab";
import BottomNav from "./BothModern/BottomNav";
import LeadsFormModal from "./BothModern/LeadsFormModal";
import TicketFormModal from "./BothModern/TicketFormModal";
import ConnectionRequestModal from "./BothModern/connectionRequestModal";
import LoadingModal from "./BothModern/LoadingModal";
import PoweredBy from "./BothModern/poweredBy";
import ErrorHandler from "./BothModern/ErrorHandler";
import AcceptedModal from "./BothModern/AcceptedModal";
import useWebSocket from './useWebSocket'; // Import the hook

const BothModernWidget = ({
  formData = {
    name: "Assistant",
    initialMessage: "Hi there! How can I help you today?",
    actionText: "Let's chat",
    callToActionText: "Start Chat",
    homeTab: true,
    chatbotTab: true,
    livechatTab: true,
    modernStructure: true,
    allowWidgetDisplayPicture: true,
    widget_image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
    headingBgColor: "#1f2937",
    containerBgColor: "#ffffff",
    botBgColor: "#f3f4f6",
    textColor: "#374151",
    HomeTabLabel: "Home",
    BotTabLabel: "Chat",
    LivechatTabLabel: "Live Chat",
    HideTabIcon: false,
    HideTabLabel: false,
    actionButtons: [
      { text: "View Pricing", link: "#pricing" },
      { text: "Contact Support", link: "#support" },
      { text: "Documentation", link: "#docs" }
    ],
    actionFaq: [
      { question: "How does billing work?", answer: "We offer flexible billing options including monthly and annual plans." },
      { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time with no penalties." }
    ],
    suggestedMessages: ["I need help", "Pricing info", "Technical support", "General inquiry"],
    allowPopUpAnimationModal: true,
    popUpAnimations: {
      popUpAnimationText: "👋 Need help? We're here to assist you!",
      popUpDelay: 2000,
      popUpTimeout: 5000
    },
    LivechatInitialMessage: "Connect with our live support team",
    ConnectionRequestQuestion: "Want to chat with a human agent?",
    allowLeadsCollection: true,
    allowTicketCollection: true,
    allowFileAttachments: true
  },
  toggleChat,
  isOpen = false,
  widgetId = "widget-1",
  actionText = "Let's chat",
  statusBubbleIcon = true,
  statusBubbleText = true,
  error = null,
  loading = false,
  onRetryConnection,
  userDetails, // Added prop for userDetails
}) => {
  const [activeTab, setActiveTab] = useState("home");
  const [visible, setVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLeadsForm, setShowLeadsForm] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showConnectionFailedModal, setShowConnectionFailedModal] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("");
  const [isLiveChatConnected, setIsLiveChatConnected] = useState(false);
  const [showAcceptedModal, setShowAcceptedModal] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: formData?.initialMessage || "Hi there! How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const [liveMessages, setLiveMessages] = useState(() => {
    const stored = getLocalStorageWithExpiry("livechatData") || [];
    return stored.length > 0 ? stored.map((entry, index) => ({
      id: index + 1,
      text: entry.message,
      sender: entry.type === "sender" ? "user" : "agent",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })) : [
      {
        id: 1,
        text: "Hello! An agent is connected. How can I assist you?",
        sender: "agent",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });
  const [newLiveMessage, setNewLiveMessage] = useState("");
  const [isAgentTyping, setIsAgentTyping] = useState(false);

  // Form states
  const [leadsForm, setLeadsForm] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const [ticketForm, setTicketForm] = useState({
    subject: "",
    description: "",
    priority: "medium",
    category: "general",
    attachment: null
  });

  const [connectionForm, setConnectionForm] = useState({
    name: "",
    title: "",
    message: ""
  });

  const loadingMessages = [
    "Connecting you to an agent...",
    "Finding the best agent for you...",
    "Please wait a moment...",
    "Almost there...",
    "Establishing connection..."
  ];

  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);

  const [isChatEnabled, setIsChatEnabled] = useState(false);
  const [showRejectedModal, setShowRejectedModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const widgetName = userDetails?.name || formData.name;

  // Use the WebSocket hook
  const {
    isReceiverUserOnline,
    isRequestConnecting,
    sendWebSocketMessage,
    handleConnectionRequest: hookHandleConnectionRequest,
    stopConnectionAttempt,
  } = useWebSocket({
    widgetId,
    userDetails,
    isOpen,
    onOnlineStatus: (status) => {
      setIsReceiverUserOnline(status);
      // Update connectionStatus or other UI if needed
    },
    onConnectionAccepted: () => {
      setIsChatEnabled(true);
      setIsLiveChatConnected(true);
      setShowAcceptedModal(true);
      setShowLoadingModal(false);
      setIsConnecting(false);
      setConnectionStatus("");
    },
    onRejection: () => {
      setIsChatEnabled(false);
      setShowRejectedModal(true);
      setShowLoadingModal(false);
      setIsConnecting(false);
      setConnectionStatus("");
    },
    onIncomingMessage: (newMsg) => {
      setIsChatEnabled(true);
      setLiveMessages((prev) => [...prev, newMsg]);
    },
    onTyping: (isTyping) => setIsAgentTyping(isTyping),
    onError: () => {
      setShowConnectionFailedModal(true);
      setShowLoadingModal(false);
      setIsConnecting(false);
      setConnectionStatus("");
    },
    onConnecting: (isConnecting) => {
      setIsConnecting(isConnecting);
      setConnectionStatus(isConnecting ? "Connecting..." : "");
    },
  });

  // Utility functions (localStorage, etc.) - move to a utils file if shared
  const getCookieValue = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  const cleanUpData = (data) => {
    return data.map(entry => {
      return {
        id: entry.id === "null" ? null : entry.id,
        type: entry.type,
        message: entry.message
      };
    });
  };

  const setLocalStorageWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  const getLocalStorageWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  };

  const saveLiveChatToLocalStorage = () => {
    const chatData = liveMessages.map(msg => ({
      id: msg.id === "null" ? null : msg.id,
      type: msg.sender === "user" ? "sender" : "receiver",
      message: msg.text
    }));
    const sixtyDaysInMilliseconds = 60 * 24 * 60 * 60 * 1000;
    setLocalStorageWithExpiry("livechatData", cleanUpData(chatData), sixtyDaysInMilliseconds);
  };

  useEffect(() => {
    saveLiveChatToLocalStorage();
  }, [liveMessages]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setShowSettings(false);
  };

  useEffect(() => {
    const delay = formData?.popUpAnimations?.popUpDelay || 0;
    const timeout = formData?.popUpAnimations?.popUpTimeout || 0;

    if (delay > 0) {
      const showTimer = setTimeout(() => {
        setVisible(true);
        if (timeout > 0) {
          setTimeout(() => setVisible(false), timeout);
        }
      }, delay);

      return () => clearTimeout(showTimer);
    }
  }, [formData?.popUpAnimations]);

  useEffect(() => {
    if (showLoadingModal) {
      const interval = setInterval(() => {
        setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showLoadingModal]);

  useEffect(() => {
    if (showAcceptedModal) {
      const autoSwitchTimer = setTimeout(() => {
        setShowAcceptedModal(false);
        switchTab("livechat");
      }, 5000);
      return () => clearTimeout(autoSwitchTimer);
    }
  }, [showAcceptedModal]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll help you with that.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
  };

  const handleSendLiveMessage = () => {
    if (newLiveMessage.trim() && isChatEnabled) {
      const userMessage = {
        id: liveMessages.length + 1,
        text: newLiveMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setLiveMessages([...liveMessages, userMessage]);
      sendWebSocketMessage({
        from_user: userDetails?.user_id || 'visitor',
        to_user: userDetails?.receiver_id || 'agent',
        message_text: newLiveMessage
      });
      setNewLiveMessage("");
    }
  };

  // Send typing indicator when typing
  useEffect(() => {
    if (newLiveMessage.trim() && isChatEnabled) {
      sendWebSocketMessage({
        from_user: userDetails?.user_id || 'visitor',
        to_user: userDetails?.receiver_id || 'agent',
        typing: true
      });
    }
  }, [newLiveMessage, sendWebSocketMessage, isChatEnabled]);

  const handleLiveKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendLiveMessage();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLeadsFormSubmit = (e) => {
    e.preventDefault();
    console.log("Leads form submitted:", leadsForm);
    setShowLeadsForm(false);
    setLeadsForm({ fullname: "", email: "", message: "" });
    alert("Thank you! We'll get back to you soon.");
  };

  const handleTicketFormSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket form submitted:", ticketForm);
    setShowTicketForm(false);
    setTicketForm({ subject: "", description: "", priority: "medium", category: "general", attachment: null });
    alert("Ticket created successfully! We'll review it shortly.");
  };

  const handleConnectionRequest = (e) => {
    e.preventDefault();
    setShowConnectionModal(false);
    setShowLoadingModal(true);
    hookHandleConnectionRequest(connectionForm); // Call hook's handler, passing form
  };

  const continueInBackground = () => {
    setShowLoadingModal(false);
    setConnectionStatus("Connecting...");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTicketForm(prev => ({ ...prev, attachment: file }));
    }
  };

  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    if (onRetryConnection) {
      await onRetryConnection();
    } else {
      window.location.reload();
    }
    setIsRetrying(false);
  };

  // New RejectedModal (similar to AcceptedModal)
  const RejectedModal = () => {
    if (!showRejectedModal) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
          <h3 className="text-lg font-bold mb-2">Connection Rejected</h3>
          <p className="text-gray-600 mb-4"><b>{widgetName}</b> rejected your request.</p>
          <button
            onClick={() => setShowRejectedModal(false)}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg w-full"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  // Image Preview Modal
  const ImagePreviewModal = () => {
    if (!previewImage) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative">
          <img src={previewImage} alt="Preview" className="max-w-full max-h-screen rounded-lg" />
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
          >
            ✕
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans flex flex-col">
      <PopupAnimation visible={visible} formData={formData} setVisible={setVisible} />

      <ChatBubble
        toggleChat={toggleChat}
        formData={formData}
        actionText={actionText}
        statusBubbleIcon={statusBubbleIcon}
        statusBubbleText={statusBubbleText}
      />

      {isOpen && (
        <div
          className="bg-white rounded-2xl shadow-2xl text-sm z-50 overflow-hidden transition-all duration-300 transform animate-in slide-in-from-bottom-5 flex flex-col"
          style={{
            width: '384px',
            height: window.innerWidth < 768 ? '600px' : '700px',
            maxHeight: '90vh'
          }}>
          {error && (
            <ErrorHandler
              error={error}
              widgetId={widgetId}
              onRetry={handleRetry}
              onClose={toggleChat}
            />
          )}

          {loading ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 text-sm">Loading chat widget...</p>
            </div>
          ) : (
            <>
              {activeTab === "home" && formData?.homeTab && (
                <WidgetHeader
                  formData={formData}
                  isConnecting={isConnecting}
                  connectionStatus={connectionStatus}
                  showSettings={showSettings}
                  setShowSettings={setShowSettings}
                  setShowTicketForm={setShowTicketForm}
                  toggleChat={toggleChat}
                  messages={messages}
                />
              )}

              <div className="flex-1 overflow-hidden">
                {activeTab === "home" && formData?.homeTab && (
                  <HomeTab
                    formData={formData}
                    actionText={actionText}
                    switchTab={switchTab}
                    setShowLeadsForm={setShowLeadsForm}
                  />
                )}

                {activeTab === "chat" && formData?.chatbotTab && (
                  <ChatTab
                    messages={messages}
                    isTyping={isTyping}
                    formData={formData}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleSendMessage={handleSendMessage}
                    handleKeyPress={handleKeyPress}
                    switchTab={switchTab}
                  />
                )}

                {activeTab === "livechat" && formData?.livechatTab && (
                  <LivechatTab
                    liveMessages={liveMessages}
                    isAgentTyping={isAgentTyping}
                    formData={formData}
                    newLiveMessage={newLiveMessage}
                    setNewLiveMessage={setNewLiveMessage}
                    handleSendLiveMessage={handleSendLiveMessage}
                    handleLiveKeyPress={handleLiveKeyPress}
                    switchTab={switchTab}
                    setShowConnectionModal={setShowConnectionModal}
                    isLiveChatConnected={isLiveChatConnected}
                    isChatEnabled={isChatEnabled}
                    setPreviewImage={setPreviewImage}
                  />
                )}
              </div>

              {activeTab === "home" && formData?.homeTab && (
                <BottomNav
                  formData={formData}
                  activeTab={activeTab}
                  switchTab={switchTab}
                />
              )}

              <LeadsFormModal
                showLeadsForm={showLeadsForm}
                setShowLeadsForm={setShowLeadsForm}
                leadsForm={leadsForm}
                setLeadsForm={setLeadsForm}
                handleLeadsFormSubmit={handleLeadsFormSubmit}
              />

              <TicketFormModal
                showTicketForm={showTicketForm}
                setShowTicketForm={setShowTicketForm}
                ticketForm={ticketForm}
                setTicketForm={setTicketForm}
                handleTicketFormSubmit={handleTicketFormSubmit}
                handleFileUpload={handleFileUpload}
              />

              <ConnectionRequestModal
                showConnectionModal={showConnectionModal}
                setShowConnectionModal={setShowConnectionModal}
                connectionForm={connectionForm}
                setConnectionForm={setConnectionForm}
                handleConnectionRequest={handleConnectionRequest}
              />

              <LoadingModal
                showLoadingModal={showLoadingModal}
                loadingMessages={loadingMessages}
                currentLoadingMessage={currentLoadingMessage}
                continueInBackground={continueInBackground}
                stopConnectionRequest={stopConnectionAttempt}
              />

              <ConnectionFailedModal
                showConnectionFailedModal={showConnectionFailedModal}
                setShowConnectionFailedModal={setShowConnectionFailedModal}
                setShowLeadsForm={setShowLeadsForm}
                setShowTicketForm={setShowTicketForm}
              />

              <AcceptedModal
                showAcceptedModal={showAcceptedModal}
                setShowAcceptedModal={setShowAcceptedModal}
                switchTab={switchTab}
              />

              {/* New modals */}
              <RejectedModal />
              <ImagePreviewModal />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BothModernWidget;