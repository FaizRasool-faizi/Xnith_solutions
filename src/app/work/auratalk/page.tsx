import type { Metadata } from 'next';
import AuraTalkDetailSection from '@/components/ui/AuraTalkDetailSection';

export const metadata: Metadata = {
  title: "AuraTalk AI Case Study | XENITH Solutions",
  description: "CUDA-Accelerated Real-Time AI Avatar & Video Call Platform featuring Wav2Lip neural lip-sync, Google MediaPipe emotion tracking, and Local Llama 3 LLM.",
};

export default function AuraTalkPage() {
  return <AuraTalkDetailSection />;
}
