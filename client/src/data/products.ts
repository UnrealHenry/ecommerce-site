import type { Product } from '../types';

// Mock product data - simulating a real e-commerce product catalog
// All prices are in JPY (Japanese Yen)
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 15800, // ¥15,800
    originalPrice: 19800, // ¥19,800
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable organic cotton t-shirt, perfect for everyday wear.',
    price: 3200, // ¥3,200
    originalPrice: 4200, // ¥4,200
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Clothing',
    inStock: true,
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Smartphone Case',
    description: 'Durable protective case for smartphones with shock absorption.',
    price: 2800, // ¥2,800
    image: 'https://images.unsplash.com/photo-1603313011108-4f2d3c3c3c3c?w=400&h=400&fit=crop',
    category: 'Accessories',
    inStock: true,
    rating: 4.2,
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with programmable timer and thermal carafe.',
    price: 12500, // ¥12,500
    originalPrice: 15800, // ¥15,800
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    category: 'Home & Kitchen',
    inStock: true,
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with excellent cushioning and breathable mesh.',
    price: 8900, // ¥8,900
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Sports',
    inStock: true,
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Laptop Stand',
    description: 'Adjustable aluminum laptop stand for better ergonomics and cooling.',
    price: 4500, // ¥4,500
    originalPrice: 5800, // ¥5,800
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.4,
  },
  {
    id: '7',
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat made from eco-friendly materials, perfect for home workouts.',
    price: 3800, // ¥3,800
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    category: 'Sports',
    inStock: true,
    rating: 4.3,
  },
  {
    id: '8',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature.',
    price: 5200, // ¥5,200
    originalPrice: 6800, // ¥6,800
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    category: 'Home & Kitchen',
    inStock: true,
    rating: 4.5,
  },
]; 