"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    num: '01',
    title: 'AI Automation & Workflows',
    desc: 'You are X-Automate — a virtual process engineer for XNITH Solutions\' AI-driven workflow automation tools. You understand complex business logic...'
  },
  {
    num: '02',
    title: 'AI Healthcare',
    desc: 'You are X-Health — a virtual expert trained on the full suite of digital healthcare solutions offered by XNITH. Connecting patients and providers...'
  },
  {
    num: '03',
    title: 'Conversational Chatbots (GPT)',
    desc: 'You are X-Chat — a conversational AI specialist trained on XNITH Solutions-based chatbot solutions. Whether it\'s customer support or sales...'
  },
  {
    num: '04',
    title: 'Education & LMS Platforms',
    desc: 'You are X-EduTech — a knowledgeable platform guide for XNITH Solutions\' learning management systems. You present powerful, scalable...'
  },
  {
    num: '05',
    title: 'Influencer & Digital Marketing',
    desc: 'You are X-Influencer — a sales agent fluent in the fast-moving world of influencer marketing. Backed by XNITH Solutions\' performance stack...'
  },
  {
    num: '06',
    title: 'Law & Legal Tech',
    desc: 'You are X-LegalTech — a virtual expert on XNITH Solutions\' law and legal technology projects. From digital case management to AI-driven research...'
  },
  {
    num: '07',
    title: 'FinTech & Digital Banking',
    desc: 'You are X-Finance — a specialist in secure, scalable financial technology built by XNITH. Serving payment platforms, banking dashboards, and more...'
  },
  {
    num: '08',
    title: 'Cloud Infrastructure & DevOps',
    desc: 'You are X-Cloud — an enterprise-grade cloud infrastructure manager ensuring your XNITH-built applications run flawlessly at any scale...'
  },
];

export default function SolutionCategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand"></span>
            AI SOLUTION CATEGORIES
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Digital solutions<br />
            for every industry.
          </h2>
        </motion.div>

        {/* Solutions List */}
        <div className="w-full">
          {/* Top Divider */}
          <div className="w-full h-[1px] bg-white/8"></div>

          {solutions.map((solution, index) => (
            <motion.div
              key={solution.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-8 cursor-pointer"
            >
              {/* Hover background sweep */}
              <div
                className={`absolute inset-0 bg-brand/5 border-l-2 border-brand transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Number */}
              <div className="relative z-10 w-16 flex-shrink-0">
                <span className={`font-mono text-xs tracking-widest font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-brand' : 'text-brand/50'}`}>
                  {solution.num}
                </span>
              </div>

              {/* Title */}
              <div className="relative z-10 flex-1 md:pr-12">
                <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-white/80'}`}>
                  {solution.title}
                </h3>
              </div>

              {/* Description */}
              <div className="relative z-10 hidden md:block md:w-2/5">
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${hoveredIndex === index ? 'text-white/60' : 'text-white/30'}`}>
                  {solution.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="relative z-10 ml-6 flex-shrink-0">
                <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'border-brand bg-brand text-black scale-110' : 'border-white/10 text-white/30'}`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Divider */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/8"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
