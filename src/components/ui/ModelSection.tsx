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
            TWO DELIVERY ENGINES
            <span className="h-[1px] w-8 bg-brand"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            One mission. <br />
            Two ways we deliver.
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
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
          <motion.div variants={itemVariants} className="flex flex-col justify-between bg-[#0a0a14] border border-zinc-800 rounded-3xl p-8 md:p-12 hover:border-brand/50 transition-all shadow-xl">
            <div>
              <div className="text-[10px] tracking-[0.2em] font-mono text-brand uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                ENGINE 01
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Engineering Studio
              </h3>
              <p className="text-lg text-zinc-200 mb-4 font-semibold">
                Custom software engineered for specific business problems.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8 text-sm sm:text-base font-normal">
                We partner with startups, SMEs, and ambitious businesses to design, architect, and deploy custom web applications, AI systems, SaaS platforms, and intelligent workflows.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:text-white transition-colors group">
              Explore client services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Engine 02 */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between bg-[#0a0a14] border border-zinc-800 rounded-3xl p-8 md:p-12 hover:border-brand/50 transition-all shadow-xl">
            <div>
              <div className="text-[10px] tracking-[0.2em] font-mono text-brand uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                ENGINE 02
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proprietary Product Lab
              </h3>
              <p className="text-lg text-zinc-200 mb-4 font-semibold">
                Our own software experiments and deployed platforms.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8 text-sm sm:text-base font-normal">
                As software builders, we actively engineer and launch our own digital products—exploring cutting-edge technologies like real-time neural lip-sync, interactive 3D WebGL, and autonomous AI agents.
              </p>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:text-white transition-colors group">
              Explore our products
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
          
          {/* Banner */}
          <motion.div variants={itemVariants} className="md:col-span-2 mt-2">
            <div className="bg-gradient-to-r from-brand/10 via-[#0e0e1a] to-brand/10 border border-zinc-700/80 rounded-2xl p-8 text-center shadow-[inset_0_0_40px_rgba(245,105,255,0.05)] hover:border-brand/40 transition-colors">
              <h4 className="text-xl md:text-2xl font-semibold text-zinc-100">
                The strongest proof of what we can build is what we have already built.
              </h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
