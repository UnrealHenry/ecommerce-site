# E-Commerce Store

A full-stack online store with Stripe payment integration. This was my first time building something with real payments, and it turned out pretty cool! Everything is in Japanese Yen since I wanted to practice working with different currencies.

## Features

- Product browsing with search and filters
- Shopping cart that saves to localStorage
- Stripe checkout integration (test mode)
- English/Japanese language toggle
- Responsive design that works on mobile

## Tech Stack

**Frontend:**
- React 19 with TypeScript
- Tailwind CSS
- React Router
- Vite

**Backend:**
- Node.js + Express
- TypeScript
- Stripe API
- CORS for cross-origin requests

## Setup

You'll need Node.js 18+ and a Stripe account (free for testing).

### Frontend

```bash
cd client
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend

```bash
cd server
npm install

# Copy the env file and add your Stripe keys
cp env.example .env
# Edit .env with your keys

npm run dev
# Runs on http://localhost:3001
```

### Getting Stripe Keys

1. Sign up at https://stripe.com
2. Go to Developers > API keys
3. Copy your test keys (they start with `sk_test_` and `pk_test_`)
4. Add them to your `.env` file

## Testing Payments

Use these Stripe test cards:

- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`

For expiry, use any future date. CVC can be any 3 digits.

## What I Learned

This project taught me a lot about full-stack development:

- **Stripe Integration** - Setting up checkout sessions, handling webhooks, managing payment states
- **Cart Management** - Syncing cart state across components and persisting to localStorage
- **API Design** - Building a clean REST API with proper error handling
- **Currency Handling** - Working with JPY and the Intl.NumberFormat API
- **Security** - Keeping API keys safe, validating requests, handling CORS properly

The trickiest part was getting the Stripe checkout flow working correctly, especially the success/cancel page handling.

## Deployment

The frontend works great on Vercel. For the backend, I'd recommend Railway or Render - they both have free tiers that work well for Node.js apps.

Just remember to:
1. Set your environment variables on the hosting platform
2. Update the FRONTEND_URL to match your deployed frontend
3. Switch to production Stripe keys when you're ready

## License

MIT
