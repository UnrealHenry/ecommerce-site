// Utility function to format prices in different currencies based on language
export const formatCurrency = (amount: number, language: string = 'en'): string => {
  if (language === 'jp') {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } else {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }
};

// Legacy function for backward compatibility
export const formatJPY = (amount: number): string => {
  return formatCurrency(amount, 'jp');
};

// Alternative formatting without the currency symbol (just the number)
export const formatNumber = (amount: number, language: string = 'en'): string => {
  if (language === 'jp') {
    return new Intl.NumberFormat('ja-JP').format(amount);
  } else {
    return new Intl.NumberFormat('en-US').format(amount);
  }
};

// Format with currency symbol manually added
export const formatWithSymbol = (amount: number, language: string = 'en'): string => {
  if (language === 'jp') {
    return `¥${formatNumber(amount, 'jp')}`;
  } else {
    return `$${formatNumber(amount, 'en')}`;
  }
}; 