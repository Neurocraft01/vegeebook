"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  useEffect(() => {
    // Skip loader on mobile
    if (window.innerWidth < 768) {
      setIsLoading(false);
      return;
    }

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
          className="fixed inset-0 z-[100] hidden md:flex items-center justify-center bg-black cursor-pointer"
          onClick={() => setIsLoading(false)}
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onPause={(e) => {
              // Check if video is at the end when paused
              const video = e.currentTarget;
              if (Math.abs(video.duration - video.currentTime) < 0.1) {
                handleVideoEnded();
              }
            }}
            className="w-full h-full object-cover"
          >
            <source src="/videos/loading_animation_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
            <source src="/videos/loading_animation.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
