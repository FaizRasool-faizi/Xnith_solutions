import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="flex flex-col items-start gap-3 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white">
                XENITH<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-300 max-w-sm leading-relaxed font-normal">
              Modern web applications, AI-powered software, SaaS platforms, and intelligent digital systems built for real-world business needs.
            </p>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Lahore, Pakistan
            </p>
          </div>

          {/* Navigation Col */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-brand uppercase font-semibold">
              Navigation
            </span>
            <nav className="flex flex-col gap-2.5 text-sm text-zinc-300">
              {siteConfig.mainNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-brand transition-colors">
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions Col */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-brand uppercase font-semibold">
              Featured Systems
            </span>
            <div className="flex flex-col gap-2.5 text-sm text-zinc-300">
              <Link href="/work/appointix" className="hover:text-brand transition-colors">
                Appointix AI Marketplace
              </Link>
              <Link href="/work/auratalk" className="hover:text-brand transition-colors">
                AuraTalk Neural Avatar
              </Link>
              <Link href="/work/petstan" className="hover:text-brand transition-colors">
                Petstan 3D E-Commerce
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors text-brand font-semibold">
                Start a New Project →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex gap-6 font-mono text-[11px] text-zinc-400">
            <span>Engineering Discipline</span>
            <span>·</span>
            <span>Zero Agency Bloat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

