

import { Smile, FileText, Send, ArrowLeft, Phone } from "lucide-react";
import PoweredBy from "./poweredBy";
import { useState, useRef, useEffect } from "react";

const LivechatTab = ({
  liveMessages,
  isAgentTyping,
  formData,
  newLiveMessage,
  setNewLiveMessage,
  handleSendLiveMessage,
  handleLiveKeyPress,
  switchTab,
  setShowConnectionFailedModal,
  setShowConnectionModal,
  isLiveChatConnected,
  isChatEnabled,
  setPreviewImage,
  isReceiverUserOnline
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [liveMessages, isAgentTyping]);

  const handleEmojiSelect = (emoji) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart;
      const end = inputRef.current.selectionEnd;
      setNewLiveMessage((prev) => prev.slice(0, start) + emoji + prev.slice(end));
      setTimeout(() => {
        inputRef.current.focus();
        inputRef.current.selectionStart = inputRef.current.selectionEnd = start + emoji.length;
      }, 0);
    } else {
      setNewLiveMessage((prev) => prev + emoji);
    }
    setShowEmojiPicker(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileMessage = {
        id: liveMessages.length + 1,
        text: `File uploaded: ${file.name}`,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setLiveMessages([...liveMessages, fileMessage]);
    }
  };

  if (!isLiveChatConnected) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex flex-col justify-start items-center w-full p-3 border-b border-gray-200 bg-white">
          <div className="flex w-full items-center">
            <button onClick={() => switchTab("home")} className="p-2 mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full" >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-sm font-semibold text-gray-800">
              {formData?.LivechatTabLabel || "Support"}
            </h2>
          </div>
          <div className="flex items-center  justify-start px-10 gap-1 w-full">
            <div className={` w-2 h-2 ${isReceiverUserOnline ? `bg-green-500` : `bg-gray-400`} rounded-full border border-transparent`}></div>
            <p className="text-black">{isReceiverUserOnline ? "Online now" : "Offline"}</p>
          </div>

        </div>

        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Live Chat Support</h3>
              <p className="text-sm text-gray-600 mb-4">{formData?.LivechatInitialMessage}</p>
              <p className="text-xs text-gray-500 mb-4">{formData?.ConnectionRequestQuestion}</p>
              {/* setShowConnectionFailedModal help me use tetinary condtion that if the isReceiverUserOnline  is true , use setShowConnectionModal else call the function setShowConnectionFailedModal(treu) */}
              <button
                onClick={() =>
    isReceiverUserOnline
      ? setShowConnectionModal(true)
      : setShowConnectionFailedModal(true)
  }
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm transition-colors flex items-center space-x-2 mx-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Connect with Agent</span>
              </button>
            </div>
          </div>
        </div>
        <PoweredBy />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header with Back + Label */}
       <div className="flex flex-col justify-start items-center w-full p-3 border-b border-gray-200 bg-white">
          <div className="flex w-full items-center">
        <button onClick={() => switchTab("home")} className="p-2 mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full" >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-sm font-semibold text-gray-800">
          {formData?.LivechatTabLabel || "Live Chat"}
        </h2>
        </div>
         <div className="flex items-center  justify-start px-10 gap-1 w-full">
            <div className={` w-2 h-2 ${isReceiverUserOnline ? `bg-green-500` : `bg-gray-400`} rounded-full border border-transparent`}></div>
            <p className="text-black">{isReceiverUserOnline ? "Online now" : "Offline"}</p>
          </div>
      </div>

      {/* Messages Area */}
      <div ref={messagesRef} className="flex flex-col flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {liveMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
              }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${message.sender === "user"
                  ? "bg-gray-900 text-white rounded-br-md"
                  : "bg-gray-100 text-gray-800 rounded-bl-md"
                }`}
            >
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${message.sender === "user" ? "text-gray-300" : "text-gray-500"
                  }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isAgentTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area - stays fixed at bottom */}
      <div className="p-3 border-t border-gray-200 bg-white relative">
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={newLiveMessage}
            onChange={(e) => setNewLiveMessage(e.target.value)}
            onKeyPress={handleLiveKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
          <button onClick={() => setShowEmojiPicker((prev) => !prev)} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <button onClick={() => fileInputRef.current.click()} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FileText className="w-5 h-5" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileSelect}
          />
          <button onClick={handleSendLiveMessage} disabled={!newLiveMessage.trim()} className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors disabled:cursor-not-allowed" >
            <Send className="w-4 h-4" />
          </button>
        </div>
        {showEmojiPicker && (
          <div className="absolute bottom-full left-0 mb-2 p-2 bg-white border border-gray-200 rounded-lg shadow-md max-h-40 overflow-y-auto grid grid-cols-6 gap-2">
            {['😊', '😂', '❤️', '👍', '😎', '😢', '😡', '🎉', '🔥', '🌟', '🍕', '🚀', '📚', '🎸', '🏆', '🌈', '🕺', '🍦', '📱', '🌍'].map((emoji) => (
              <button key={emoji} onClick={() => handleEmojiSelect(emoji)} className="text-xl hover:bg-gray-100 rounded p-1">
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>
      <PoweredBy />
    </div>
  );
};

export default LivechatTab;