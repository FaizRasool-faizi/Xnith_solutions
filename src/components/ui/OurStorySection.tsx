"use client";

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: 'Founding Vision',
    title: 'Engineer-Led Studio',
    desc: 'Founded by Faiz Rasool and Sawera Saghir with a direct focus on engineering modern software, custom AI systems, and scalable web applications.',
    color: 'bg-brand',
    labelColor: 'text-brand'
  },
  {
    year: 'Proprietary R&D',
    title: 'Building Internal Engines',
    desc: 'Engineered and battle-tested our own technical engines across conversational AI, real-time computer vision, and interactive 3D WebGL.',
    color: 'bg-violet-400',
    labelColor: 'text-violet-400'
  },
  {
    year: 'Delivered Systems',
    title: 'Technical Proof of Capability',
    desc: 'Built functional platforms including Appointix, AuraTalk AI, and Petstan—demonstrating real-world full-stack and applied AI architecture.',
    color: 'bg-brand',
    labelColor: 'text-brand'
  },
  {
    year: 'Client Engineering',
    title: 'Direct Technical Partnership',
    desc: 'Collaborating directly with founders and business owners to ship production-ready web applications, SaaS platforms, and custom automation.',
    color: 'bg-violet-400',
    labelColor: 'text-violet-400'
  }
];

export default function OurStorySection() {
  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-10"
          >
            {/* Label */}
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase">
              <span className="h-[1px] w-8 bg-brand"></span>
              OUR STORY
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Built by engineers who ship real software.
            </h2>

            {/* Description */}
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              XENITH Solutions is a software and AI engineering studio focused on building custom web applications, SaaS products, AI-powered systems, and digital platforms.
            </p>

            {/* Bold Statement */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
              We work directly with founders and teams to turn ambitious product requirements into reliable code.
            </h3>
          </motion.div>

          {/* Right: Vertical Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex flex-col"
          >
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10" />

            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex gap-8 pb-12 last:pb-0"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className={`w-4 h-4 rounded-full border-2 border-[#030303] ${m.color} shadow-[0_0_12px_rgba(245,105,255,0.5)]`} />
                  </div>

                  {/* Content */}
                  <div>
                    <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${m.labelColor}`}>
                      {m.year}
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                      {m.title}
                    </h4>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-sm">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
