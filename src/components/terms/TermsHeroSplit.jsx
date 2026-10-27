import React from 'react';
import { TERMS_OVERVIEW } from '../../data/termsData';

/**
 * Terms Hero Split Section matching Screenshot 1:
 * Left column: "Terms of Use Overview" title & description
 * Right column: Stacked legal documents and binders image
 */
export function TermsHeroSplit() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Heading & Description (Screenshot 1) */}
        <div className="lg:col-span-6 flex flex-col justify-center mb-8 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF1ED] border border-[#F3E3DB] text-[#7E422C] text-xs font-semibold mb-5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7E422C]" />
            Legal &amp; Compliance
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-stone-900 tracking-tight leading-[1.15] mb-6">
            {TERMS_OVERVIEW.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-xl">
            {TERMS_OVERVIEW.description}
          </p>

          <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">
            <span>Effective Date: 2026</span>
            <span>&bull;</span>
            <span>Resale Group Housing Terms</span>
          </div>
        </div>

        {/* Right Column: Stacked White Folders Image (Screenshot 1) */}
        <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl bg-stone-100 border border-stone-200/80 shadow-sm">
          <img
            src={TERMS_OVERVIEW.image}
            alt={TERMS_OVERVIEW.alt}
            loading="eager"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
}

export default TermsHeroSplit;
