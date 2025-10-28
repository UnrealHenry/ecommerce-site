import React from 'react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const CartTest: React.FC = () => {
  const { addToCart, items, getTotalItems } = useCart();

  const handleAddTestItem = () => {
    const testProduct = products[0]; // Add first product
    addToCart(testProduct);
    console.log('Added test item to cart:', testProduct.name);
  };

  return (
    <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg border z-50">
      <h3 className="font-bold mb-2">Cart Test</h3>
      <p>Items in cart: {getTotalItems()}</p>
      <p>Cart items: {items.length}</p>
      <button 
        onClick={handleAddTestItem}
        className="bg-blue-500 text-white px-3 py-1 rounded text-sm mt-2"
      >
        Add Test Item
      </button>
      <div className="mt-2 text-xs">
        {items.map((item, index) => (
          <div key={index}>
            {item.product.name} x {item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTest;
