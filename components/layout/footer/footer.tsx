import { FooterLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-[#D7120A] to-[#7B0B07]">
      <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-fluid-lg">
        <FooterLinks />
        <div className="mt-fluid-md pt-fluid-md border-t border-white/20 text-center text-fluid-xs text-white/80">
          © {new Date().getFullYear()} PSRM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

