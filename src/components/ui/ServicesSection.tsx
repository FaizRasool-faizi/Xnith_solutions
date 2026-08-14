"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'AI Strategy & Consulting',
    desc: 'We find where AI creates value, with a clear roadmap, governance, and ROI you can defend.'
  },
  {
    num: '02',
    title: 'AI Agents & Automation',
    desc: 'Intelligent agents and workflows that erase manual work and unlock speed.'
  },
  {
    num: '03',
    title: 'Generative AI & NLP',
    desc: 'Solutions for chat, search, content, and language understanding at scale.'
  },
  {
    num: '04',
    title: 'Data & Predictive Intelligence',
    desc: 'Data pipelines and forecasting systems that turn signals into decisions.'
  },
  {
    num: '05',
    title: 'AI Product Development',
    desc: 'We design and ship intelligent products end to end: web, mobile, and cloud, built to scale.'
  },
  {
    num: '06',
    title: 'Dedicated Teams & Augmentation',
    desc: 'Embed vetted, AI fluent engineers, and trained AI agents, straight into your team.'
  }
];

export default function ServicesSection() {
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
            WHAT WE DO · THE STUDIO
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            Your AI partner,<br />
            end to end.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            From the first question, "where does AI even help us?", to a shipped product and the team that runs it. On its own, or embedded in yours.
          </p>
        </motion.div>

        {/* Services Grid with hairline borders */}
        <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-white/10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]"
          >
            {services.map((service) => (
              <motion.div 
                key={service.num} 
                variants={itemVariants}
                className="bg-[#080808] p-8 md:p-10 flex flex-col group hover:bg-[#0c0c0c] transition-colors duration-300"
              >
                {/* Top Row: Icon and Number */}
                <div className="flex items-start justify-between mb-12">
                  <div className="w-10 h-10 rounded border border-brand/40 flex items-center justify-center bg-brand/5 group-hover:border-brand transition-colors">
                    <Plus className="w-5 h-5 text-brand" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
                    {service.num}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
