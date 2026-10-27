import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, BRAND_INFO } from '../../data/navigation';
import { LogoMark, MenuIcon, CloseIcon } from '../icons';

/**
 * Floating Navigation Header
 * Matches Screenshots 1-5: Floating white card with rounded borders,
 * brand monogram + name on left, clean navigation links on right, and mobile responsive drawer.
 */
export function Header({ activeItem = 'About', onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (item, e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 sm:top-3 z-50 w-full px-3 sm:px-6 md:px-8 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'shadow-md border border-stone-200/80 rounded-2xl sm:rounded-2xl'
            : 'shadow-sm border border-stone-100 rounded-xl sm:rounded-2xl'
        }`}
      >
        <div className="flex items-center justify-between h-16 sm:h-18 px-4 sm:px-8">
          {/* Brand Logo & Name */}
          <a
            href="/"
            onClick={(e) => handleLinkClick({ label: 'About', id: 'about' }, e)}
            className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95"
            aria-label="Houseziffy Homepage"
          >
            {/* Monogram [Hz] */}
            <LogoMark className="w-8 h-8 rounded-lg group-hover:bg-stone-800 transition-colors" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900">
              {BRAND_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem.toLowerCase() === item.label.toLowerCase();
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item, e)}
                  className={`text-sm tracking-wide font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-stone-900 font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7E422C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7E422C]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-100 px-5 pt-3 pb-6 bg-white rounded-b-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeItem.toLowerCase() === item.label.toLowerCase();
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleLinkClick(item, e)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#FAF1ED] text-[#7E422C] font-semibold'
                        : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
