import React from 'react';
import { SELL_HERO } from '../../data/sellData';
import { Button } from '../common/Button';
import { ArrowRightIcon } from '../icons';

export function SellHero({ onScrollToForm }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 sm:pt-20 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-stone-100 bg-gradient-to-b from-[#FAF1ED]/60 via-[#FAF1ED]/20 to-white">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#7E422C]/5 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF1ED] border border-[#F3E3DB] text-[#7E422C] text-xs font-semibold mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7E422C]" />
            {SELL_HERO.badge} &bull; Resale Group Housing
          </div>

          {/* Heading matching Screenshot 1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.14] mb-5">
            {SELL_HERO.title}
          </h1>

          {/* Subtitle matching Screenshot 1 */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed font-normal max-w-2xl mb-8">
            {SELL_HERO.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              size="lg"
              onClick={onScrollToForm}
              className="shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Free Valuation &amp; Instant Token
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.getElementById('sell-process-steps');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </Button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 pt-10 border-t border-stone-200/80 max-w-3xl">
          {SELL_HERO.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-stone-200/60 shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SellHero;
