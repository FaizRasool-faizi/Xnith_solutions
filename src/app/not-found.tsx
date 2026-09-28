import Link from 'next/link';
import { ArrowLeft, Home, Layers, Briefcase, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be located. Explore our software development services, project portfolio, or contact the team.',
};

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-8 py-24 overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-semibold uppercase tracking-widest mb-6">
          ERROR 404
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6">
          Page not found.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed font-normal">
          The page you are looking for does not exist, was moved, or is temporarily unavailable. Use the links below to navigate our platform.
        </p>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mb-10">
          <Link
            href="/"
            className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-brand/40 hover:bg-zinc-900/80 text-zinc-200 transition-all text-sm font-medium group"
          >
            <Home className="w-4 h-4 text-brand" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/work"
            className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-brand/40 hover:bg-zinc-900/80 text-zinc-200 transition-all text-sm font-medium group"
          >
            <Briefcase className="w-4 h-4 text-brand" />
            <span>View Our Work</span>
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-brand/40 hover:bg-zinc-900/80 text-zinc-200 transition-all text-sm font-medium group"
          >
            <Layers className="w-4 h-4 text-brand" />
            <span>Explore Services</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-brand/40 hover:bg-zinc-900/80 text-zinc-200 transition-all text-sm font-medium group"
          >
            <Mail className="w-4 h-4 text-brand" />
            <span>Get in Touch</span>
          </Link>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-brand transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to XENITH Solutions
        </Link>
      </div>
    </div>
  );
}
