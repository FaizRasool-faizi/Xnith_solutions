"use client";

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2026 · Founded',
    title: 'Our beginning',
    desc: 'Founded with a mission to solve real world problems through technology and bold ideas.',
    color: 'bg-brand',
    labelColor: 'text-brand'
  },
  {
    year: 'The Journey',
    title: 'From services to platforms',
    desc: 'Moved from delivering software to building platforms that empower entire industries.',
    color: 'bg-violet-400',
    labelColor: 'text-violet-400'
  },
  {
    year: 'Clients First',
    title: 'Proving impact',
    desc: 'Deep enterprise and cross-industry work established a track record of trusted delivery.',
    color: 'bg-brand',
    labelColor: 'text-brand'
  },
  {
    year: 'Today',
    title: 'The Digital Potential Ecosystem',
    desc: 'Five proprietary platforms, one connected mission, millions of lives impacted.',
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
            className="flex flex-col gap-12"
          >
            {/* Label */}
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase">
              <span className="h-[1px] w-8 bg-brand"></span>
              OUR STORY
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              From software<br />
              to a digital ecosystem.
            </h2>

            {/* Description */}
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              We started by solving real world problems with code. Today we build intelligent products and human-centered platforms that drive measurable impact.
            </p>

            {/* Bold Statement */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              We are not simply building software. We are building the future of human potential.
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
