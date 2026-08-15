import Link from 'next/link';
import ParticleNetwork from '@/components/ui/ParticleNetwork';
import StatsSection from '@/components/ui/StatsSection';
import PhilosophySection from '@/components/ui/PhilosophySection';
import ModelSection from '@/components/ui/ModelSection';
import EcosystemSection from '@/components/ui/EcosystemSection';
import HowWeWorkSection from '@/components/ui/HowWeWorkSection';
import InPracticeSection from '@/components/ui/InPracticeSection';
import ServicesSection from '@/components/ui/ServicesSection';
import ProjectsSection from '@/components/ui/ProjectsSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import SolutionCategoriesSection from '@/components/ui/SolutionCategoriesSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import OurStorySection from '@/components/ui/OurStorySection';
import CTASection from '@/components/ui/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-4 md:px-12 lg:px-24 pt-20 pb-32">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
           <ParticleNetwork />
           {/* Subtle Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
           {/* Glowing Orb */}
           <div className="absolute top-1/4 right-1/4 h-[40vh] w-[40vh] rounded-full bg-brand/15 blur-[120px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
        
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-start gap-8 mx-auto">
          
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold tracking-widest text-brand uppercase">
            <span className="hidden sm:block h-[2px] w-12 bg-brand"></span>
            DIGITAL INNOVATION · CUSTOM SOFTWARE · CLOUD
          </div>
          
          <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Engineering the <span className="font-light text-brand/90" style={{WebkitTextStroke: '1px #F569FF', color: 'transparent'}}>future</span><br />
            of digital solutions.
          </h1>
          
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mt-4">
            <div className="flex max-w-2xl flex-col gap-8">
              <p className="text-lg text-white/60 sm:text-xl leading-relaxed">
                XENITH is a premium digital product agency. We help organizations discover where technology creates value, then design, architect, and scale it. We build comprehensive ecosystems of digital platforms.
              </p>
              
              <div className="flex items-center gap-4 font-mono text-sm tracking-widest text-brand uppercase">
                <span>→</span>
                <span>WE ARCHITECT IT, BUILD IT, AND SCALE IT.</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-6 mt-4">
                <Link 
                  href="/contact" 
                  className="group flex h-14 items-center justify-center gap-3 rounded bg-brand px-8 font-medium text-black transition-all hover:bg-brand/90"
                >
                  Start a Project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link 
                  href="/services" 
                  className="group flex h-14 items-center justify-center gap-3 rounded border border-white/20 bg-transparent px-8 font-medium text-white transition-all hover:border-white/50 hover:bg-white/5"
                >
                  Explore Our Ecosystem
                </Link>
              </div>
            </div>
            
            {/* Right side decorative element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/20">
                <div className="h-2 w-2 rounded-full bg-[#ffffff]"></div>
                {/* Orbiting dashed line effect */}
                <div className="absolute inset-[-15px] animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
      
      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Model Section */}
      <ModelSection />
      
      {/* Ecosystem Section */}
      <EcosystemSection />
      
      {/* How We Work Section */}
      <HowWeWorkSection />
      
      {/* In Practice Section */}
      <InPracticeSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Solution Categories Section */}
      <SolutionCategoriesSection />

      {/* Three Ways Section */}
      <ThreeWaysSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

