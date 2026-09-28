"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageSquare, Cpu, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: "Tell us what you're building",
    desc: "Share your idea, business problem, existing system or project requirements. We listen closely to understand your commercial objectives.",
    icon: MessageSquare,
  },
  {
    num: '02',
    title: "Define the solution",
    desc: "We discuss scope, technical requirements, architecture and the appropriate development approach for your timeline and scale.",
    icon: Cpu,
  },
  {
    num: '03',
    title: "Build and iterate",
    desc: "Development moves through clear milestones with regular communication and working progress you can see and evaluate.",
    icon: Rocket,
  },
];

export default function HowWeStartSection() {
  return (
    <section className="relative w-full bg-[#030303] py-28 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            HOW WE START
            <span className="h-[1px] w-8 bg-brand"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            From first conversation<br className="hidden sm:inline" /> to working software.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            We remove the mystery from software development. Our engagement process is straightforward, structured, and focused entirely on practical execution.
          </p>
        </motion.div>

        {/* 3-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex flex-col justify-between p-8 rounded-2xl bg-[#0a0a14] border border-zinc-800 hover:border-brand/40 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                {/* Accent top hover line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top Bar: Icon and Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-bold tracking-widest text-zinc-400">
                      STEP {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Human Accountability Signal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto rounded-2xl bg-zinc-950/80 border border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-1">
                Direct Engineering Accountability
              </div>
              <p className="text-xs text-zinc-300 font-normal">
                Built by engineers who work directly on the products they ship. Direct collaboration with technical builders.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand hover:text-white transition-colors shrink-0 uppercase tracking-wider"
          >
            <span>Learn About Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
