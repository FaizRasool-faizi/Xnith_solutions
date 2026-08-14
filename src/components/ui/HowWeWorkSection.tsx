"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Identify',
    desc: 'We surface the highest value digital opportunities, the ones you cannot see yet.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We architect the solution around your reality, not a cookie-cutter template.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We build it natively, by engineers who build with cutting-edge technology.'
  },
  {
    num: '04',
    title: 'Implement',
    desc: 'We put it to work, deployed into real operations and continuously measured.'
  },
  {
    num: '05',
    title: 'Enable',
    desc: 'We train your people to own it, so value compounds long after we leave.'
  }
];

export default function HowWeWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance the active step every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            HOW WE WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            From "where does technology even fit?"<br />
            to a team that owns it.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            Most organizations can't yet see where digital transformation changes their business. We start exactly there, and stay until your people can run it themselves.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          
          {/* The Horizontal Line Background */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent md:from-white/20 md:to-white/20 hidden md:block z-0" />

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row justify-between relative z-20 gap-12 md:gap-4">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              
              return (
                <div 
                  key={step.num} 
                  className="flex flex-col items-center text-center flex-1 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  
                  {/* Step Circle Container */}
                  <div className="relative mb-6">
                    {/* Background Circle */}
                    <div className={`relative w-16 h-16 rounded-full border flex items-center justify-center bg-[#050505] transition-all duration-500 z-10 ${isActive ? 'border-brand shadow-[0_0_30px_rgba(245,105,255,0.3)] scale-110' : isPast ? 'border-white/40' : 'border-white/10'}`}>
                      <span className={`font-mono text-sm tracking-widest transition-colors duration-500 ${isActive ? 'text-brand font-bold' : isPast ? 'text-white/80' : 'text-white/40'}`}>
                        {step.num}
                      </span>
                    </div>

                    {/* The Moving Brand Color Dot (Animated smoothly between active states) */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeHowWeWorkDot"
                        className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 rounded-full bg-brand shadow-[0_0_20px_#F569FF] z-20 mix-blend-screen"
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                      />
                    )}
                  </div>

                  {/* Vertical Line for Mobile (Connecting steps) */}
                  {index !== steps.length - 1 && (
                    <div className="w-[1px] h-12 bg-white/10 mb-6 md:hidden"></div>
                  )}

                  {/* Feature Content */}
                  <div className="px-2 h-32 md:h-auto">
                    <h3 className={`text-xl font-bold transition-all duration-500 mb-3 ${isActive ? 'text-white' : 'text-white/30'}`}>
                      {step.title}
                    </h3>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm text-white/70 leading-relaxed font-mono tracking-tight overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
