# Stripe Payment Integration Setup

Based on best practices from [stripe-integration skill](https://skills.sh/wshobson/agents/stripe-integration) and [stripe-best-practices](https://skills.sh/stripe/ai/stripe-best-practices).

## 1. Get Your Stripe API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)

## 2. Create Products in Stripe

Go to [Stripe Products](https://dashboard.stripe.com/products) and create:

| Product | Price | Type |
|---------|-------|------|
| Evaluation + Results Report | $185.00 | One-time |
| Personalized Nutrition Guide | $380.00 | One-time |
| Habit Builder Package | $715.00 initial | One-time |
| Performance Upgrade Package | $1,215.00 initial | One-time |
| Elite High Performance | $1,515.00 initial | One-time |

## 3. Set Up Webhooks

1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Set endpoint URL: `https://yourdomain.com/api/webhook`
4. Select events:
   - `checkout.session.completed` ✅
   - `payment_intent.succeeded` ✅
   - `payment_intent.payment_failed` ✅
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
   - `charge.refunded`
5. Copy the **Signing secret** (starts with `whsec_`)

## 4. Configure Environment Variables

Create a `.env.local` file in the `site` folder:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here

# Optional: Site URL for production
NEXT_PUBLIC_URL=https://yourdomain.com
```

## 5. Test Payments

Use these test card numbers:

| Card | Number | Use Case |
|------|--------|----------|
| Success | `4242 4242 4242 4242` | Successful payment |
| Declined | `4000 0000 0000 0002` | Card declined |
| 3D Secure | `4000 0025 0000 3155` | Requires authentication |
| Insufficient Funds | `4000 0000 0000 9995` | Insufficient funds |

Use any future expiry date and any 3-digit CVC.

## 6. Test Webhooks Locally

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to Stripe
stripe login

# Forward webhooks to your local server
stripe listen --forward-to localhost:3000/api/webhook

# Copy the webhook signing secret shown and add to .env.local
```

## 7. Go Live Checklist

Per [Stripe Go Live Checklist](https://stripe.com/docs/payments/go-live-checklist):

- [ ] Switch to live API keys
- [ ] Update webhook endpoint to production URL
- [ ] Test with a real card (refund immediately)
- [ ] Enable email receipts in Stripe Dashboard
- [ ] Configure custom branding
- [ ] Set up fraud prevention rules
- [ ] Add customer support contact info

## Architecture

### Files Created

```
site/
├── src/
│   ├── lib/
│   │   └── stripe.ts              # Stripe config & products
│   ├── app/
│   │   └── api/
│   │       ├── checkout/
│   │       │   └── route.ts       # Checkout session creation
│   │       └── webhook/
│   │           └── route.ts       # Webhook handler
│   │   └── checkout/
│   │       ├── success/
│   │       │   └── page.tsx       # Payment success page
│   │       └── cancel/
│   │           └── page.tsx       # Payment cancelled page
│   └── components/
│       └── CheckoutButton.tsx     # Reusable checkout button
```

### Best Practices Implemented

1. **CheckoutSessions API** - Using Stripe-hosted checkout (recommended over Payment Intents for this use case)
2. **Webhook Verification** - All webhooks verified with signature
3. **Idempotency** - Webhooks processed exactly once
4. **Customer Management** - Creates/retrieves customers for tracking
5. **Metadata** - Links Stripe objects to your database
6. **Error Handling** - Graceful handling of all Stripe errors
7. **Session Verification** - Success page verifies payment status

### Payment Flow

```
1. User clicks "Get Started" on pricing page
2. CheckoutButton calls /api/checkout
3. Server creates Stripe Checkout Session
4. User redirected to Stripe-hosted checkout
5. User completes payment
6. Stripe sends webhook to /api/webhook
7. User redirected to /checkout/success
8. Success page verifies session status
9. User sees personalized confirmation
```

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Discord](https://discord.gg/stripe)
