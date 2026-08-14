"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How fast can we kick off a new engagement?",
    answer: "Following our initial discovery conversation and requirements alignment, we typically initiate project discovery workshops within 3 to 5 business days and assemble dedicated engineering pods within 1 to 2 weeks."
  },
  {
    question: "What engagement models does XNITH support?",
    answer: "We support three primary models: (1) End-to-End Product Engineering for fixed deliverables, (2) Dedicated AI & Engineering Team Augmentation to embed directly into your sprint cycles, and (3) Strategic AI Advisory for governance and architecture roadmaps."
  },
  {
    question: "How do you protect our proprietary data and intellectual property?",
    answer: "All intellectual property produced under contract belongs 100% to our clients upon creation. We execute strict enterprise NDAs, use SOC-2 compliant secure infrastructure, and ensure AI models are never trained on your private telemetry."
  },
  {
    question: "Can XNITH integrate into our existing technology stack?",
    answer: "Yes. Our systems engineers specialize in modernizing legacy codebases and building seamless API bridges across AWS, GCP, Azure, Kubernetes, custom microservices, and enterprise databases."
  }
];

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative w-full bg-[#030303] py-24 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            <span className="h-[1px] w-8 bg-brand"></span>
            FREQUENTLY ASKED QUESTIONS
            <span className="h-[1px] w-8 bg-brand"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Everything you need to know.
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand/40 bg-white/[0.03]' : 'border-white/8 bg-[#08080c] hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-lg font-semibold tracking-tight transition-colors ${isOpen ? 'text-brand' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isOpen ? 'border-brand bg-brand text-black' : 'border-white/10 text-white/40'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
