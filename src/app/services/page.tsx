import type { Metadata } from 'next';
import ServicesHero from '@/components/ui/ServicesHero';
import ServicesGridSection from '@/components/ui/ServicesGridSection';
import HowWeWorkProcessSection from '@/components/ui/HowWeWorkProcessSection';
import SolutionCategoriesSection from '@/components/ui/SolutionCategoriesSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Services | XENITH Solutions',
  description: 'Services that turn digital ambition into systems. Beyond our platforms, we partner with organizations to design, build, and operate digital solutions.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesGridSection />
      <HowWeWorkProcessSection />
      <SolutionCategoriesSection />
      <ThreeWaysSection />
      <CTASection />
    </div>
  );
}
