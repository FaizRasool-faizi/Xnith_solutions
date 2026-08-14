import type { Metadata } from 'next';
import PetstanDetailSection from '@/components/ui/PetstanDetailSection';

export const metadata: Metadata = {
  title: "Petstan Case Study | XNITH Solutions",
  description: "3D Interactive Multi-Vendor Pet Marketplace built with Next.js 14, Three.js, React 18, and Zustand.",
};

export default function PetstanPage() {
  return <PetstanDetailSection />;
}
