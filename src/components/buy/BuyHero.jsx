import React from 'react';
import { BUY_PAGE_HEADER } from '../../data/buyData';
import { ShieldCheckIcon, TriadDotsIcon, GridDotsIcon } from '../icons';

export function BuyHero({ totalCount = 2 }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-stone-100 bg-gradient-to-b from-[#FAF1ED]/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1ED] border border-[#F3E3DB] text-[#7E422C] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7E422C]" />
            {BUY_PAGE_HEADER.badge} &bull; {totalCount} Handpicked Properties
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            {BUY_PAGE_HEADER.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
            {BUY_PAGE_HEADER.subtitle}
          </p>
        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-stone-200/60 max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">100% Verified Titles</div>
              <div className="text-xs text-stone-500">Legal scrutiny before listing</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FAF1ED] text-[#7E422C] flex items-center justify-center shrink-0">
              <GridDotsIcon className="w-5 h-5 text-[#8C4830]" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">Direct Asking Prices</div>
              <div className="text-xs text-stone-500">Clear upfront valuation</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
              <TriadDotsIcon className="w-5 h-5 text-[#8C4830]" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">Documentation Support</div>
              <div className="text-xs text-stone-500">End-to-end registry & transfer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuyHero;
