import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, Lock, FileText, UserCheck, RefreshCw, Server, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the XENITH Solutions privacy policy to understand how information submitted through the website is collected and used.',
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | XENITH Solutions',
    description: 'Read the XENITH Solutions privacy policy to understand how information submitted through the website is collected and used.',
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'XENITH Solutions Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | XENITH Solutions',
    description: 'Read the XENITH Solutions privacy policy to understand how information submitted through the website is collected and used.',
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPage() {
  const lastUpdated = 'September 2026';

  return (
    <div className="relative min-h-screen bg-[#020208] text-zinc-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-[500px] bg-gradient-to-l from-brand/15 via-purple-950/10 to-transparent" />
        <div className="absolute top-40 right-[-10%] w-[600px] h-[500px] bg-brand/10 blur-[180px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-36 pb-24 relative z-10 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/40 uppercase mb-8">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-white/70">LEGAL</span>
          <span>/</span>
          <span className="text-brand">PRIVACY</span>
        </div>

        {/* Header Badge */}
        <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
          <span className="h-[1px] w-8 bg-brand" />
          <span>LEGAL &amp; TRANSPARENCY</span>
        </div>

        {/* Primary H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Privacy Policy
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
          This Privacy Policy explains how XENITH Solutions collects, uses, and safeguards information submitted by visitors through our website and project inquiry forms.
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pb-8 border-b border-white/10 mb-12">
          <span>Last Updated: {lastUpdated}</span>
          <span>•</span>
          <span>Scope: xenith-solutions.vercel.app</span>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-12 leading-relaxed text-sm sm:text-base font-normal">
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                1. Information We Collect
              </h2>
            </div>
            <p>
              We collect information that you voluntarily provide to us when submitting an inquiry or contacting our engineering team. This typically includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li><strong className="text-white">Contact Information:</strong> Your full name, work email address, and optionally your telephone number.</li>
              <li><strong className="text-white">Company Information:</strong> Organization name, website, and industry context.</li>
              <li><strong className="text-white">Project Scope Details:</strong> Selected service areas, estimated budget ranges, timeline expectations, and technical descriptions you provide in message fields.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                2. How We Use Information
              </h2>
            </div>
            <p>
              Information submitted to XENITH Solutions is used exclusively for legitimate business communication and technical project scoping, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Reviewing your project goals, architectural requirements, and technical feasibility.</li>
              <li>Responding directly to your inquiries and scheduling engineering consultation discussions.</li>
              <li>Preparing accurate proposals, engineering roadmaps, and scope estimates.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                3. Contact Form Data
              </h2>
            </div>
            <p>
              When you submit a message via our contact form, the details are transmitted directly to our engineering leadership for direct review. We do not use your inquiry submission to subscribe you to automated marketing newsletters or bulk email campaigns without your explicit opt-in.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                4. Communication
              </h2>
            </div>
            <p>
              We communicate with prospective partners and clients through direct email, telephone, or scheduled video discussions regarding active project requirements. You may request to discontinue communications at any time by replying directly to any message.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                5. Data Sharing &amp; Disclosure
              </h2>
            </div>
            <p>
              We do not sell, rent, monetize, or trade your personal or project information to third parties. Information is only shared under the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li><strong className="text-white">Infrastructure Providers:</strong> Trusted cloud hosting and communication infrastructure strictly necessary to operate our website and email channels.</li>
              <li><strong className="text-white">Legal Obligations:</strong> When required by applicable laws, court orders, or governmental regulations.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                6. Data Security
              </h2>
            </div>
            <p>
              We take reasonable administrative and technical precautions to safeguard submitted information against unauthorized access, loss, alteration, or disclosure. Communications with our website use standard Transport Layer Security (HTTPS/TLS) encryption in transit.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                7. Data Retention
              </h2>
            </div>
            <p>
              We retain contact information and project scoping notes only as long as necessary to facilitate ongoing technical correspondence, evaluate engineering collaborations, or satisfy legitimate business records.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <Server className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                8. Third-Party Services &amp; Hosting
              </h2>
            </div>
            <p>
              Our website is hosted on modern cloud deployment platforms (such as Vercel). These providers may log standard HTTP request metadata (such as IP addresses, browser user-agents, and timestamps) for operational performance and threat mitigation. We do not deploy third-party advertising trackers or intrusive telemetry scripts.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                9. Your Rights &amp; Requests
              </h2>
            </div>
            <p>
              You have the right to request a summary of the contact information we hold regarding your inquiries, request corrections to inaccurate records, or request deletion of your information from our communications records. To make a request, contact our team at the verified address below.
            </p>
          </section>

          {/* Section 10 */}
          <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              10. Contacting Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how your inquiry information is handled, please reach out directly:
            </p>
            <div className="space-y-2 font-mono text-sm pt-2">
              <p>
                <strong className="text-white">Entity:</strong> XENITH Solutions
              </p>
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a href={`mailto:${siteConfig.companyInfo.email}`} className="text-brand hover:underline">
                  {siteConfig.companyInfo.email}
                </a>
              </p>
              <p>
                <strong className="text-white">Telephone:</strong>{' '}
                <a href={`tel:${siteConfig.companyInfo.phone.replace(/\s+/g, '')}`} className="text-brand hover:underline">
                  {siteConfig.companyInfo.phone}
                </a>
              </p>
              <p>
                <strong className="text-white">Location:</strong> {siteConfig.companyInfo.address}
              </p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white/70 hover:text-brand transition-colors uppercase tracking-wider"
          >
            <span>Have a Project in Mind? Contact Us →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
