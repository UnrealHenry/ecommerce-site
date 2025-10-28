import React from 'react';
import { Link } from 'react-router-dom';
import CartTest from '../components/CartTest';
import { useTranslation } from 'react-i18next';

// Apple-style Home page with clean light design
const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-14 bg-white"> {/* Account for fixed header */}
      <CartTest />
      {/* Apple-style Light Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight text-gray-900">
            Welcome to
            <span className="block font-semibold text-blue-600">
              E-Store
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              {t('home.hero.cta')}
            </Link>
            <Link 
              to="/products" 
              className="border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:bg-gray-50"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>


      {/* Apple-style Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 text-center mb-16">
            {t('home.features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('home.features.fastShipping.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.features.fastShipping.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('home.features.securePayment.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.features.securePayment.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('home.features.qualityProducts.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.features.qualityProducts.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Link 
            to="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-colors duration-200 inline-block"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home; 