/**
 * Structured content for Houseziffy's Sell Page
 * Preserves exact text and steps from user screenshots.
 */

export const SELL_HERO = {
  badge: 'Direct Resale Platform',
  title: 'Sell Your Home with Confidence',
  description:
    'We take care of the entire sale—finding qualified buyers, scheduling visits, negotiating the price, and closing the deal',
  stats: [
    { label: 'Avg. Days to Token', value: '18-24 Days' },
    { label: 'Verified NCR Buyers', value: '3,500+' },
    { label: 'Upfront Listing Fee', value: '₹0 Free' },
  ],
};

export const SELL_STEPS = [
  {
    step: '01',
    id: 'free-property-valuation',
    title: 'Free Property Valuation',
    description: 'Submit your details and get an accurate market assessment..',
    // High-resolution photo representing property valuation & market assessment
    // Replace with your local asset or URL if preferred
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    alt: 'Free Property Valuation - Real estate appraisal and market assessment',
    highlights: ['Recent registry data', 'Society-level trends', 'Zero obligation'],
  },
  {
    step: '02',
    id: 'instant-token-listing',
    title: 'Instant Token & Listing',
    description: 'Complete basic inspection and receive your instant token amount',
    // High-resolution photo representing instant token, payment verification & official listing
    // Replace with your local asset or URL if preferred
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    alt: 'Instant Token & Listing - Verified token payment and agreement',
    highlights: ['Quick physical audit', 'Direct token transfer', 'Formal agreement'],
  },
  {
    step: '03',
    id: 'end-to-end-promotion',
    title: 'End-to-End Promotion',
    description: 'We handle professional photography, listing promotion, and buyer verification.',
    // High-resolution photo representing professional architectural photography & listing marketing
    // Replace with your local asset or URL if preferred
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    alt: 'End-to-End Promotion - Professional shoot and buyer matching',
    highlights: ['High-res photography', 'Pre-qualified buyers', 'Scheduled visits'],
  },
  {
    step: '04',
    id: 'hassle-free-deal-closure',
    title: 'Hassle-Free Deal Closure',
    description: 'We manage legal documentation, paperwork, and final payment transfer.',
    // High-resolution photo representing keys, agreement and deal closure
    // Replace with your local asset or URL if preferred
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    alt: 'Hassle-Free Deal Closure - Keys handover and registry assistance',
    highlights: ['Registry assistance', 'NOC & clearance', 'Secure bank escrow'],
  },
];

export const SELLER_FAQS = [
  {
    q: 'How does Houseziffy determine the valuation of my apartment?',
    a: 'We evaluate recent actual registered resale transactions in your exact society, floor height, facing, unit condition, and ongoing demand trends in Noida, Ghaziabad, and Delhi NCR.',
  },
  {
    q: 'How do you verify buyers before scheduling an apartment visit?',
    a: 'Every prospective buyer is pre-screened for budget readiness, mortgage pre-approval status, and serious intent to ensure you never have to deal with casual window shoppers.',
  },
  {
    q: 'Are there any upfront charges to list my property on Houseziffy?',
    a: 'No, listing your apartment, property inspection, professional photography, and valuation report are 100% free of upfront charges.',
  },
  {
    q: 'What paperwork does Houseziffy assist with?',
    a: 'We manage the drafting of the Agreement to Sell (ATS), society NOC procurement, bank loan closure/lien release, and coordinate the final registry appointment at the sub-registrar office.',
  },
];
