"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'appointix',
    title: 'Appointix',
    slug: '/work/appointix',
    status: 'Active Platform',
    category: 'Local AI Marketplace',
    desc: 'An intelligent marketplace connecting households with verified local service experts. Automates natural language request parsing, GPS proximity routing, and real-time scheduling.',
    whatWeBuilt: 'Multilingual Gemini AI voice parser, GPS proximity routing, WebSocket scheduling, and cross-platform Expo React Native app.',
    technologies: ['Next.js 16', 'Expo React Native', 'Google Gemini AI', 'Firebase', 'WebSockets'],
    image: '/appointix.jpeg',
    imageAlt: 'Appointix AI-powered hyperlocal service marketplace interface'
  },
  {
    id: 'auratalk',
    title: 'AuraTalk AI',
    slug: '/work/auratalk',
    status: 'Active / Beta',
    category: 'Neural Video Avatar',
    desc: 'An interactive video assistant platform combining live camera emotion tracking, CUDA-accelerated Wav2Lip neural lip-sync, and local Llama 3 LLM intelligence.',
    whatWeBuilt: 'Real-time pipeline connecting MediaPipe facial emotion tracking with CUDA-accelerated Wav2Lip video generation and local Llama 3 LLM memory.',
    technologies: ['PyTorch CUDA', 'Wav2Lip', 'Google MediaPipe', 'FastAPI WebSockets', 'Llama 3'],
    image: '/AIAvatar.jpg',
    imageAlt: 'AuraTalk real-time neural avatar video assistant interface'
  },
  {
    id: 'petstan',
    title: 'Petstan',
    slug: '/work/petstan',
    status: 'Active Platform',
    category: '3D WebGL Marketplace',
    desc: 'A modern e-commerce platform featuring an interactive 3D hero experience rendered in WebGL, multi-criteria health-verified filtering, and an escrow order processing ledger.',
    whatWeBuilt: 'Interactive WebGL 3D hero showcase, multi-vendor filtering, revenue management dashboards, and transactional escrow ledger on PostgreSQL.',
    technologies: ['Next.js 14', 'Three.js', 'React Three Fiber', 'PostgreSQL', 'Zustand'],
    image: '/petstan.jpeg',
    imageAlt: 'Petstan 3D interactive multi-vendor pet marketplace interface'
  }
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="featured-work" className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            DELIVERED WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Featured Systems & Case Studies
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Explore our flagship software platforms—engineered with full-stack precision across applied AI, neural video pipelines, and interactive 3D web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
            >
              <Link
                href={project.slug}
                className="flex flex-col bg-[#0a0a14] rounded-3xl overflow-hidden border border-zinc-800 hover:border-brand/50 transition-all duration-300 group cursor-pointer h-full shadow-2xl"
              >
                {/* Card Image */}
                <div className="w-full h-56 md:h-64 relative overflow-hidden bg-[#070710]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Card Content Below */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Status */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-brand" />
                      </h3>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                        {project.status}
                      </span>
                    </div>

                    {/* Category Pill */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-300 leading-relaxed mb-4 font-normal">
                      {project.desc}
                    </p>

                    {/* What XENITH Built */}
                    <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-3.5 mb-6 text-xs leading-relaxed">
                      <span className="font-mono text-[10px] tracking-wider text-brand font-semibold uppercase block mb-1">
                        WHAT XENITH BUILT:
                      </span>
                      <p className="text-zinc-200 font-normal">
                        {project.whatWeBuilt}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack pills & link */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 text-[11px] font-mono border border-zinc-700/60">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-xs font-bold text-brand group-hover:text-white transition-colors">
                      View Case Study & Architecture →
                    </div>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            href="/work" 
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-sm font-semibold text-zinc-100 hover:border-brand hover:text-brand hover:bg-zinc-850 transition-colors shadow-lg"
          >
            Explore All Project Architectures
            <span className="transition-transform group-hover:translate-x-1 text-brand">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
