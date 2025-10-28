import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'jp' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-white/20 backdrop-blur-sm border border-white/20"
      aria-label={`Switch to ${i18n.language === 'en' ? 'Japanese' : 'English'}`}
    >
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium">
          {i18n.language === 'en' ? 'EN' : 'JP'}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </div>
    </button>
  );
};

export default LanguageToggle; 