"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageSquare, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const KNOWLEDGE_BASE = [
  {
    keywords: ["price", "cost", "rate", "expensive", "cheap"],
    answer: "Our pricing is customized based on your volume and specific cut requirements. We offer competitive rates that often save you money compared to in-house processing when factoring in labor and waste. Please contact us for a quote!"
  },
  {
    keywords: ["delivery", "shipping", "time", "when"],
    answer: "We deliver daily in the morning to ensure freshness. Orders placed before 8 PM are delivered the next morning by 8 AM."
  },
  {
    keywords: ["hygiene", "clean", "wash", "safety"],
    answer: "Hygiene is our top priority. We use ozonized water for washing, maintain a sterile processing environment, and use food-grade packaging. Our staff follows strict sanitation protocols."
  },
  {
    keywords: ["location", "where", "area", "city"],
    answer: "We currently serve commercial kitchens across the city. Please share your location to check if we cover your area."
  },
  {
    keywords: ["contact", "phone", "email", "call", "whatsapp"],
    answer: "You can reach us at +91 92265 93412 or email us at info@vegeebooks.com. You can also use the WhatsApp or Call buttons on this screen!"
  },
  {
    keywords: ["product", "vegetable", "menu", "list", "available"],
    answer: "We offer a wide range of vegetables including Onions, Potatoes, Tomatoes, Carrots, and leafy greens. We provide various cuts like diced, sliced, julienne, and pastes. Check our Products page for more details."
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer: "Hello! How can I help you optimize your kitchen operations today?"
  },
  {
    keywords: ["order", "buy", "purchase"],
    answer: "To place an order, please contact our sales team via WhatsApp or Phone. We'll set up an account for your kitchen."
  }
];

export default function Chatbot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", text: "Hi there! I'm the Vegeebook assistant. Ask me anything about our products, delivery, or pricing." }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const lowerInput = userMessage.text.toLowerCase();
      let response = "I'm not sure about that specific detail. Would you like to speak with a human agent? You can use the Call or WhatsApp buttons.";

      // Simple keyword matching
      for (const entry of KNOWLEDGE_BASE) {
        if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
          response = entry.answer;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: response
      };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 flex flex-col max-h-[600px]"
        >
          {/* Header */}
          <div className="bg-green-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Vegeebook Assistant</h3>
                <p className="text-xs text-green-100">Online</p>
              </div>
            </div>
            <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 h-80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
