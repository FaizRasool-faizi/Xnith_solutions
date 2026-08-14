import type { Metadata } from 'next';
import AboutHero from '@/components/ui/AboutHero';
import OurStorySection from '@/components/ui/OurStorySection';
import TeamSection from '@/components/ui/TeamSection';
import PhilosophySection from '@/components/ui/PhilosophySection';
import ValuesSection from '@/components/ui/ValuesSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'About Us | XNITH Solutions',
  description: 'From software to a digital ecosystem. We are not simply building software — we are building the future of human potential.',
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

