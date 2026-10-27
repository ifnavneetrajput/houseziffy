import React from 'react';
import { TERMS_QUESTIONS_SECTION } from '../../data/termsData';

/**
 * Terms Clauses Section matching Screenshot 2:
 * Warm blush background (#FAF1ED) with 2-column legal policy clauses.
 */
export function TermsClausesSection() {
  return (
    <section id="terms-clauses" className="bg-[#FAF1ED] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-[#F3E3DB]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            {TERMS_QUESTIONS_SECTION.heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            {TERMS_QUESTIONS_SECTION.subtitle}
          </p>
        </div>

        {/* 2-Column Policy Clauses Grid (Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {TERMS_QUESTIONS_SECTION.clauses.map((clause, idx) => (
            <article
              key={clause.id}
              className="bg-white/70 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-xs hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-lg bg-[#FAF1ED] text-[#7E422C] text-xs font-bold flex items-center justify-center border border-[#F3E3DB]">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7E422C]">
                    Policy Clause
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug mb-3">
                  {clause.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                  {clause.text}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center text-xs text-stone-400 font-medium">
                Houseziffy User Agreement Clause #{idx + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TermsClausesSection;
