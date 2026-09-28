import type { Metadata } from 'next';
import AboutHero from '@/components/ui/AboutHero';
import OurStorySection from '@/components/ui/OurStorySection';
import TeamSection from '@/components/ui/TeamSection';
import PhilosophySection from '@/components/ui/PhilosophySection';
import ValuesSection from '@/components/ui/ValuesSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import CTASection from '@/components/ui/CTASection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About XENITH Solutions | AI & Software Engineering Studio',
  description: 'Learn about XENITH Solutions, an independent software and AI engineering studio founded by Faiz Rasool and Sawera Saghir, building modern digital products and platforms.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: 'About XENITH Solutions | AI & Software Engineering Studio',
    description: 'Learn about XENITH Solutions, an independent software and AI engineering studio founded by Faiz Rasool and Sawera Saghir, building modern digital products and platforms.',
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About XENITH Solutions | AI & Software Engineering Studio',
    description: 'Learn about XENITH Solutions, an independent software and AI engineering studio founded by Faiz Rasool and Sawera Saghir, building modern digital products and platforms.',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurStorySection />
      <TeamSection />
      <PhilosophySection />
      <ValuesSection />
      <ThreeWaysSection />
      <CTASection />
    </div>
  );
}

