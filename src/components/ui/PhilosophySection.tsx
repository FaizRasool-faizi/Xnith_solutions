"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot, Plus, Equal } from 'lucide-react';

export default function PhilosophySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 40, damping: 20 }
    }
  };

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            THE DELIVERY MODEL
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            Your AI native team,<br />
            human and agent.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            The way AI gets built has changed. We don't staff traditional headcount. We deploy AI fluent people and trained AI agents, working side by side.
          </p>
        </motion.div>

        {/* Visual Formula */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mb-24"
        >
          
          {/* Item 1: Human */}
          <motion.div variants={itemVariants} className="flex flex-col items-center relative z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-brand/50 bg-[#0a0a0a] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,105,255,0.15)]">
              <User className="w-10 h-10 md:w-12 md:h-12 text-brand" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-mono tracking-widest text-white uppercase mb-2">AI FLUENT<br/>OPERATORS</h3>
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">HUMAN</span>
          </motion.div>

          {/* Plus Connector */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center h-24 md:h-40 md:flex-1 relative z-0 my-4 md:my-0 -mt-12 md:mt-0">
            {/* Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-brand/40 via-white/10 to-violet-500/40 -translate-y-1/2 -z-10"></div>
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand/40 via-white/10 to-violet-500/40 -translate-x-1/2 -z-10"></div>
            
            <div className="w-8 h-8 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center -translate-y-12 md:translate-y-0 md:-translate-y-8 relative z-10">
              <Plus className="w-3 h-3 text-white/50" />
            </div>
          </motion.div>

          {/* Item 2: AI Agent */}
          <motion.div variants={itemVariants} className="flex flex-col items-center relative z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-violet-500/50 bg-[#0a0a0a] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <Bot className="w-10 h-10 md:w-12 md:h-12 text-violet-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-mono tracking-widest text-white uppercase mb-2">TRAINED AI<br/>AGENTS</h3>
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">AI</span>
          </motion.div>

          {/* Equals Connector */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center h-24 md:h-40 md:flex-1 relative z-0 my-4 md:my-0 -mt-12 md:mt-0">
             {/* Lines */}
             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-violet-500/40 via-white/10 to-brand/40 -translate-y-1/2 -z-10"></div>
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-violet-500/40 via-white/10 to-brand/40 -translate-x-1/2 -z-10"></div>
            
            <div className="w-8 h-8 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center -translate-y-12 md:translate-y-0 md:-translate-y-8 relative z-10">
              <Equal className="w-3 h-3 text-white/50" />
            </div>
          </motion.div>

          {/* Item 3: Result */}
          <motion.div variants={itemVariants} className="flex flex-col items-center relative z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-brand/60 bg-[#0a0a0a] flex items-center justify-center mb-6 shadow-[0_0_45px_rgba(245,105,255,0.25)]">
              <div className="flex items-center -space-x-2">
                <User className="w-8 h-8 md:w-10 md:h-10 text-brand" strokeWidth={1.5} />
                <Bot className="w-8 h-8 md:w-10 md:h-10 text-violet-400" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-sm font-mono tracking-widest text-white uppercase mb-2">YOUR TEAM<br/>AI NATIVE</h3>
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">EMBEDDED</span>
          </motion.div>

        </motion.div>

        {/* Bottom Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <div className="px-6 py-3 rounded-full border border-white/10 bg-[#0a0a0a] text-xs font-mono tracking-widest text-white/70 uppercase hover:border-brand/40 transition-colors">
            AI FLUENT PEOPLE
          </div>
          <div className="px-6 py-3 rounded-full border border-white/10 bg-[#0a0a0a] text-xs font-mono tracking-widest text-white/70 uppercase hover:border-brand/40 transition-colors">
            TRAINED AI AGENTS
          </div>
          <div className="px-6 py-3 rounded-full border border-white/10 bg-[#0a0a0a] text-xs font-mono tracking-widest text-white/70 uppercase hover:border-brand/40 transition-colors">
            WORKING SIDE BY SIDE
          </div>
        </motion.div>

      </div>
    </section>
  );
}
