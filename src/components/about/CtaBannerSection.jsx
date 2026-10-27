import React from 'react';
import { JOURNEY_CTA_SECTION } from '../../data/aboutData';
import { Button } from '../common/Button';
import { ArrowRightIcon } from '../icons';

/**
 * Split Banner Section: "Begin Your Journey to Smart Property Deals with Houseziffy"
 * Matches Screenshot 4: Two-column layout with warm text panel on left,
 * modern high-rise residential building + pool on right.
 */
export function CtaBannerSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-[#FAF1ED] border border-[#F3E3DB] shadow-sm lg:grid lg:grid-cols-2 items-stretch">
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20">
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-stone-900 tracking-tight leading-[1.2] mb-6">
            {JOURNEY_CTA_SECTION.title}
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal mb-8 max-w-xl">
            {JOURNEY_CTA_SECTION.description}
          </p>

          <div>
            <Button
              href={JOURNEY_CTA_SECTION.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {JOURNEY_CTA_SECTION.ctaText}
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Right Column: High-Rise Architecture & Pool Image */}
        <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-full w-full overflow-hidden">
          <img
            src={JOURNEY_CTA_SECTION.image}
            alt={JOURNEY_CTA_SECTION.alt}
            loading="lazy"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient overlay to merge gracefully */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default CtaBannerSection;
