import React from 'react';
import { SearchIcon } from '../icons';

export function PropertyFilters({
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  selectedConfig,
  setSelectedConfig,
  locations,
  configs,
  totalResults,
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-4 sm:p-5 shadow-xs mb-8">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <SearchIcon className="w-4 h-4 text-stone-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by project (e.g. Eldeco, ATS Homekraft) or sector..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C] focus:border-transparent transition-all placeholder:text-stone-400"
          />
        </div>

        {/* Filter Selects */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
          {/* Location Filter */}
          <div className="w-full sm:w-auto">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full sm:w-auto text-sm bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-stone-700 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C] cursor-pointer"
            >
              <option value="ALL">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Configuration Filter */}
          <div className="w-full sm:w-auto">
            <select
              value={selectedConfig}
              onChange={(e) => setSelectedConfig(e.target.value)}
              className="w-full sm:w-auto text-sm bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-stone-700 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C] cursor-pointer"
            >
              <option value="ALL">All Configurations</option>
              {configs.map((cfg) => (
                <option key={cfg} value={cfg}>
                  {cfg}
                </option>
              ))}
            </select>
          </div>

          {/* Result count pill */}
          <div className="hidden lg:flex items-center text-xs font-semibold text-stone-500 whitespace-nowrap pl-2">
            Showing {totalResults} {totalResults === 1 ? 'property' : 'properties'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyFilters;
