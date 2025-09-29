import React, { useState } from 'react';
import { Star, Mail, X, Send, Check, MessageSquare } from 'lucide-react';

// Rating Modal Component
const RatingModal = ({ showRatingModal, setShowRatingModal, onSubmitRating }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const ratingData = {
      rating,
      feedback,
      email,
      timestamp: new Date().toISOString()
    };

    onSubmitRating?.(ratingData);
    setSubmitted(true);
    
    setTimeout(() => {
      setShowRatingModal(false);
      setSubmitted(false);
      setRating(0);
      setHoverRating(0);
      setFeedback('');
      setEmail('');
      setIsSubmitting(false);
    }, 2000);
  };

  const resetForm = () => {
    setShowRatingModal(false);
    setRating(0);
    setHoverRating(0);
    setFeedback('');
    setEmail('');
    setIsSubmitting(false);
    setSubmitted(false);
  };

  if (!showRatingModal) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 z-[70] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
        {submitted ? (
          // Success State
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600 text-sm">
              Your feedback has been submitted successfully. We appreciate your time!
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Rate Your Experience</h2>
                    <p className="text-gray-300 text-sm">How was our service today?</p>
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
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Star Rating */}
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Please rate your experience *
                </label>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-all duration-200 hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoverRating || rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {rating === 0 && 'Click to rate'}
                  {rating === 1 && 'Poor'}
                  {rating === 2 && 'Fair'}
                  {rating === 3 && 'Good'}
                  {rating === 4 && 'Very Good'}
                  {rating === 5 && 'Excellent'}
                </p>
              </div>

              {/* Feedback */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Feedback (Optional)
                </label>
                <textarea
                  rows={3}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Tell us more about your experience..."
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm"
                  placeholder="your@email.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We may follow up with you about your feedback
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={rating === 0 || isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Rating</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Your privacy is important to us. This feedback helps improve our service.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RatingModal
