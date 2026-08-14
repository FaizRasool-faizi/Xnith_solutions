"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for outer ring
  const ringX = useSpring(-100, { stiffness: 400, damping: 28 });
  const ringY = useSpring(-100, { stiffness: 400, damping: 28 });

  // Direct springs for inner dot (ultra-fast)
  const dotX = useSpring(-100, { stiffness: 1000, damping: 35 });
  const dotY = useSpring(-100, { stiffness: 1000, damping: 35 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [dotX, dotY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring (Exact match to screenshot) */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(245, 105, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: isHovered ? 'rgba(245, 105, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-10 h-10 rounded-full border border-white/40 shadow-[0_0_15px_rgba(245,105,255,0.2)] flex items-center justify-center backdrop-blur-[0.5px]"
      />

      {/* Inner Solid Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          backgroundColor: isHovered ? '#F569FF' : '#ffffff',
        }}
        transition={{ duration: 0.15 }}
        className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      />
    </div>
  );
}
