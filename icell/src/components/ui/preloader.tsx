"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 15);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: isLoading ? 0 : "-100vh",
      }}
      transition={{
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1],
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-full max-w-md px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-white">ICELL</h1>
        </motion.div>

        {/* Progress Bar */}
        <div className="h-1 w-full overflow-hidden bg-neutral-800 rounded-full">
          <motion.div
            className="h-full bg-white origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-center text-neutral-400"
        >
          <span className="text-sm font-medium">Loading... {progress}%</span>
        </motion.div>

        {/* Animated Dots */}
        <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};