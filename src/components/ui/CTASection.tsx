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
          className="relative flex flex-col items-center text-center rounded-3xl border border-white/8 bg-[#070712] overflow-hidden py-24 px-8 md:px-16"
        >
          {/* Inner glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-violet-900/10 pointer-events-none" />

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-8 relative z-10"
          >
            <span className="h-[1px] w-8 bg-brand"></span>
            THE FUTURE WE'RE BUILDING
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mb-8 relative z-10"
          >
            We don't just advise on technology. We build it, ship it, and scale it, for you, and for the world.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-white/50 leading-relaxed max-w-lg mb-14 relative z-10"
          >
            Whether you're an enterprise, a founder, or an investor. Let's build your part of the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-brand text-black font-bold text-sm tracking-wide transition-all hover:bg-brand/90 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(245,105,255,0.3)]"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/services"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm tracking-wide transition-all hover:bg-white/10 hover:border-white/20"
            >
              Explore the Ecosystem
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
