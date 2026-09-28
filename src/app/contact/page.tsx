import type { Metadata } from 'next';
import ContactHero from '@/components/ui/ContactHero';
import ContactFormSection from '@/components/ui/ContactFormSection';
import ContactFAQSection from '@/components/ui/ContactFAQSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact XENITH Solutions | Start a Software or AI Project',
  },
  description: 'Start a software or AI project with XENITH Solutions. Share your requirements, project type, timeline, and budget for a direct engineering discussion.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact XENITH Solutions | Start a Software or AI Project',
    description: 'Start a software or AI project with XENITH Solutions. Share your requirements, project type, timeline, and budget for a direct engineering discussion.',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Contact XENITH Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact XENITH Solutions | Start a Software or AI Project',
    description: 'Start a software or AI project with XENITH Solutions. Share your requirements, project type, timeline, and budget for a direct engineering discussion.',
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactFormSection />
      <ContactFAQSection />
      <ThreeWaysSection />
    </div>
  );
}
