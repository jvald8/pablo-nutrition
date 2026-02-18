"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, Mail, Loader2, Phone } from "lucide-react";

interface SessionData {
  status: string;
  paymentStatus: string;
  customerEmail: string;
  amountTotal: number;
  productName: string;
}

export function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "complete" && data.paymentStatus === "paid") {
            setSessionData(data);
          } else {
            setError(true);
          }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <section 
        className="min-h-screen flex items-center justify-center py-20"
        style={{ background: "linear-gradient(to bottom, #f0fdf4, white)" }}
      >
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4" style={{ color: "#16a34a" }} />
          <p style={{ color: "#57534e" }}>Verifying your payment...</p>
        </div>
      </section>
    );
  }

  if (error || !sessionData) {
    return (
      <section 
        className="min-h-screen flex items-center justify-center py-20"
        style={{ backgroundColor: "#fafaf9" }}
      >
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-display-md mb-4" style={{ color: "#1c1917" }}>
            Something went wrong
          </h1>
          <p className="mb-8" style={{ color: "#57534e" }}>
            We couldn't verify your payment. If you were charged, please contact us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium"
            style={{ backgroundColor: "#16a34a", color: "white" }}
          >
            Contact Support
          </Link>
        </div>
      </section>
    );
  }

  const formatAmount = (cents: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-20"
      style={{ background: "linear-gradient(to bottom, #f0fdf4, white)" }}
    >
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        {/* Success icon with animation */}
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"
          style={{ backgroundColor: "#dcfce7" }}
        >
          <Check className="w-10 h-10" style={{ color: "#16a34a" }} />
        </div>

        <h1 
          className="text-display-md mb-2"
          style={{ color: "#1c1917" }}
        >
          Welcome to the Team! 🎉
        </h1>

        <p className="text-lg mb-2" style={{ color: "#57534e" }}>
          Your payment of <strong style={{ color: "#16a34a" }}>{formatAmount(sessionData.amountTotal)}</strong> was successful.
        </p>

        <p className="mb-8" style={{ color: "#78716c" }}>
          Confirmation sent to <strong>{sessionData.customerEmail}</strong>
        </p>

        {/* Next steps card */}
        <div 
          className="rounded-2xl p-6 mb-8 text-left"
          style={{ backgroundColor: "white", border: "1px solid #e7e5e4" }}
        >
          <h2 
            className="text-lg font-semibold mb-4 flex items-center gap-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
          >
            <span className="text-2xl">📋</span> What happens next?
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm font-bold"
                style={{ backgroundColor: "#16a34a" }}
              >
                1
              </div>
              <div>
                <p className="font-medium" style={{ color: "#1c1917" }}>Check your email</p>
                <p className="text-sm" style={{ color: "#78716c" }}>
                  You'll receive a receipt and welcome message within minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm font-bold"
                style={{ backgroundColor: "#16a34a" }}
              >
                2
              </div>
              <div>
                <p className="font-medium" style={{ color: "#1c1917" }}>Pablo will reach out</p>
                <p className="text-sm" style={{ color: "#78716c" }}>
                  Expect a personal call or WhatsApp message within 24 hours to schedule your first session.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm font-bold"
                style={{ backgroundColor: "#16a34a" }}
              >
                3
              </div>
              <div>
                <p className="font-medium" style={{ color: "#1c1917" }}>Begin your transformation</p>
                <p className="text-sm" style={{ color: "#78716c" }}>
                  Your personalized plan starts as soon as we complete your evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div 
          className="rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ backgroundColor: "#f5f5f4" }}
        >
          <span className="text-sm" style={{ color: "#78716c" }}>Questions?</span>
          <a
            href="mailto:contact@nutritionplustraining.com"
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#16a34a" }}
          >
            <Mail className="w-4 h-4" />
            contact@nutritionplustraining.com
          </a>
          <a
            href="https://wa.me/13055550123"
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#16a34a" }}
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all group"
          style={{ backgroundColor: "#16a34a", color: "white" }}
        >
          Return to Home
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
