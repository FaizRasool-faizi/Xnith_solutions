import type { Metadata } from 'next';
import AppointixDetailSection from '@/components/ui/AppointixDetailSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Appointix | AI Marketplace & Appointment Platform | XENITH Solutions',
  description: 'Technical case study of Appointix, an AI-powered local service marketplace prototype featuring natural language intent parsing, proximity routing, and cross-platform scheduling.',
  alternates: {
    canonical: `${siteConfig.url}/work/appointix`,
  },
  openGraph: {
    title: 'Appointix | AI Marketplace & Appointment Platform | XENITH Solutions',
    description: 'Technical case study of Appointix, an AI-powered local service marketplace prototype featuring natural language intent parsing, proximity routing, and cross-platform scheduling.',
    url: `${siteConfig.url}/work/appointix`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appointix | AI Marketplace & Appointment Platform | XENITH Solutions',
    description: 'Technical case study of Appointix, an AI-powered local service marketplace prototype featuring natural language intent parsing, proximity routing, and cross-platform scheduling.',
  },
};

export default function AppointixPage() {
  return <AppointixDetailSection />;
}
