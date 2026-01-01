"use client";

import { useState } from "react";
import { Phone, MessageCircle, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import Chatbot from "./Chatbot";

export default function FloatingContact() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919876543210" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:+919876543210" // Replace with actual number
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
        </motion.a>

        {/* Chatbot Toggle Button */}
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow ${
            isChatOpen ? "bg-gray-700" : "bg-green-700"
          }`}
          title="AI Assistant"
        >
          <MessageSquareText className="w-7 h-7" />
        </motion.button>
      </div>

      {/* Chatbot Component */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
