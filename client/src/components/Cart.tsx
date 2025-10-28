import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';
import { useTranslation } from 'react-i18next';
import CheckoutButton from './CheckoutButton';

// Apple-style Cart component with enhanced frosted glass design
const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle cart visibility
  const toggleCart = () => {
    console.log('Cart toggle clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  // Function to handle quantity changes with validation
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    console.log('Updating quantity for product:', productId, 'to:', newQuantity);
    
    // Validate quantity
    if (newQuantity < 0) {
      console.warn('Quantity cannot be negative');
      return;
    }
    
    if (newQuantity === 0) {
      // Remove item if quantity is 0
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  // Function to handle removing an item from cart
  const handleRemoveItem = (productId: string) => {
    console.log('Removing product from cart:', productId);
    removeFromCart(productId);
  };

  // Debug logging
  console.log('Cart component rendered, isOpen:', isOpen, 'items:', items, 'totalItems:', getTotalItems());
  console.log('Cart items length:', items.length, 'CheckoutButton should render:', items.length > 0);

  return (
    <>
      {/* Cart Toggle Button with enhanced frosted glass styling */}
      <button
        onClick={toggleCart}
        className="relative p-3 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-white/20 backdrop-blur-sm border border-white/20"
        aria-label="Toggle shopping cart"
      >
        {/* Enhanced Shopping Cart Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>

        {/* Cart Item Count Badge with enhanced styling */}
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500/90 backdrop-blur-md text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-scale-in border-2 border-white/50">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Overlay and Panel with enhanced frosted glass */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Enhanced Backdrop with extreme blur for background content */}
          <div 
            className="absolute inset-0 extreme-backdrop-blur"
            onClick={toggleCart}
          />
          
          {/* Enhanced Cart Panel - Auto-expanding with stronger frosted glass */}
          <div className="absolute right-0 top-0 w-full max-w-md bg-white/50 backdrop-blur-2xl border-l border-white/40 shadow-2xl max-h-screen overflow-y-auto">
            <div className="flex flex-col min-h-screen">
              {/* Enhanced Cart Header */}
              <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-white/40 bg-white/40 backdrop-blur-2xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  {t('cart.title')} ({getTotalItems()} items)
                </h2>
                <button
                  onClick={toggleCart}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-300 rounded-lg hover:bg-white/40 backdrop-blur-xl"
                  aria-label="Close cart"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Enhanced Cart Items - Auto-expanding */}
              <div className="flex-1 p-6 bg-white/30 backdrop-blur-2xl">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-white/50 backdrop-blur-2xl rounded-full flex items-center justify-center mx-auto mb-4 border border-white/40">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {t('cart.empty')}
                    </h3>
                    <p className="text-gray-500">
                      {t('cart.emptyMessage')}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-xl p-4 shadow-lg">
                        <div className="flex items-center space-x-4">
                          {/* Product Image */}
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            onError={(e) => {
                              console.error('Failed to load image:', item.product.image);
                              e.currentTarget.src = 'https://via.placeholder.com/64x64?text=Image';
                            }}
                          />

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-800 truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {formatCurrency(item.product.price, i18n.language)}
                            </p>
                          </div>

                          {/* Enhanced Quantity Controls */}
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <button
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 bg-white/70 backdrop-blur-2xl rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300 border border-white/50 shadow-sm"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="text-sm font-medium w-8 text-center text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 bg-white/70 backdrop-blur-2xl rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300 border border-white/50 shadow-sm"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          {/* Enhanced Remove Button */}
                          <button
                            onClick={() => handleRemoveItem(item.product.id)}
                            className="p-1 text-red-500 hover:text-red-700 transition-colors duration-300 flex-shrink-0 hover:bg-red-50/40 rounded-lg"
                            aria-label="Remove item"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Enhanced Cart Footer */}
              {items.length > 0 && (
                <div className="flex-shrink-0 border-t border-white/40 p-6 bg-white/40 backdrop-blur-2xl">
                  {/* Cart Total */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-800">
                      {t('total')}
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      {formatCurrency(getTotalPrice(), i18n.language)}
                    </span>
                  </div>

                  {/* Enhanced Checkout Button */}
                  <CheckoutButton />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart; 