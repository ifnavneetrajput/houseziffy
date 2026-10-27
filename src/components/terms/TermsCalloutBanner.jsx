import React from 'react';
import { TERMS_CALLOUT_BANNER } from '../../data/termsData';

/**
 * Terms Callout Banner matching Screenshot 3:
 * Dark image background with signing agreement photo, white typography,
 * and white pill button "Read Details".
 */
export function TermsCalloutBanner() {
  const handleScrollToClauses = () => {
    const el = document.getElementById('terms-clauses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl min-h-[380px] sm:min-h-[440px] flex items-center justify-center text-center p-6 sm:p-12 lg:p-16 shadow-lg">
        {/* Background Image */}
        <img
          src={TERMS_CALLOUT_BANNER.image}
          alt={TERMS_CALLOUT_BANNER.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay matching Screenshot 3 */}
        <div className="absolute inset-0 bg-stone-950/75 sm:bg-stone-950/70 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white drop-shadow-sm">
            {TERMS_CALLOUT_BANNER.title}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-200 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            {TERMS_CALLOUT_BANNER.description}
          </p>

          <div>
            <button
              type="button"
              onClick={handleScrollToClauses}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-stone-900 hover:bg-stone-100 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              {TERMS_CALLOUT_BANNER.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsCalloutBanner;
