import type { Metadata } from 'next';
import PetstanDetailSection from '@/components/ui/PetstanDetailSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Petstan | 3D Multi-Vendor Pet Marketplace | XENITH Solutions',
  description: 'Technical case study of Petstan, a 3D interactive multi-vendor pet marketplace prototype built with Next.js 14, Three.js WebGL rendering, and merchant analytics.',
  alternates: {
    canonical: `${siteConfig.url}/work/petstan`,
  },
  openGraph: {
    title: 'Petstan | 3D Multi-Vendor Pet Marketplace | XENITH Solutions',
    description: 'Technical case study of Petstan, a 3D interactive multi-vendor pet marketplace prototype built with Next.js 14, Three.js WebGL rendering, and merchant analytics.',
    url: `${siteConfig.url}/work/petstan`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petstan | 3D Multi-Vendor Pet Marketplace | XENITH Solutions',
    description: 'Technical case study of Petstan, a 3D interactive multi-vendor pet marketplace prototype built with Next.js 14, Three.js WebGL rendering, and merchant analytics.',
  },
};

export default function PetstanPage() {
  return <PetstanDetailSection />;
}
