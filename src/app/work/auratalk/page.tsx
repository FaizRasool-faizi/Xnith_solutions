import type { Metadata } from 'next';
import AuraTalkDetailSection from '@/components/ui/AuraTalkDetailSection';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AuraTalk AI | Real-Time AI Avatar R&D | XENITH Solutions',
  description: 'Technical case study of AuraTalk AI, an internal R&D prototype featuring real-time video avatar generation, CUDA-accelerated Wav2Lip neural lip-sync, and MediaPipe emotion tracking.',
  alternates: {
    canonical: `${siteConfig.url}/work/auratalk`,
  },
  openGraph: {
    title: 'AuraTalk AI | Real-Time AI Avatar R&D | XENITH Solutions',
    description: 'Technical case study of AuraTalk AI, an internal R&D prototype featuring real-time video avatar generation, CUDA-accelerated Wav2Lip neural lip-sync, and MediaPipe emotion tracking.',
    url: `${siteConfig.url}/work/auratalk`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraTalk AI | Real-Time AI Avatar R&D | XENITH Solutions',
    description: 'Technical case study of AuraTalk AI, an internal R&D prototype featuring real-time video avatar generation, CUDA-accelerated Wav2Lip neural lip-sync, and MediaPipe emotion tracking.',
  },
};

export default function AuraTalkPage() {
  return <AuraTalkDetailSection />;
}
