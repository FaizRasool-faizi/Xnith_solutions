const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, '');
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://xnith-solutions.vercel.app';
};

export const siteConfig = {
  name: "XENITH Solutions",
  title: "XENITH Solutions | AI Software Development & Custom Digital Products",
  description: "XENITH Solutions builds custom AI software, web applications, SaaS platforms, and intelligent digital products for businesses and startups.",
  url: getBaseUrl(),
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  companyInfo: {
    email: "sawerasaghir30@gmail.com",
    phone: "+92 317 4804970",
    address: "Lahore, Pakistan",
  },
};

export type SiteConfig = typeof siteConfig;
