"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Products Shipped' },
  { value: '99.8%', label: 'Client Retention Rate' },
  { value: '15+', label: 'Industries Transformed' },
  { value: '$50M+', label: 'Client Value Generated' }
];

export default function WorkImpactStatsSection() {
  return (
    <section className="relative w-full bg-[#050505] py-24 overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 font-mono">
                <span className="text-brand">{stat.value}</span>
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-widest text-white/50 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
