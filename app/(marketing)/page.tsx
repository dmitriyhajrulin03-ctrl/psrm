import { HeroSection } from "@/sections/hero";
import { FeaturesSection } from "@/sections/features";
import { TestimonialsSection } from "@/sections/testimonials";
import { PricingSection } from "@/sections/pricing";
import { SectionDivider } from "@/components/shared/section-divider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <PricingSection />
    </>
  );
}

