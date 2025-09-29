// LeadsFormModal Component
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail, ArrowLeft } from "lucide-react";

const LeadsFormModal = ({ showLeadsForm, setShowLeadsForm, leadsForm, setLeadsForm, handleLeadsFormSubmit }) => {
  return (
    <>
      {showLeadsForm && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
            <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Get in Touch</h2>
                <button onClick={() => setShowLeadsForm(false)} className="text-gray-300 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-300 text-sm mt-2">Let us know how we can help you</p>
            </div>
            <form onSubmit={handleLeadsFormSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={leadsForm.fullname}
                  onChange={(e) => setLeadsForm(prev => ({ ...prev, fullname: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={leadsForm.email}
                  onChange={(e) => setLeadsForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  rows={3}
                  value={leadsForm.message}
                  onChange={(e) => setLeadsForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadsFormModal;