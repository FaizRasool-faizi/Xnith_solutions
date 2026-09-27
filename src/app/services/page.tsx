import type { Metadata } from 'next';
import ServicesHero from '@/components/ui/ServicesHero';
import ServicesGridSection from '@/components/ui/ServicesGridSection';
import HowWeWorkProcessSection from '@/components/ui/HowWeWorkProcessSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Services | XENITH Solutions',
  description: 'Custom software and AI engineering services. We partner with founders and businesses to design, engineer, and deploy custom web applications, SaaS platforms, and intelligent automation.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesGridSection />
      <HowWeWorkProcessSection />
      <ThreeWaysSection />
      <CTASection />
    </div>
  );
}
