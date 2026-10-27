import React from 'react';
import { TESTIMONIAL_SECTION } from '../../data/aboutData';
import { QuoteIcon, ShieldCheckIcon } from '../icons';

/**
 * Client & Consultant Testimonial Section
 * Highlights Ritik Sharma's review from prompt
 */
export function TestimonialSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="relative bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
        {/* Ambient background decoration */}
        <div
          className="absolute -right-12 -top-12 w-48 h-48 bg-[#FAF1ED] rounded-full blur-2xl -z-10"
          aria-hidden="true"
        />

        {/* Top bar with Quote Icon & 5 Stars */}
        <div className="flex items-center justify-between mb-6">
          <QuoteIcon className="w-10 h-10 text-[#7E422C]" />
          <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-amber-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-stone-900 leading-snug sm:leading-relaxed tracking-tight mb-8">
          &ldquo;{TESTIMONIAL_SECTION.quote}&rdquo;
        </blockquote>

        {/* Author info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-stone-100 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FAF1ED] text-[#7E422C] font-bold text-lg flex items-center justify-center border border-[#F3E3DB]">
              RS
            </div>
            <div>
              <div className="font-bold text-stone-900 text-base sm:text-lg">
                {TESTIMONIAL_SECTION.author}
              </div>
              <div className="text-sm text-stone-500 font-normal">
                {TESTIMONIAL_SECTION.role} &bull;{' '}
                <a
                  href={TESTIMONIAL_SECTION.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7E422C] hover:underline font-medium"
                >
                  {TESTIMONIAL_SECTION.company}
                </a>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold self-start sm:self-center">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
            Verified Property Transaction
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
