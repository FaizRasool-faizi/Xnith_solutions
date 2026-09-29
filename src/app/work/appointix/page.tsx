import type { Metadata } from 'next';
import AppointixDetailSection from '@/components/ui/AppointixDetailSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Appointix | AI Marketplace & Appointment Platform',
  description: 'Appointix is an AI-powered appointment and local-services marketplace prototype engineered by XENITH Solutions.',
  alternates: {
    canonical: `${siteConfig.url}/work/appointix`,
  },
  openGraph: {
    title: 'Appointix | AI Marketplace & Appointment Platform | XENITH Solutions',
    description: 'Appointix is an AI-powered appointment and local-services marketplace prototype engineered by XENITH Solutions.',
    url: `${siteConfig.url}/work/appointix`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/appointix.jpeg`,
        width: 1600,
        height: 699,
        alt: 'Appointix AI Marketplace Prototype',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appointix | AI Marketplace & Appointment Platform | XENITH Solutions',
    description: 'Appointix is an AI-powered appointment and local-services marketplace prototype engineered by XENITH Solutions.',
    images: [`${siteConfig.url}/appointix.jpeg`],
  },
};

export default function AppointixPage() {
  return <AppointixDetailSection />;
}
