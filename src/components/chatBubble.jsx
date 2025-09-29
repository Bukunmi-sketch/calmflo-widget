import React from "react";

export default function ChatBubble({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
    >
      💬
    </button>
  );
}
