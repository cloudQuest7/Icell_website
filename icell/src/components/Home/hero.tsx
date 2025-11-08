"use client";

import { Spotlight } from '../ui/spotlight';
import { TextHoverEffect } from '../ui/text-hover-effect'; 
import { Cover } from '../ui/cover';
import MetaBalls from '../ui/MetaBalls';
import ScrollVelocity from '../ui/ScrollVelocity';

const Hero = () => {
  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-neutral-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MetaBalls />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        <div className="mb-12 text-center">
            <p className="text-sm md:text-base lg:text-lg font-medium tracking-wider text-neutral-200 uppercase">
            Pillai College of Engineering 
            </p>
          <p className="text-base md:text-lg lg:text-lg font-medium tracking-wide text-neutral-300">
            PRESENTS
          </p>
        </div>
        
        {/* Scaled ICELL text */}
        <div className="scale-125 md:scale-150 lg:scale-[1.75]">
          <TextHoverEffect text="ICELL" duration={300} automatic={true} />
        </div>
        
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Ignite Inovation, Shaping <br /><Cover>The Future</Cover>
          </h1>
        </div>
      </div>
      
      <Spotlight
        className="absolute -top-20 left-0 md:left-60 md:-top-20 z-10"
        fill="white"
      />
    </div>
  );
};

export default Hero;
