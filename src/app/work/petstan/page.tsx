import type { Metadata } from 'next';
import PetstanDetailSection from '@/components/ui/PetstanDetailSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Petstan | 3D Multi-Vendor Pet Marketplace',
  description: 'Petstan is a 3D interactive multi-vendor pet marketplace prototype engineered by XENITH Solutions.',
  alternates: {
    canonical: `${siteConfig.url}/work/petstan`,
  },
  openGraph: {
    title: 'Petstan | 3D Multi-Vendor Pet Marketplace | XENITH Solutions',
    description: 'Petstan is a 3D interactive multi-vendor pet marketplace prototype engineered by XENITH Solutions.',
    url: `${siteConfig.url}/work/petstan`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/petstan.jpeg`,
        width: 1600,
        height: 708,
        alt: 'Petstan 3D Multi-Vendor Pet Marketplace Prototype',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petstan | 3D Multi-Vendor Pet Marketplace | XENITH Solutions',
    description: 'Petstan is a 3D interactive multi-vendor pet marketplace prototype engineered by XENITH Solutions.',
    images: [`${siteConfig.url}/petstan.jpeg`],
  },
};

export default function PetstanPage() {
  return <PetstanDetailSection />;
}
