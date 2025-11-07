"use client";

import React from 'react';
import Squares from '../ui/Squares';

const About = () => {
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

    </section>
  );
};

export default About;
