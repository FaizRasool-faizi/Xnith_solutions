import type { Metadata } from 'next';
import WorkPageContent from '@/components/ui/WorkPageContent';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI & Software Development Portfolio | XENITH Solutions',
  description: 'Explore real AI software, custom web applications, 3D platforms, and digital product prototypes engineered by XENITH Solutions.',
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: 'AI & Software Development Portfolio | XENITH Solutions',
    description: 'Explore real AI software, custom web applications, 3D platforms, and digital product prototypes engineered by XENITH Solutions.',
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Software Development Portfolio | XENITH Solutions',
    description: 'Explore real AI software, custom web applications, 3D platforms, and digital product prototypes engineered by XENITH Solutions.',
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
