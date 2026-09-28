"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';

const serviceCards = [
  {
    num: '01',
    title: 'Full-Stack Web & Mobile Development',
    whatItIs: 'Modern, responsive web applications, SaaS dashboards, and cross-platform mobile apps engineered for speed, stability, and clean maintainability.',
    whatWeBuild: 'Custom web apps, SaaS MVPs, customer portals, internal management tools, and mobile applications.',
    whoItHelps: 'Founders launching digital products, growing businesses upgrading legacy systems, and teams needing robust client-facing platforms.',
    businessValue: 'Delivers reliable, production-ready software with clean architecture, fast load times, and zero vendor lock-in.',
    technologies: 'Next.js 15+, React 19, TypeScript, Tailwind CSS, Expo / React Native, PostgreSQL',
    relatedProject: { name: 'Appointix', href: '/work/appointix' }
  },
  {
    num: '02',
    title: 'AI & LLM Application Development',
    whatItIs: 'Custom software solutions that integrate advanced language models directly into business logic, user experiences, and knowledge systems.',
    whatWeBuild: 'Intelligent conversational assistants, document intelligence pipelines, automated inquiry parsers, and smart search.',
    whoItHelps: 'Businesses with substantial operational data, customer inquiries, or repetitive analytical tasks.',
    businessValue: 'Connects AI models to your business data and workflows to automate knowledge-heavy and repetitive tasks.',
    technologies: 'Google Gemini, Groq, local open-source LLMs (Llama), vector embeddings, Python, FastAPI',
    relatedProject: { name: 'Appointix AI Engine', href: '/work/appointix' }
  },
  {
    num: '03',
    title: 'AI Automation & Intelligent Workflows',
    whatItIs: 'Automated operational pipelines that connect software systems, eliminate repetitive manual processes, and trigger intelligent actions.',
    whatWeBuild: 'Automated webhook processors, multi-step agent workflows, CRM and notification integrations (WhatsApp / email dispatch), and data synchronization.',
    whoItHelps: 'Teams spending hours on manual data entry, customer dispatching, or cross-platform coordination.',
    businessValue: 'Eliminates repetitive manual admin operations and synchronizes events across systems without human delays.',
    technologies: 'Python, FastAPI, WebSockets, Redis, background task workers, automated messaging APIs',
    relatedProject: { name: 'Appointix Dispatch', href: '/work/appointix' }
  },
  {
    num: '04',
    title: 'Computer Vision & Real-Time AI',
    whatItIs: 'Visual and spatial intelligence software that detects features, tracks facial landmarks, and processes video feeds in real time.',
    whatWeBuild: 'Real-time camera processing, facial emotion tracking, video interaction pipelines, and neural avatar prototypes.',
    whoItHelps: 'Teams building interactive educational software, digital customer service prototypes, or visual inspection tools.',
    businessValue: 'Enables intelligent visual understanding and real-time interaction in cameras or video feeds with local low-latency inference.',
    technologies: 'Google MediaPipe, PyTorch, CUDA acceleration, Wav2Lip, OpenCV, WebSockets',
    relatedProject: { name: 'AuraTalk AI', href: '/work/auratalk' }
  },
  {
    num: '05',
    title: '3D Web & Interactive Digital Platforms',
    whatItIs: 'Hardware-accelerated 3D graphics rendered natively inside standard web browsers without requiring plugins or app downloads.',
    whatWeBuild: 'Interactive 3D product visualizers, spatial web showrooms, custom WebGL canvas components, and interactive e-commerce experiences.',
    whoItHelps: 'E-commerce brands, high-ticket retail products, and digital platforms wanting engaging product exploration.',
    businessValue: 'Enhances product clarity and customer engagement by letting visitors interact with products in real time 3D.',
    technologies: 'Three.js, React Three Fiber, WebGL, GLTF/GLB optimization, Zustand',
    relatedProject: { name: 'Petstan 3D', href: '/work/petstan' }
  },
  {
    num: '06',
    title: 'System Architecture & Technical Advisory',
    whatItIs: 'Strategic technical guidance, system design reviews, database modeling, and code audit services directly from senior engineers.',
    whatWeBuild: 'Architecture blueprints, API specifications, database schemas, performance audits, and refactoring roadmaps.',
    whoItHelps: 'Non-technical founders planning complex products, early-stage startups, and technical leaders evaluating scalability.',
    businessValue: 'Prevents costly rewrites and architectural dead-ends through disciplined engineering and schema planning before coding.',
    technologies: 'Microservices, REST & GraphQL, PostgreSQL, Redis, Docker, Cloud-Native CI/CD',
    relatedProject: { name: 'Contact Engineering', href: '/contact' }
  }
];

export default function ServicesGridSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="relative w-full bg-[#030303] py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Services 3x2 Grid with Hairline Borders */}
        <div className="w-full border border-white/10 rounded-2xl overflow-hidden bg-white/10 shadow-2xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]"
          >
            {serviceCards.map((service) => (
              <motion.div 
                key={service.num} 
                variants={itemVariants}
                className="bg-[#08080c] p-8 md:p-10 flex flex-col justify-between group hover:bg-[#0e0e16] transition-colors duration-300 relative"
              >
                {/* Top Row: Plus Icon & Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-lg border border-brand/30 bg-brand/5 flex items-center justify-center group-hover:border-brand group-hover:bg-brand/20 transition-all duration-300 shadow-[0_0_12px_rgba(245,105,255,0.1)] group-hover:shadow-[0_0_18px_rgba(245,105,255,0.3)]">
                    <Plus className="w-5 h-5 text-brand" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-white/30 font-semibold">
                    {service.num}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                      {service.whatItIs}
                    </p>

                    <div className="space-y-3 mb-6 text-xs text-zinc-400">
                      <div>
                        <span className="font-mono text-white/70 uppercase tracking-wider font-semibold block mb-0.5">What We Build:</span>
                        <span className="text-zinc-300">{service.whatWeBuild}</span>
                      </div>
                      <div>
                        <span className="font-mono text-white/70 uppercase tracking-wider font-semibold block mb-0.5">Who It Helps:</span>
                        <span className="text-zinc-300">{service.whoItHelps}</span>
                      </div>
                      <div>
                        <span className="font-mono text-white/70 uppercase tracking-wider font-semibold block mb-0.5">Business Value:</span>
                        <span className="text-zinc-300">{service.businessValue}</span>
                      </div>
                      <div>
                        <span className="font-mono text-white/70 uppercase tracking-wider font-semibold block mb-0.5">Core Tech:</span>
                        <span className="text-brand/90 font-mono">{service.technologies}</span>
                      </div>
                    </div>
                  </div>

                  {/* Internal Link to Project Proof */}
                  <div className="pt-4 border-t border-white/5">
                    <Link
                      href={service.relatedProject.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand hover:text-white transition-colors uppercase tracking-wider"
                    >
                      <span>Explore {service.relatedProject.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Subtle bottom hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
