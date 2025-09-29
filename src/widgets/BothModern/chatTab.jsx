// // ChatTab Component
// import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";

// const ChatTab = ({ messages, isTyping, formData, newMessage, setNewMessage, handleSendMessage, handleKeyPress }) => {
//   return (
//     <div className="flex flex-col h-full bottom-0">
//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message) => (
//           <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//             <div className={`max-w-xs px-4 py-2 rounded-2xl ${
//               message.sender === 'user' 
//                 ? 'bg-gray-900 text-white rounded-br-md' 
//                 : 'bg-gray-100 text-gray-800 rounded-bl-md'
//             }`}>
//               <p className="text-sm">{message.text}</p>
//               <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'}`}>
//                 {message.timestamp}
//               </p>
//             </div>
//           </div>
//         ))}
        
//         {/* Typing Indicator */}
//         {isTyping && (
//           <div className="flex justify-start">
//             <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Suggested Messages */}
//       <div className="p-4 border-t border-gray-100">
//         <div className="flex space-x-2 overflow-x-auto pb-2">
//           {formData?.suggestedMessages?.map((message, index) => (
//             <button
//               key={index}
//               onClick={() => setNewMessage(message)}
//               className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full transition-colors"
//             >
//               {message}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Input Area */}
//       <div className="p-4 border-t border-gray-100 bg-white">
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//             className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
//           />
//           {formData?.allowFileAttachments && (
//             <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <FileText className="w-5 h-5" />
//             </button>
//           )}
//           <button
//             onClick={handleSendMessage}
//             disabled={!newMessage.trim()}
//             className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors disabled:cursor-not-allowed"
//           >
//             <Send className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatTab

// import { FileText, Send, ArrowLeft } from "lucide-react";
// import PoweredBy from "./poweredBy";

// const ChatTab = ({
//   messages,
//   isTyping,
//   formData,
//   newMessage,
//   setNewMessage,
//   handleSendMessage,
//   handleKeyPress,
//   switchTab,
// }) => {
//   return (
//     <div className="flex flex-col h-full">
//       {/* Header with Back + LSU */}
//       <div className="flex items-center p-3 border-b border-gray-200 bg-white">
//         <button onClick={() => switchTab("home")} className="p-2 mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full" >
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <h2 className="text-sm font-semibold text-gray-800">
//           {formData?.BotTabLabel || "LSU"}
//         </h2>
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`flex ${
//               message.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`max-w-xs px-4 py-2 rounded-2xl ${
//                 message.sender === "user"
//                   ? "bg-gray-900 text-white rounded-br-md"
//                   : "bg-gray-100 text-gray-800 rounded-bl-md"
//               }`}
//             >
//               <p className="text-sm">{message.text}</p>
//               <p
//                 className={`text-xs mt-1 ${
//                   message.sender === "user" ? "text-gray-300" : "text-gray-500"
//                 }`}
//               >
//                 {message.timestamp}
//               </p>
//             </div>
//           </div>
//         ))}

//         {/* Typing Indicator */}
//         {isTyping && (
//           <div className="flex justify-start">
//             <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div
//                   className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                   style={{ animationDelay: "0.1s" }}
//                 ></div>
//                 <div
//                   className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                   style={{ animationDelay: "0.2s" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Suggested Messages */}
//       {formData?.suggestedMessages?.length > 0 && (
//         <div className="p-3 border-t border-gray-100 bg-white">
//           <div className="flex space-x-2 overflow-x-auto pb-2">
//             {formData.suggestedMessages.map((message, index) => (
//               <button key={index} onClick={() => setNewMessage(message)} className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full transition-colors" >
//                 {message}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Input Area - stays fixed at bottom */}
//       <div className="p-3 border-t border-gray-200 bg-white">
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//             className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
//           />
//           {formData?.allowFileAttachments && (
//             <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <FileText className="w-5 h-5" />
//             </button>
//           )}
//           <button onClick={handleSendMessage} disabled={!newMessage.trim()} className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors disabled:cursor-not-allowed" >
//             <Send className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//       <PoweredBy/>
//     </div>
//   );
// };

// export default ChatTab;
import { Smile, Send, ArrowLeft } from "lucide-react";
import PoweredBy from "./poweredBy";
import { useState, useRef, useEffect } from "react";

const ChatTab = ({
  messages,
  isTyping,
  formData,
  newMessage,
  setNewMessage,
  handleSendMessage,
  handleKeyPress,
  switchTab,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleEmojiSelect = (emoji) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart;
      const end = inputRef.current.selectionEnd;
      setNewMessage((prev) => prev.slice(0, start) + emoji + prev.slice(end));
      setTimeout(() => {
        inputRef.current.focus();
        inputRef.current.selectionStart = inputRef.current.selectionEnd = start + emoji.length;
      }, 0);
    } else {
      setNewMessage((prev) => prev + emoji);
    }
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header with Back + LSU */}
      <div className="flex items-center p-3 border-b border-gray-200 bg-white">
        <button onClick={() => switchTab("home")} className="p-2 mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full" >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-sm font-semibold text-gray-800">
          {formData?.BotTabLabel || "LSU"}
        </h2>
      </div>

      {/* Messages Area */}
      <div ref={messagesRef} className="flex flex-col flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.sender === "user"
                  ? "bg-gray-900 text-white rounded-br-md"
                  : "bg-gray-100 text-gray-800 rounded-bl-md"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
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

      {/* Suggested Messages */}
      {formData?.suggestedMessages?.length > 0 && (
        <div className="p-3 border-t border-gray-100 bg-white">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {formData.suggestedMessages.map((message, index) => (
              <button key={index} onClick={() => setNewMessage(message)} className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full transition-colors" >
                {message}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area - stays fixed at bottom */}
      <div className="p-3 border-t border-gray-200 bg-white relative">
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
          <button onClick={() => setShowEmojiPicker((prev) => !prev)} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <button onClick={handleSendMessage} disabled={!newMessage.trim()} className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors disabled:cursor-not-allowed" >
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
      <PoweredBy/>
    </div>
  );
};

export default ChatTab;