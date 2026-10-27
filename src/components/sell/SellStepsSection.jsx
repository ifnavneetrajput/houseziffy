import React from 'react';
import { SELL_STEPS } from '../../data/sellData';
import { AmenityCheckIcon } from '../icons';

/**
 * 4-Step Selling Process Section
 * Matches Screenshots 1 & 2:
 * 1. Free Property Valuation
 * 2. Instant Token & Listing
 * 3. End-to-End Promotion
 * 4. Hassle-Free Deal Closure
 */
export function SellStepsSection() {
  return (
    <section id="sell-process-steps" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#7E422C] block mb-2">
          Step-by-Step Selling Workflow
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
          How Houseziffy Sells Your Home
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          From valuation to registry, our structured 4-step process ensures transparency, speed, and zero stress.
        </p>
      </div>

      {/* 4 Cards Grid - Responsive: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
        {SELL_STEPS.map((stepItem) => (
          <article
            key={stepItem.id}
            className="group flex flex-col bg-white rounded-3xl border border-stone-200/80 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Container with Step Number Badge */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 mb-5">
              <img
                src={stepItem.image}
                alt={stepItem.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Step Counter Pill */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold tracking-wider">
                Step {stepItem.step}
              </div>
            </div>

            {/* Title & Description matching Screenshots 1 & 2 */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight group-hover:text-[#7E422C] transition-colors mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal mb-4">
                  {stepItem.description}
                </p>
              </div>

              {/* Highlights Pill List */}
              <div className="pt-3 border-t border-stone-100 space-y-1.5">
                {stepItem.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-1.5 text-xs text-stone-500 font-medium"
                  >
                    <AmenityCheckIcon className="w-3.5 h-3.5 text-[#7E422C] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SellStepsSection;
