"use client";

import React from 'react';
import LightRays from '@/components/ui/LightRays';
import { motion } from 'framer-motion';


export default function TeamPage() {


  return (
    <section className="relative min-h-screen w-full bg-neutral-950 overflow-hidden">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl text-center mb-16 mt-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-md">
            Our Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the passionate innovators driving i-Cell forward
          </p>
        </motion.div>

       
      </div>
    </section>
  );
}
