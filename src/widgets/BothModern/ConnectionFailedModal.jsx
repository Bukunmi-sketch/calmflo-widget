import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail, ArrowLeft  } from "lucide-react";
// ConnectionFailedModal Component
// const ConnectionFailedModal = ({ showConnectionFailedModal, setShowConnectionFailedModal, setShowLeadsForm }) => {
//   return (
//     <>
//       {showConnectionFailedModal && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm transform animate-in slide-in-from-bottom-5">
//             <div className="p-8 text-center">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Agent Unavailable</h3>
//               <p className="text-sm text-gray-600 mb-6">
//                 Our live chat agents are currently offline or unavailable. Please try again later or leave us a message.
//               </p>
//               <div className="space-y-2">
//                 <button
//                   onClick={() => {
//                     setShowConnectionFailedModal(false);
//                     setShowLeadsForm(true);
//                   }}
//                   className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm transition-colors"
//                 >
//                   Leave a Message
//                 </button>
//                 <button
//                   onClick={() => setShowConnectionFailedModal(false)}
//                   className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ConnectionFailedModal

const ConnectionFailedModal = ({ 
  showConnectionFailedModal, 
  setShowConnectionFailedModal, 
  setShowLeadsForm,
  setShowTicketForm 
}) => {
  if (!showConnectionFailedModal) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Agent Unavailable</h3>
            <p className="text-sm text-gray-600">
              Our live chat agents are currently offline. Choose how you'd like to reach us:
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {/* Leave a Message Option */}
            <button
              onClick={() => {
                setShowConnectionFailedModal(false);
                setShowLeadsForm(true);
              }}
              className="w-full p-4 border-2 border-gray-200 hover:border-gray-900 rounded-xl transition-all duration-200 text-left group hover:bg-gray-50"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-900 group-hover:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 mb-1">Leave a Message</h4>
                  <p className="text-xs text-gray-600">Send us a quick message and we'll email you back</p>
                </div>
              </div>
            </button>

            {/* Create Ticket Option */}
            <button
              onClick={() => {
                setShowConnectionFailedModal(false);
                setShowTicketForm(true);
              }}
              className="w-full p-4 border-2 border-gray-200 hover:border-blue-600 rounded-xl transition-all duration-200 text-left group hover:bg-blue-50"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-600 group-hover:bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 mb-1">Create a Ticket</h4>
                  <p className="text-xs text-gray-600">Submit a detailed support request with attachments</p>
                </div>
              </div>
            </button>
          </div>

          {/* Close Button */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={() => setShowConnectionFailedModal(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Average response time: <span className="font-medium">2-4 hours</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionFailedModal