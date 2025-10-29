import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useTranslation } from 'react-i18next';

const CheckoutButton: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = getTotalPrice();

  const handleCheckout = async () => {
    if (items.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsLoading(true);

    try {
      // Check if server is running
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002/api';
      const response = await fetch(`${apiUrl}/checkout/create-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          currency: i18n.language === 'jp' ? 'jpy' : 'usd',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.url) {
        // Clear cart after successful checkout initiation
        clearCart();
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else if (data.error) {
        throw new Error(data.error);
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      console.error('Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : 'No stack trace'
      });
      
      // Provide more specific error messages
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('Unable to connect to checkout server. Please ensure the backend server is running on port 3002.');
      } else if (error instanceof Error && error.message.includes('Server error: 500')) {
        alert('Server configuration error. Please check Stripe API keys in the backend server.');
      } else {
        alert(`Checkout failed: ${error instanceof Error ? error.message : 'Unknown error'}. Please check console for details.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  console.log('CheckoutButton rendering:', { items: items.length, totalPrice, isLoading });

  return (
    <div className="w-full">
      <button
        onClick={handleCheckout}
        disabled={isLoading || items.length === 0}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span>{t('cart.checkout')}</span>
          </>
        )}
      </button>
      <div className="text-xs text-gray-500 mt-2 text-center">
        Debug: {items.length} items, ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default CheckoutButton; 