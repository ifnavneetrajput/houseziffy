import React, { useState } from 'react';
import { SELLER_FAQS } from '../../data/sellData';

export function SellerFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#7E422C] block mb-2">
          Seller Guidance
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Frequently Asked Questions by Property Sellers
        </h2>
      </div>

      <div className="space-y-3.5">
        {SELLER_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.q}
              className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-stone-900 text-base sm:text-lg hover:text-[#7E422C] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-transform duration-200 ${
                    isOpen
                      ? 'bg-[#FAF1ED] text-[#7E422C] rotate-180'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  &darr;
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SellerFaqSection;
