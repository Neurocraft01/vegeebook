"use client";

import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";
import FadeIn from "../components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "How does Vegeebook ensure vegetable quality?",
    answer: "We source directly from verified farmers and use a rigorous 3-step quality check process before delivery. Our cold chain logistics ensure freshness from farm to your kitchen."
  },
  {
    question: "What areas do you currently serve?",
    answer: "We currently serve the greater Pune area, including Pimpri-Chinchwad. We are rapidly expanding to other major cities in Maharashtra."
  },
  {
    question: "Do you offer bulk discounts for restaurants?",
    answer: "Yes! We have specialized pricing tiers for B2B partners including restaurants, hotels, and canteens. Contact our sales team for a custom quote."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "For B2B clients, our minimum order value is ₹2000. For individual bulk orders, please check our app for current minimums."
  },
  {
    question: "How can I become a partner farmer?",
    answer: "We love working with local farmers! Please visit our Contact page and select 'I am Farmer' in the inquiry form, or call our farmer support line directly."
  },
  {
    question: "What are your delivery timings?",
    answer: "We offer two delivery slots: Morning (6 AM - 9 AM) and Evening (4 PM - 7 PM) to ensure you have fresh produce exactly when you need it."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="down">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">Everything you need to know about Vegeebook</p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div 
                layout
                className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'shadow-lg ring-1 ring-green-100' : 'shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-green-700' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} direction="up">
          <div className="mt-16 text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
