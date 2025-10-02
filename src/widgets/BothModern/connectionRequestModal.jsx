// ConnectionRequestModal Component
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";

const ConnectionRequestModal = ({ showConnectionModal, setShowConnectionModal, connectionForm, setConnectionForm, handleConnectionRequestButton }) => {
  return (
    <>
      {showConnectionModal && (
         <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
            <div className="bg-gray-100 text-gray-900 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Connect with Agent</h2>
                <button onClick={() => setShowConnectionModal(false)} className="text-gray-300 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-300 text-sm mt-2">Fill out the form to connect with a live agent</p>
            </div>
            <form onSubmit={handleConnectionRequestButton} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={connectionForm.name}
                  onChange={(e) => setConnectionForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Subject *</label>
                <input
                  type="text"
                  required
                  value={connectionForm.title}
                  onChange={(e) => setConnectionForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  rows={3}
                  required
                  value={connectionForm.message}
                  onChange={(e) => setConnectionForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Describe your reason for connecting..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition-colors"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectionRequestModal;