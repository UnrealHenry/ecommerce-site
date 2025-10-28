# 🛍️ E-Commerce Store

A modern, full-stack e-commerce website built with React, TypeScript, Tailwind CSS, Node.js, Express, and Stripe integration.

## 🌟 Demo

**Live Demo:** [Coming Soon - Deploy to Vercel/Netlify]

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe backend
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing

### Features
- **JPY Currency Support** - Japanese Yen formatting with `Intl.NumberFormat`
- **LocalStorage** - Cart persistence
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Theme switching
- **EN/JP Language Toggle** - Internationalization
- **Modern UI/UX** - Glassmorphism, gradients, animations

## ✨ Features

### 🛍️ Product Management
- Product grid with search and filtering
- Product detail pages with full information
- Category-based organization
- Stock status indicators

### 🛒 Shopping Cart
- Add/remove items with quantity controls
- Real-time total calculation in ¥JPY
- LocalStorage persistence
- Modern slide-over cart design
- Empty cart state with helpful messaging

### 💳 Stripe Checkout
- Secure payment processing
- JPY currency support
- Test mode with sample cards
- Success and cancel page handling
- Order confirmation

### 🎨 Modern UI/UX
- Glassmorphism effects
- Gradient text and buttons
- Smooth animations and transitions
- Hover effects and micro-interactions
- Responsive design for all devices
- Dark mode support

### 🌐 Internationalization
- English/Japanese language toggle
- Localized navigation and content
- Currency formatting for JPY
- Persistent language preference

## 📁 Folder Structure

```
ecommerce-site/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── Logo.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   └── ProductDetail.tsx
│   │   ├── contexts/       # React contexts
│   │   │   └── CartContext.tsx
│   │   ├── types/          # TypeScript type definitions
│   │   │   └── index.ts
│   │   ├── data/           # Mock data
│   │   │   └── products.ts
│   │   ├── utils/          # Utility functions
│   │   │   └── currency.ts
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # App entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Backend Express API
│   ├── src/
│   │   ├── routes/         # API routes
│   │   │   └── checkout.ts
│   │   ├── types/          # TypeScript types
│   │   │   └── index.ts
│   │   └── index.ts        # Server entry point
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Stripe account (for payment processing)

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your Stripe keys:
   ```env
   PORT=3001
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **API will be available at:**
   ```
   http://localhost:3001
   ```

## 🧪 Testing Stripe Payments

### Test Card Numbers
Use these Stripe test cards for payment testing:

- **Successful Payment:** `4242 4242 4242 4242`
- **Declined Payment:** `4000 0000 0000 0002`
- **Requires Authentication:** `4000 0025 0000 3155`

### Test Data
- **Expiry Date:** Any future date (e.g., `12/25`)
- **CVC:** Any 3 digits (e.g., `123`)
- **ZIP Code:** Any valid ZIP (e.g., `12345`)

### Testing Flow
1. Add products to cart
2. Click "Proceed to Checkout"
3. Use test card numbers above
4. Complete payment flow
5. Check success/cancel pages

## 🧠 What I Learned

### React Hooks Deep Dive
- **useState:** Managed cart state, UI toggles, and form inputs
- **useEffect:** Handled localStorage persistence, scroll effects, and data fetching
- **useContext:** Created global cart state accessible throughout the app
- **useParams:** Extracted product IDs from URLs for dynamic routing
- **useNavigate:** Programmatic navigation after cart actions

### Modern UI/UX Patterns
- **Glassmorphism:** Created modern, translucent UI elements
- **Gradient Design:** Applied consistent color gradients for visual appeal
- **Micro-interactions:** Added hover effects, animations, and transitions
- **Responsive Design:** Ensured perfect experience across all devices
- **Accessibility:** Implemented focus states, ARIA labels, and keyboard navigation

### Full-Stack Integration
- **API Design:** Created RESTful endpoints with proper error handling
- **TypeScript:** Ensured type safety across frontend and backend
- **Payment Processing:** Integrated Stripe with proper security practices
- **State Management:** Synchronized cart state between components and localStorage
- **Internationalization:** Implemented language switching with persistent preferences

### Performance & Best Practices
- **Code Splitting:** Organized components for optimal loading
- **Error Boundaries:** Graceful error handling throughout the app
- **Loading States:** Smooth user experience during data fetching
- **SEO Optimization:** Proper meta tags and semantic HTML
- **Security:** Input validation, CORS configuration, and secure payment handling

## 📸 Screenshots

*[Screenshots will be added after deployment]*

- Home page with product grid
- Product detail page
- Shopping cart slide-over
- Checkout flow
- Success/cancel pages
- Mobile responsive design

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Backend (Railway/Render)
1. Connect GitHub repository
2. Set environment variables
3. Set build command: `npm run build`
4. Set start command: `npm start`

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using modern web technologies** 