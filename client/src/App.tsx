import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutCancel from './pages/CheckoutCancel';
import './lib/i18n'; // Initialize i18n
import './App.css';

// Main App component with consistent Apple-style design
const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen w-full flex flex-col">
          {/* Header with navigation and cart */}
          <Header />
          
          {/* Main content area with top padding for fixed header */}
          <main className="pt-16 w-full flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/checkout/cancel" element={<CheckoutCancel />} />
              <Route path="*" element={
                <div className="container-apple py-8">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="btn-apple-primary">Back to Home</a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          
          {/* Footer with frosted glass effect */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
