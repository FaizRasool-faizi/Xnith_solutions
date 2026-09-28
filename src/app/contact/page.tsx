import type { Metadata } from 'next';
import ContactHero from '@/components/ui/ContactHero';
import ContactFormSection from '@/components/ui/ContactFormSection';
import ContactFAQSection from '@/components/ui/ContactFAQSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact XENITH Solutions | Start a Software or AI Project',
  description: 'Connect directly with the software engineers at XENITH Solutions to discuss your custom web application, SaaS product, or AI system requirements.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact XENITH Solutions | Start a Software or AI Project',
    description: 'Connect directly with the software engineers at XENITH Solutions to discuss your custom web application, SaaS product, or AI system requirements.',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact XENITH Solutions | Start a Software or AI Project',
    description: 'Connect directly with the software engineers at XENITH Solutions to discuss your custom web application, SaaS product, or AI system requirements.',
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
