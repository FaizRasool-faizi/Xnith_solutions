"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Zap, 
  Eye, 
  Smile, 
  Brain, 
  Users, 
  Mic, 
  Sparkles, 
  ArrowLeft,
  ExternalLink,
  Cpu,
  Bot,
  Server,
  Code2
} from 'lucide-react';

const keyModules = [
  {
    icon: Zap,
    badge: "Module 01",
    title: "CUDA-Accelerated Neural Lip-Sync Engine",
    desc: "Integrates PyTorch and custom CUDA-optimized Wav2Lip inference pipeline. Generates pixel-perfect mouth movement aligned frame-by-frame with synthesized audio at real-time speeds."
  },
  {
    icon: Eye,
    badge: "Module 02",
    title: "Procedural Micro-Animation & Lifetime Engine",
    desc: "Prevents static/frozen image artifacts through dynamic facial micro-sway, organic breathing, and natural sub-second eyelid blinks. Dynamic landmark-aware mesh alignment guarantees zero texture bleed."
  },
  {
    icon: Smile,
    badge: "Module 03",
    title: "Real-Time Computer Vision & User Emotion Tracking",
    desc: "Powered by Google MediaPipe Tasks Face Landmarker running via camera feed. Detects live user sentiment (Happy, Empathetic, Neutral, Surprised, Sad) and adapts avatar tone & visual brightness."
  },
  {
    icon: Brain,
    badge: "Module 04",
    title: "Emotion-Contextual LLM Memory Engine",
    desc: "Custom Local Llama AI integration with multi-turn conversation memory. Adjusts prompt personality dynamically based on detected user mood for empathetic, human-like responses."
  },
  {
    icon: Users,
    badge: "Module 05",
    title: "Multi-Persona Avatar System",
    desc: "5 pre-calibrated high-definition female AI avatars tuned for distinct conversational roles: Sophia, Ava, Mia, Emma, and Luna."
  },
  {
    icon: Mic,
    badge: "Module 06",
    title: "Full-Duplex WebAudio Voice Activity Detection (VAD)",
    desc: "Automatic voice boundary detection with intelligent silence thresholding for seamless hands-free speech input with integrated text fallback mode."
  },
  {
    icon: Sparkles,
    badge: "Module 07",
    title: "Ultra-Modern Glassmorphic Dark Call UI",
    desc: "Premium Web App interface featuring real-time state feedback rings, animated emotion badges, live transcript drawer, and dual video PIP views."
  }
];

const avatarsList = [
  { name: "Sophia", role: "Friendly & Empathetic Companion", color: "from-pink-500/20 to-purple-500/20", border: "border-pink-500/30", text: "text-pink-400" },
  { name: "Ava", role: "Professional & Intelligent Advisor", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30", text: "text-blue-400" },
  { name: "Mia", role: "Energetic & Cheerful AI", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30", text: "text-amber-400" },
  { name: "Emma", role: "Calm & Supportive Guide", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30", text: "text-emerald-400" },
  { name: "Luna", role: "Creative & Witty Conversationalist", color: "from-purple-500/20 to-indigo-500/20", border: "border-purple-500/30", text: "text-purple-400" }
];

const techStackList = [
  { category: "Neural & Computer Vision", stack: "PyTorch, CUDA, Wav2Lip, OpenCV, Google MediaPipe Tasks", icon: Cpu },
  { category: "AI / LLM & Speech", stack: "Local Llama 3 (GGUF Engine), Edge-TTS Synthesis", icon: Bot },
  { category: "Backend & Streaming Server", stack: "Python 3.11, FastAPI, WebSockets, AsyncIO, Uvicorn", icon: Server },
  { category: "Frontend & UI Experience", stack: "Modern HTML5, Custom Vanilla CSS3 (Glassmorphism), ES6+ JavaScript", icon: Code2 }
];

export default function AuraTalkDetailSection() {
  return (
    <section className="relative w-full bg-[#020208] text-white py-16 md:py-24 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

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
              CUDA-Accelerated Real-Time AI Avatar & Video Call Platform
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono uppercase">
              ● Active / Beta Stage
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            AuraTalk AI — Emotion-Aware Real-Time AI Avatar Platform
          </h1>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">MODULES & AVATARS</p>
              <p className="text-sm font-semibold text-white mt-1">12+ Core Modules · 5 Personas</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">NEURAL PIPELINE</p>
              <p className="text-sm font-semibold text-brand mt-1">CUDA Wav2Lip Lip-Sync</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">VISION & AI</p>
              <p className="text-sm font-semibold text-white mt-1">MediaPipe Vision + Local Llama 3</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">STREAMING & UI</p>
              <p className="text-sm font-semibold text-emerald-400 mt-1">FastAPI WebSockets & Glassmorphism</p>
            </div>
          </div>
        </motion.div>

        {/* Project Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/15 mb-16 shadow-2xl group bg-[#050508]"
        >
          <img 
            src="/AIAvatar.jpg" 
            alt="AuraTalk AI Showcase" 
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* 📝 Overview & Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 md:p-12 rounded-3xl bg-[#08080d] border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            <span className="h-[1px] w-8 bg-brand"></span>
            📝 EXECUTIVE SUMMARY
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
            Enterprise-grade, real-time interactive video assistant platform that replicates a human video call experience.
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
            AuraTalk AI blends cutting-edge computer vision, deep neural lip-synchronization, and local Large Language Models (LLM) to deliver empathetic, expressive, and context-aware conversations.
          </p>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Powered by CUDA-accelerated Wav2Lip neural lip-sync, local LLM intelligence, Edge-TTS audio synthesis, and MediaPipe computer vision for real-time user emotion analysis.
          </p>
        </motion.div>

        {/* 🔑 Key Modules & Engineering Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-8">
            <span className="h-[1px] w-8 bg-brand"></span>
            🔑 KEY MODULES & ENGINEERING FEATURES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyModules.map((item, idx) => {
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
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                        {item.badge}
                      </span>
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

        {/* 🎭 Multi-Persona Avatar System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-purple-400 uppercase mb-8">
            <span className="h-[1px] w-8 bg-purple-400"></span>
            🎭 MULTI-PERSONA AVATAR SYSTEM
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {avatarsList.map((avatar, idx) => (
              <motion.div
                key={avatar.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-6 rounded-2xl bg-gradient-to-b ${avatar.color} border ${avatar.border} flex flex-col items-center text-center justify-center`}
              >
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-2xl font-bold text-white shadow-inner">
                  {avatar.name[0]}
                </div>
                <h4 className={`text-lg font-bold ${avatar.text} mb-1`}>
                  {avatar.name}
                </h4>
                <p className="text-xs text-white/70 font-medium">
                  {avatar.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🛠️ Technical Stack & Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-8">
            <span className="h-[1px] w-8 bg-brand"></span>
            🛠️ TECHNICAL STACK & ARCHITECTURE
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
          className="p-10 rounded-3xl bg-gradient-to-r from-brand/10 via-[#0a0a10] to-purple-600/10 border border-brand/30 text-center flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white max-w-2xl">
            Want to integrate real-time neural AI avatars into your video platform?
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
