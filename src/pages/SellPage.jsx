import React, { useRef } from 'react';
import { BreadcrumbBar } from '../components/common/BreadcrumbBar';
import { SellHero } from '../components/sell/SellHero';
import { SellStepsSection } from '../components/sell/SellStepsSection';
import { SellFormSection } from '../components/sell/SellFormSection';
import { SellerFaqSection } from '../components/sell/SellerFaqSection';

export function SellPage() {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      {/* Subheader Breadcrumb Bar */}
      <BreadcrumbBar title="Sell" parent="Houseziffy" />

      {/* Hero Header matching Screenshot 1 */}
      <SellHero onScrollToForm={handleScrollToForm} />

      {/* 4-Step Process Section matching Screenshots 1 & 2 */}
      <SellStepsSection />

      {/* Instant Valuation & Token Request Form */}
      <SellFormSection formRef={formRef} />

      {/* Frequently Asked Questions */}
      <SellerFaqSection />
    </main>
  );
}

export default SellPage;
