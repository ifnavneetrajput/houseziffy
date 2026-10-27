import React from 'react';
import { SERVICES_SECTION } from '../../data/aboutData';

/**
 * Comprehensive Real Estate Services Section
 * Matches Screenshot 2: 3-column service cards with high-quality apartment imagery
 */
export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3 sm:mb-4">
          {SERVICES_SECTION.title}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          {SERVICES_SECTION.subtitle}
        </p>
      </div>

      {/* 3-Column Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {SERVICES_SECTION.services.map((service, index) => (
          <article
            key={service.id}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image Container with smooth hover zoom */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-sm">
              <img
                src={service.image}
                alt={service.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Service Details */}
            <div className="pt-5 sm:pt-6 flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight group-hover:text-[#7E422C] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
