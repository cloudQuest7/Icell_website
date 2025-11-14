"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function RegisterButton({ href = '/register' }: { href?: string }) {
  return (
    <Link href={href} aria-label="Register">
      <motion.span
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-black font-semibold shadow-2xl hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] transition-all duration-300"
      >
        <span className="sr-only">Register</span>
        <span className="leading-none">Register</span>
        <ArrowRight className="w-4 h-4" />
        {/* subtle animated ring */}
        <motion.span
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{ width: 48, height: 48 }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.12, scale: 1.2 }}
          transition={{ duration: 0.4 }}
        />
      </motion.span>
    </Link>
  );
}
