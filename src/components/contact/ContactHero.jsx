import React from 'react';
import { CONTACT_HERO } from '../../data/contactData';

/**
 * Contact Hero Section matching Screenshot 3
 */
export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 sm:pt-20 sm:pb-18 px-4 sm:px-6 lg:px-8 border-b border-stone-100 bg-gradient-to-b from-[#FAF1ED]/60 via-[#FAF1ED]/20 to-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF1ED] border border-[#F3E3DB] text-[#7E422C] text-xs font-semibold mb-5 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7E422C]" />
          {CONTACT_HERO.badge} &bull; Delhi NCR Specialist
        </div>

        {/* Title matching Screenshot 3 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15] mb-5">
          {CONTACT_HERO.title}
        </h1>

        {/* Subtitle matching Screenshot 3 */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
          {CONTACT_HERO.subtitle}
        </p>

        {/* Subtle Decorative Divider */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-stone-300" />
          <span className="w-2 h-2 rounded-full bg-[#7E422C]" />
          <span className="w-8 h-[1px] bg-stone-300" />
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
