import Link from 'next/link';
import type { Metadata } from 'next';
import ParticleNetwork from '@/components/ui/ParticleNetwork';
import ArchitecturalStandardsSection from '@/components/ui/ArchitecturalStandardsSection';
import AiTeamDeliverySection from '@/components/ui/AiTeamDeliverySection';
import ModelSection from '@/components/ui/ModelSection';
import EcosystemSection from '@/components/ui/EcosystemSection';
import ServicesSection from '@/components/ui/ServicesSection';
import ProjectsSection from '@/components/ui/ProjectsSection';
import DeliveryCommitmentsSection from '@/components/ui/DeliveryCommitmentsSection';
import HowWeStartSection from '@/components/ui/HowWeStartSection';
import CTASection from '@/components/ui/CTASection';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'XENITH Solutions - AI Software Development & Custom Digital Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/xenith-logo.png`,
        description: siteConfig.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lahore',
          addressCountry: 'PK',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.companyInfo.phone,
          contactType: 'customer support',
          email: siteConfig.companyInfo.email,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col">
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-4 md:px-12 lg:px-24 pt-20 pb-32">
        {/* Background Visual Elements */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
          <ParticleNetwork />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          {/* Glowing Violet Orb */}
          <div className="absolute top-1/4 right-1/4 h-[40vh] w-[40vh] rounded-full bg-brand/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-start gap-8 mx-auto">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold tracking-widest text-brand uppercase">
            <span className="hidden sm:block h-[2px] w-12 bg-brand" />
            AI-POWERED WEB &amp; SOFTWARE ENGINEERING STUDIO
          </div>
          
          {/* Main Headline */}
          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.08]">
            We engineer intelligent applications and digital platforms.
          </h1>
          
          {/* Supporting Copy & Actions */}
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mt-2">
            <div className="flex max-w-3xl flex-col gap-8">
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                XENITH Solutions designs and builds custom web applications, AI-powered software, SaaS platforms, and intelligent digital systems for founders and growing businesses. Whether you need to automate manual operations, launch a new digital product, or integrate AI directly into your business, we engineer reliable technology built around real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  href="/contact" 
                  className="group flex h-14 items-center justify-center gap-3 rounded-xl bg-brand px-8 font-semibold text-black transition-all hover:bg-brand/90 hover:scale-[1.02] shadow-[0_0_25px_rgba(245,105,255,0.3)] text-sm"
                >
                  Start a Project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link 
                  href="/work" 
                  className="group flex h-14 items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/80 px-8 font-semibold text-zinc-100 transition-all hover:border-brand/60 hover:bg-zinc-800 text-sm shadow-md"
                >
                  Explore Our Work
                  <span className="transition-transform group-hover:translate-x-1 text-brand">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL STANDARDS (Stats Replacement) */}
      <ArchitecturalStandardsSection />

      {/* 3. THE DELIVERY MODEL (AI Native Team: Human + Agent) */}
      <AiTeamDeliverySection />

      {/* 4. DUAL DELIVERY ENGINES (Studio & Product Lab) */}
      <ModelSection />

      {/* 4. PROPRIETARY INNOVATION LAB */}
      <EcosystemSection />

      {/* 5. CORE ENGINEERING SERVICES */}
      <ServicesSection />

      {/* 6. DELIVERED WORK */}
      <ProjectsSection />

      {/* 7. DELIVERY COMMITMENTS (How We Work) */}
      <DeliveryCommitmentsSection />

      {/* 8. HOW WE START (3-Step Engagement Process & Human Accountability) */}
      <HowWeStartSection />

      {/* 9. FINAL CTA */}
      <CTASection />
    </div>
  );
}
