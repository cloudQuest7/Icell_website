"use client";

import React, { useRef, useState, useEffect } from 'react';
import Squares from '../ui/Squares';
import { GlowingEffect } from '../ui/glowing-effect';
import ClickSpark from '../ui/ClickSpark';

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        setMousePosition({ x });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getGradientColor = () => {
    const { x } = mousePosition;
    if (x < 0.33) {
      return '#064bb1';
    } else if (x < 0.66) {
      return '#ffffff';
    } else {
      return '#ff6a00';
    }
  };

  return (
    
    <section className="relative min-h-screen w-full bg-neutral-950 overflow-hidden">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares 
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#ff6a00"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Header */}
        <div className="w-full max-w-4xl text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-md">
            About
          </h1>
        </div>

        {/* Horizontal Glowing Bento Card */}
        <div className="w-full max-w-6xl" ref={cardRef}>
          <div className="relative h-full rounded-2xl p-2 md:rounded-3xl md:p-3"
               style={{
                 borderWidth: '2px',
                 borderStyle: 'solid',
                 borderImage: `linear-gradient(to right, #064bb1, #ffffff, #ff6a00) 1`,
                 transition: 'all 0.3s ease'
               }}>
            
            {/* Dynamic Gradient Glow Effect */}
            <div 
              className="absolute -inset-0.5 rounded-2xl md:rounded-3xl blur-xl opacity-50 transition-all duration-300"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x * 100}% 50%, ${getGradientColor()}, transparent 70%)`,
              }}
            />
            
            {/* Content Card */}
            <div className="relative flex h-full flex-col justify-center items-center overflow-hidden rounded-xl p-8 md:p-12 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800/50 min-h-[400px]">
              {/* Clean Content */}
              <div className="text-center max-w-3xl space-y-6">
                {/* <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  The Innovation Hub is a vibrant community fostering creativity and entrepreneurship. 
                  We provide{' '}
                  <span className="text-[#064bb1] font-semibold">resources</span>,{' '}
                  <span className="text-white font-semibold">mentorship</span>, and{' '}
                  <span className="text-[#ff6a00] font-semibold">opportunities</span>
                  {' '}to transform your innovative ideas into impactful solutions. 
                  Experience dynamic animations that bring our mission to life.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
