import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import Stripe from "stripe";

// Simple in-memory store for idempotency (use Redis/DB in production)
const processedEvents = new Set<string>();

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not configured");
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      console.error("Missing stripe-signature header");
      return NextResponse.json(
        { error: "Missing signature" },
        { status: 400 }
      );
    }

    let event: Stripe.Event;
    const stripe = getStripe();

    // Verify webhook signature - CRITICAL per stripe-integration skill
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }

    // Idempotency check - per stripe-integration best practice
    // Ensures webhook is processed exactly once
    if (processedEvents.has(event.id)) {
      console.log(`Event ${event.id} already processed, skipping`);
      return NextResponse.json({ received: true, duplicate: true });
    }

    // Handle specific events - per stripe-integration critical events
    switch (event.type) {
      // One-time payment success
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutComplete(session);
        break;
      }

      // Payment succeeded (also fires for checkout)
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentSuccess(paymentIntent);
        break;
      }

      // Payment failed
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentFailed(paymentIntent);
        break;
      }

      // Subscription events for future use
      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription created:", subscription.id);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription updated:", subscription.id);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionCanceled(subscription);
        break;
      }

      // Invoice events for subscriptions
      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("Invoice paid:", invoice.id, "Amount:", invoice.amount_paid);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("Invoice payment failed:", invoice.id);
        // TODO: Send payment failure email to customer
        break;
      }

      // Refund processed
      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        console.log("Refund processed for charge:", charge.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Mark event as processed for idempotency
    processedEvents.add(event.id);
    
    // Clean up old events (keep last 1000)
    if (processedEvents.size > 1000) {
      const iterator = processedEvents.values();
      const firstValue = iterator.next().value;
      if (firstValue) {
        processedEvents.delete(firstValue);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

// Handler functions - per stripe-integration patterns

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  console.log("✅ Checkout completed:", {
    sessionId: session.id,
    email: session.customer_details?.email,
    product: session.metadata?.productKey,
    amount: session.amount_total,
  });

  // TODO: Implement your business logic:
  // 1. Save customer to your database
  // 2. Send welcome/confirmation email
  // 3. Schedule onboarding call
  // 4. Add to CRM (HubSpot, etc.)
  // 5. Send Slack notification to Pablo
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  console.log("💰 Payment succeeded:", {
    id: paymentIntent.id,
    amount: paymentIntent.amount,
    customer: paymentIntent.customer,
    metadata: paymentIntent.metadata,
  });

  // TODO: Fulfill the order
  // - Grant access to purchased content
  // - Update user's subscription status
  // - Log to analytics
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  const error = paymentIntent.last_payment_error;
  console.log("❌ Payment failed:", {
    id: paymentIntent.id,
    error: error?.message,
    code: error?.code,
  });

  // TODO: Handle failed payment
  // - Send failure notification email
  // - Update order status
  // - Log for monitoring
}

async function handleSubscriptionCanceled(subscription: Stripe.Subscription) {
  console.log("🚫 Subscription canceled:", {
    id: subscription.id,
    customer: subscription.customer,
  });

  // TODO: Handle cancellation
  // - Revoke access
  // - Send cancellation confirmation email
  // - Log churn for analytics
}
