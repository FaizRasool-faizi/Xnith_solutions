import type { Metadata } from 'next';
import ServicesHero from '@/components/ui/ServicesHero';
import ServicesGridSection from '@/components/ui/ServicesGridSection';
import HowWeWorkProcessSection from '@/components/ui/HowWeWorkProcessSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import CTASection from '@/components/ui/CTASection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI & Custom Software Development Services | XENITH Solutions',
  description: 'Engineering services spanning full-stack web and mobile development, AI & LLM application engineering, intelligent workflow automation, computer vision, and 3D web platforms.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: 'AI & Custom Software Development Services | XENITH Solutions',
    description: 'Engineering services spanning full-stack web and mobile development, AI & LLM application engineering, intelligent workflow automation, computer vision, and 3D web platforms.',
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Custom Software Development Services | XENITH Solutions',
    description: 'Engineering services spanning full-stack web and mobile development, AI & LLM application engineering, intelligent workflow automation, computer vision, and 3D web platforms.',
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesGridSection />
      <HowWeWorkProcessSection />
      <ThreeWaysSection />
      <CTASection />
    </div>
  );
}
