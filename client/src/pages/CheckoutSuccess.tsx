import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const CheckoutSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002/api';
        const response = await fetch(`${apiUrl}/checkout/verify/${sessionId}`);
        const data = await response.json();
        setSessionData(data);
      } catch (error) {
        console.error('Payment verification error:', error);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-14 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-14 bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-light text-gray-900 mb-6">Payment Successful!</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {sessionData && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Amount:</strong> {(sessionData.amount / 100).toFixed(2)} {sessionData.currency?.toUpperCase()}</p>
              <p><strong>Status:</strong> {sessionData.status}</p>
              {sessionData.customer?.email && (
                <p><strong>Email:</strong> {sessionData.customer.email}</p>
              )}
            </div>
          </div>
        )}

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

export default CheckoutSuccess;
