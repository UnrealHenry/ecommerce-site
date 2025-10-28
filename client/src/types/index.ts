// Product interface - defines the structure of a product
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Price in JPY (Japanese Yen)
  originalPrice?: number; // Original price for discounts
  image: string;
  category: string;
  inStock: boolean;
  rating: number; // Product rating (0-5)
}

// Cart item interface - represents an item in the shopping cart
export interface CartItem {
  product: Product;
  quantity: number;
}

// Cart context interface - defines the shape of our cart context
export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

// Stripe checkout session interface
export interface CheckoutSession {
  id: string;
  url: string;
} 