import type { Metadata } from 'next';
import WorkPageContent from '@/components/ui/WorkPageContent';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI & Software Development Portfolio',
  description: 'Explore AI software, SaaS platforms, web applications, and experimental digital products engineered by XENITH Solutions.',
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: 'AI & Software Development Portfolio | XENITH Solutions',
    description: 'Explore AI software, SaaS platforms, web applications, and experimental digital products engineered by XENITH Solutions.',
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'XENITH Solutions Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Software Development Portfolio | XENITH Solutions',
    description: 'Explore AI software, SaaS platforms, web applications, and experimental digital products engineered by XENITH Solutions.',
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
