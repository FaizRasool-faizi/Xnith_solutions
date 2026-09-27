"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, Bot, Eye, Box, ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Full-Stack Web & Mobile Development',
    desc: 'Modern web applications, dashboards, portals, SaaS products and mobile experiences built with Next.js, React 19, TypeScript, and React Native.',
    icon: Layers,
    evidenceText: 'Proven in Appointix Platform',
    evidenceLink: '/work/appointix'
  },
  {
    num: '02',
    title: 'AI & LLM Integration',
    desc: 'AI assistants, LLM-powered features, RAG systems, intelligent workflows and custom AI applications powered by Google Gemini, OpenAI, and local Llama models.',
    icon: Bot,
    evidenceText: 'Proven in Appointix Gemini Engine',
    evidenceLink: '/work/appointix'
  },
  {
    num: '03',
    title: 'Computer Vision & Real-Time AI',
    desc: 'Computer vision, voice interfaces, neural media pipelines and real-time AI experiences featuring PyTorch CUDA acceleration and Google MediaPipe.',
    icon: Eye,
    evidenceText: 'Proven in AuraTalk AI Neural Engine',
    evidenceLink: '/work/auratalk'
  },
  {
    num: '04',
    title: '3D Web & Digital Platforms',
    desc: 'Interactive 3D experiences, marketplaces, product platforms and modern digital commerce systems built with Three.js, WebGL, and React Three Fiber.',
    icon: Box,
    evidenceText: 'Proven in Petstan 3D Marketplace',
    evidenceLink: '/work/petstan'
  }
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            CORE ENGINEERING SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Software built for<br />
            real-world execution.
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            From specialized AI integrations to full-stack production platforms, we engineer solutions designed around clear business outcomes and technical resilience.
          </p>
        </motion.div>

        {/* Services 2x2 Grid with hairline borders */}
        <div className="w-full border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[1px]"
          >
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <motion.div 
                  key={service.num} 
                  variants={itemVariants}
                  className="bg-[#090912] p-8 md:p-12 flex flex-col justify-between group hover:bg-[#0e0e1a] transition-colors duration-300 relative"
                >
                  <div>
                    {/* Top Row: Icon and Number */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl border border-brand/40 flex items-center justify-center bg-brand/10 group-hover:border-brand group-hover:bg-brand/20 transition-all">
                        <IconComp className="w-6 h-6 text-brand" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                        {service.num}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-8 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Evidence Link */}
                  <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                    <Link
                      href={service.evidenceLink}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand hover:text-white transition-colors uppercase tracking-wider"
                    >
                      <span>{service.evidenceText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Hover bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
