"use client";

import React from 'react';
import { motion } from 'framer-motion';

const standards = [
  {
    num: '01',
    title: 'TYPE-SAFE FULL STACK',
    businessDesc: 'Modern, scalable web applications built for reliability and growth.',
    techDesc: 'Next.js 16, React 19, TypeScript, and modern modular architecture.',
    tag: 'Web & Platforms',
  },
  {
    num: '02',
    title: 'APPLIED AI & LLM SYSTEMS',
    businessDesc: 'AI assistants and automated workflows that can work with business data.',
    techDesc: 'LLM integration, document intelligence, and automated task pipelines.',
    tag: 'Intelligence',
  },
  {
    num: '03',
    title: 'NEURAL AUDIO & VISION',
    businessDesc: 'Intelligent voice, video and visual AI applications.',
    techDesc: 'Computer vision, speech recognition, and neural video pipelines.',
    tag: 'Voice & Vision',
  },
  {
    num: '04',
    title: 'INTERACTIVE 3D',
    businessDesc: 'Immersive 3D product visualizers and interactive browser experiences.',
    techDesc: 'Three.js, WebGL, and React Three Fiber graphics.',
    tag: '3D & Graphics',
  },
  {
    num: '05',
    title: 'MODERN CLOUD & APIs',
    businessDesc: 'Fast, secure cloud services and real-time data synchronization.',
    techDesc: 'Real-time APIs, WebSockets, cloud databases, and scalable infrastructure.',
    tag: 'Cloud & APIs',
  },
];

export default function ArchitecturalStandardsSection() {
  return (
    <section className="relative w-full bg-[#050505] py-24 overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            <span className="h-[1px] w-8 bg-brand"></span>
            ARCHITECTURAL STANDARDS
            <span className="h-[1px] w-8 bg-brand"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Engineered for stability, speed, and real-world scale.
          </h2>
          <p className="text-zinc-300 text-base max-w-2xl mt-4 leading-relaxed font-normal">
            We build software using modern, verified toolchains—grounded in type safety, modular system architecture, and production readiness.
          </p>
        </div>

        {/* Desktop Layout - Horizontal Line connecting nodes */}
        <div className="relative hidden lg:block">
          {/* Continuous Line passing through the center of the nodes */}
          <div className="absolute top-[48px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-600/60 to-transparent z-0" />
          
          <div className="grid grid-cols-5 gap-6 text-center">
            {standards.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group relative pt-0 z-10"
              >
                {/* Glowing Dot on Line */}
                <div className="relative z-10 mb-8 flex items-center justify-center h-4 w-4 bg-[#050505]">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_14px_rgba(245,105,255,1)] transition-transform group-hover:scale-150 duration-300" />
                </div>
                
                {/* Node Number */}
                <div className="text-2xl font-mono font-bold text-white tracking-tight mb-2 flex items-center justify-center">
                  <span className="text-brand mr-1 font-mono text-xs opacity-80">#</span>
                  {item.num}
                </div>

                {/* Node Title */}
                <h3 className="text-sm font-bold text-zinc-100 tracking-wider uppercase font-mono mb-2 min-h-[36px] flex items-center justify-center group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                
                {/* Business Description */}
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed max-w-[220px] font-medium mb-2">
                  {item.businessDesc}
                </p>

                {/* Tech Breakdown */}
                <p className="text-[11px] text-zinc-400 font-mono leading-normal max-w-[210px]">
                  {item.techDesc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {standards.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col p-6 rounded-2xl bg-[#0a0a10] border border-zinc-800 hover:border-brand/40 transition-all group shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xl font-bold text-brand">
                  {item.num}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono mb-2 group-hover:text-brand transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-200 font-medium leading-relaxed mb-3">
                {item.businessDesc}
              </p>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed pt-3 border-t border-zinc-800/80">
                {item.techDesc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
