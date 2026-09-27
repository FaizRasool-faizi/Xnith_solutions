"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ways = [
  {
    label: 'FOR FOUNDERS & STARTUPS',
    title: 'Turn early product concepts, MVPs, and technical requirements into production-ready software platforms.',
    cta: 'Start a Project →',
    href: '/contact'
  },
  {
    label: 'FOR GROWING BUSINESSES',
    title: 'Modernize internal operations, automate manual workflows, and integrate custom AI assistants into your business.',
    cta: 'Explore Services →',
    href: '/services'
  },
  {
    label: 'FOR TECHNICAL LEADERS',
    title: 'Collaborate directly with hands-on systems engineers to build specialized full-stack, 3D, and AI applications.',
    cta: 'Discuss Technical Scope →',
    href: '/contact'
  }
];

export default function ThreeWaysSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            COLLABORATION MODELS
            <span className="h-[1px] w-8 bg-brand"></span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            How we partner with you.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              className="relative flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-white/8 bg-[#080808] overflow-hidden group transition-all duration-300 hover:border-brand/30 min-h-[320px]"
            >
              {/* Corner glow on hover */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[60px] rounded-full transition-opacity duration-500 ${hovered === index ? 'opacity-100' : 'opacity-0'}`}
              />

              <div className="relative z-10">
                {/* Label */}
                <p className="text-[10px] font-semibold tracking-[0.2em] text-brand/80 uppercase mb-8">
                  {way.label}
                </p>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                  {way.title}
                </h3>
              </div>

              {/* CTA Link */}
              <div className="relative z-10 mt-10">
                <Link
                  href={way.href}
                  className="text-sm font-semibold text-brand hover:text-white transition-colors duration-200"
                >
                  {way.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
