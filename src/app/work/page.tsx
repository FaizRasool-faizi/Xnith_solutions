import type { Metadata } from 'next';
import WorkPageContent from '@/components/ui/WorkPageContent';

export const metadata: Metadata = {
  title: 'Work & Case Studies | XENITH Solutions',
  description: 'Explore technical case studies and software applications engineered by XENITH Solutions, spanning applied AI, real-time computer vision, and modern web platforms.',
};

export default function WorkPage() {
  return <WorkPageContent />;
}
