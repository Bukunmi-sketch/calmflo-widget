// ChatBubble Component
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail, MessageCircleIcon, MessageCircleCodeIcon } from "lucide-react";
import { IoChatbubble, IoFileTrayFull } from "react-icons/io5";

const ChatBubble = ({ toggleChat, formData, actionText, statusBubbleIcon, statusBubbleText }) => {
  return (
    <button
      onClick={toggleChat}
      className="bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center space-x-2 relative hover:bg-gray-800 transition-all duration-200"
    >
      {formData?.statusBubbleIcon && <div className="w-2 h-2 rounded-full bg-green-400"></div>}
      {formData?.statusBubbleText && <span className="text-xs">Online</span>}
      <IoChatbubble className="text-2xl" />
    </button>
  );
};


export default ChatBubble;