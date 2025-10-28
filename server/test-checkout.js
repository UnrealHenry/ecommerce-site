require('dotenv').config();
const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const testItems = [
  {
    product: {
      id: "1",
      name: "Test Product",
      description: "Test Description",
      price: 1000,
      image: "https://example.com/image.jpg"
    },
    quantity: 1
  }
];

console.log('Testing checkout session creation...');

stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: testItems.map(item => ({
    price_data: {
      currency: 'jpy',
      product_data: {
        name: item.product.name,
        description: item.product.description,
        images: [item.product.image],
      },
      unit_amount: item.product.price,
    },
    quantity: item.quantity,
  })),
  mode: 'payment',
  success_url: 'http://localhost:5173/success',
  cancel_url: 'http://localhost:5173/cancel',
})
.then(session => {
  console.log('✅ Checkout session created successfully!');
  console.log('Session ID:', session.id);
  console.log('Checkout URL:', session.url);
})
.catch(err => {
  console.error('❌ Checkout session error:', err.message);
  console.error('Full error:', err);
}); 