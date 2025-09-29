const PopupAnimation = ({ visible, formData, setVisible }) => {
  return (
    <>
      {visible && formData?.allowPopUpAnimationModal && (
        <div className="fixed bottom-24 right-6 bg-white border border-gray-200 rounded-xl shadow-xl p-4 max-w-xs z-50 transform animate-bounce">
          <p className="text-sm text-gray-700 mb-2">
            {formData?.popUpAnimations?.popUpAnimationText}
          </p>
          <button 
            onClick={() => setVisible(false)} 
            className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Got it
          </button>
        </div>
      )}
    </>
  );
};

export default PopupAnimation;