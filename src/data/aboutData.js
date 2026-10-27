/**
 * Structured content for Houseziffy's About Page
 * Centralized data ensures maintainability, cohesion, and easy CMS/API integration.
 */

export const ABOUT_HERO = {
  badge: 'About Us',
  title: 'Explore Houseziffy’s Commitment to Excellence and Growth',
  description:
    'At Houseziffy, we specialize in transparent, hassle-free transactions for resale group housing apartments across Delhi NCR, including Noida and Ghaziabad. Our mission is to connect verified buyers and sellers with data-driven valuations and seamless documentation, ensuring trust and clarity at every step of the property journey.',
};

export const SERVICES_SECTION = {
  title: 'Comprehensive Real Estate Services',
  subtitle:
    'Explore our expert offerings in resale apartment buying and selling, ensuring transparency and ease at every step.',
  services: [
    {
      id: 'verified-buyer-support',
      title: 'Verified Buyer Support',
      description:
        'Connecting you with trustworthy buyers to secure transparent and hassle-free transactions.',
      // Image matches screenshot 2 card 1 (Cozy living room interior)
      // Replace with your local asset or URL if needed
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      alt: 'Verified Buyer Support - Modern living room interior',
    },
    {
      id: 'property-valuation-insights',
      title: 'Property Valuation Insights',
      description:
        'Utilizing data-driven tools to provide accurate market valuations tailored to your property.',
      // Image matches screenshot 2 card 2 (Aesthetic bedroom with botanical wall art)
      // Replace with your local asset or URL if needed
      image:
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
      alt: 'Property Valuation Insights - Cozy styled bedroom with art',
    },
    {
      id: 'documentation-assistance',
      title: 'Documentation Assistance',
      description:
        'Streamlining your property paperwork to guarantee a smooth and efficient process.',
      // Image matches screenshot 2 card 3 (Hand holding keys with keychain in front of door)
      // Replace with your local asset or URL if needed
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      alt: 'Documentation Assistance - Hand holding apartment keys at front door',
    },
  ],
};

export const TRUST_BENEFITS_SECTION = {
  title: 'Experience Trusted Real Estate Services with Houseziffy',
  subtitle:
    'Discover the key benefits of our verified listings, transparent deals, and expert property valuations tailored for Delhi NCR buyers and sellers.',
  benefits: [
    {
      id: 'verified-network',
      iconType: 'triad', // Matches screenshot 3 icon 1 (3 connected dots / triad)
      title: 'Verified Buyer Network',
      description:
        'Connect with a community of trusted buyers ensuring fast, secure transactions and peace of mind throughout your property journey.',
    },
    {
      id: 'transparent-deal',
      iconType: 'grid', // Matches screenshot 3 icon 2 (4 dots square)
      title: 'Transparent Deal Process',
      description:
        'Benefit from clear, upfront information on every transaction, reducing surprises and fostering confidence from start to finish.',
    },
    {
      id: 'hassle-free-docs',
      iconType: 'plus-grid', // Matches screenshot 3 icon 3 (4 dots with plus)
      title: 'Hassle-Free Documentation',
      description:
        'Enjoy seamless property paperwork handled by our experts, making buying or selling apartments in Noida and Ghaziabad effortless.',
    },
  ],
  ctaText: 'Discover Our Services',
  ctaUrl: 'https://houseziffy.in/contact',
};

export const JOURNEY_CTA_SECTION = {
  title: 'Begin Your Journey to Smart Property Deals with Houseziffy',
  description:
    'Discover how Houseziffy simplifies buying and selling verified resale apartments in Delhi NCR. Benefit from transparent deals, accurate valuations, and hassle-free documentation. Take action now to connect with trusted buyers and sellers.',
  ctaText: 'Discover Our Services',
  ctaUrl: 'https://houseziffy.in/contact',
  // Image matches screenshot 4 (Modern architectural high-rise apartments with palms & pool)
  // Replace with your actual project photo if desired
  image:
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  alt: 'Modern residential high-rise architecture with resort-style swimming pool and palm trees',
};

export const TEAM_SECTION = {
  title: 'Meet Our Expert Team',
  subtitle:
    'Discover the dedicated professionals who drive Houseziffy’s commitment to seamless property transactions.',
  members: [
    {
      id: 'dharmendra-bajaj',
      name: 'Dharmendra Bajaj',
      role: 'Co-founder',
      bio: 'With over 30 years of experience in driving and managing diverse businesses, including two decades in the real estate sector, Mr. Dharmendra brings deep industry expertise, strategic leadership, and strong business acumen. His extensive market knowledge and customer-centric approach drive sustainable growth, trusted relationships, and value-driven property solutions.',
      // DUMMY AVATAR: Replace with actual photo of Dharmendra Bajaj
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      socialLinks: {
        linkedin: 'https://houseziffy.in/#', // DUMMY LINK - Replace with Dharmendra Bajaj LinkedIn URL
        x: 'https://houseziffy.in/#', // DUMMY LINK - Replace with Dharmendra Bajaj X profile URL
        dribbble: 'https://houseziffy.in/#', // DUMMY LINK - Replace with Dharmendra Bajaj Dribbble / Portfolio URL
      },
    },
    {
      id: 'akanksha-dubey',
      name: 'Akanksha Dubey',
      role: 'Co-founder',
      bio: 'With 16 years of corporate leadership experience and an MBA in Data Analytics, Akanksha brings strategic vision, analytical expertise, and operational excellence to the real estate sector. She focuses on driving business growth, strengthening governance, and delivering value-driven, transparent property solutions.',
      // DUMMY AVATAR: Replace with actual photo of Akanksha Dubey
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      socialLinks: {
        linkedin: 'https://houseziffy.in/#', // DUMMY LINK - Replace with Akanksha Dubey LinkedIn URL
        x: 'https://houseziffy.in/#', // DUMMY LINK - Replace with Akanksha Dubey X profile URL
        dribbble: 'https://houseziffy.in/#', // DUMMY LINK - Replace with Akanksha Dubey Dribbble / Portfolio URL
      },
    },
  ],
};

export const TESTIMONIAL_SECTION = {
  quote:
    'Houseziffy guided me seamlessly through selling my apartment with unmatched transparency and efficiency.',
  author: 'Ritik Sharma',
  role: 'Real Estate Consultant',
  company: 'Houseziffy',
  companyUrl: 'https://houseziffy.in/',
  rating: 5,
};
