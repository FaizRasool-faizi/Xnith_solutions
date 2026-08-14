"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Activity, TrendingUp, Globe, Server, ArrowRight } from 'lucide-react';

const platforms = [
  {
    id: 'create',
    num: '01',
    name: 'CREATE',
    title: 'X-Forge',
    tagline: 'Create Digital Potential',
    desc: 'A rapid prototyping and design system that accelerates the journey from idea to MVP with intelligent component generation.',
    tags: ['UI/UX Design', 'Prototyping', 'Architecture', 'Strategy'],
    stats: [
      { value: '14 Days', label: 'TO MVP' },
      { value: '100+', label: 'COMPONENTS' }
    ],
    icon: Palette,
    angle: 0 // We'll map angle 0 to top, 72 to right-top, etc.
  },
  {
    id: 'measure',
    num: '02',
    name: 'MEASURE',
    title: 'X-Metrics',
    tagline: 'Measure Digital Potential',
    desc: 'An advanced analytics and telemetry platform that assesses product health, user engagement, and identifies conversion bottlenecks.',
    tags: ['Data Analytics', 'Telemetry', 'User Tracking', 'Insights'],
    stats: [
      { value: 'Real-time', label: 'PROCESSING' },
      { value: 'Custom', label: 'DASHBOARDS' }
    ],
    icon: Activity,
    angle: 72
  },
  {
    id: 'grow',
    num: '03',
    name: 'GROW',
    title: 'X-Scale',
    tagline: 'Grow Digital Potential',
    desc: 'A growth-hacking automation engine that optimizes conversion funnels and scales user acquisition across multiple digital channels.',
    tags: ['SEO Optimization', 'Conversion Rate', 'A/B Testing', 'Automation'],
    stats: [
      { value: '3x', label: 'AVERAGE ROI' },
      { value: '24/7', label: 'AUTOMATION' }
    ],
    icon: TrendingUp,
    angle: 144
  },
  {
    id: 'connect',
    num: '04',
    name: 'CONNECT',
    title: 'OmniReacher',
    tagline: 'Connect Digital Potential',
    desc: 'An AI-powered omnichannel communication system that bridges the gap between brands and their audiences seamlessly.',
    tags: ['CRM Integration', 'Omnichannel', 'AI Chatbots', 'Messaging'],
    stats: [
      { value: '99.9%', label: 'UPTIME' },
      { value: 'Global', label: 'REACH' }
    ],
    icon: Globe,
    angle: 216
  },
  {
    id: 'scale',
    num: '05',
    name: 'SCALE',
    title: 'X-Cloud',
    tagline: 'Scale Digital Potential',
    desc: 'An enterprise-grade cloud infrastructure manager that ensures your applications run flawlessly and securely at any scale.',
    tags: ['Kubernetes', 'Auto-scaling', 'Load Balancing', 'Security'],
    stats: [
      { value: 'Zero', label: 'DOWNTIME' },
      { value: 'Multi', label: 'REGION' }
    ],
    icon: Server,
    angle: 288
  }
];

export default function EcosystemSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to 'measure'
  const activePlatform = platforms[activeIndex];

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
              <span className="h-[1px] w-8 bg-brand"></span>
              PROOF · THE ECOSYSTEM
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              We don't just build digital solutions for others.<br />
              We build our own.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Five proprietary platforms that move a person, or an organization, through one connected cycle: create, measure, grow, connect, scale.<br />
              <span className="text-white/80 font-medium">Touch a node to explore.</span>
            </p>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Interactive Content */}
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-8">
          
          {/* Left: Ecosystem Wheel */}
          <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[450px] sm:min-h-[550px] pt-12 lg:pt-0">
            {/* The Ecosystem Container */}
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">
              
              {/* Spinning Dashed Ring with Glowing Dot */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite]">
                {/* The orbiting glowing dot */}
                <div className="absolute top-0 left-1/2 w-3 h-3 sm:w-4 sm:h-4 -mt-1.5 sm:-mt-2 -ml-1.5 sm:-ml-2 rounded-full bg-brand shadow-[0_0_15px_#F569FF,0_0_30px_#F569FF]"></div>
                {/* Secondary trailing dot for flavor */}
                <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              </div>
              
              {/* Center Hub */}
              <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#111] to-[#050505] border border-white/10 flex flex-col items-center justify-center z-10 shadow-2xl">
                <span className="text-white font-bold tracking-widest text-base sm:text-lg">ONE</span>
                <span className="text-[9px] sm:text-[11px] text-white/50 tracking-[0.2em] uppercase mt-1">Ecosystem</span>
              </div>

              {/* Static Orbiting Nodes */}
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
                      {/* The Node Circle */}
                      <div className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#0a0a0a] border-2 flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'border-brand shadow-[0_0_40px_rgba(245,105,255,0.4)] z-20 scale-110' : 'border-white/10 hover:border-white/30 z-10'}`}>
                        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${isActive ? 'text-brand' : 'text-white/40 group-hover:text-white/70'}`} strokeWidth={1.5} />
                      </div>
                      
                      {/* The Text Label */}
                      <span className={`absolute top-full mt-3 sm:mt-4 text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors whitespace-nowrap ${isActive ? 'text-brand font-semibold' : 'text-white/50'}`}>
                        {platform.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Content Panel */}
          <div className="w-full lg:w-1/2 min-h-[400px] flex flex-col justify-center mt-12 lg:mt-0 px-4 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="text-xs font-mono tracking-[0.2em] text-brand uppercase mb-6 flex items-center gap-3">
                  <span className="text-white/70">{activePlatform.num}</span> · {activePlatform.name}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  {activePlatform.title}
                </h3>
                
                <h4 className="text-lg text-brand font-medium mb-8">
                  {activePlatform.tagline}
                </h4>
                
                <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
                  {activePlatform.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {activePlatform.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-white/70 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-16 mb-12">
                  {activePlatform.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-[10px] font-mono tracking-widest text-white/50 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <button className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:text-white transition-colors group">
                    Enter platform
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}