"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile nav when changing route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <span className="text-2xl font-bold tracking-tighter text-white">
            XNITH<span className="text-brand">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {siteConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-brand font-semibold' : 'text-white/70 hover:text-brand'
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:text-brand hover:border-brand/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 top-20 z-40 bg-[#020208]/95 backdrop-blur-xl md:hidden flex flex-col justify-between px-6 pt-8 pb-24 border-t border-white/10 overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-brand uppercase">
                NAVIGATION MENU
              </span>
              
              <div className="flex flex-col gap-4">
                {siteConfig.mainNav.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-bold tracking-tight flex items-center justify-between py-2 border-b border-white/5 transition-colors ${
                          isActive ? 'text-brand' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? 'text-brand translate-x-1' : 'text-white/20'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col gap-6 relative z-10 pt-8"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full h-14 rounded-xl bg-brand text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,105,255,0.3)]"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex justify-between items-center text-xs font-mono text-white/40">
                <span>© {new Date().getFullYear()} XNITH Solutions</span>
                <span className="text-brand">Digital Excellence</span>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
