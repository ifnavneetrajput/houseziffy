import React, { useState } from 'react';
import { CloseIcon, ShieldCheckIcon, LocationPinIcon } from '../icons';
import { Button } from '../common/Button';

export function EnquiryModal({ property, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: '',
  });

  if (!isOpen || !property) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Dummy submit logic: In real app, connect to API / CRM
    setTimeout(() => {
      // Auto close after 2.5 seconds
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-100 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-2">
              Enquiry Received!
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
              Our dedicated property consultant for <strong>{property.project}</strong> will reach out to you within 2 business hours.
            </p>
            <div className="text-xs text-stone-400">
              Closing automatically...
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#7E422C] uppercase tracking-wider">
                Direct Resale Enquiry
              </span>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight mt-1">
                {property.project}
              </h3>
              <div className="flex items-center gap-2 text-stone-600 text-sm mt-1">
                <LocationPinIcon className="w-4 h-4 text-[#7E422C]" />
                <span>{property.location}</span>
                <span>&bull;</span>
                <span className="font-bold text-[#7E422C]">{property.priceDisplay}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ritik Sharma"
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Phone / WhatsApp Number
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

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Questions / Schedule Visit Date (Optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="I am interested in scheduling an in-person viewing of this 3BHK..."
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E422C] resize-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full shadow-md">
                  Request Callback &amp; Verification Report
                </Button>
              </div>

              <p className="text-[11px] text-center text-stone-400 mt-3">
                🔒 We respect your privacy. No spam. Direct verified seller and buyer matching only.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnquiryModal;
