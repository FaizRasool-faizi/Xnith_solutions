"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, FileText } from 'lucide-react';

const commitments = [
  {
    num: '01',
    title: 'CLEAR OWNERSHIP',
    desc: 'Project code, documentation and agreed deliverables are clearly defined from the beginning.',
    icon: Code2,
  },
  {
    num: '02',
    title: 'DIRECT ENGINEERING COLLABORATION',
    desc: 'Clients communicate directly with the people involved in designing and building the product.',
    icon: Users,
  },
  {
    num: '03',
    title: 'DOCUMENTED ARCHITECTURE',
    desc: 'Projects are structured around maintainable code, clear technical decisions and documented implementation.',
    icon: FileText,
  },
];

export default function DeliveryCommitmentsSection() {
  return (
    <section className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            HOW WE WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Built with engineering discipline.<br />
            Delivered without unnecessary agency layers.
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            We focus on technical clarity, direct communication, and maintainable implementation from architecture design through to production deployment.
          </p>
        </motion.div>

        {/* 3-Column Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-8 md:p-10 rounded-2xl bg-[#0a0a14] border border-zinc-800 hover:border-brand/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
              >
                {/* Accent top hover line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top: Icon & Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
