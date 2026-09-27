"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative w-full bg-[#030303] py-20 px-4 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-brand/8 blur-[140px] rounded-full" />
      </div>
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-violet-600/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center text-center rounded-3xl border border-zinc-700/80 bg-[#090916] overflow-hidden py-24 px-8 md:px-16 shadow-[0_0_80px_rgba(245,105,255,0.08)]"
        >
          {/* Inner glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand/8 via-transparent to-violet-900/15 pointer-events-none" />

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-8 relative z-10"
          >
            <span className="h-[1px] w-8 bg-brand"></span>
            START A CONVERSATION
            <span className="h-[1px] w-8 bg-brand"></span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-3xl mb-6 relative z-10"
          >
            Have a product idea worth building?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-200 leading-relaxed max-w-2xl mb-10 relative z-10 font-normal"
          >
            Tell us about your project, the business problem you are solving, or the software you need built. We evaluate requirements from an engineering perspective and discuss the most practical way forward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10 mb-6"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-brand text-black font-bold text-sm tracking-wide transition-all hover:bg-brand/90 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_35px_rgba(245,105,255,0.35)]"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/work"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-600 text-zinc-100 font-semibold text-sm tracking-wide transition-all hover:bg-zinc-800 hover:border-brand shadow-md"
            >
              Explore Our Work
              <span className="transition-transform group-hover:translate-x-1 text-brand">→</span>
            </Link>
          </motion.div>

          {/* Micro Reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400 relative z-10">
            <span>Direct engineer consultation</span>
            <span>·</span>
            <span>No agency sales pitch</span>
            <span>·</span>
            <span>Clear scope discussion</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
