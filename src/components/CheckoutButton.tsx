"use client";

import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";

interface CheckoutButtonProps {
  productKey: string;
  className?: string;
  children?: React.ReactNode;
}

export function CheckoutButton({ productKey, className, children }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productKey,
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout using the session URL
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data.error);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={className || "btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        children || (
          <>
            <CreditCard className="w-5 h-5 mr-2" />
            Pay Now
          </>
        )
      )}
    </button>
  );
}
