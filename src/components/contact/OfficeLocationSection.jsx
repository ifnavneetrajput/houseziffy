import React from 'react';
import { CONTACT_OFFICE_DETAILS } from '../../data/contactData';
import { LocationPinIcon, PhoneIcon, MailIcon } from '../icons';

/**
 * Office Location & Direct Contact Section
 * Matches Screenshot 2: Modern glass office skyscraper on left,
 * verified office address, phone number, and official email on right.
 */
export function OfficeLocationSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-[#FAF1ED] border border-[#F3E3DB] shadow-sm lg:grid lg:grid-cols-12 items-center">
        {/* Left Column: Modern Glass Skyscraper Image (Screenshot 2) */}
        <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] w-full overflow-hidden bg-stone-100">
          <img
            src={CONTACT_OFFICE_DETAILS.image}
            alt={CONTACT_OFFICE_DETAILS.alt}
            loading="lazy"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Column: Office Address, Phone & Email Details (Screenshot 2) */}
        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center">
          <p className="text-base sm:text-lg lg:text-xl text-stone-700 font-medium leading-relaxed mb-8">
            {CONTACT_OFFICE_DETAILS.headline}
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#7E422C] flex items-center justify-center shrink-0 shadow-xs border border-[#F3E3DB]">
                <LocationPinIcon className="w-5 h-5 text-[#7E422C]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-0.5">
                  Office Location
                </span>
                <span className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                  {CONTACT_OFFICE_DETAILS.address}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#7E422C] flex items-center justify-center shrink-0 shadow-xs border border-[#F3E3DB]">
                <PhoneIcon className="w-5 h-5 text-[#7E422C]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-0.5">
                  Direct Phone Support
                </span>
                <a
                  href={`tel:${CONTACT_OFFICE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-base sm:text-lg font-bold text-stone-900 hover:text-[#7E422C] transition-colors"
                >
                  {CONTACT_OFFICE_DETAILS.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#7E422C] flex items-center justify-center shrink-0 shadow-xs border border-[#F3E3DB]">
                <MailIcon className="w-5 h-5 text-[#7E422C]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-0.5">
                  Official Inquiries Email
                </span>
                <a
                  href={`mailto:${CONTACT_OFFICE_DETAILS.email}`}
                  className="text-base sm:text-lg font-bold text-stone-900 hover:text-[#7E422C] transition-colors underline underline-offset-4"
                >
                  {CONTACT_OFFICE_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeLocationSection;
