import React from 'react';
import { HeroSection } from '../components/about/HeroSection';
import { ServicesSection } from '../components/about/ServicesSection';
import { TrustBenefitsSection } from '../components/about/TrustBenefitsSection';
import { CtaBannerSection } from '../components/about/CtaBannerSection';
import { TeamSection } from '../components/about/TeamSection';
import { TestimonialSection } from '../components/about/TestimonialSection';

/**
 * About Page View
 * High cohesion, loosely coupled composition of all About Page sections.
 */
export function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero: "Explore Houseziffy’s Commitment to Excellence and Growth" (Screenshot 1) */}
      <HeroSection />

      {/* Services: "Comprehensive Real Estate Services" (Screenshot 2) */}
      <ServicesSection />

      {/* Trust & Benefits: "Experience Trusted Real Estate Services with Houseziffy" (Screenshot 3) */}
      <TrustBenefitsSection />

      {/* Journey Split Banner: "Begin Your Journey to Smart Property Deals" (Screenshot 4) */}
      <CtaBannerSection />

      {/* Leadership & Expert Team: "Meet Our Expert Team" (Screenshot 5) */}
      <TeamSection />

      {/* Verified Client Testimonial: Ritik Sharma review */}
      <TestimonialSection />
    </main>
  );
}

export default AboutPage;
