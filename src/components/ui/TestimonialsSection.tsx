"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "We have spent the past year working with the XNITH team and can't say enough about their dedication in getting the job done correctly.",
    name: "Kamran Wussinu",
    title: "Group Head, EBS",
    avatar: "KW"
  },
  {
    id: 2,
    quote: "Had an amazing experience with the XNITH team, extremely professional and ahead of schedule. We'll be working together going forward.",
    name: "Bonele Mfeketo",
    title: "Managing Partner & Chief Developer",
    avatar: "BM"
  },
  {
    id: 3,
    quote: "Highly Recommended!!! Working with XNITH Solutions was such a fantastic experience. Expect top-notch service when working with this team.",
    name: "Shareefa Hamilton",
    title: "CEO, Woosah Wellness LLC",
    avatar: "SH"
  },
  {
    id: 4,
    quote: "The team at XNITH understood our vision from day one and delivered a product that exceeded every expectation. Truly world-class work.",
    name: "Daniel Osei",
    title: "CTO, NovaBridge Technologies",
    avatar: "DO"
  },
  {
    id: 5,
    quote: "XNITH transformed our legacy systems into a seamless, modern platform. Their engineers are brilliant and the communication was flawless.",
    name: "Priya Mehta",
    title: "VP Engineering, Orbix Fintech",
    avatar: "PM"
  },
  {
    id: 6,
    quote: "From discovery to launch in under 90 days. I didn't think it was possible until XNITH made it happen. An exceptional team through and through.",
    name: "Luca Ferrante",
    title: "Founder, PulseHealth",
    avatar: "LF"
  },
  {
    id: 7,
    quote: "XNITH's AI-driven approach to building our analytics engine cut our time-to-insight by 60%. The ROI was immediately visible.",
    name: "Amara Nwosu",
    title: "Head of Data, ClearPath Analytics",
    avatar: "AN"
  },
  {
    id: 8,
    quote: "What sets XNITH apart is their ability to think like a product owner, not just a developer. They care about outcomes, not just output.",
    name: "James Caldwell",
    title: "CEO, GridForge Infrastructure",
    avatar: "JC"
  }
];

const CARDS_PER_PAGE = 3;
const TOTAL = testimonials.length;
const PAGES = Math.ceil(TOTAL / CARDS_PER_PAGE);

const avatarColors = [
  'bg-brand/20 text-brand',
  'bg-violet-500/20 text-violet-300',
  'bg-cyan-500/20 text-cyan-300',
  'bg-amber-500/20 text-amber-300',
  'bg-emerald-500/20 text-emerald-300',
  'bg-rose-500/20 text-rose-300',
  'bg-sky-500/20 text-sky-300',
  'bg-fuchsia-500/20 text-fuchsia-300',
];

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(PAGES - 1, p + 1));

  const currentTestimonials = testimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-16"
        >
          <span className="h-[1px] w-8 bg-brand"></span>
          DON'T JUST TAKE OUR WORD FOR IT
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {currentTestimonials.map((t, i) => (
              <div
                key={t.id}
                className="flex flex-col bg-[#0a0a0a] border border-white/8 rounded-2xl p-8 hover:border-white/15 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 text-base leading-relaxed flex-1 mb-8">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${avatarColors[(t.id - 1) % avatarColors.length]}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
          {/* Prev Button */}
          <button
            onClick={prev}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Progress Bar + Counter */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand rounded-full"
                animate={{ width: `${((page + 1) / PAGES) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs font-mono text-white/30 tracking-widest">
              {page + 1} / {PAGES}
            </span>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={page === PAGES - 1}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
