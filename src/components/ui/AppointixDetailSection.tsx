"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Bot, 
  Mic, 
  MapPin, 
  Scale, 
  MessageSquare, 
  LayoutDashboard, 
  Smartphone, 
  CheckCircle2, 
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  Database,
  Server,
  Code2
} from 'lucide-react';

const featuresList = [
  {
    icon: Bot,
    title: "Gemini AI Intent & Match Engine",
    desc: "Natural language parsing for instant service requests and scheduling. Real-time reasoning trace showing automated provider evaluation and score ranking."
  },
  {
    icon: Mic,
    title: "Multilingual & Voice Assistance (Urdu + English)",
    desc: "Voice-to-text input tailored for quick booking by non-technical or local language users across regional dialects."
  },
  {
    icon: MapPin,
    title: "Interactive Map & Distance Orchestration",
    desc: "Live GPS location picker mapping nearest available service providers in real time with estimated arrival times."
  },
  {
    icon: Scale,
    title: "Side-by-Side Provider AI Comparison",
    desc: "Instant comparison matrix displaying hourly rates, availability, ratings, and AI suitability scores."
  },
  {
    icon: MessageSquare,
    title: "Real-time Messaging & WhatsApp Dispatch",
    desc: "Live chat synchronization between client and expert, plus automated WhatsApp booking dispatches for instant confirmation."
  },
  {
    icon: LayoutDashboard,
    title: "Service Provider Portal & Dashboard",
    desc: "Multi-step onboarding and management portal for experts to handle bookings, view analytics, and update availability."
  },
  {
    icon: Smartphone,
    title: "Native Mobile Experience",
    desc: "Cross-platform Android app built with Expo and React Native for on-the-go appointment scheduling and notifications."
  }
];

const techStackList = [
  { category: "Web Frontend", stack: "Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, Shadcn UI", icon: Code2 },
  { category: "Mobile App", stack: "React Native, Expo, Android SDK", icon: Smartphone },
  { category: "Backend Server", stack: "Node.js, Express.js, Socket.io (WebSockets)", icon: Server },
  { category: "AI Integration", stack: "Google Gemini AI (@google/generative-ai), Groq SDK", icon: Cpu },
  { category: "Database & Auth", stack: "Firebase Authentication, Realtime Database, Firestore", icon: Database },
  { category: "State Management", stack: "Zustand", icon: Layers }
];

export default function AppointixDetailSection() {
  return (
    <section className="relative w-full bg-[#020208] text-white py-16 md:py-24 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-brand transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </Link>
        </motion.div>

        {/* 📌 Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-brand/15 border border-brand/30 text-brand text-xs font-semibold uppercase tracking-wider">
              AI-Powered Local Service & Marketplace
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono uppercase">
              ● Active / Deployed
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Appointix — Smart AI Appointment & Service Marketplace
          </h1>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">CLIENT / TYPE</p>
              <p className="text-sm font-semibold text-white mt-1">Production Platform</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">NICHE</p>
              <p className="text-sm font-semibold text-brand mt-1">AI Local Marketplace</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PLATFORMS</p>
              <p className="text-sm font-semibold text-white mt-1">Next.js Web & Mobile APK</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">MODULES</p>
              <p className="text-sm font-semibold text-white mt-1">8+ Core AI Modules</p>
            </div>
          </div>
        </motion.div>

        {/* Project Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/15 mb-16 shadow-2xl group"
        >
          <Image 
            src="/appointix.jpeg" 
            alt="Appointix Showcase" 
            fill 
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* 💡 Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 md:p-12 rounded-3xl bg-[#08080d] border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            <span className="h-[1px] w-8 bg-brand"></span>
            💡 PROJECT OVERVIEW
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
            Intelligent, AI-driven hyperlocal marketplace connecting households with verified local service experts.
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Appointix eliminates the hassle of traditional scheduling and manual service provider searches. With an integrated AI Matching Engine, users can simply describe their required service (via text or multilingual voice in Urdu/English). Appointix evaluates user requirements, proximity, urgency, and budget to instantly suggest and rank top-rated verified service providers and streamline bookings.
          </p>
        </motion.div>

        {/* 🔥 Key Features & Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-8">
            <span className="h-[1px] w-8 bg-brand"></span>
            🔥 KEY FEATURES & CAPABILITIES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-8 rounded-2xl bg-[#08080c] border border-white/10 hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-black transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 🛠️ Tech Stack & Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-8">
            <span className="h-[1px] w-8 bg-brand"></span>
            🛠️ TECH STACK & ARCHITECTURE
          </div>

          <div className="w-full border border-white/10 rounded-2xl overflow-hidden bg-[#08080c] divide-y divide-white/10">
            {techStackList.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.category} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-base font-bold text-white tracking-wide">{item.category}</span>
                  </div>
                  <div className="md:w-2/3">
                    <span className="text-sm font-mono text-brand/90 bg-brand/5 px-4 py-2 rounded-xl border border-brand/20 inline-block leading-relaxed">
                      {item.stack}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-gradient-to-r from-brand/10 via-[#0a0a10] to-violet-600/10 border border-brand/30 text-center flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white max-w-2xl">
            Want to build a platform like Appointix for your business?
          </h3>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-brand text-black font-bold text-sm tracking-wide transition-transform hover:scale-105 shadow-[0_0_25px_rgba(245,105,255,0.3)] inline-flex items-center gap-2"
          >
            Start a Project <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
