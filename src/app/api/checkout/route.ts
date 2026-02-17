import { NextRequest, NextResponse } from "next/server";
import { getStripe, PRODUCTS, ProductKey, handleStripeError } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productKey, customerEmail, customerName } = body;

    // Validate product
    if (!productKey || !PRODUCTS[productKey as ProductKey]) {
      return NextResponse.json(
        { error: "Invalid product selected" },
        { status: 400 }
      );
    }

    const product = PRODUCTS[productKey as ProductKey];
    const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

    const stripe = getStripe();

    // Create or retrieve customer for better tracking - per stripe-integration skill
    let customerId: string | undefined;
    if (customerEmail) {
      const existingCustomers = await stripe.customers.list({
        email: customerEmail,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        customerId = existingCustomers.data[0].id;
      } else {
        const newCustomer = await stripe.customers.create({
          email: customerEmail,
          name: customerName,
          metadata: {
            source: "pablo-nutrition-website",
            productInterest: productKey,
          },
        });
        customerId = newCustomer.id;
      }
    }

    // Build line items with product image - per stripe-integration pattern
    const lineItems = [
      {
        price_data: {
          currency: "usd" as const,
          product_data: {
            name: product.name,
            description: product.description,
            // Add images when in production with full URLs
            ...(process.env.NODE_ENV === "production" && {
              images: [`${origin}${product.image}`],
            }),
          },
          unit_amount: product.price,
        },
        quantity: 1,
      },
    ];

    // Create a Stripe checkout session
    // Using CheckoutSessions API as recommended by stripe-best-practices
    const session = await stripe.checkout.sessions.create({
      // Enable automatic_payment_methods per stripe-best-practices
      // Instead of hardcoding payment_method_types
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: product.mode,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      customer: customerId,
      customer_email: customerId ? undefined : customerEmail, // Only use if no customer
      // Metadata for linking to your database - per stripe-integration best practice
      metadata: {
        productKey,
        customerName: customerName || "",
        source: "website_checkout",
      },
      // Collect billing address for records
      billing_address_collection: "required",
      // Phone collection for follow-up
      phone_number_collection: {
        enabled: true,
      },
      // Custom branding
      custom_text: {
        submit: {
          message: "Your transformation journey begins after payment. Pablo will reach out within 24 hours.",
        },
      },
      // Allow promotion codes if you set them up
      allow_promotion_codes: true,
      // Expire after 30 minutes
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    });

    return NextResponse.json({ 
      sessionId: session.id, 
      url: session.url,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    const { message, code } = handleStripeError(error);
    return NextResponse.json(
      { error: message, code },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve session status - useful for success page
export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");
    
    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID required" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer", "line_items"],
    });

    return NextResponse.json({
      status: session.status,
      paymentStatus: session.payment_status,
      customerEmail: session.customer_details?.email,
      amountTotal: session.amount_total,
      productName: session.line_items?.data[0]?.description,
    });
  } catch (error) {
    console.error("Session retrieval error:", error);
    const { message } = handleStripeError(error);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
