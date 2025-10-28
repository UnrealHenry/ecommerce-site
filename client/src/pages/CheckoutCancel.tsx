import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutCancel: React.FC = () => {
  return (
    <div className="min-h-screen pt-14 bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-light text-gray-900 mb-6">Checkout Cancelled</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Your payment was cancelled. No charges were made to your account.
        </p>

        <p className="text-gray-600 mb-8">
          Your items are still in your cart if you'd like to try again.
        </p>

        <div className="space-y-4">
          <Link 
            to="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200 inline-block"
          >
            Continue Shopping
          </Link>
          <div>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCancel;
