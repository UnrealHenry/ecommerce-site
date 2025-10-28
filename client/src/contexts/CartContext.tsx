import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CartContextType, CartItem, Product } from '../types';

// Create the cart context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Props interface for the CartProvider component
interface CartProviderProps {
  children: ReactNode;
}

// CartProvider component - provides cart state to all child components
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // useState hook - manages the cart items state
  // This hook returns the current state and a function to update it
  const [items, setItems] = useState<CartItem[]>([]);

  // useEffect hook - loads cart data from localStorage when component mounts
  // This hook runs after the component renders and when dependencies change
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  // useEffect hook - saves cart data to localStorage whenever items change
  // This hook runs whenever the 'items' state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]); // Dependency on 'items' means this effect runs when items change

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setItems(prevItems => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // If product exists, increase quantity
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setItems([]);
  };

  // Function to calculate the total price of all items in the cart
  const getTotalPrice = (): number => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  // Function to calculate the total number of items in the cart
  const getTotalItems = (): number => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Create the context value object
  const contextValue: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
// This hook provides a convenient way to access cart functionality in components
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 