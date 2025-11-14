export const SITE_CONFIG = {
  name: "PSRM",
  description: "PSRM Application",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  blog: "/blog",
  contact: "/contact",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
} as const;




