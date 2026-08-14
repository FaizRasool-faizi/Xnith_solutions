"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Box, 
  Filter, 
  Heart, 
  ShoppingBag, 
  ShieldCheck, 
  BarChart3, 
  PackageCheck, 
  Truck, 
  Store, 
  CheckCircle2, 
  ArrowLeft,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Layers
} from 'lucide-react';

const buyerFeatures = [
  {
    icon: Box,
    title: "3D Interactive Hero Experience",
    desc: "Real-time 3D graphics rendered with Three.js and React Three Fiber, paired with fluid scroll animations powered by Framer Motion."
  },
  {
    icon: Filter,
    title: "Advanced Multi-Criteria Search & Filtering",
    desc: "Filter pets and products by category (Dogs, Cats, Birds, Fish, Rabbits, Goats, Feed), price range, age, gender, vaccination, training status, and city."
  },
  {
    icon: Heart,
    title: "Interactive Pet Showcase & Profiles",
    desc: "Detailed pet profiles featuring high-res galleries, health verification badges, age/breed history, and verified breeder details."
  },
  {
    icon: ShoppingBag,
    title: "Real-time Cart & Wishlist",
    desc: "Seamless shopping cart and persistent wishlist powered by Zustand real-time state management."
  },
  {
    icon: ShieldCheck,
    title: "Petstan Secure Delivery & Escrow",
    desc: "Multi-stage escrow protection (Held, Released, Refunded) ensuring safe and transparent transactions between buyers and breeders."
  }
];

const sellerFeatures = [
  {
    icon: BarChart3,
    title: "Sales & Revenue Analytics Workspace",
    desc: "Interactive financial charts powered by Recharts displaying monthly revenue, total view counts, conversion metrics, and top listings."
  },
  {
    icon: PackageCheck,
    title: "Pet Inventory Management (CRUD)",
    desc: "Full management portal to create, update, pause listings, track remaining stock, and upload digital health certificates."
  },
  {
    icon: Truck,
    title: "Order Processing Hub",
    desc: "Real-time order state workflow tracking shipments across Pending, Confirmed, Processing, Shipped, Delivered, and Cancelled statuses."
  },
  {
    icon: Store,
    title: "Store & KYC Verification Settings",
    desc: "Manage shop profiles, business hours, contact numbers, banking credentials, and breeder verification badges."
  }
];

const techStackList = [
  { category: "Web Frontend & 3D", stack: "Next.js 14 (App Router), React 18, Tailwind CSS, Framer Motion, Three.js, React Three Fiber", icon: Code2 },
  { category: "Analytics & Charts", stack: "Recharts Visualization Library", icon: Cpu },
  { category: "State Management", stack: "Zustand (Global Reactive Store)", icon: Layers },
  { category: "Database & Escrow", stack: "PostgreSQL, Prisma ORM, Health Certification Vault, Escrow Ledger", icon: Database }
];

export default function PetstanDetailSection() {
  return (
    <section className="relative w-full bg-[#020208] text-white py-16 md:py-24 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />

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
              3D Interactive Multi-Vendor Pet Marketplace
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono uppercase">
              ● Active / Deployed
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Petstan — Pakistan's Premier 3D Interactive Multi-Vendor Pet Marketplace
          </h1>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">CLIENT / TYPE</p>
              <p className="text-sm font-semibold text-white mt-1">E-Commerce & Ecosystem Case Study</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">NICHE</p>
              <p className="text-sm font-semibold text-brand mt-1">3D Pet Marketplace & Vendor Workspace</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PLATFORMS</p>
              <p className="text-sm font-semibold text-white mt-1">Next.js 14, Three.js & Seller Dashboard</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">SECURITY</p>
              <p className="text-sm font-semibold text-emerald-400 mt-1">Escrow Delivery & Health Vault</p>
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
            src="/petstan.jpeg" 
            alt="Petstan Showcase" 
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* 📝 Overview & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 md:p-12 rounded-3xl bg-[#08080d] border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            <span className="h-[1px] w-8 bg-brand"></span>
            📝 OVERVIEW & DESCRIPTION
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
            Modern, high-performance e-commerce platform specifically built for buying, selling, and adopting pets, pet food, and accessories across Pakistan.
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
            Built using Next.js 14 (App Router), React 18, TypeScript, and Three.js, Petstan offers a visual, interactive 3D hero experience paired with an advanced seller workspace.
          </p>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            It bridges the gap between buyers and verified pet breeders/sellers through smart filtering, health certification tracking, seller analytics, and secure escrow delivery options.
          </p>
        </motion.div>

        {/* ✨ Key Features: Buyer Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-8">
            <span className="h-[1px] w-8 bg-brand"></span>
            🛍️ BUYER ECOSYSTEM FEATURES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buyerFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-8 rounded-2xl bg-[#08080c] border border-white/10 hover:border-brand/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-black transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 📊 Key Features: Seller Dashboard Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-8">
            <span className="h-[1px] w-8 bg-emerald-400"></span>
            📊 SELLER DASHBOARD WORKSPACE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sellerFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-8 rounded-2xl bg-[#08080c] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
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
          className="p-10 rounded-3xl bg-gradient-to-r from-brand/10 via-[#0a0a10] to-emerald-600/10 border border-brand/30 text-center flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white max-w-2xl">
            Want to build a 3D multi-vendor marketplace like Petstan for your industry?
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
