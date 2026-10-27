import React, { useState } from 'react';
import { CONTACT_FORM_INFO } from '../../data/contactData';
import { Button } from '../common/Button';
import { ShieldCheckIcon, ArrowRightIcon } from '../icons';

/**
 * Contact Form Split Section
 * Matches Screenshot 1: Contact form on warm blush background (#FAF1ED)
 * paired with happy celebrating couple image.
 */
export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-[#FAF1ED] border border-[#F3E3DB] shadow-sm lg:grid lg:grid-cols-12 items-stretch">
        {/* Left Column: Form on Warm Blush Background (Screenshot 1) */}
        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7E422C] block mb-1.5">
              Direct Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
              {CONTACT_FORM_INFO.title}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 font-normal">
              {CONTACT_FORM_INFO.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-8 border border-stone-200/80 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Thank you, <strong>{formData.name}</strong>. A dedicated Houseziffy property advisor has received your message and will reach out to <strong>{formData.email}</strong> shortly.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name * */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 text-sm bg-white border border-[#E8D7CE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7E422C] transition-all placeholder:text-stone-400"
                />
              </div>

              {/* Email * */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 text-sm bg-white border border-[#E8D7CE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7E422C] transition-all placeholder:text-stone-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Property inquiry, valuation, or site viewing..."
                  className="w-full px-4 py-3 text-sm bg-white border border-[#E8D7CE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7E422C] transition-all placeholder:text-stone-400"
                />
              </div>

              {/* Message * */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help you with your property in Delhi NCR..."
                  className="w-full px-4 py-3 text-sm bg-white border border-[#E8D7CE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7E422C] transition-all placeholder:text-stone-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full shadow-md hover:shadow-lg">
                  Send Message
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Happy Couple Image (Screenshot 1) */}
        <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full w-full overflow-hidden bg-stone-100">
          <img
            src={CONTACT_FORM_INFO.image}
            alt={CONTACT_FORM_INFO.alt}
            loading="lazy"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
