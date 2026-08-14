import React from 'react';

const stats = [
  { value: '10', suffix: '+', label: 'YEARS OF\nINNOVATION' },
  { value: '200', suffix: '+', label: 'ORGANIZATIONS\nSERVED' },
  { value: '15', suffix: '+', label: 'INDUSTRIES\nTRANSFORMED' },
  { value: '5', suffix: '', label: 'DIGITAL PLATFORMS\nBUILT' },
  { value: '100', suffix: '+', label: 'PRODUCTS\nSHIPPED' },
];

export default function StatsSection() {
  return (
    <section className="relative w-full bg-[#050505] py-24 overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Desktop Layout - Horizontal Line */}
        <div className="relative hidden lg:block">
          {/* Continuous Line passing through the center of the numbers */}
          <div className="absolute top-[82px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
          
          <div className="grid grid-cols-5 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group relative pt-0 z-10">
                {/* Glowing Dot */}
                <div className="relative z-10 mb-[44px] flex items-center justify-center h-2 w-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_12px_rgba(245,105,255,1)] transition-transform group-hover:scale-150 duration-300" />
                </div>
                
                {/* Number (background black to overlay line cleanly if needed, or transparent to let line pass behind) */}
                <div className="text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-5 flex items-center justify-center h-[60px]">
                  <span className="bg-[#050505] px-2">{stat.value}</span>
                  {stat.suffix && <span className="text-brand font-medium bg-[#050505] pr-2 -ml-1 text-4xl lg:text-5xl">{stat.suffix}</span>}
                </div>
                
                {/* Label */}
                <div className="text-[11px] text-white/50 tracking-[0.15em] font-mono whitespace-pre-line uppercase leading-relaxed mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center group ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
              <div className="mb-6 flex items-center justify-center h-2 w-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(245,105,255,0.8)]" />
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 flex items-center justify-center">
                {stat.value}
                {stat.suffix && <span className="text-brand font-medium -ml-1 text-3xl md:text-4xl">{stat.suffix}</span>}
              </div>
              <div className="text-[10px] md:text-xs text-white/50 tracking-[0.15em] font-mono whitespace-pre-line uppercase leading-relaxed mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}