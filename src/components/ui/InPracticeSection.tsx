"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function InPracticeSection() {
  const terminalLines = [
    { text: "$ XNITH deployment process", type: "command" },
    { text: "✓ Requirements mapped", type: "success" },
    { text: "✓ Architecture designed", type: "success" },
    { text: "✓ Systems engineered & tested", type: "success" },
    { text: "✓ Integrated & secured", type: "success" },
    { text: "→ Deploying to production...", type: "process" },
    { text: "● Live in production", type: "final" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Terminal Window */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-3 px-6 py-4 bg-[#111] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-brand shadow-[0_0_8px_#F569FF]"></div>
                <div className="font-mono text-xs tracking-widest text-white/40 uppercase">
                  XNITH · deployment process
                </div>
              </div>
              
              {/* Terminal Body */}
              <motion.div 
                className="p-6 md:p-8 font-mono text-sm md:text-base"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {terminalLines.map((line, i) => (
                  <motion.div 
                    key={i} 
                    variants={lineVariants}
                    className={`mb-4 last:mb-0 flex items-start gap-3 ${
                      line.type === 'command' ? 'text-brand font-semibold' : 
                      line.type === 'process' ? 'text-white/70 animate-pulse' :
                      line.type === 'final' ? 'text-white font-bold mt-8' :
                      'text-white/80'
                    }`}
                  >
                    {/* For the final line, we render the dot with the brand color */}
                    {line.type === 'final' ? (
                      <>
                        <span className="text-brand">●</span>
                        <span>Live in production</span>
                      </>
                    ) : (
                      <span>{line.text}</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
              <span className="h-[1px] w-8 bg-brand"></span>
              IN PRACTICE
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
              From whiteboard to production.
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Every engagement starts by mapping your reality to the highest value digital opportunities, so by the time we build, we already know exactly what will move the needle.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
