"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Video, Box, ArrowRight } from 'lucide-react';

const platforms = [
  {
    id: 'appointix',
    num: '01',
    name: 'LOCAL AI',
    title: 'Appointix',
    tagline: 'AI-Powered Local Services & Appointment Platform',
    desc: 'An intelligent marketplace connecting households with verified local service experts. Features Gemini AI natural language intent parsing, multilingual Urdu and English voice input, live GPS proximity routing, and an Expo React Native mobile application.',
    tags: ['Gemini AI', 'Next.js 16', 'Expo React Native', 'Firebase', 'WebSockets'],
    stats: [
      { value: 'Voice + Text', label: 'MULTILINGUAL' },
      { value: 'Next.js + Expo', label: 'CROSS-PLATFORM' }
    ],
    icon: Bot,
    slug: '/work/appointix',
    angle: 0,
  },
  {
    id: 'auratalk',
    num: '02',
    name: 'NEURAL AI',
    title: 'AuraTalk AI',
    tagline: 'Real-Time AI Avatar & Conversational Video System',
    desc: 'An interactive video assistant platform combining real-time camera emotion tracking, CUDA-accelerated Wav2Lip neural lip-synchronization, and local Llama 3 LLM memory to deliver an expressive, human-like video call experience.',
    tags: ['PyTorch CUDA', 'Wav2Lip', 'MediaPipe', 'Local Llama 3', 'FastAPI WebSockets'],
    stats: [
      { value: 'CUDA Sync', label: 'NEURAL LIP-SYNC' },
      { value: 'MediaPipe', label: 'EMOTION TRACKING' }
    ],
    icon: Video,
    slug: '/work/auratalk',
    angle: 120,
  },
  {
    id: 'petstan',
    num: '03',
    name: '3D WEBGL',
    title: 'Petstan',
    tagline: 'Interactive 3D Multi-Vendor Pet Marketplace Platform',
    desc: 'A modern e-commerce platform featuring an interactive 3D hero experience rendered in WebGL, multi-criteria health-verified filtering, dedicated seller revenue analytics workspaces, and an escrow order processing ledger.',
    tags: ['Next.js 14', 'Three.js', 'React Three Fiber', 'PostgreSQL', 'Zustand'],
    stats: [
      { value: 'Three.js 3D', label: 'INTERACTIVE HERO' },
      { value: 'Escrow Ledger', label: 'TRANSACTION SECURITY' }
    ],
    icon: Box,
    slug: '/work/petstan',
    angle: 240,
  }
];

export default function EcosystemSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlatform = platforms[activeIndex];

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
              <span className="h-[1px] w-8 bg-brand"></span>
              PROPRIETARY INNOVATION LAB
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Real platforms we have engineered and launched.
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              We engineer our own software products to explore emerging technologies and prove our architectural capabilities in production. <span className="text-brand font-medium">Select a node to inspect:</span>
            </p>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Interactive Content */}
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-8">
          
          {/* Left: Interactive Wheel */}
          <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              
              {/* Spinning Dashed Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-zinc-700/80 animate-[spin_40s_linear_infinite]">
                <div className="absolute top-0 left-1/2 w-3.5 h-3.5 -mt-1.5 -ml-1.5 rounded-full bg-brand shadow-[0_0_15px_#F569FF,0_0_30px_#F569FF]"></div>
              </div>
              
              {/* Center Hub */}
              <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#151520] to-[#08080f] border border-zinc-700 flex flex-col items-center justify-center z-10 shadow-2xl">
                <span className="text-white font-bold tracking-widest text-sm sm:text-base font-mono">XENITH</span>
                <span className="text-[9px] sm:text-[11px] text-brand tracking-[0.2em] uppercase mt-1 font-semibold">LABS</span>
              </div>

              {/* Orbiting Nodes (3 Real Projects) */}
              {platforms.map((platform, index) => {
                const isActive = index === activeIndex;
                const Icon = platform.icon;
                
                return (
                  <div 
                    key={platform.id}
                    className="absolute w-full h-full pointer-events-none"
                    style={{ transform: `rotate(${platform.angle}deg)` }}
                  >
                    <div 
                      className="absolute top-0 left-1/2 flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
                      style={{ transform: `translate(-50%, -50%) rotate(${-platform.angle}deg)` }}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Node Circle */}
                      <div className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#0d0d16] border-2 flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'border-brand shadow-[0_0_40px_rgba(245,105,255,0.4)] z-20 scale-110' : 'border-zinc-700 hover:border-zinc-500 z-10'}`}>
                        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${isActive ? 'text-brand' : 'text-zinc-400 group-hover:text-zinc-200'}`} strokeWidth={1.5} />
                      </div>
                      
                      {/* Label */}
                      <span className={`absolute top-full mt-3 text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors whitespace-nowrap ${isActive ? 'text-brand font-bold' : 'text-zinc-300 group-hover:text-white'}`}>
                        {platform.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Content Panel */}
          <div className="w-full lg:w-1/2 min-h-[400px] flex flex-col justify-center px-4 md:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="text-xs font-mono tracking-[0.2em] text-brand uppercase mb-4 flex items-center gap-3 font-semibold">
                  <span className="text-zinc-300 font-bold">{activePlatform.num}</span> · {activePlatform.name}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  {activePlatform.title}
                </h3>
                
                <h4 className="text-base sm:text-lg text-brand font-semibold mb-6">
                  {activePlatform.tagline}
                </h4>
                
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                  {activePlatform.desc}
                </p>
                
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {activePlatform.tags.map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-200 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-12 mb-10">
                  {activePlatform.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                      <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <Link 
                    href={activePlatform.slug}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-black font-bold text-sm tracking-wide hover:bg-brand/90 transition-all shadow-[0_0_20px_rgba(245,105,255,0.3)] group"
                  >
                    View Case Study & Architecture
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}