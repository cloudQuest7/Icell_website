"use client";
import React, { useRef, useEffect, useState } from "react";

interface BackgroundRippleEffectProps {
  rows?: number;
  cols?: number;
  cellSize?: number;
  className?: string;
}

export const BackgroundRippleEffect: React.FC<BackgroundRippleEffectProps> = ({
  rows = 15,
  cols = 30,
  cellSize = 48,
  className = "",
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,95,31,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,95,31,0.05) 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px, ${cellSize}px ${cellSize}px, ${cellSize/2}px ${cellSize/2}px, ${cellSize/2}px ${cellSize/2}px`,
        }}
      />
      
      {/* Interactive Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 60,
            top: ripple.y - 60,
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-400/20 rounded-full animate-ping" />
          <div className="absolute inset-4 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-pink-400/10 rounded-full animate-ping delay-150" />
        </div>
      ))}
    </div>
  );
};
