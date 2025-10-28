"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = __importDefault(require("stripe"));
console.log('Stripe key from env:', process.env.STRIPE_SECRET_KEY);
const router = express_1.default.Router();
// Initialize Stripe with secret key
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2023-10-16',
});
// Create checkout session
router.post('/create-session', async (req, res) => {
    try {
        const { items, currency = 'jpy' } = req.body;
        console.log('Creating checkout session with:', { items, currency });
        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'No items provided' });
        }
        // Create line items for Stripe
        const lineItems = items.map((item) => ({
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
        // Create checkout session
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
    }
    catch (error) {
        console.error('Stripe checkout error:', error);
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
    }
    catch (error) {
        console.error('Payment verification error:', error);
        res.status(500).json({ error: 'Failed to verify payment' });
    }
});
exports.default = router;
//# sourceMappingURL=checkout.js.map