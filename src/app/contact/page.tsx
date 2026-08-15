import type { Metadata } from 'next';
import ContactHero from '@/components/ui/ContactHero';
import ContactFormSection from '@/components/ui/ContactFormSection';
import ContactFAQSection from '@/components/ui/ContactFAQSection';
import ThreeWaysSection from '@/components/ui/ThreeWaysSection';

export const metadata: Metadata = {
  title: 'Contact Us | XENITH Solutions',
  description: 'Start a project or inquire about enterprise solutions with XENITH. Guaranteed response within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactFormSection />
      <ContactFAQSection />
      <ThreeWaysSection />
    </div>
  );
}
