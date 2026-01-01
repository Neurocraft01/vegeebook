"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Safety fallback: dismiss after 8 seconds if video doesn't trigger end
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnded = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
          >
            <source src="/videos/loading_animation.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
