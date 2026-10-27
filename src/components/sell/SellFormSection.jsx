import React, { useState } from 'react';
import { Button } from '../common/Button';
import { ShieldCheckIcon } from '../icons';

export function SellFormSection({ formRef }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    configuration: '3BHK',
    area: '',
    floor: '',
    expectedPrice: '',
    sellerName: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={formRef} id="sell-form-section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF1ED] border-y border-[#F3E3DB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Value Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-semibold border border-emerald-100">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
              Verified Seller Onboarding
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              Get an Instant Valuation &amp; Verified Token Offer
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Enter basic details about your apartment. Our pricing engine cross-references recent actual registry data to give you the highest fair market price.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white text-[#7E422C] flex items-center justify-center shrink-0 shadow-xs font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">100% Free Appraisal</h4>
                  <p className="text-xs text-stone-500">No hidden charges or mandatory listing lock-ins.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white text-[#7E422C] flex items-center justify-center shrink-0 shadow-xs font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Direct Buyer Access</h4>
                  <p className="text-xs text-stone-500">Connect with pre-approved buyers looking specifically in your society.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white text-[#7E422C] flex items-center justify-center shrink-0 shadow-xs font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Instant Token Security</h4>
                  <p className="text-xs text-stone-500">Secure commitment token upon basic physical verification.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">
                    Property Submitted for Valuation!
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
                    Thank you, <strong>{formData.sellerName}</strong>. Our Noida &amp; Ghaziabad valuation team is analyzing recent registered deals for <strong>{formData.projectName}</strong>. We will call you at <strong>{formData.phone}</strong> with your valuation report.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        projectName: '',
                        location: '',
                        configuration: '3BHK',
                        area: '',
                        floor: '',
                        expectedPrice: '',
                        sellerName: '',
                        phone: '',
                      });
                    }}
                  >
                    Submit Another Property
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                      Property Details
                    </h3>
                    <p className="text-xs text-stone-500">
                      Help us identify your apartment for an accurate assessment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Society / Project Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        placeholder="e.g. Eldeco Live by the Greens, ATS"
                        className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Location / Sector *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Noida Sec-150, Gr. Noida West"
                        className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Configuration
                      </label>
                      <select
                        value={formData.configuration}
                        onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                      >
                        <option value="2BHK">2 BHK</option>
                        <option value="3BHK">3 BHK</option>
                        <option value="4BHK">4 BHK</option>
                        <option value="Penthouse">Penthouse / Villa</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Super Area (SqFt)
                      </label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="e.g. 2100 SqFt"
                        className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Floor Details
                      </label>
                      <input
                        type="text"
                        value={formData.floor}
                        onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                        placeholder="e.g. 5th of 23"
                        className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                      />
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-4 mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Owner / Seller Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.sellerName}
                          onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                          placeholder="Your Full Name"
                          className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Button type="submit" size="lg" className="w-full shadow-md hover:shadow-lg">
                      Submit for Free Valuation &amp; Instant Token
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-stone-400">
                    🔒 Strict privacy guarantee: We do not share your number with unsolicited brokers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellFormSection;
