"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Activity, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'appointix',
    title: 'Appointix',
    slug: '/work/appointix',
    status: 'Active',
    category: 'AI-Powered Local Service & Marketplace',
    featuresCount: '8 Core Modules',
    desc: 'An intelligent, AI-driven hyperlocal marketplace connecting households with verified local service experts (plumbers, electricians, mechanics)...',
    image: '/appointix.jpeg',
    type: 'image'
  },
  {
    id: 'upticker',
    title: 'UpTicker AI Coach',
    slug: '/work',
    status: 'Active',
    category: 'Productivity & Wellness',
    featuresCount: '10 Features',
    desc: 'UpTicker is an advanced productivity, habit-building, and life management application powered by an embedded AI coach...',
    type: 'gradient-green'
  },
  {
    id: 'almana',
    title: 'Almana | المانع',
    slug: '/work',
    status: 'Active',
    category: 'AI Healthcare',
    featuresCount: '10 Features',
    desc: 'Almana Health Compass is a bilingual healthcare mobile application connecting patients to hospital networks...',
    type: 'gradient-teal'
  }
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            A track record of products,<br />
            shipped for organizations<br />
            who trusted us.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            Our own platforms prove we can build. These prove we can deliver, for someone else, on their problem, in their industry.
          </p>
        </motion.div>

        {/* Projects Grid Matching Screenshot */}
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
                className="flex flex-col bg-[#0b0b12] rounded-3xl overflow-hidden border border-white/10 hover:border-brand/40 transition-all duration-500 group cursor-pointer h-full shadow-2xl"
              >
                {/* Card Image / Banner Top */}
                <div className="w-full h-56 md:h-64 relative overflow-hidden bg-[#050508]">
                  {project.type === 'image' && project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : project.type === 'gradient-green' ? (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-green-900 p-6 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-3xl rounded-full" />
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-white/20 text-white font-bold text-xs flex items-center justify-center">U</span>
                        <span className="text-white font-bold text-sm">UpTicker</span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">Achieve<br />More.</h4>
                        <p className="text-xs text-white/70 mt-1 font-mono">Your AI Productivity Coach</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-800 to-slate-900 p-6 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-teal-400/10 blur-3xl rounded-full" />
                      <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-teal-300" />
                        <span className="text-white font-bold text-sm">Almana | المانع</span>
                      </div>
                      <div className="relative z-10 flex items-center justify-center h-28">
                        <div className="w-28 h-40 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl">
                          <div className="w-full h-full bg-[#050505] rounded-xl p-2 flex flex-col justify-between">
                            <div className="w-8 h-2 rounded bg-teal-400/40"></div>
                            <div className="w-full h-12 rounded bg-white/5 border border-white/10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Card Content Below */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Line 1: Title & Status */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-brand" />
                      </h3>
                      <span className="text-xs font-mono font-semibold text-emerald-400">
                        {project.status}
                      </span>
                    </div>

                    {/* Line 2: Category Pill & Features */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="text-xs text-white/40 font-mono">
                        • {project.featuresCount}
                      </span>
                    </div>

                    {/* Line 3: Description */}
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
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
            className="group flex items-center gap-3 px-8 py-4 rounded bg-[#0a0a0a] border border-white/10 text-sm font-semibold text-white hover:border-brand/50 transition-colors"
          >
            Explore all capabilities
            <span className="transition-transform group-hover:translate-x-1 text-brand">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
