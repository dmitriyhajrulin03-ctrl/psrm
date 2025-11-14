"use client";

import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-fluid-lg">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <HeroContent />
    </section>
  );
}

