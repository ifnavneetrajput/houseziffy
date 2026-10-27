import React from 'react';
import {
  LocationPinIcon,
  BedIcon,
  AreaSquareIcon,
  BuildingFloorIcon,
  AmenityCheckIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '../icons';
import { Button } from '../common/Button';

/**
 * PropertyCard Component
 * Renders verified resale properties with exact specifications from user screenshots.
 */
export function PropertyCard({ property, onEnquire }) {
  return (
    <article className="group bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Property Image Showcase */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        <img
          src={property.image}
          alt={property.alt}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-emerald-800 text-xs font-semibold shadow-xs">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
            Verified Listing
          </span>

          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-stone-900/85 backdrop-blur-md text-white text-xs font-medium shadow-xs">
            {property.status}
          </span>
        </div>

        {/* Floating Price in Bottom of Image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-stone-300 block mb-0.5">
              Asking Price
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
              {property.priceDisplay}{' '}
              <span className="text-xs font-normal text-stone-200">
                ({property.askingPrice})
              </span>
            </div>
          </div>
          {property.pricePerSqFt && (
            <span className="text-xs text-stone-300 bg-stone-900/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
              {property.pricePerSqFt}
            </span>
          )}
        </div>
      </div>

      {/* Property Content & Metadata */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Project / Society Name */}
          <div className="mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7E422C]">
              Project / Society
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight group-hover:text-[#7E422C] transition-colors mt-0.5">
              {property.project}
            </h3>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-stone-600 text-sm mb-6">
            <LocationPinIcon className="w-4 h-4 text-[#7E422C] shrink-0" />
            <span className="font-medium text-stone-700">
              Location: <span className="font-semibold text-stone-900">{property.location}</span>
            </span>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-[#FAF1ED]/60 rounded-2xl border border-[#F3E3DB] mb-6">
            {/* Configuration */}
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide flex items-center gap-1">
                <BedIcon className="w-3.5 h-3.5 text-[#7E422C]" /> Config
              </span>
              <span className="text-sm font-bold text-stone-900 mt-1">
                {property.configuration}
              </span>
            </div>

            {/* Area */}
            <div className="flex flex-col border-x border-[#EED9CE] px-2.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide flex items-center gap-1">
                <AreaSquareIcon className="w-3.5 h-3.5 text-[#7E422C]" /> Area
              </span>
              <span className="text-sm font-bold text-stone-900 mt-1">
                {property.area}
              </span>
            </div>

            {/* Floor */}
            <div className="flex flex-col pl-1">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide flex items-center gap-1">
                <BuildingFloorIcon className="w-3.5 h-3.5 text-[#7E422C]" /> Floor
              </span>
              <span className="text-sm font-bold text-stone-900 mt-1 truncate" title={property.floor}>
                {property.floor}
              </span>
            </div>
          </div>

          {/* Key Amenities */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
              Key Amenities
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {property.keyAmenities.map((amenity) => (
                <span
                  key={amenity}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 hover:bg-[#FAF1ED] text-stone-700 text-xs font-medium transition-colors"
                >
                  <AmenityCheckIcon className="w-3 h-3 text-[#7E422C]" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <div className="text-xs text-stone-500 font-medium">
            Verified Resale by <strong className="text-stone-800">Houseziffy</strong>
          </div>
          <Button
            size="sm"
            onClick={() => onEnquire && onEnquire(property)}
            className="shadow-sm hover:shadow-md"
          >
            Enquire Now
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;
