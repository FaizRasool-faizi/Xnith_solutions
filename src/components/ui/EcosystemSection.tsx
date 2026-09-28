"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Video, Box, ArrowRight } from 'lucide-react';

const platforms = [
  {
    id: 'voice-agent',
    num: '01',
    name: 'AGENT & VOICE',
    title: 'Multilingual Voice & Intent Engine',
    tagline: 'Autonomous natural language parsing and voice orchestration R&D',
    desc: 'Our internal conversational R&D pipeline exploring real-time voice input recognition, natural language intent classification, and automated agent dispatching across English and Urdu regional dialects.',
    tags: ['Gemini API', 'Intent Parsing', 'Urdu & English Voice', 'WebSockets', 'Autonomous Agents'],
    stats: [
      { value: 'Multi-Dialect', label: 'VOICE RECOGNITION' },
      { value: 'Agentic', label: 'AUTONOMOUS DISPATCH' }
    ],
    icon: Bot,
    evidenceBadge: 'Implemented in Appointix Platform',
    slug: '/work/appointix',
    angle: 0,
  },
  {
    id: 'neural-vision',
    num: '02',
    name: 'NEURAL VISION',
    title: 'Real-Time Neural Lip-Sync & Vision',
    tagline: 'Real-time video avatar generation and facial emotion tracking R&D',
    desc: 'Our neural media pipeline combining live camera emotion detection via MediaPipe, CUDA-accelerated Wav2Lip synthesis, and local LLM context to deliver expressive conversational video avatars directly in the browser.',
    tags: ['PyTorch CUDA', 'Wav2Lip Pipeline', 'Google MediaPipe', 'FastAPI', 'Local Llama 3'],
    stats: [
      { value: 'CUDA Accelerated', label: 'NEURAL LIP-SYNC' },
      { value: 'MediaPipe', label: 'EMOTION TRACKING' }
    ],
    icon: Video,
    evidenceBadge: 'Implemented in AuraTalk AI Prototype',
    slug: '/work/auratalk',
    angle: 120,
  },
  {
    id: 'spatial-3d',
    num: '03',
    name: 'SPATIAL 3D',
    title: 'Interactive WebGL & 3D Spatial Engine',
    tagline: 'Hardware-accelerated browser 3D product rendering & physics',
    desc: 'Our graphics pipeline pushing high-performance WebGL, custom shader materials, and React Three Fiber spatial experiences—rendering interactive 3D product environments smoothly on standard mobile and desktop browsers.',
    tags: ['Three.js', 'WebGL', 'React Three Fiber', 'GLTF Optimization', 'Physics Shaders'],
    stats: [
      { value: 'Hardware WebGL', label: 'BROWSER 3D' },
      { value: 'Zero Plugins', label: 'NATIVE RUNTIME' }
    ],
    icon: Box,
    evidenceBadge: 'Implemented in Petstan 3D Marketplace',
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
              Experimental technology and internal R&D.
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Before deploying solutions for client systems, we engineer and battle-test our own technical engines—pushing capabilities across autonomous agents, real-time computer vision, and spatial 3D web engines. <span className="text-brand font-medium">Select an R&D node to inspect:</span>
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
                
                <div className="flex items-center gap-12 mb-8">
                  {activePlatform.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                      <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Evidence Callout */}
                <div className="rounded-xl bg-zinc-900/80 border border-zinc-800 p-4 mb-8 max-w-xl">
                  <div className="text-[10px] font-mono tracking-wider text-brand font-semibold uppercase mb-1">
                    APPLICATION PROOF:
                  </div>
                  <div className="text-sm text-zinc-200 font-medium">
                    {activePlatform.evidenceBadge}
                  </div>
                </div>
                
                <div>
                  <Link 
                    href={activePlatform.slug}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-black font-bold text-sm tracking-wide hover:bg-brand/90 transition-all shadow-[0_0_20px_rgba(245,105,255,0.3)] group"
                  >
                    Inspect Architecture & Case Study
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