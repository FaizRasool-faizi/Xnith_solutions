import type { Metadata } from 'next';
import AppointixDetailSection from '@/components/ui/AppointixDetailSection';

export const metadata: Metadata = {
  title: 'Appointix Case Study | XNITH Solutions',
  description: 'Smart AI Appointment & Service Marketplace built with Gemini AI, Next.js, and Expo React Native.',
};

export default function AppointixPortfolioPage() {
  return <AppointixDetailSection />;
}
