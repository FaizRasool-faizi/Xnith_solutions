"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, X, CheckCircle2, ArrowRight } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  projectType: string;
  category: string;
  status: string;
  impactMetric: string;
  desc: string;
  fullOverview: string;
  techStack: string[];
  features: string[];
  image: string;
  slug: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Appointix',
    projectType: 'Proprietary Product',
    category: 'AI-Powered Local Service Marketplace',
    status: 'Active Prototype',
    impactMetric: '8 Functional Modules',
    desc: 'An intelligent marketplace connecting households with local service providers. Features automated request parsing, proximity ranking, and real-time scheduling.',
    fullOverview: 'Appointix is an AI-powered local appointment and service marketplace. Built with Gemini AI, Next.js 16, and Expo React Native, it parses user requests, evaluates proximity, and coordinates real-time bookings.',
    techStack: ['Gemini AI', 'Next.js 16', 'TypeScript', 'Expo React Native', 'TailwindCSS'],
    features: ['Gemini AI Intent Parsing', 'Real-time Scheduling', 'Proximity Ranking', 'Cross-Platform Mobile App'],
    image: '/appointix.jpeg',
    slug: '/work/appointix'
  },
  {
    id: 2,
    title: 'Petstan',
    projectType: 'Proprietary E-Commerce Platform',
    category: '3D Interactive Multi-Vendor Pet Marketplace',
    status: 'Active Prototype',
    impactMetric: 'Interactive 3D WebGL',
    desc: 'A modern e-commerce platform specifically built for buying, selling, and adopting pets, pet food, and accessories across Pakistan.',
    fullOverview: 'Petstan is a 3D interactive multi-vendor pet marketplace built with Next.js 14, Three.js, React 18, and Zustand. It connects buyers with breeders and sellers via interactive 3D hero showcases, health documentation tracking, and seller dashboard analytics.',
    techStack: ['Next.js 14', 'Three.js', 'React Three Fiber', 'Zustand', 'PostgreSQL'],
    features: ['3D Interactive Hero Experience', 'Multi-Criteria Search & Filtering', 'Seller Analytics Workspace', 'Order Tracking Workflow'],
    image: '/petstan.jpeg',
    slug: '/work/petstan'
  },
  {
    id: 3,
    title: 'AuraTalk AI',
    projectType: 'Internal R&D Prototype',
    category: 'CUDA-Accelerated Real-Time AI Avatar Platform',
    status: 'Internal R&D Prototype',
    impactMetric: '7 Real-Time Modules · 5 Personas',
    desc: 'An interactive video assistant platform featuring CUDA-powered Wav2Lip neural lip-sync, MediaPipe facial emotion tracking, and local LLM context.',
    fullOverview: 'AuraTalk AI is an interactive video assistant platform built with FastAPI, WebSockets, MediaPipe computer vision, and local LLM inference. It combines computer vision, Wav2Lip neural lip-synchronization, and local language models to deliver dynamic, context-aware conversations.',
    techStack: ['PyTorch CUDA', 'Wav2Lip', 'MediaPipe', 'Local Llama 3', 'FastAPI WebSockets'],
    features: ['CUDA Neural Lip-Sync', 'MediaPipe Emotion Tracking', 'Contextual LLM Memory', 'Multi-Persona Avatars (5)', 'WebAudio VAD & Glassmorphic UI'],
    image: '/AIAvatar.jpg',
    slug: '/work/auratalk'
  }
];

interface WorkGridSectionProps {
  activeCategory: string;
}

export default function WorkGridSection({ activeCategory }: WorkGridSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'ALL'
    ? allProjects
    : allProjects.filter((p) => {
        const cat = p.category.toUpperCase();
        if (activeCategory === 'AI & INTELLIGENCE') return cat.includes('AI') || cat.includes('CUDA');
        if (activeCategory === '3D & WEBGL') return cat.includes('3D');
        if (activeCategory === 'MARKETPLACES') return cat.includes('MARKETPLACE');
        if (activeCategory === 'MOBILE APPS') return p.techStack.includes('Expo React Native') || cat.includes('MOBILE');
        return true;
      });

  return (
    <section className="relative w-full bg-[#030303] py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-[#08080c] rounded-2xl overflow-hidden border border-white/10 hover:border-brand/40 transition-all duration-500 cursor-pointer shadow-xl h-full"
              >
                {/* Header Container: Project Image */}
                <div className="w-full h-60 bg-[#050508] relative overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold max-w-[70%] truncate">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-brand/90 font-medium mb-4">
                      {project.projectType} · <span className="text-white/60">{project.impactMetric}</span>
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Stack Pills & CTA */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-white/50 text-[11px] font-mono border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-xs font-bold text-brand group-hover:text-white transition-colors">
                      View Case Study <ExternalLink className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Study Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-[#09090e] border border-white/15 rounded-3xl p-8 md:p-12 relative shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-mono text-brand mb-6">
                  {selectedProject.projectType} — {selectedProject.impactMetric}
                </p>

                <div className="w-full h-[1px] bg-white/10 mb-8" />

                <h4 className="text-xs font-semibold tracking-widest text-brand uppercase mb-3">
                  PROJECT OVERVIEW
                </h4>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  {selectedProject.fullOverview}
                </p>

                <h4 className="text-xs font-semibold tracking-widest text-brand uppercase mb-4">
                  KEY FEATURES & CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedProject.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xs font-semibold tracking-widest text-brand uppercase mb-3">
                  ARCHITECTURE & TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-brand/10 border border-brand/20 text-brand text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Open Full Dedicated Page Link */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <Link
                    href={selectedProject.slug}
                    className="px-6 py-3 rounded-xl bg-brand text-black font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-brand/90 transition-all shadow-[0_0_15px_rgba(245,105,255,0.3)]"
                  >
                    Open Full Case Study Page <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
