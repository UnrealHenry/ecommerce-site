// Product interface for backend API
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Price in JPY (Japanese Yen)
  image: string;
  category: string;
  inStock: boolean;
}

// Cart item interface for checkout
export interface CartItem {
  product: Product;
  quantity: number;
}

// Checkout session request interface
export interface CheckoutRequest {
  items: CartItem[];
  successUrl: string;
  cancelUrl: string;
}

// Stripe checkout session response
export interface CheckoutResponse {
  sessionId: string;
  url: string;
} 