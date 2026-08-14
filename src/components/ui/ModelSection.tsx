"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ModelSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="relative w-full bg-[#050505] py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            OUR MODEL
            <span className="h-[1px] w-8 bg-brand"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            One mission. <br />
            Two ways we deliver.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Most agencies either consult on strategy, or simply write code. <br className="hidden sm:block" />
            We do both, and each makes the other stronger.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {/* Engine 01 */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-colors">
            <div>
              <div className="text-[10px] tracking-[0.2em] font-mono text-white/40 uppercase mb-6">
                ENGINE 01
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Studio
              </h3>
              <p className="text-xl text-white/70 mb-8 font-medium">
                We build custom digital solutions for you.
              </p>
              <p className="text-white/50 leading-relaxed mb-12">
                As your partner, we help you discover where technology creates value, then design, architect, and scale intelligent products, applications, and systems, or embed native talent straight into your team.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:text-white transition-colors group">
              Explore what we do
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Engine 02 */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-colors">
            <div>
              <div className="text-[10px] tracking-[0.2em] font-mono text-white/40 uppercase mb-6">
                ENGINE 02
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Ecosystem
              </h3>
              <p className="text-xl text-white/70 mb-8 font-medium">
                We build software products of our own.
              </p>
              <p className="text-white/50 leading-relaxed mb-12">
                As product builders, we've created a growing family of proprietary digital platforms across productivity, growth, communication, and business. Live, in market, and scaling.
              </p>
            </div>
            <Link href="/ecosystem" className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:text-white transition-colors group">
              Explore the ecosystem
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
          
          {/* Banner */}
          <motion.div variants={itemVariants} className="md:col-span-2 mt-2">
            <div className="bg-gradient-to-r from-brand/5 via-[#111] to-brand/5 border border-white/10 rounded-2xl p-8 text-center shadow-[inset_0_0_40px_rgba(245,105,255,0.03)] hover:border-brand/30 transition-colors">
              <h4 className="text-xl md:text-2xl font-semibold text-white">
                The strongest proof of what we can build for you is what we've already built for ourselves.
              </h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
