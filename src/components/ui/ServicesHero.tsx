"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex flex-col justify-end overflow-hidden bg-[#020208] pb-20 pt-40">
      
      {/* Background ambient radial glow on right side */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-brand/20 via-purple-950/15 to-transparent" />
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[600px] h-[500px] bg-brand/15 blur-[160px] rounded-full" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020208] to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/30 uppercase mb-10"
        >
          <Link href="/" className="hover:text-white/60 transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-white/50">SERVICES</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-8"
        >
          <span className="h-[1px] w-8 bg-brand"></span>
          WHAT WE DO
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-10 max-w-4xl"
        >
          Services that turn digital{' '}
          <span className="text-brand">ambition into systems.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl"
        >
          Beyond our platforms, we partner with organizations to design, build, and operate intelligent systems that fit their data, workflows, and goals.
        </motion.p>

      </div>

      {/* Bottom hairline border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/8" />
    </section>
  );
}
