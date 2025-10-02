// BottomNav Component
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";
import PoweredBy from "./poweredBy";

const BottomNav = ({ formData, activeTab, switchTab }) => {
  return (
    <>
      {formData?.modernStructure && (
        <div className="bg-white border-t  border-gray-100 p-2">
          <div className="flex justify-around items-center">
            {formData?.homeTab && (
              <button
                onClick={() => switchTab("home")}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  activeTab === "home" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                }`}
              >
                {!formData?.HideTabIcon && <Home className="w-5 h-5 mb-1" />}
                {!formData?.HideTabLabel && (
                  <span className="text-xs">{formData?.HomeTabLabel}</span>
                )}
              </button>
            )}
            {formData?.chatbotTab && (
              <button
                onClick={() => switchTab("chat")}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  activeTab === "chat" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                }`}
              >
                {!formData?.HideTabIcon && <MessageCircle className="w-5 h-5 mb-1" />}
                {!formData?.HideTabLabel && (
                  <span className="text-xs">{formData?.BotTabLabel}</span>
                )}
              </button>
            )}
            {formData?.livechatTab && (
              <button
                onClick={() => switchTab("livechat")}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  activeTab === "livechat" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                }`}
              >
                {!formData?.HideTabIcon && <User className="w-5 h-5 mb-1" />}
                {!formData?.HideTabLabel && (
                  <span className="text-xs">{formData?.LivechatTabLabel}</span>
                )}
              </button>
            )}
          </div>
        {/* powered is not showing in the bottom */}
        {/* <div className="mt-1 text-center"> */}
          <PoweredBy/>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default BottomNav