/**
 * Structured content for Houseziffy's Terms and Conditions Page
 * Preserves exact text, clauses, and banner copy from user screenshots.
 */

export const TERMS_OVERVIEW = {
  title: 'Terms of Use Overview',
  description:
    'This section outlines the key terms and conditions governing your use of Houseziffy’s website and services, ensuring clarity and transparency in all interactions.',
  // Stacked white legal documents and binders image matching Screenshot 1
  image:
    'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1000&q=80',
  alt: 'Stacked legal files, agreements, and binders on desk',
};

export const TERMS_QUESTIONS_SECTION = {
  heading: 'What are the terms of use for Houseziffy’s services?',
  subtitle:
    'Explore detailed information on user rights, company policies, and legal agreements to ensure clear understanding and compliance.',
  clauses: [
    {
      id: 'acceptable-use',
      title: 'What constitutes acceptable use of Houseziffy’s website?',
      text: 'Users must adhere to all guidelines, refraining from prohibited activities to maintain service integrity.',
    },
    {
      id: 'data-privacy',
      title: 'How does Houseziffy protect user data and privacy?',
      text: 'We implement strict policies and safeguards to secure personal information and maintain confidentiality.',
    },
    {
      id: 'liability-limitations',
      title: 'What are the limitations of liability for Houseziffy?',
      text: 'Houseziffy is not liable for damages arising from improper use or unauthorized access to services.',
    },
    {
      id: 'account-termination',
      title: 'Can users modify or terminate their accounts?',
      text: 'Users may update or close their accounts following the prescribed procedures outlined in these terms.',
    },
    {
      id: 'dispute-resolution',
      title: 'How are disputes between users and Houseziffy resolved?',
      text: 'Any disputes arising under these terms shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar, Uttar Pradesh.',
    },
    {
      id: 'changes-to-terms',
      title: 'What changes can Houseziffy make to these terms?',
      text: 'Houseziffy reserves the right to modify or update these terms at any time. Continued use of the platform after updates constitutes acceptance of the revised terms.',
    },
  ],
};

export const TERMS_CALLOUT_BANNER = {
  title: 'Review Our Terms and Conditions Carefully',
  description:
    'This page explains the rules and policies you agree to when using Houseziffy’s website and services, ensuring clear understanding and compliance.',
  buttonText: 'Read Details',
  // Signing legal documents image matching Screenshot 3
  image:
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
  alt: 'Person reviewing and signing real estate agreement papers',
};
