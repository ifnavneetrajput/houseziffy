import React from 'react';

/**
 * Houseziffy Brand Monogram Logo
 */
export function LogoMark({ className = 'w-8 h-8' }) {
  return (
    <div
      className={`bg-stone-900 text-white rounded-lg flex items-center justify-center font-bold tracking-tighter select-none shadow-sm ${className}`}
      aria-label="Houseziffy Logo"
    >
      <span className="text-sm font-black italic tracking-tight">Hz</span>
    </div>
  );
}

/**
 * Three circles pyramid icon (Matches Screenshot 3, Benefit 1: Verified Buyer Network)
 */
export function TriadDotsIcon({ className = 'w-8 h-8 text-[#8C4830]' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="11" r="4.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="12" cy="27" r="4.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="28" cy="27" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

/**
 * Four dots grid icon (Matches Screenshot 3, Benefit 2: Transparent Deal Process)
 */
export function GridDotsIcon({ className = 'w-8 h-8 text-[#8C4830]' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="13" cy="13" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="27" cy="13" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="13" cy="27" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="27" cy="27" r="4" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

/**
 * Four dots with plus icon (Matches Screenshot 3, Benefit 3: Hassle-Free Documentation)
 */
export function PlusDotsIcon({ className = 'w-8 h-8 text-[#8C4830]' }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="12" r="3.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="12" cy="24" r="3.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="3.5" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M32 24H38M35 21V27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Social Icons (LinkedIn, X, Dribbble, Instagram, Facebook)
 */
export function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function XTwitterIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function DribbbleIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.312c-.44-.092-2.325-.458-4.521-.086-.18-.415-.366-.836-.566-1.252 2.37-1.42 3.01-3.697 3.157-3.974zm-4.757 1.488c.2.404.385.811.558 1.212-2.828.84-5.599.854-6.046.854a8.528 8.528 0 0 1 3.518-3.084c.378.36 1.144.756 1.97.018zm-7.908 3.167c.362 0 2.656-.007 5.176-.714.212.44.41.884.593 1.328-3.483 1.05-6.84 3.73-7.29 4.11a8.503 8.503 0 0 1-1.48-4.724c.732-.008 1.849-.008 3.001-.008zm1.94 6.822c.38-.344 3.163-2.616 6.33-3.56.88 2.29 1.25 4.62 1.34 5.234a8.497 8.497 0 0 1-7.67-1.674zm9.356.59c-.11-.53-.45-2.69-1.28-4.88 1.98-.39 3.71.02 4.09.12a8.536 8.536 0 0 1-2.81 4.76zm-1.89-6.07c-3.32.99-6.22 3.39-6.61 3.74-.01-.01-.01-.02-.02-.03 2.05-2.07 5.6-3.23 6.63-3.71z"
      />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  );
}

/**
 * Mobile Navigation Menu & Close Icons
 */
export function MenuIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = 'w-5 h-5 text-emerald-600' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function QuoteIcon({ className = 'w-8 h-8 text-[#8C4830]/20' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

/**
 * Property Specification Icons
 */
export function LocationPinIcon({ className = 'w-4 h-4 text-stone-500' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function BedIcon({ className = 'w-4 h-4 text-stone-500' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9" />
    </svg>
  );
}

export function AreaSquareIcon({ className = 'w-4 h-4 text-stone-500' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

export function BuildingFloorIcon({ className = 'w-4 h-4 text-stone-500' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18Z" />
      <path d="M6 12h12M6 8h12M6 16h12" />
    </svg>
  );
}

export function AmenityCheckIcon({ className = 'w-3.5 h-3.5 text-[#7E422C]' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function SearchIcon({ className = 'w-4 h-4 text-stone-400' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function PhoneIcon({ className = 'w-4 h-4 text-stone-500' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function MailIcon({ className = 'w-4 h-4 text-stone-500' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

