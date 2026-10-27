import React from 'react';
import { TermsHeroSplit } from '../components/terms/TermsHeroSplit';
import { TermsClausesSection } from '../components/terms/TermsClausesSection';
import { TermsCalloutBanner } from '../components/terms/TermsCalloutBanner';

export function TermsPage() {
  return (
    <main className="w-full">
      {/* Hero Split Section: Terms of Use Overview (Screenshot 1) */}
      <TermsHeroSplit />

      {/* 2-Column Policy Clauses on Warm Blush Background (Screenshot 2) */}
      <TermsClausesSection />

      {/* Callout Dark Agreement Banner: Review Our Terms (Screenshot 3) */}
      <TermsCalloutBanner />
    </main>
  );
}

export default TermsPage;
