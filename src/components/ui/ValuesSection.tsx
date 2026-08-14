"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const values = [
  {
    title: "Integrity",
    description: "We do the right thing, always."
  },
  {
    title: "Collaboration",
    description: "Great things happen when we work together."
  },
  {
    title: "Innovation",
    description: "We challenge the status quo and build what's next."
  },
  {
    title: "Excellence",
    description: "We are committed to quality in everything we do."
  },
  {
    title: "Impact",
    description: "We create technology that empowers people and transforms lives."
  }
];

export default function ValuesSection() {
  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
              <span className="h-[1px] w-8 bg-brand"></span>
              WHAT DRIVES US
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Our values.
            </h2>
          </motion.div>

          {/* Decorative Dot Circle Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-white/[0.02]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_10px_#F569FF]" />
          </motion.div>
        </div>

        {/* 5-Column Grid with Hairline Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-white/10 rounded-2xl overflow-hidden bg-[#08080c]/60 backdrop-blur-sm divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {values.map((val, index) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300 relative"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Check Icon Circle */}
                <div className="w-12 h-12 rounded-full border border-brand/30 bg-brand/10 flex items-center justify-center mb-8 group-hover:border-brand group-hover:bg-brand/20 transition-all duration-300 shadow-[0_0_15px_rgba(245,105,255,0.15)] group-hover:shadow-[0_0_20px_rgba(245,105,255,0.3)]">
                  <Check className="w-5 h-5 text-brand" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-brand transition-colors duration-300">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
