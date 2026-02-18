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

// Product/Price configuration matching actual Stripe products
// IMPORTANT: Replace the priceId values below with your real Stripe Price IDs
// Find them at: https://dashboard.stripe.com/products → click product → copy Price ID (starts with "price_")
export const PRODUCTS = {
  evaluation: {
    name: "Evaluation + Results Report",
    description: "Complete body composition analysis, lab work, and written report with personalized recommendations",
    priceId: process.env.STRIPE_PRICE_EVALUATION || "",
    displayPrice: 185,
    mode: "payment" as const,
  },
  nutritionGuide: {
    name: "Personalized Nutrition & Habits Guide",
    description: "Custom nutrition and lifestyle guide aligned with your goals and daily routine",
    priceId: process.env.STRIPE_PRICE_NUTRITION_GUIDE || "",
    displayPrice: 380,
    mode: "payment" as const,
  },
  habitBuilderInitial: {
    name: "Habit Builder - Initial Investment",
    description: "8-week transformation program — initial investment to get started",
    priceId: process.env.STRIPE_PRICE_HABIT_BUILDER_INITIAL || "",
    displayPrice: 715,
    mode: "payment" as const,
  },
  habitBuilderMonthly: {
    name: "Habit Builder - Monthly Subscription",
    description: "Ongoing monthly support with weekly calls, progress reviews, and adjustments",
    priceId: process.env.STRIPE_PRICE_HABIT_BUILDER_MONTHLY || "",
    displayPrice: 380,
    mode: "subscription" as const,
  },
  performanceUpgradeInitial: {
    name: "Performance Upgrade - Initial Investment",
    description: "12-week intensive program — initial investment to get started",
    priceId: process.env.STRIPE_PRICE_PERFORMANCE_INITIAL || "",
    displayPrice: 1215,
    mode: "payment" as const,
  },
  performanceUpgradeMonthly: {
    name: "Performance Upgrade - Monthly Subscription",
    description: "Ongoing monthly support with training integration and nutrition coaching",
    priceId: process.env.STRIPE_PRICE_PERFORMANCE_MONTHLY || "",
    displayPrice: 555,
    mode: "subscription" as const,
  },
  eliteInitial: {
    name: "Elite High Performance - Initial Investment",
    description: "Premium transformation program — initial investment to get started",
    priceId: process.env.STRIPE_PRICE_ELITE_INITIAL || "",
    displayPrice: 1515,
    mode: "payment" as const,
  },
  eliteMonthly: {
    name: "Elite High Performance - Monthly Subscription",
    description: "Maximum accountability with 2x weekly training sessions and elite-level support",
    priceId: process.env.STRIPE_PRICE_ELITE_MONTHLY || "",
    displayPrice: 950,
    mode: "subscription" as const,
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;

// Package groupings for display on the programs page
export const PACKAGES = {
  habitBuilder: {
    initial: "habitBuilderInitial" as ProductKey,
    monthly: "habitBuilderMonthly" as ProductKey,
  },
  performanceUpgrade: {
    initial: "performanceUpgradeInitial" as ProductKey,
    monthly: "performanceUpgradeMonthly" as ProductKey,
  },
  elite: {
    initial: "eliteInitial" as ProductKey,
    monthly: "eliteMonthly" as ProductKey,
  },
};

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
