export const siteConfig = {
  name: "XENITH Solutions",
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
    email: "sawerasaghir30@gmail.com",
    phone: "03174804970",
    address: "Lahore, Pakistan",
  },
  // We can easily expand this config to include portfolio items, service details, etc.
};

export type SiteConfig = typeof siteConfig;
