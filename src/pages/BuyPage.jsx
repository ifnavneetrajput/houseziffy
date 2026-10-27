import React, { useState, useMemo } from 'react';
import { BuyHero } from '../components/buy/BuyHero';
import { PropertyCard } from '../components/buy/PropertyCard';
import { PropertyFilters } from '../components/buy/PropertyFilters';
import { EnquiryModal } from '../components/buy/EnquiryModal';
import { PROPERTY_LISTINGS } from '../data/buyData';
import { Button } from '../components/common/Button';
import { ArrowRightIcon, ShieldCheckIcon } from '../components/icons';

export function BuyPage({ onNavigateToSell }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('ALL');
  const [selectedConfig, setSelectedConfig] = useState('ALL');
  const [activePropertyForEnquiry, setActivePropertyForEnquiry] = useState(null);

  // Extract unique locations and configurations for filters
  const locations = useMemo(() => {
    return Array.from(new Set(PROPERTY_LISTINGS.map((p) => p.location)));
  }, []);

  const configs = useMemo(() => {
    return Array.from(new Set(PROPERTY_LISTINGS.map((p) => p.configuration)));
  }, []);

  // Filter listings based on user inputs
  const filteredProperties = useMemo(() => {
    return PROPERTY_LISTINGS.filter((property) => {
      const matchesSearch =
        searchTerm === '' ||
        property.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        selectedLocation === 'ALL' || property.location === selectedLocation;

      const matchesConfig =
        selectedConfig === 'ALL' || property.configuration === selectedConfig;

      return matchesSearch && matchesLocation && matchesConfig;
    });
  }, [searchTerm, selectedLocation, selectedConfig]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedLocation('ALL');
    setSelectedConfig('ALL');
  };

  return (
    <main className="w-full">
      {/* Hero header */}
      <BuyHero totalCount={PROPERTY_LISTINGS.length} />

      {/* Main Content Listings Area */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Search & Filters */}
        <PropertyFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedConfig={selectedConfig}
          setSelectedConfig={setSelectedConfig}
          locations={locations}
          configs={configs}
          totalResults={filteredProperties.length}
        />

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onEnquire={(p) => setActivePropertyForEnquiry(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAF1ED]/50 rounded-3xl border border-[#F3E3DB] p-8 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#FAF1ED] text-[#7E422C] flex items-center justify-center mx-auto mb-3 font-bold text-lg">
              Hz
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              No matching properties found
            </h3>
            <p className="text-sm text-stone-600 mb-6">
              We regularly onboard verified resale apartments. Try resetting your search filter or request custom property matching.
            </p>
            <Button size="sm" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        )}

        {/* Seller Callout Banner */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-[#FAF1ED] border border-[#F3E3DB] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-semibold mb-3 border border-emerald-100">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
              Verified Seller Network
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-2">
              Own an apartment in Eldeco, ATS, or Delhi NCR?
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              List your property with Houseziffy to reach our network of verified, pre-qualified buyers with transparent data-driven valuations.
            </p>
          </div>
          <Button
            size="lg"
            onClick={() => onNavigateToSell && onNavigateToSell()}
            className="shrink-0 shadow-md hover:shadow-lg"
          >
            Sell Your Apartment
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      <EnquiryModal
        property={activePropertyForEnquiry}
        isOpen={Boolean(activePropertyForEnquiry)}
        onClose={() => setActivePropertyForEnquiry(null)}
      />
    </main>
  );
}

export default BuyPage;
