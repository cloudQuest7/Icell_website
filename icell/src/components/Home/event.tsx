"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Event() {
  return (
    <section className="w-full py-20 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-neutral-400 text-lg">
            Discover innovation through our exciting events
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title="Tech Hackathon 2025"
            description="48 hours of coding, innovation, and problem-solving"
            date="Dec 15-17, 2025"
            icon="💻"
            gradient="from-orange-500 to-red-500"
            href="/events"
          />
          
          <EventCard
            title="Innovation Workshop"
            description="Learn cutting-edge technologies from industry experts"
            date="Jan 10, 2026"
            icon="🚀"
            gradient="from-blue-500 to-cyan-500"
            href="/events"
          />
          
          <EventCard
            title="Startup Pitch Night"
            description="Present your ideas to investors and mentors"
            date="Feb 5, 2026"
            icon="💡"
            gradient="from-purple-500 to-pink-500"
            href="/events"
          />
        </div>
      </div>
    </section>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  icon: string;
  gradient: string;
  href: string;
}

function EventCard({ title, description, date, icon, gradient, href }: EventCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
        className="group relative h-[400px] flex flex-col items-center justify-center border border-neutral-800 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900/50 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
      >
        {/* Animated Gradient Background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
          animate={{
            opacity: hovered ? 0.2 : 0
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Animated Dot Pattern */}
        <motion.div 
          animate={{
            scale: hovered ? 1.2 : 1,
            opacity: hovered ? 0.15 : 0.05
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Glow Effect */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-t ${gradient} blur-3xl`}
          animate={{
            opacity: hovered ? 0.1 : 0
          }}
          transition={{ duration: 0.7 }}
        />

        {/* Content */}
        <div className="relative z-20 text-center px-6 space-y-4">
          <motion.div
            animate={{
              scale: hovered ? 1.2 : 1,
              rotate: hovered ? 10 : 0
            }}
            transition={{ duration: 0.3 }}
            className="text-6xl mb-4"
          >
            {icon}
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="pt-4">
            <span className="inline-block px-4 py-2 text-xs font-medium text-neutral-300 bg-neutral-800/80 rounded-full border border-neutral-700 group-hover:border-orange-500/50 transition-colors duration-300">
              📅 {date}
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{
              x: hovered ? 5 : 0,
              opacity: hovered ? 1 : 0.6
            }}
            transition={{ duration: 0.3 }}
            className="pt-6"
          >
            <span className="text-orange-500 font-semibold flex items-center justify-center gap-2">
              Learn More 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </motion.div>
        </div>

        {/* Border Highlight Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 60px rgba(255, 107, 53, 0.3)`
          }}
        />
      </motion.div>
    </Link>
  );
}
