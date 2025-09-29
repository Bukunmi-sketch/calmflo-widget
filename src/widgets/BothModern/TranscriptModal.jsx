import { useState } from "react";
import { Star, Mail, X, Send, Check, MessageSquare } from 'lucide-react';

// Send Transcript Modal Component
const SendTranscriptModal = ({ showTranscriptModal, setShowTranscriptModal, messages, onSendTranscript }) => {
  const [email, setEmail] = useState('');
  const [includePersonalInfo, setIncludePersonalInfo] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const transcriptData = {
      email,
      includePersonalInfo,
      messages,
      timestamp: new Date().toISOString(),
      messageCount: messages?.length || 0
    };

    onSendTranscript?.(transcriptData);
    setSubmitted(true);
    
    setTimeout(() => {
      setShowTranscriptModal(false);
      setSubmitted(false);
      setEmail('');
      setIncludePersonalInfo(true);
      setIsSubmitting(false);
    }, 3000);
  };

  const resetForm = () => {
    setShowTranscriptModal(false);
    setEmail('');
    setIncludePersonalInfo(true);
    setIsSubmitting(false);
    setSubmitted(false);
  };

  if (!showTranscriptModal) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 z-[70] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
        {submitted ? (
          // Success State
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Transcript Sent!</h3>
            <p className="text-gray-600 text-sm mb-2">
              Your chat transcript has been sent to:
            </p>
            <p className="font-medium text-gray-800 text-sm bg-gray-50 px-3 py-2 rounded-lg">
              {email}
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Please check your email (including spam folder)
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Send Chat Transcript</h2>
                    <p className="text-gray-300 text-sm">Get a copy of this conversation</p>
                  </div>
                </div>
                <button 
                  onClick={resetForm}
                  className="text-gray-300 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Chat Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Messages in this chat:</span>
                  <span className="font-medium text-gray-800">{messages?.length || 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Chat started:</span>
                  <span className="font-medium text-gray-800">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Privacy Option */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="includePersonalInfo"
                  checked={includePersonalInfo}
                  onChange={(e) => setIncludePersonalInfo(e.target.checked)}
                  className="mt-1 h-4 w-4 text-gray-900 focus:ring-gray-900 border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="includePersonalInfo" className="text-sm font-medium text-gray-700">
                    Include timestamps and metadata
                  </label>
                  <p className="text-xs text-gray-500">
                    Include message timestamps and other conversation details
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!email.trim() || isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Send Transcript</span>
                  </>
                )}
              </button>

              <div className="text-xs text-gray-500 text-center space-y-1">
                <p>The transcript will be sent as a PDF attachment.</p>
                <p>We respect your privacy and won't use your email for marketing.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SendTranscriptModal;