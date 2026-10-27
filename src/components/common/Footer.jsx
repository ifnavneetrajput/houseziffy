import React from 'react';
import { NAV_ITEMS, BRAND_INFO } from '../../data/navigation';
import {
  LogoMark,
  LinkedInIcon,
  XTwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from '../icons';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Scalable, comprehensive real estate footer
 * Incorporates the brand monogram, social channels (Instagram, Facebook, X, LinkedIn),
 * and quick links from Screenshot 3.
 */
export function Footer({ onNavigate }) {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 mt-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="w-8 h-8 rounded-lg bg-white text-stone-900" />
              <span className="text-xl font-bold tracking-tight text-white">
                {BRAND_INFO.name}
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              At Houseziffy, we specialize in transparent, hassle-free transactions for
              resale group housing apartments across Delhi NCR, including Noida and Ghaziabad.
            </p>
            {/* Social Links matching Screenshot 3: Instagram, Facebook, X, plus LinkedIn */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://houseziffy.in/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#7E422C] text-stone-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Houseziffy on Instagram"
                title="Instagram (Dummy link)"
              >
                {/* DUMMY LINK - Replace with official Instagram */}
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://houseziffy.in/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#7E422C] text-stone-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Houseziffy on Facebook"
                title="Facebook (Dummy link)"
              >
                {/* DUMMY LINK - Replace with official Facebook */}
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://houseziffy.in/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#7E422C] text-stone-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Houseziffy on X"
                title="X / Twitter (Dummy link)"
              >
                {/* DUMMY LINK - Replace with official X profile */}
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://houseziffy.in/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#7E422C] text-stone-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Houseziffy on LinkedIn"
                title="LinkedIn (Dummy link)"
              >
                {/* DUMMY LINK - Replace with official LinkedIn */}
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(item);
                      }
                    }}
                    className="text-stone-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Regions Column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Delhi NCR Coverage
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {BRAND_INFO.locations.map((loc) => (
                <li key={loc} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E422C]" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Inquiries Column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Connect With Us
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-3">
              Looking to buy or sell a verified resale apartment? Speak with our property consultants.
            </p>
            <div className="space-y-2 text-sm text-stone-400">
              <p>
                <span className="text-stone-500 text-xs block">Official Website</span>
                <a
                  href="https://houseziffy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white underline underline-offset-4"
                >
                  houseziffy.in
                </a>
              </p>
              <p className="pt-1">
                <a
                  href="https://houseziffy.in/contact"
                  className="inline-flex items-center text-xs font-semibold text-[#C4846F] hover:text-[#E2A692] uppercase tracking-wider"
                >
                  Contact Support &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Centered Hz Monogram Badge matching Screenshot 3 */}
        <div className="py-6 flex justify-center border-t border-stone-800/80">
          <LogoMark className="w-9 h-9 rounded-lg bg-stone-800 text-white hover:bg-[#7E422C] transition-colors" />
        </div>

        {/* Bottom Bar: Houseziffy on left, Social icons on right (Screenshot 3 style) */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-stone-400">{BRAND_INFO.name}</span>
            <span>&bull;</span>
            <p>
              &copy; {CURRENT_YEAR} {BRAND_INFO.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://houseziffy.in/#"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://houseziffy.in/#"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://houseziffy.in/#"
              className="hover:text-white transition-colors"
              aria-label="X"
            >
              <XTwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
