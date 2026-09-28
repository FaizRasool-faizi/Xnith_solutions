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
  title: {
    absolute: 'About XENITH Solutions | AI & Software Engineering Studio',
  },
  description: 'Learn about XENITH Solutions, a founder-led AI and software engineering studio building custom digital products and intelligent applications.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: 'About XENITH Solutions | AI & Software Engineering Studio',
    description: 'Learn about XENITH Solutions, a founder-led AI and software engineering studio building custom digital products and intelligent applications.',
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'About XENITH Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About XENITH Solutions | AI & Software Engineering Studio',
    description: 'Learn about XENITH Solutions, a founder-led AI and software engineering studio building custom digital products and intelligent applications.',
    images: [`${siteConfig.url}/og-image.png`],
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

