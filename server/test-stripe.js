require('dotenv').config();
const Stripe = require('stripe');

console.log('Testing Stripe key...');
console.log('Key length:', process.env.STRIPE_SECRET_KEY?.length || 'undefined');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Test the key by creating a simple customer list
stripe.customers.list({ limit: 1 })
  .then(customers => {
    console.log('✅ Stripe key works!');
    console.log('Customer count:', customers.data.length);
  })
  .catch(err => {
    console.error('❌ Stripe key error:', err.message);
    console.error('Full error:', err);
  });