import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// This is the public key for Stripe. Ideally, it should be in an environment variable.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

export default stripePromise;

// Server-side Stripe instance
export const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
    apiVersion: '2025-01-27-02-custom' as any, // latest stable
});
