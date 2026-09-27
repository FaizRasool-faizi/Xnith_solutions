import type { Metadata } from 'next';
import AboutHero from '@/components/ui/AboutHero';
import OurStorySection from '@/components/ui/OurStorySection';
import TeamSection from '@/components/ui/TeamSection';
import PhilosophySection from '@/components/ui/PhilosophySection';
import ValuesSection from '@/components/ui/ValuesSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'About Us | XENITH Solutions',
  description: 'XENITH Solutions is a software and AI engineering studio founded by Faiz Rasool and Sawera Saghir, building custom web applications, SaaS platforms, and intelligent digital systems.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurStorySection />
      <TeamSection />
      <PhilosophySection />
      <ValuesSection />
      <ThreeWaysSection />
      <CTASection />
    </div>
  );
}

