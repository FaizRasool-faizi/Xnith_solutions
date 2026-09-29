import type { Metadata } from 'next';
import AuraTalkDetailSection from '@/components/ui/AuraTalkDetailSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AuraTalk AI | Real-Time AI Avatar R&D',
  description: 'AuraTalk AI is an internal R&D prototype exploring real-time conversational AI avatars, voice interaction, and video synthesis.',
  alternates: {
    canonical: `${siteConfig.url}/work/auratalk`,
  },
  openGraph: {
    title: 'AuraTalk AI | Real-Time AI Avatar R&D | XENITH Solutions',
    description: 'AuraTalk AI is an internal R&D prototype exploring real-time conversational AI avatars, voice interaction, and video synthesis.',
    url: `${siteConfig.url}/work/auratalk`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/AIAvatar.jpg`,
        width: 1600,
        height: 727,
        alt: 'AuraTalk AI Real-Time Avatar R&D Prototype',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraTalk AI | Real-Time AI Avatar R&D | XENITH Solutions',
    description: 'AuraTalk AI is an internal R&D prototype exploring real-time conversational AI avatars, voice interaction, and video synthesis.',
    images: [`${siteConfig.url}/AIAvatar.jpg`],
  },
};

export default function AuraTalkPage() {
  return <AuraTalkDetailSection />;
}
