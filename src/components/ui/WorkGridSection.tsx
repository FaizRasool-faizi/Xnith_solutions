"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, LayoutDashboard, Smartphone, Shield, Cpu, ExternalLink, X, CheckCircle2 } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  status: string;
  impactMetric: string;
  desc: string;
  fullOverview: string;
  techStack: string[];
  features: string[];
  type: 'dashboard' | 'chart' | 'mobile' | 'security' | 'ai';
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'XENITH Learn LMS',
    client: 'EduGlobal Enterprise',
    category: 'Enterprise & LMS',
    status: 'Active & Scaling',
    impactMetric: '150,000+ Active Learners',
    desc: 'An AI-powered learning management ecosystem with intelligent skill tracking, automated grading, and personalized course paths.',
    fullOverview: 'XENITH Learn was designed to modernize enterprise training across multi-regional corporate teams. By combining continuous skill assessments with automated agent tutors, the platform reduced course completion times by 40% while boosting knowledge retention metrics.',
    techStack: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Python FastAPI', 'PostgreSQL'],
    features: ['Adaptive AI Learning Paths', 'Real-time Analytics Dashboard', 'Bilingual Support (EN/AR)', 'Gamified Certifications'],
    type: 'dashboard'
  },
  {
    id: 2,
    title: 'X-Flow Intelligence',
    client: 'Apex Financial Data',
    category: 'AI & Intelligence',
    status: 'Live Production',
    impactMetric: '60% Faster Data Pipeline',
    desc: 'A real-time predictive analytics platform converting complex telemetry streams into actionable business intelligence.',
    fullOverview: 'Engineered for high-frequency telemetry processing, X-Flow Intelligence processes over 10M events per minute. The system automatically detects operational anomalies and recommends proactive interventions before bottlenecks occur.',
    techStack: ['React', 'Apache Kafka', 'TensorFlow', 'ClickHouse', 'AWS EKS'],
    features: ['Real-time Anomaly Detection', 'Predictive Market Forecasting', 'Custom WebSockets Stream', 'Exportable BI Reports'],
    type: 'chart'
  },
  {
    id: 3,
    title: 'OmniHealth Compass',
    client: 'Almana Health Network',
    category: 'Healthcare Tech',
    status: 'Active in 12 Hospitals',
    impactMetric: '99.9% Uptime Compliance',
    desc: 'A bilingual patient portal and telemedicine mobile application connecting patients to specialists and instant diagnostic reports.',
    fullOverview: 'OmniHealth Compass unifies electronic health records, video consultations, and instant prescription fulfillment into one secure mobile interface built under strict HIPAA compliance.',
    techStack: ['React Native', 'Node.js', 'GraphQL', 'HIPAA Secure Vault', 'Redis'],
    features: ['HD Video Telehealth', 'Bilingual EHR Access', 'Instant E-Prescriptions', 'Automated Appointment Reminders'],
    type: 'mobile'
  },
  {
    id: 4,
    title: 'UpTicker AI Coach',
    client: 'UpTicker Global',
    category: 'Mobile Apps',
    status: 'Featured on App Store',
    impactMetric: '4.9★ Rating (25k+ Reviews)',
    desc: 'A habit-building and daily productivity mobile app powered by an embedded conversational habit assistant.',
    fullOverview: 'UpTicker combines behavioral psychology with personalized AI coaching. The mobile application tracks routines, analyzes productivity spikes, and delivers actionable daily micro-coaching advice.',
    techStack: ['Flutter', 'Dart', 'OpenAI API', 'Firebase', 'Stripe'],
    features: ['AI Habit Assistant', 'Smart Focus Timers', 'Community Leaderboards', 'Biometric Sync'],
    type: 'mobile'
  },
  {
    id: 5,
    title: 'FinVault OS Engine',
    client: 'Orbix Fintech',
    category: 'FinTech & Web3',
    status: 'Processing $50M+/mo',
    impactMetric: '< 100ms Settlement Speed',
    desc: 'A next-gen digital banking core supporting instant cross-border settlements, multi-currency wallets, and automated fraud prevention.',
    fullOverview: 'FinVault OS replaces legacy core banking modules with a modern microservices architecture capable of handling high transaction throughput with zero downtime settlements.',
    techStack: ['Go (Golang)', 'Kubernetes', 'gRPC', 'CockroachDB', 'Docker'],
    features: ['Multi-currency Ledger', 'AI Fraud Guard', 'Instant Settlement Rails', 'Developer API Webhooks'],
    type: 'security'
  },
  {
    id: 6,
    title: 'LegalMind AI Assistant',
    client: 'Lexis Partner Systems',
    category: 'AI & Intelligence',
    status: 'Active Deployment',
    impactMetric: '85% Reduction in Review Time',
    desc: 'An AI contract analysis agent capable of reviewing 200-page legal documents and generating risk summaries in seconds.',
    fullOverview: 'LegalMind AI parses complex legal contracts against custom corporate policies. It flags non-compliant clauses, suggests redline revisions, and indexes precedents across law firm repositories.',
    techStack: ['Python PyTorch', 'LangChain', 'Next.js', 'Pinecone Vector DB', 'TailwindCSS'],
    features: ['Automated Redlining', 'Clause Conflict Analysis', 'RAG Document Search', 'Audit Trail Export'],
    type: 'ai'
  }
];

interface WorkGridSectionProps {
  activeCategory: string;
}

export default function WorkGridSection({ activeCategory }: WorkGridSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'ALL'
    ? allProjects
    : allProjects.filter((p) => {
        if (activeCategory === 'AI & INTELLIGENCE') return p.category === 'AI & Intelligence';
        if (activeCategory === 'ENTERPRISE & LMS') return p.category === 'Enterprise & LMS';
        if (activeCategory === 'HEALTHCARE TECH') return p.category === 'Healthcare Tech';
        if (activeCategory === 'FINTECH & WEB3') return p.category === 'FinTech & Web3';
        if (activeCategory === 'MOBILE APPS') return p.category === 'Mobile Apps';
        return true;
      });

  return (
    <section className="relative w-full bg-[#030303] py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-[#08080c] rounded-2xl overflow-hidden border border-white/10 hover:border-brand/40 transition-all duration-500 cursor-pointer shadow-xl"
              >
                {/* CSS UI Mockup Top Header */}
                <div className="w-full h-60 bg-[#050505] relative overflow-hidden flex items-end justify-center px-8 pt-8">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* Background Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-brand/20 blur-[60px] rounded-full group-hover:bg-brand/35 transition-colors duration-500"></div>

                  {/* UI Renderings */}
                  <div className="w-full h-full relative z-10 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out flex justify-center">
                    
                    {project.type === 'dashboard' && (
                      <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 flex overflow-hidden shadow-2xl">
                        <div className="w-1/4 h-full border-r border-white/5 bg-[#0a0a0a] p-3 flex flex-col gap-3">
                          <div className="w-6 h-6 rounded bg-brand/30 flex items-center justify-center"><LayoutDashboard className="w-3.5 h-3.5 text-brand" /></div>
                          <div className="w-full h-2 rounded bg-white/10"></div>
                          <div className="w-2/3 h-2 rounded bg-white/5"></div>
                        </div>
                        <div className="flex-1 p-4 flex flex-col gap-3">
                          <div className="w-28 h-3 rounded bg-white/15"></div>
                          <div className="grid grid-cols-2 gap-2">
                             <div className="h-14 rounded bg-brand/10 border border-brand/20"></div>
                             <div className="h-14 rounded bg-white/5"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.type === 'chart' && (
                      <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 p-5 flex flex-col shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                          <div className="w-7 h-7 rounded bg-brand/30 flex items-center justify-center"><Activity className="w-3.5 h-3.5 text-brand" /></div>
                          <div className="w-16 h-3 rounded bg-white/10"></div>
                        </div>
                        <div className="flex-1 relative border-b border-l border-white/10">
                          <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                            <path d="M0,35 C20,30 40,5 60,15 C80,25 90,5 100,8" fill="none" stroke="#F569FF" strokeWidth="2.5" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {project.type === 'mobile' && (
                      <div className="w-40 h-full rounded-t-3xl bg-[#111] border border-white/20 border-b-0 p-2 relative shadow-2xl">
                         <div className="w-full h-full rounded-t-2xl bg-[#0a0a0a] p-3 flex flex-col gap-3">
                           <div className="h-10 bg-brand/15 rounded-lg border border-brand/30 flex items-center gap-2 px-2">
                             <Smartphone className="w-3 h-3 text-brand" />
                             <div className="w-12 h-1.5 rounded bg-brand/40"></div>
                           </div>
                           <div className="w-full h-6 rounded bg-white/5"></div>
                         </div>
                      </div>
                    )}

                    {project.type === 'security' && (
                      <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 p-5 flex flex-col shadow-2xl justify-between">
                        <div className="flex justify-between items-center">
                          <div className="w-8 h-8 rounded bg-brand/30 flex items-center justify-center"><Shield className="w-4 h-4 text-brand" /></div>
                          <span className="text-[10px] font-mono text-brand font-bold">SECURED</span>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-3 rounded bg-brand/20"></div>
                          <div className="w-3/4 h-3 rounded bg-white/10"></div>
                        </div>
                      </div>
                    )}

                    {project.type === 'ai' && (
                      <div className="w-full h-full rounded-t-xl bg-[#111] border border-white/15 border-b-0 p-5 flex flex-col shadow-2xl justify-between">
                        <div className="flex justify-between items-center">
                          <div className="w-8 h-8 rounded bg-brand/30 flex items-center justify-center"><Cpu className="w-4 h-4 text-brand" /></div>
                          <span className="text-[10px] font-mono text-brand font-bold">AI AGENT</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                          {`> Analysis complete: 0 risks detected.`}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-white/40">
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-brand/90 font-medium mb-4">
                      {project.client} · <span className="text-white/60">{project.impactMetric}</span>
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Stack Pills & CTA */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-white/50 text-[11px] font-mono border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-xs font-bold text-brand group-hover:text-white transition-colors">
                      View Case Study <ExternalLink className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Study Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-[#09090e] border border-white/15 rounded-3xl p-8 md:p-12 relative shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-mono text-brand mb-6">
                  {selectedProject.client} — Impact: {selectedProject.impactMetric}
                </p>

                <div className="w-full h-[1px] bg-white/10 mb-8" />

                <h4 className="text-xs font-semibold tracking-widest text-brand uppercase mb-3">
                  PROJECT OVERVIEW
                </h4>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  {selectedProject.fullOverview}
                </p>

                <h4 className="text-xs font-semibold tracking-widest text-brand uppercase mb-4">
                  KEY FEATURES & CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedProject.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xs font-semibold tracking-widest text-brand uppercase mb-3">
                  ARCHITECTURE & TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-brand/10 border border-brand/20 text-brand text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
