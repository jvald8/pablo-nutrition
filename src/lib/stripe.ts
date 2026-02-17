import Stripe from "stripe";

// Server-side Stripe instance - using latest API version per stripe-best-practices
// Initialize lazily to avoid build-time errors when env vars aren't available
let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not configured");
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-01-28.clover",
      typescript: true,
    });
  }
  return stripeInstance;
}

// For backwards compatibility - use getStripe() in API routes
export const stripe = {
  get checkout() { return getStripe().checkout; },
  get customers() { return getStripe().customers; },
  get webhooks() { return getStripe().webhooks; },
};

// Product/Price configuration with images per stripe-integration skill
export const PRODUCTS = {
  evaluation: {
    name: "Evaluation + Results Report",
    description: "Complete body composition analysis, lab work, and written report with personalized recommendations",
    price: 18500, // in cents - per stripe-integration best practice
    image: "/images/pablo-pro.JPG",
    mode: "payment" as const,
  },
  nutritionGuide: {
    name: "Personalized Nutrition Guide",
    description: "Custom nutrition and lifestyle guide aligned with your goals and daily routine",
    price: 38000,
    image: "/images/pablo-pro.JPG",
    mode: "payment" as const,
  },
  habitBuilder: {
    name: "Habit Builder Package",
    description: "8-week transformation program with weekly calls, accountability, and ongoing support",
    price: 71500, // Initial payment
    image: "/images/pablo-pro.JPG",
    mode: "payment" as const,
    hasRecurring: true,
    recurringPrice: 38000,
  },
  performanceUpgrade: {
    name: "Performance Upgrade Package",
    description: "12-week intensive with personalized training plan and nutrition integration",
    price: 121500,
    image: "/images/pablo-pro.JPG",
    mode: "payment" as const,
    hasRecurring: true,
    recurringPrice: 55500,
  },
  elitePerformance: {
    name: "Elite High Performance Package",
    description: "Maximum accountability with 2x weekly training sessions and elite-level support",
    price: 151500,
    image: "/images/pablo-pro.JPG",
    mode: "payment" as const,
    hasRecurring: true,
    recurringPrice: 95000,
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;

// Helper to format price for display
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

// Stripe error handling helper per stripe-integration skill
export function handleStripeError(error: unknown): { message: string; code: string } {
  if (error instanceof Stripe.errors.StripeError) {
    return {
      message: error.message || "An error occurred with the payment",
      code: error.code || "unknown_error",
    };
  }
  return {
    message: "An unexpected error occurred",
    code: "unknown_error",
  };
}
