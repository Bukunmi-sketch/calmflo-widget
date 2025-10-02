import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";
import { useState,useEffect } from "react";
import RatingModal from "./ratingModal";
import SendTranscriptModal from "./TranscriptModal";

// const WidgetHeader = ({ formData, isConnecting, connectionStatus, showSettings, setShowSettings, setShowTicketForm, toggleChat, messages = [] }) => {

//   const [showRatingModal, setShowRatingModal] = useState(false);
//   const [showTranscriptModal, setShowTranscriptModal] = useState(false);

//   const handleRatingSubmit = (ratingData) => {
//     console.log('Rating submitted:', ratingData);
//     // Handle rating submission (API call, etc.)
//   };

//   const handleTranscriptSend = (transcriptData) => {
//     console.log('Transcript sent:', transcriptData);
//     // Handle transcript sending (API call, etc.)
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 rounded-t-2xl relative">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//             <div className="relative">
//               <img 
//                 src={formData?.widget_image} 
//                 alt="Assistant" 
//                 className="w-10 h-10 rounded-full border-2 border-white/20" 
//               />
//               <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-gray-900"></div>
//             </div>
//           )}
//           <div>
//             <h2 className="font-semibold">{formData?.name || 'Assistant'}</h2>
//             <p className="text-xs text-gray-300 flex items-center">
//               <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
//               {isConnecting ? connectionStatus : "Online now"}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="relative">
//             <button 
//               onClick={() => setShowSettings(!showSettings)}
//               className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
//             >
//               <MoreHorizontal className="w-5 h-5" />
//             </button>
            
//             {/* Settings Dropdown */}
//             {showSettings && (
//               <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] z-10">
//                 <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
//                   <Star className="w-4 h-4" />
//                   <span>Rate Us</span>
//                 </button>
//                 <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
//                   <Mail className="w-4 h-4" />
//                   <span>Send transcript</span>
//                 </button>
//                 <hr className="my-2 border-gray-200" />
//                 <button 
//                   onClick={() => {
//                     setShowSettings(false);
//                     setShowTicketForm(true);
//                   }}
//                   className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
//                 >
//                   <FileText className="w-4 h-4" />
//                   <span>Create Ticket</span>
//                 </button>
//               </div>
//             )}
//           </div>
//           <button 
//             onClick={toggleChat} 
//             className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WidgetHeader;

// Updated WidgetHeader Component
const WidgetHeader = ({ 
  formData, 
  isConnecting, 
  connectionStatus, 
  showSettings, 
  setShowSettings, 
  setShowTicketForm, 
  toggleChat,
  actionText,
  messages = [], // Add messages prop
  isReceiverUserOnline
}) => {
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showTranscriptModal, setShowTranscriptModal] = useState(false);

  const handleRatingSubmit = (ratingData) => {
    console.log('Rating submitted:', ratingData);
    // Handle rating submission (API call, etc.)
  };

  const handleTranscriptSend = (transcriptData) => {
    console.log('Transcript sent:', transcriptData);
    // Handle transcript sending (API call, etc.)
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-900 p-6 rounded-t-2xl relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
              <div className="relative">
                <img src={formData?.widget_image} alt="Assistant" className="w-10 h-10 rounded-full border-2 border-white/20" />
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${isReceiverUserOnline ? `bg-green-500` : `bg-gray-400`} rounded-full border border-gray-900`}></div>
              </div>
            )}
            <div>
              <h2 className=" text-2xl font-bold mb-1">{formData?.name || 'Assistant'}</h2>
               <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
              {actionText || "Welcome! We're here to help you with anything you need. Let's get started!"}
            </p>
              <p className="text-xs text-gray-300 flex items-center">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span> */}
                {isConnecting ? connectionStatus : ""}
              </p>
              <p>{isReceiverUserOnline ? "Online now" : "Offline" }</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button onClick={() => setShowSettings(!showSettings)} className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full" >
                <MoreHorizontal className="w-5 h-5" />
              </button>
              
              {/* Settings Dropdown */}
              {showSettings && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] z-10">
                  <button onClick={() => { setShowSettings(false); setShowRatingModal(true); }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2" >
                    <Star className="w-4 h-4" />
                    <span>Rate Us</span>
                  </button>
                  <button onClick={() => { setShowSettings(false); setShowTranscriptModal(true); }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2" >
                    <Mail className="w-4 h-4" />
                    <span>Send Transcript</span>
                  </button>
                  <hr className="my-2 border-gray-200" />
                  <button onClick={() => { setShowSettings(false); setShowTicketForm(true); }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2" >
                    <FileText className="w-4 h-4" />
                    <span>Create Ticket</span>
                  </button>
                </div>
              )}
            </div>
            <button onClick={toggleChat} className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full" > <X className="w-5 h-5" /> </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <RatingModal 
        showRatingModal={showRatingModal}
        setShowRatingModal={setShowRatingModal}
        onSubmitRating={handleRatingSubmit}
      />

      <SendTranscriptModal 
        showTranscriptModal={showTranscriptModal}
        setShowTranscriptModal={setShowTranscriptModal}
        messages={messages}
        onSendTranscript={handleTranscriptSend}
      />
    </>
  );
};

export default WidgetHeader;