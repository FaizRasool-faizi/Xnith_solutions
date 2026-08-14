"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const serviceCards = [
  {
    num: '01',
    title: 'AI Strategy & Adoption',
    desc: 'Align AI initiatives with business goals through clear technical roadmaps, ROI estimation, and governance.'
  },
  {
    num: '02',
    title: 'AI Agents & Automation',
    desc: 'Intelligent agents and workflow automation that eliminate manual work, streamline operations, and unlock speed.'
  },
  {
    num: '03',
    title: 'Generative AI & NLP',
    desc: 'Enterprise solutions for conversational AI, intelligent search, content engines, and language processing at scale.'
  },
  {
    num: '04',
    title: 'Data & Predictive Intelligence',
    desc: 'Robust data pipelines, analytics dashboards, and forecasting models that transform raw signals into strategic decisions.'
  },
  {
    num: '05',
    title: 'Web, Mobile & Cloud',
    desc: 'High-performance, scalable digital products engineered across web, mobile, and cloud architectures.'
  },
  {
    num: '06',
    title: 'IoT & System Modernization',
    desc: 'Connect devices, sensors, and legacy enterprise software to modern, cloud-native intelligent platforms.'
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
                <div className="flex items-center justify-between mb-12">
                  <div className="w-10 h-10 rounded-lg border border-brand/30 bg-brand/5 flex items-center justify-center group-hover:border-brand group-hover:bg-brand/20 transition-all duration-300 shadow-[0_0_12px_rgba(245,105,255,0.1)] group-hover:shadow-[0_0_18px_rgba(245,105,255,0.3)]">
                    <Plus className="w-5 h-5 text-brand" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-white/30 font-semibold">
                    {service.num}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed">
                    {service.desc}
                  </p>
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
