import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white">
            XNITH<span className="text-brand">.</span>
          </span>
          <p className="text-sm text-white/50 max-w-xs text-center md:text-left">
            {siteConfig.description}
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
          {siteConfig.mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand transition-colors">
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container mx-auto mt-12 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
