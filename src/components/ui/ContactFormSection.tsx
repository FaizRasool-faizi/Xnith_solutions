"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const projectTypes = [
  'AI & Automation',
  'Enterprise LMS',
  'Healthcare Tech',
  'Custom Product',
  'Cloud Architecture',
  'Consulting & Audit'
];

const budgetRanges = [
  '<$25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+'
];

export default function ContactFormSection() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['AI & Automation']);
  const [selectedBudget, setSelectedBudget] = useState<string>('$50k - $100k');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const toggleProjectType = (type: string) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter(t => t !== type));
      }
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="relative w-full bg-[#030303] py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Channels & Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start a conversation.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Have a project in mind or want to explore how XENITH can build your digital ecosystem? Reach out directly or fill out the form.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-brand/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 uppercase mb-1">EMAIL US</p>
                    <a href="mailto:hello@xnith-solutions.com" className="text-white font-semibold hover:text-brand transition-colors text-base">
                      hello@xnith-solutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-brand/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 uppercase mb-1">CALL US</p>
                    <a href="tel:+15551234567" className="text-white font-semibold hover:text-brand transition-colors text-base">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-brand/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 uppercase mb-1">HEADQUARTERS</p>
                    <p className="text-white font-semibold text-base">
                      Innovation District, CA & Global Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Badge */}
            <div className="p-6 rounded-2xl bg-brand/5 border border-brand/20 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-brand animate-pulse" />
              <div>
                <p className="text-xs font-semibold text-brand tracking-widest uppercase">24-HOUR RESPONSE GUARANTEE</p>
                <p className="text-xs text-white/50 mt-0.5">We respond to all qualified inquiries within one business day.</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#08080c] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand/20 border border-brand flex items-center justify-center text-brand mb-6 shadow-[0_0_30px_rgba(245,105,255,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Message Received!</h3>
                  <p className="text-white/60 max-w-md mb-8 leading-relaxed">
                    Thank you for reaching out. A senior partner from the XENITH team will review your inquiry and connect with you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {/* Select Services */}
                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">
                      1. WHAT CAN WE HELP YOU BUILD?
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypes.map((type) => {
                        const active = selectedTypes.includes(type);
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => toggleProjectType(type)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                              active
                                ? 'bg-brand text-black shadow-[0_0_15px_rgba(245,105,255,0.3)]'
                                : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">
                      2. ESTIMATED BUDGET RANGE
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetRanges.map((range) => {
                        const active = selectedBudget === range;
                        return (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setSelectedBudget(range)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                              active
                                ? 'bg-brand text-black shadow-[0_0_15px_rgba(245,105,255,0.3)]'
                                : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      PROJECT DETAILS & OBJECTIVES *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your goals, current architecture, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl bg-brand text-black font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-all hover:bg-brand/90 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_25px_rgba(245,105,255,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        Submit Inquiry <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
