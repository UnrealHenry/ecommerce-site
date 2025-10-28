import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import Cart from './Cart';
import LanguageToggle from './LanguageToggle';

// Apple-style Header component with dropdown navigation
const Header: React.FC = () => {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'electronics', name: t('categories.electronics'), icon: '📱' },
    { id: 'clothing', name: t('categories.clothing'), icon: '👕' },
    { id: 'home', name: t('categories.home'), icon: '🏠' },
    { id: 'sports', name: t('categories.sports'), icon: '⚽' },
    { id: 'accessories', name: t('categories.accessories'), icon: '🎒' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Logo />
          </Link>

          {/* Main Navigation - Apple Style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-gray-900 text-sm font-normal transition-colors duration-200"
            >
              {t('navigation.home')}
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-gray-900 text-sm font-normal transition-colors duration-200 flex items-center"
              >
                {t('navigation.products')}
                <svg className="w-3 h-3 ml-1 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
                  <div className="py-4">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/products?category=${category.id}`}
                        className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                      >
                        <span className="text-lg mr-3">{category.icon}</span>
                        <span className="text-sm">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-700 hover:text-gray-900 text-sm font-normal transition-colors duration-200"
            >
              {t('navigation.about')}
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-gray-900 text-sm font-normal transition-colors duration-200"
            >
              {t('navigation.contact')}
            </Link>
          </nav>

          {/* Right Side - Search, Cart, Language */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Apple Style */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <LanguageToggle />
            <Cart />
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Apple Style */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-1">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              <Link 
                to="/products" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.products')}
              </Link>
              
              {/* Mobile Categories */}
              <div className="pl-8 space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.id}`}
                    className="flex items-center py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-sm mr-2">{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.about')}
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 