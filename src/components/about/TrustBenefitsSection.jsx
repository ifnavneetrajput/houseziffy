import React from 'react';
import { TRUST_BENEFITS_SECTION } from '../../data/aboutData';
import { TriadDotsIcon, GridDotsIcon, PlusDotsIcon, ArrowRightIcon } from '../icons';
import { Button } from '../common/Button';

/**
 * Trust & Benefits Section
 * Matches Screenshot 3: Warm peach background (#FAF1ED) with 3 key benefit pillars
 * featuring custom geometric icons in warm terracotta tone (#8C4830).
 */
export function TrustBenefitsSection() {
  const renderIcon = (type) => {
    switch (type) {
      case 'triad':
        return <TriadDotsIcon className="w-11 h-11 text-[#8C4830]" />;
      case 'grid':
        return <GridDotsIcon className="w-11 h-11 text-[#8C4830]" />;
      case 'plus-grid':
        return <PlusDotsIcon className="w-11 h-11 text-[#8C4830]" />;
      default:
        return <TriadDotsIcon className="w-11 h-11 text-[#8C4830]" />;
    }
  };

  return (
    <section className="bg-[#FAF1ED] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 my-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            {TRUST_BENEFITS_SECTION.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            {TRUST_BENEFITS_SECTION.subtitle}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {TRUST_BENEFITS_SECTION.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 hover:bg-white backdrop-blur-xs transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md"
            >
              {/* Geometric Icon */}
              <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F5E8E2] group-hover:scale-110 transition-transform">
                {renderIcon(benefit.iconType)}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link matching Screenshot 3 bottom */}
        <div className="mt-12 text-center">
          <Button
            href={TRUST_BENEFITS_SECTION.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {TRUST_BENEFITS_SECTION.ctaText}
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TrustBenefitsSection;
