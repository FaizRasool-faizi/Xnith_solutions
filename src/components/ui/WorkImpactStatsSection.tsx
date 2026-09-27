"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, GitBranch, Eye } from 'lucide-react';

const principles = [
  {
    icon: Cpu,
    title: 'Engineering-First Delivery',
    desc: 'Systems engineered directly by the practitioners who design them—no outsourced layers.',
  },
  {
    icon: GitBranch,
    title: 'Direct Technical Collaboration',
    desc: 'Work directly with technical leads across architecture, planning, and implementation.',
  },
  {
    icon: ShieldCheck,
    title: 'Documented Architecture',
    desc: 'Clean codebases, verified schemas, and modular systems built for long-term maintainability.',
  },
  {
    icon: Eye,
    title: 'Transparent Project Scope',
    desc: 'Clear technical milestones, honest feasibility reviews, and working progress at every step.',
  },
];

export default function WorkImpactStatsSection() {
  return (
    <section className="relative w-full bg-[#050505] py-24 overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            <span className="h-[1px] w-8 bg-brand"></span>
            HOW WE DELIVER
            <span className="h-[1px] w-8 bg-brand"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering standards you can verify.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-brand/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
