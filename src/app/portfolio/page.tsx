import type { Metadata } from 'next';
import WorkPageContent from '@/components/ui/WorkPageContent';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | XENITH Solutions',
  description: 'Explore our portfolio of enterprise platforms, AI ecosystems, web applications, and mobile products shipped for forward-thinking organizations.',
};

export default function PortfolioPage() {
  return <WorkPageContent />;
}
