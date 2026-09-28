import type { Metadata } from 'next';
import ServicesHero from '@/components/ui/ServicesHero';
import ServicesGridSection from '@/components/ui/ServicesGridSection';
import HowWeWorkProcessSection from '@/components/ui/HowWeWorkProcessSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import CTASection from '@/components/ui/CTASection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI & Custom Software Development Services',
  description: 'Custom AI software development, web application development, SaaS engineering, LLM integration, AI automation, computer vision, and 3D web development.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: 'AI & Custom Software Development Services | XENITH Solutions',
    description: 'Custom AI software development, web application development, SaaS engineering, LLM integration, AI automation, computer vision, and 3D web development.',
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'XENITH Solutions Engineering Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Custom Software Development Services | XENITH Solutions',
    description: 'Custom AI software development, web application development, SaaS engineering, LLM integration, AI automation, computer vision, and 3D web development.',
    images: [`${siteConfig.url}/og-image.png`],
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
