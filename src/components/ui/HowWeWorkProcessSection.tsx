"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We map your goals, data, and constraints into a clear, actionable digital opportunity.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We architect the end-to-end solution: system models, AI agents, user experience, and technical integrations.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We engineer and integrate scalable software with enterprise-grade quality, performance, and security baked in.'
  },
  {
    num: '04',
    title: 'Scale',
    desc: 'We deploy to modern cloud infrastructure, continuously monitor performance, and optimize as your business grows.'
  }
];

export default function HowWeWorkProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-brand/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            HOW WE WORK
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            From ambition<br />
            to outcome.
          </h2>
        </motion.div>

        {/* Process List with Hairline Dividers */}
        <div className="w-full">
          {/* Top Divider */}
          <div className="w-full h-[1px] bg-white/10"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative flex flex-col md:flex-row md:items-center py-10 cursor-pointer transition-colors duration-300"
            >
              {/* Left hover indicator bar */}
              <div
                className={`absolute inset-0 bg-brand/5 border-l-2 border-brand transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Number */}
              <div className="relative z-10 w-24 flex-shrink-0 mb-3 md:mb-0">
                <span className={`font-mono text-xs tracking-widest font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-brand' : 'text-brand/50'}`}>
                  {step.num}
                </span>
              </div>

              {/* Title */}
              <div className="relative z-10 md:w-1/3 mb-3 md:mb-0">
                <h3 className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-white/80'}`}>
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="relative z-10 flex-1">
                <p className={`text-base leading-relaxed transition-colors duration-300 ${hoveredIndex === index ? 'text-white/70' : 'text-white/40'}`}>
                  {step.desc}
                </p>
              </div>

              {/* Bottom Divider */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
