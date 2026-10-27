import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AboutPage from './pages/AboutPage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';

export function App() {
  const [currentPage, setCurrentPage] = useState('Terms and Conditions'); // Showcasing the newly built Terms page

  // Sync with browser hash if present (e.g., #terms, #contact, #sell, #buy, #about)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'terms' || hash === 'terms-and-conditions') {
        setCurrentPage('Terms and Conditions');
      } else if (hash === 'contact') {
        setCurrentPage('Contact');
      } else if (hash === 'sell') {
        setCurrentPage('Sell');
      } else if (hash === 'buy') {
        setCurrentPage('Buy');
      } else if (hash === 'about') {
        setCurrentPage('About');
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (item) => {
    const label = item.label;

    if (label === 'About') {
      setCurrentPage('About');
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (label === 'Buy') {
      setCurrentPage('Buy');
      window.location.hash = 'buy';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (label === 'Sell') {
      setCurrentPage('Sell');
      window.location.hash = 'sell';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (label === 'Contact') {
      setCurrentPage('Contact');
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (label === 'Terms and Conditions' || label === 'Terms') {
      setCurrentPage('Terms and Conditions');
      window.location.hash = 'terms';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 selection:bg-[#FAF1ED] selection:text-[#7E422C]">
      {/* Floating Sticky Navigation Header */}
      <Header activeItem={currentPage} onNavigate={handleNavigate} />

      {/* Main View Router */}
      <div className="flex-1">
        {currentPage === 'About' && (
          <AboutPage onNavigateToBuy={() => handleNavigate({ label: 'Buy', id: 'buy' })} />
        )}

        {currentPage === 'Buy' && (
          <BuyPage onNavigateToSell={() => handleNavigate({ label: 'Sell', id: 'sell' })} />
        )}

        {currentPage === 'Sell' && <SellPage />}

        {currentPage === 'Contact' && <ContactPage />}

        {currentPage === 'Terms and Conditions' && <TermsPage />}
      </div>

      {/* Professional Scalable Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
