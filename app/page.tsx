import { HeroSection } from "@/components/hero-section";
import { ServiceSection } from "@/components/service-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ProcessSection } from "@/components/process-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <StatsSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}