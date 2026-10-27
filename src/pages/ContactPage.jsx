import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactFormSection } from '../components/contact/ContactFormSection';
import { OfficeLocationSection } from '../components/contact/OfficeLocationSection';

export function ContactPage() {
  return (
    <main className="w-full">
      {/* Hero Header: "Connect With Houseziffy for Expert Property Assistance" (Screenshot 3) */}
      <ContactHero />

      {/* Contact Form Section with Happy Couple (Screenshot 1) */}
      <ContactFormSection />

      {/* Office Details with Modern Skyscraper (Screenshot 2) */}
      <OfficeLocationSection />
    </main>
  );
}

export default ContactPage;
