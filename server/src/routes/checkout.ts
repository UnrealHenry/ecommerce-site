import express from 'express';
import Stripe from 'stripe';

console.log('Stripe key from env:', process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

// Create checkout session
router.post('/create-session', async (req, res) => {
  try {
    const { items, currency = 'jpy' } = req.body;

    console.log('Creating checkout session with:', { items, currency });
    console.log('Stripe key available:', !!process.env.STRIPE_SECRET_KEY);
    console.log('Stripe key length:', process.env.STRIPE_SECRET_KEY?.length);

    if (!items || items.length === 0) {
      console.log('No items provided in request');
      return res.status(400).json({ error: 'No items provided' });
    }

    // Create line items for Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: currency === 'jpy' ? 'jpy' : 'usd',
        product_data: {
          name: item.product.name,
          description: item.product.description,
          images: [item.product.image],
        },
        unit_amount: currency === 'jpy' ? item.product.price : Math.round(item.product.price * 100), // Convert to cents for USD
      },
      quantity: item.quantity,
    }));

    console.log('Line items created:', lineItems);

    // TEMPORARY: Mock Stripe response for testing
    console.log('Creating mock checkout session...');
    
    // Uncomment the real Stripe code below when you have valid keys
    /*
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/checkout/cancel`,
      metadata: {
        currency,
        itemCount: items.length.toString(),
      },
    });

    console.log('Checkout session created:', session.id);
    res.json({ sessionId: session.id, url: session.url });
    */
    
    // Mock response for testing
    const mockSessionId = 'cs_test_' + Math.random().toString(36).substr(2, 9);
    const mockUrl = 'https://checkout.stripe.com/pay/cs_test_' + Math.random().toString(36).substr(2, 9);
    
    console.log('Mock checkout session created:', mockSessionId);
    res.json({ sessionId: mockSessionId, url: mockUrl });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    console.error('Error type:', typeof error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    res.status(500).json({ error: 'Failed to create checkout session', details: error instanceof Error ? error.message : 'Unknown error' });
  }
});

// Verify payment
router.get('/verify/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    res.json({
      status: session.payment_status,
      amount: session.amount_total,
      currency: session.currency,
      customer: session.customer_details,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ error: 'Failed to verify payment' });
  }
});

export default router; 