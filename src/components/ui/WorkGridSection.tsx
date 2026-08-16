"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Activity, LayoutDashboard, Smartphone, Shield, Cpu, ExternalLink, X, CheckCircle2, ArrowRight } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  status: string;
  impactMetric: string;
  desc: string;
  fullOverview: string;
  techStack: string[];
  features: string[];
  type?: 'dashboard' | 'chart' | 'mobile' | 'security' | 'ai';
  image?: string;
  slug?: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Appointix',
    client: 'Hyperlocal Marketplace',
    category: 'AI-Powered Local Service & Marketplace',
    status: 'Active',
    impactMetric: '8 Core Modules',
    desc: 'An intelligent, AI-driven hyperlocal marketplace connecting households with verified local service experts (plumbers, electricians, mechanics)...',
    fullOverview: 'Appointix is an intelligent AI appointment and service marketplace connecting local service experts with verified clients. Built with Gemini AI, Next.js 14, and Expo React Native, it automates request parsing, expert ranking, and real-time scheduling.',
    techStack: ['Gemini AI', 'Next.js 14', 'TypeScript', 'Expo React Native', 'TailwindCSS'],
    features: ['Gemini AI Auto-Match', 'Real-time Booking & Scheduling', 'Verified Expert Ranking', 'Cross-Platform Mobile App'],
    image: '/appointix.jpeg',
    slug: '/work/appointix'
  },
  {
    id: 2,
    title: 'Petstan',
    client: 'Multi-Vendor E-Commerce',
    category: '3D Interactive Multi-Vendor Pet Marketplace',
    status: 'Active',
    impactMetric: '10+ Core Modules',
    desc: 'Petstan is a modern, high-performance e-commerce platform specifically built for buying, selling, and adopting pets, pet food, and accessories across Pakistan...',
    fullOverview: 'Petstan is Pakistan premier 3D interactive multi-vendor pet marketplace built with Next.js 14, Three.js, React 18, and Zustand. It bridges buyers and verified breeders via interactive 3D hero showcases, health vaults, and seller dashboard analytics.',
    techStack: ['Next.js 14', 'Three.js', 'React Three Fiber', 'Zustand', 'PostgreSQL'],
    features: ['3D Interactive Hero Experience', 'Multi-Criteria Search & Filtering', 'Seller Analytics Workspace', 'Escrow Delivery Protection'],
    image: '/petstan.jpeg',
    slug: '/work/petstan'
  },
  {
    id: 3,
    title: 'AuraTalk AI',
    client: 'XENITH AI Ecosystem',
    category: 'CUDA-Accelerated Real-Time AI Avatar & Video Call Platform',
    status: 'Active / Beta',
    impactMetric: '12 Core Modules · 5 AI Avatars',
    desc: 'An intelligent, real-time AI video call assistant platform featuring CUDA-powered Wav2Lip neural lip-sync, emotion tracking computer vision, and context-aware LLM intelligence.',
    fullOverview: 'AuraTalk AI is an enterprise-grade, real-time interactive video assistant platform that replicates a human video call experience. It blends cutting-edge computer vision, deep neural lip-synchronization, and local Large Language Models (LLM) to deliver empathetic, expressive, and context-aware conversations.',
    techStack: ['PyTorch CUDA', 'Wav2Lip', 'MediaPipe', 'Local Llama 3', 'FastAPI WebSockets'],
    features: ['CUDA Neural Lip-Sync', 'MediaPipe Emotion Tracking', 'Contextual LLM Memory', 'Multi-Persona Avatars (5)', 'WebAudio VAD & Glassmorphic UI'],
    image: '/AIAvatar.jpg',
    slug: '/work/auratalk'
  },
  {
    id: 4,
    title: 'XENITH Learn LMS',
    client: 'EduGlobal Enterprise',
    category: 'Enterprise & LMS',
    status: 'Active & Scaling',
    impactMetric: '150,000+ Active Learners',
    desc: 'An AI-powered learning management ecosystem with intelligent skill tracking, automated grading, and personalized course paths.',
    fullOverview: 'XENITH Learn was designed to modernize enterprise training across multi-regional corporate teams. By combining continuous skill assessments with automated agent tutors, the platform reduced course completion times by 40% while boosting knowledge retention metrics.',
    techStack: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Python FastAPI', 'PostgreSQL'],
    features: ['Adaptive AI Learning Paths', 'Real-time Analytics Dashboard', 'Bilingual Support (EN/AR)', 'Gamified Certifications'],
    type: 'dashboard'
  },
  {
    id: 5,
    title: 'X-Flow Intelligence',
    client: 'Apex Financial Data',
    category: 'AI & Intelligence',
    status: 'Live Production',
    impactMetric: '60% Faster Data Pipeline',
    desc: 'A real-time predictive analytics platform converting complex telemetry streams into actionable business intelligence.',
    fullOverview: 'Engineered for high-frequency telemetry processing, X-Flow Intelligence processes over 10M events per minute. The system automatically detects operational anomalies and recommends proactive interventions before bottlenecks occur.',
    techStack: ['React', 'Apache Kafka', 'TensorFlow', 'ClickHouse', 'AWS EKS'],
    features: ['Real-time Anomaly Detection', 'Predictive Market Forecasting', 'Custom WebSockets Stream', 'Exportable BI Reports'],
    type: 'chart'
  },
  {
    id: 6,
    title: 'UpTicker AI Coach',
    client: 'UpTicker Global',
    category: 'Mobile Apps',
    status: 'Featured on App Store',
    impactMetric: '4.9★ Rating (25k+ Reviews)',
    desc: 'A habit-building and daily productivity mobile app powered by an embedded conversational habit assistant.',
    fullOverview: 'UpTicker combines behavioral psychology with personalized AI coaching. The mobile application tracks routines, analyzes productivity spikes, and delivers actionable daily micro-coaching advice.',
    techStack: ['Flutter', 'Dart', 'OpenAI API', 'Firebase', 'Stripe'],
    features: ['AI Habit Assistant', 'Smart Focus Timers', 'Community Leaderboards', 'Biometric Sync'],
    type: 'mobile'
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
        if (activeCategory === 'AI & INTELLIGENCE') return cat.includes('AI') || cat.includes('CUDA') || cat.includes('INTELLIGENCE');
        if (activeCategory === 'ENTERPRISE & LMS') return cat.includes('ENTERPRISE') || cat.includes('LMS');
        if (activeCategory === 'HEALTHCARE TECH') return cat.includes('HEALTHCARE');
        if (activeCategory === 'FINTECH & WEB3') return cat.includes('FINTECH') || cat.includes('WEB3');
        if (activeCategory === 'MOBILE APPS') return cat.includes('MOBILE') || cat.includes('MARKETPLACE');
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
                {/* Header Container: Image or CSS UI Mockup */}
                <div className="w-full h-60 bg-[#050508] relative overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full relative overflow-hidden flex items-end justify-center px-8 pt-8">
                      {/* Grid Pattern */}
                      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      
                      {/* Background Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-brand/20 blur-[60px] rounded-full group-hover:bg-brand/35 transition-colors duration-500"></div>

                      {/* UI Renderings */}
                      <div className="w-full h-full relative z-10 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out flex justify-center">
                        
                        {project.type === 'dashboard' && (
                          <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 flex overflow-hidden shadow-2xl">
                            <div className="w-1/4 h-full border-r border-white/5 bg-[#0a0a0a] p-3 flex flex-col gap-3">
                              <div className="w-6 h-6 rounded bg-brand/30 flex items-center justify-center"><LayoutDashboard className="w-3.5 h-3.5 text-brand" /></div>
                              <div className="w-full h-2 rounded bg-white/10"></div>
                              <div className="w-2/3 h-2 rounded bg-white/5"></div>
                            </div>
                            <div className="flex-1 p-4 flex flex-col gap-3">
                              <div className="w-28 h-3 rounded bg-white/15"></div>
                              <div className="grid grid-cols-2 gap-2">
                                 <div className="h-14 rounded bg-brand/10 border border-brand/20"></div>
                                 <div className="h-14 rounded bg-white/5"></div>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.type === 'chart' && (
                          <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 p-5 flex flex-col shadow-2xl">
                            <div className="flex justify-between items-center mb-4">
                              <div className="w-7 h-7 rounded bg-brand/30 flex items-center justify-center"><Activity className="w-3.5 h-3.5 text-brand" /></div>
                              <div className="w-16 h-3 rounded bg-white/10"></div>
                            </div>
                            <div className="flex-1 relative border-b border-l border-white/10">
                              <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                                <path d="M0,35 C20,30 40,5 60,15 C80,25 90,5 100,8" fill="none" stroke="#F569FF" strokeWidth="2.5" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {project.type === 'mobile' && (
                          <div className="w-40 h-full rounded-t-3xl bg-[#111] border border-white/20 border-b-0 p-2 relative shadow-2xl">
                             <div className="w-full h-full rounded-t-2xl bg-[#0a0a0a] p-3 flex flex-col gap-3">
                               <div className="h-10 bg-brand/15 rounded-lg border border-brand/30 flex items-center gap-2 px-2">
                                 <Smartphone className="w-3 h-3 text-brand" />
                                 <div className="w-12 h-1.5 rounded bg-brand/40"></div>
                               </div>
                               <div className="w-full h-6 rounded bg-white/5"></div>
                             </div>
                          </div>
                        )}

                        {project.type === 'security' && (
                          <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 p-5 flex flex-col shadow-2xl justify-between">
                            <div className="flex justify-between items-center">
                              <div className="w-8 h-8 rounded bg-brand/30 flex items-center justify-center"><Shield className="w-4 h-4 text-brand" /></div>
                              <span className="text-[10px] font-mono text-brand font-bold">SECURED</span>
                            </div>
                            <div className="space-y-2">
                              <div className="w-full h-3 rounded bg-brand/20"></div>
                              <div className="w-3/4 h-3 rounded bg-white/10"></div>
                            </div>
                          </div>
                        )}

                        {project.type === 'ai' && (
                          <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 p-5 flex flex-col shadow-2xl justify-between">
                            <div className="flex justify-between items-center">
                              <div className="w-8 h-8 rounded bg-brand/30 flex items-center justify-center"><Cpu className="w-4 h-4 text-brand" /></div>
                              <span className="text-[10px] font-mono text-brand font-bold">AI AGENT</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                              {`> Analysis complete: 0 risks detected.`}
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  )}

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
                      {project.client} · <span className="text-white/60">{project.impactMetric}</span>
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
                  {selectedProject.client} — Impact: {selectedProject.impactMetric}
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

                {/* Open Full Dedicated Page Link if available */}
                {selectedProject.slug && (
                  <div className="pt-4 border-t border-white/10 flex justify-end">
                    <Link
                      href={selectedProject.slug}
                      className="px-6 py-3 rounded-xl bg-brand text-black font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-brand/90 transition-all shadow-[0_0_15px_rgba(245,105,255,0.3)]"
                    >
                      Open Full Case Study Page <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
