import React from 'react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';
import { useTranslation } from 'react-i18next';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Apple-style minimal card */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Product+Image';
            }}
          />
          
          {/* Add to Cart Button - Apple Style */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>

          {/* Discount Badge */}
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>

        {/* Product Info - Apple Style Typography */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Price Section */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-semibold text-gray-900">
              {formatCurrency(product.price, i18n.language)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">
                {formatCurrency(product.originalPrice, i18n.language)}
              </span>
            )}
          </div>
          
          {/* Rating and Stock */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-200'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
            </div>
            
            <span className={`text-xs font-medium ${
              product.inStock 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {product.inStock ? t('product.inStock') : t('product.outOfStock')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 