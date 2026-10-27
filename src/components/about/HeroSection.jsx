import React from 'react';
import { ABOUT_HERO } from '../../data/aboutData';

/**
 * Hero Section
 * Matches Screenshot 1: Centered title & statement of mission
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle background ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FAF1ED]/60 blur-3xl -z-10 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-stone-900 tracking-tight leading-[1.15] sm:leading-[1.18] mb-6 sm:mb-8">
          {ABOUT_HERO.title}
        </h1>

        {/* Supporting Mission Statement */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed sm:leading-relaxed max-w-3xl mx-auto font-normal">
          {ABOUT_HERO.description}
        </p>

        {/* Subtle Decorative Divider */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-stone-300" />
          <span className="w-2 h-2 rounded-full bg-[#7E422C]" />
          <span className="w-8 h-[1px] bg-stone-300" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
