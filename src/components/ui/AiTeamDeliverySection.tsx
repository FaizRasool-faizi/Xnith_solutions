"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

export default function AiTeamDeliverySection() {
  return (
    <section className="relative w-full bg-[#000000] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      {/* Ambient background glow behind the equation */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20 sm:mb-28 max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="w-6 h-[1.5px] bg-brand inline-block" />
            THE DELIVERY MODEL
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Your AI native team,<br className="hidden sm:inline" /> human and agent.
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
            The way AI gets built has changed. We don&apos;t staff traditional headcount. We deploy AI fluent people and trained AI agents, working side by side.
          </p>
        </motion.div>

        {/* The Equation Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop & Tablet Flex Flow */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
            
            {/* 1. NODE 1: AI FLUENT OPERATORS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Circle Badge */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border border-brand/50 bg-[#08080f] flex items-center justify-center transition-all duration-300 group-hover:border-brand group-hover:shadow-[0_0_30px_rgba(245,105,255,0.25)]">
                <User className="w-12 h-12 sm:w-14 sm:h-14 text-brand" strokeWidth={1.5} />
              </div>

              {/* Label */}
              <div className="mt-8 font-mono text-xs sm:text-sm font-bold tracking-widest text-zinc-100 uppercase leading-snug">
                AI FLUENT<br />OPERATORS
              </div>
            </motion.div>

            {/* CONNECTOR 1: [+] */}
            <div className="flex items-center justify-center relative w-full md:w-auto my-2 md:my-0">
              {/* Horizontal Connecting Line on desktop */}
              <div className="hidden md:block absolute left-[-60px] right-[-60px] top-1/2 -translate-y-1/2 h-[1px] bg-brand/30 -z-10" />
              
              <div className="w-8 h-8 rounded-full border border-zinc-700 bg-[#0c0c14] flex items-center justify-center text-zinc-400 font-mono text-sm font-bold shadow-md z-10">
                +
              </div>
            </div>

            {/* 2. NODE 2: TRAINED AI AGENTS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Circle Badge */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border border-brand/50 bg-[#08080f] flex items-center justify-center transition-all duration-300 group-hover:border-brand group-hover:shadow-[0_0_30px_rgba(245,105,255,0.25)]">
                <Bot className="w-12 h-12 sm:w-14 sm:h-14 text-brand" strokeWidth={1.5} />
              </div>

              {/* Label */}
              <div className="mt-8 font-mono text-xs sm:text-sm font-bold tracking-widest text-zinc-100 uppercase leading-snug">
                TRAINED AI<br />AGENTS
              </div>
            </motion.div>

            {/* CONNECTOR 2: [=] */}
            <div className="flex items-center justify-center relative w-full md:w-auto my-2 md:my-0">
              {/* Horizontal Connecting Line on desktop */}
              <div className="hidden md:block absolute left-[-60px] right-[-60px] top-1/2 -translate-y-1/2 h-[1px] bg-brand/30 -z-10" />
              
              <div className="w-8 h-8 rounded-full border border-zinc-700 bg-[#0c0c14] flex items-center justify-center text-zinc-400 font-mono text-sm font-bold shadow-md z-10">
                =
              </div>
            </div>

            {/* 3. NODE 3: YOUR TEAM AI NATIVE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Circle Badge with radiant violet halo */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-2 border-brand bg-[#0a0a14] flex items-center justify-center gap-2 shadow-[0_0_50px_rgba(245,105,255,0.35)] transition-all duration-300 group-hover:shadow-[0_0_70px_rgba(245,105,255,0.5)] group-hover:scale-105">
                <User className="w-9 h-9 sm:w-11 sm:h-11 text-brand" strokeWidth={1.5} />
                <Bot className="w-9 h-9 sm:w-11 sm:h-11 text-brand" strokeWidth={1.5} />
              </div>

              {/* Label */}
              <div className="mt-8 font-mono text-xs sm:text-sm font-bold tracking-widest text-brand uppercase leading-snug">
                YOUR TEAM<br />AI NATIVE
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
