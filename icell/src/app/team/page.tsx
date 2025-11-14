"use client";

import React from 'react';
import Image from 'next/image';
import LightRays from '@/components/ui/LightRays';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

// Sample data
const teamData = {
  coordinators: [
    {
      name: "Student 1",
      role: "Overall Co-ordinator",
      image: "/team/mukund.jpg",
      social: { linkedin: "#", github: "#", instagram: "#" }
    },
    {
      name: "Student 2",
      role: "Overall Co-ordinator",
      image: "/team/punit.jpg",
      social: { linkedin: "#", github: "#", instagram: "#" }
    },
    {
      name: "Student 3",
      role: "Overall Co-ordinator",
      image: "/team/piyush.jpg",
      social: { linkedin: "#", github: "#", instagram: "#" }
    },
  ],
};

export default function TeamPage() {
  return (
    <section className="relative min-h-screen w-full bg-neutral-950 overflow-hidden">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 pb-20">
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
        
        {/* Core Committee Section */}
        <div className="w-full space-y-8 mb-16">
          
          {/* Section Title - OUTSIDE the box */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white text-center"
          >
            Core Committee
          </motion.h2>

          {/* HoverBorderGradient on OUTER Box - NO ROUNDED CORNERS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HoverBorderGradient 
              className="w-full p-1 rounded-none"
              containerClassName="w-full rounded-none"
              duration={3}
              clockwise={true}
            >
              {/* Big Section Box - Clean Rectangle */}
                <div className="w-full bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 py-3 px-6 md:py-4 md:px-12 rounded-none">
                
                {/* Department Title Box */}
                <div className="text-center mb-4">
                  <div className="inline-block px-6 py-2 border-2 border-neutral-700 rounded-2xl bg-neutral-900/70 backdrop-blur-sm">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Overall Co-ordinators
                  </h3>
                  </div>
                </div>

                {/* Inner Box with Member Cards */}
                <div className="bg-neutral-950/50 backdrop-blur-sm border border-neutral-800/30 rounded-3xl py-2 md:py-4 px-6 md:px-20 lg:px-28 w-full">
                  
                  {/* Team Members Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
                  {teamData.coordinators.map((member, index) => (
                    <TeamMemberCard
                    key={index}
                    member={member}
                    delay={0.1 * index}
                    />
                  ))}
                  </div>
                </div>
                </div>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Team Member Card Component
// Team Member Card Component - Bigger Image, Less Space
interface TeamMemberCardProps {
  member: TeamMember;
  delay: number;
}

function TeamMemberCard({ member, delay }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-neutral-800/50 hover:border-orange-500/50 transition-all duration-300"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 space-y-3">
        
        {/* Profile Image - MUCH BIGGER, Rounded Rectangle */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative w-[85%] h-[220px] overflow-hidden border-4 border-neutral-800/50 group-hover:border-orange-500/50 transition-all duration-300 rounded-3xl"
        >
          {/* Gradient fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-blue-500 to-purple-500 flex items-center justify-center text-6xl font-bold text-white">
            {member.name.charAt(0)}
          </div>
          
          {/* Actual image */}
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>

        {/* Name */}
        <h3 className="text-lg font-bold text-white text-center group-hover:text-orange-400 transition-colors duration-300 leading-tight">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-xs text-neutral-400 text-center font-medium">
          {member.role}
        </p>

        {/* Social Icons - NO CIRCLES, Simple Icons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          {member.social.linkedin && (
            <SocialIcon href={member.social.linkedin} icon="linkedin" />
          )}
          {member.social.github && (
            <SocialIcon href={member.social.github} icon="github" />
          )}
          {member.social.instagram && (
            <SocialIcon href={member.social.instagram} icon="instagram" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Social Icon Component - Simple, No Circle Background
function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const icons = {
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="text-neutral-500 hover:text-orange-400 transition-colors duration-300"
    >
      {icons[icon as keyof typeof icons]}
    </motion.a>
  );
}
