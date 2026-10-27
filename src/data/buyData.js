/**
 * Structured content for Houseziffy's Buy / Resale Properties Page
 * Exact data preserved from user screenshots with scalable metadata for filtering and sorting.
 */

export const BUY_PAGE_HEADER = {
  badge: 'Verified Resale Portfolio',
  title: 'Explore Handpicked Resale Apartments',
  subtitle:
    'Transparent pricing, verified ownership, and end-to-end documentation across prime sectors in Noida, Greater Noida, and Delhi NCR.',
};

export const PROPERTY_LISTINGS = [
  {
    id: 'eldeco-live-by-the-greens-sec-150',
    project: 'Eldeco Live by the Greens',
    location: 'Noida Sec-150',
    city: 'Noida',
    configuration: '3BHK',
    area: '2100 SqFt',
    areaNumeric: 2100,
    floor: '5th of 23rd Floors',
    askingPrice: '2Cr',
    priceDisplay: '₹2.00 Cr',
    priceNumeric: 20000000,
    pricePerSqFt: '₹9,523 / sq.ft.',
    verified: true,
    isFeatured: true,
    status: 'Ready to Move / Resale',
    keyAmenities: ['Gym', 'Pool', 'Clubhouse', '24/7 Security', 'Parking'],
    // Image matching screenshot 1 (Illuminated resort pool with multi-story glass clubhouse & palm trees)
    image:
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Eldeco Live by the Greens, Noida Sec-150 - Resort Swimming Pool and Luxury High-rise',
  },
  {
    id: 'ats-homekraft-happy-trails',
    project: 'ATS Homekraft Happy Trails',
    location: 'Sector 10, Greater Noida West',
    city: 'Greater Noida West',
    configuration: '3BHK',
    area: '1600 SqFt',
    areaNumeric: 1600,
    floor: '12th of 24th Floors',
    askingPrice: '2.1Cr',
    priceDisplay: '₹2.10 Cr',
    priceNumeric: 21000000,
    pricePerSqFt: '₹13,125 / sq.ft.',
    verified: true,
    isFeatured: true,
    status: 'Ready to Move / Resale',
    keyAmenities: ['Gym', 'Pool', 'Clubhouse', '24/7 Security', 'Parking'],
    // Image matching screenshot 2 (Grand high-rise towers with olympic-sized swimming pool & clubhouse)
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    alt: 'ATS Homekraft Happy Trails - Grand Residential Towers and Swimming Pool',
  },
];
