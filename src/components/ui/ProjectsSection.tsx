"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Activity, LayoutDashboard, Smartphone } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'XNITH Learn',
    status: 'Live',
    category: 'Enterprise LMS',
    features: 'Custom Architecture',
    desc: 'A scalable learning management ecosystem built for enterprise training and continuous development.',
    type: 'dashboard'
  },
  {
    id: 2,
    title: 'X-Flow Analytics',
    status: 'Live',
    category: 'Data & Intelligence',
    features: 'Real-time Pipeline',
    desc: 'An advanced predictive analytics platform turning massive data streams into actionable business intelligence.',
    type: 'chart'
  },
  {
    id: 3,
    title: 'OmniHealth Portal',
    status: 'Live',
    category: 'Digital Healthcare',
    features: 'HIPAA Compliant',
    desc: 'A bilingual patient management and telemedicine application designed for modern healthcare providers.',
    type: 'mobile'
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
              className="flex flex-col bg-[#080808] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-[#0c0c0c] transition-all duration-300 group cursor-pointer"
            >
              {/* Premium UI Mockup Container */}
              <div className="w-full h-56 md:h-64 bg-[#050505] relative overflow-hidden flex items-end justify-center px-8 pt-8">
                
                {/* Subtle Grid Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand/20 blur-[60px] rounded-full group-hover:bg-brand/30 transition-colors duration-500"></div>

                {/* Abstract UI Elements */}
                <div className="w-full h-full relative z-10 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out flex justify-center">
                  
                  {project.type === 'dashboard' && (
                    <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/10 border-b-0 flex shadow-2xl overflow-hidden">
                      {/* Sidebar */}
                      <div className="w-1/4 h-full border-r border-white/5 bg-[#0a0a0a] p-3 flex flex-col gap-3">
                        <div className="w-6 h-6 rounded bg-brand/20 mb-4 flex items-center justify-center"><LayoutDashboard className="w-3 h-3 text-brand" /></div>
                        <div className="w-full h-2 rounded-full bg-white/10"></div>
                        <div className="w-2/3 h-2 rounded-full bg-white/5"></div>
                        <div className="w-full h-2 rounded-full bg-white/5"></div>
                      </div>
                      {/* Main Content */}
                      <div className="flex-1 p-4 flex flex-col gap-4">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                           <div className="w-24 h-3 rounded-full bg-white/10"></div>
                           <div className="w-8 h-8 rounded-full bg-white/5"></div>
                        </div>
                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-3">
                           <div className="h-16 rounded-lg bg-brand/5 border border-brand/10"></div>
                           <div className="h-16 rounded-lg bg-white/5"></div>
                        </div>
                        <div className="flex-1 rounded-t-lg bg-white/5 mt-2"></div>
                      </div>
                    </div>
                  )}

                  {project.type === 'chart' && (
                    <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/10 border-b-0 flex flex-col shadow-2xl p-6">
                      <div className="flex justify-between items-center mb-6">
                         <div className="w-8 h-8 rounded bg-brand/20 flex items-center justify-center"><Activity className="w-4 h-4 text-brand" /></div>
                         <div className="w-16 h-4 rounded-full bg-white/10"></div>
                      </div>
                      {/* SVG Line Chart */}
                      <div className="flex-1 relative w-full border-b border-l border-white/10">
                        <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                          <motion.path 
                            d="M0,40 C20,35 30,10 50,20 C70,30 80,5 100,10" 
                            fill="none" 
                            stroke="#F569FF" 
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                          <motion.path 
                            d="M0,40 C20,35 30,10 50,20 C70,30 80,5 100,10 L100,50 L0,50 Z" 
                            fill="url(#brandGradient)" 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                          <defs>
                            <linearGradient id="brandGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#F569FF" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#F569FF" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  )}

                  {project.type === 'mobile' && (
                    <div className="w-40 h-full rounded-t-3xl bg-[#111] border border-white/20 border-b-0 shadow-2xl relative p-2">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#050505] rounded-b-xl border-b border-x border-white/10 z-20"></div>
                       <div className="w-full h-full rounded-t-2xl bg-[#0a0a0a] overflow-hidden flex flex-col">
                         {/* Mobile Header */}
                         <div className="h-16 bg-brand/10 border-b border-brand/20 pt-6 px-3 flex items-center gap-2">
                            <Smartphone className="w-3 h-3 text-brand" />
                            <div className="w-12 h-2 rounded-full bg-brand/40"></div>
                         </div>
                         {/* Mobile List */}
                         <div className="flex-1 p-3 flex flex-col gap-3">
                           <div className="w-full h-8 rounded-lg bg-white/5"></div>
                           <div className="w-full h-8 rounded-lg bg-white/5"></div>
                           <div className="w-full h-8 rounded-lg bg-white/5"></div>
                         </div>
                       </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Title & Status */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold text-brand tracking-widest uppercase">
                    {project.status}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="px-3 py-1 rounded border border-brand/20 bg-brand/5 text-brand text-xs font-medium">
                    {project.category}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <span className="text-xs text-white/40 font-mono">
                    {project.features}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed">
                  {project.desc}
                </p>
              </div>
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
