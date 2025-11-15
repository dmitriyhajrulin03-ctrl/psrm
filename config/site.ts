export const siteConfig = {
  name: "PSRM",
  description: "PSRM Application",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
} as const;






