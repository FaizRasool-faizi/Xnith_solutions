export const siteConfig = {
  name: "XNITH Solutions",
  description: "Modern technology and digital solutions for a connected world.",
  url: "https://xnith-solutions.com",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ],
  companyInfo: {
    email: "hello@xnith-solutions.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Boulevard, Innovation District, CA 94103",
  },
  // We can easily expand this config to include portfolio items, service details, etc.
};

export type SiteConfig = typeof siteConfig;
