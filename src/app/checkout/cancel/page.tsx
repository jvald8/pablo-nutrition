import { Metadata } from "next";
import Link from "next/link";
import { X, ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Cancelled | Pablo Lima",
  description: "Your payment was cancelled. No charges were made.",
};

export default function CheckoutCancelPage() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center py-20"
      style={{ backgroundColor: "#fafaf9" }}
    >
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        {/* Cancel icon */}
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "#fef2f2" }}
        >
          <X className="w-10 h-10" style={{ color: "#ef4444" }} />
        </div>

        <h1 
          className="text-display-md mb-4"
          style={{ color: "#1c1917" }}
        >
          Payment Cancelled
        </h1>

        <p className="text-lg mb-8" style={{ color: "#57534e" }}>
          No worries—your payment was cancelled and no charges were made. 
          Your transformation is still waiting for you when you're ready.
        </p>

        {/* Reassurance */}
        <div 
          className="rounded-2xl p-6 mb-8 text-left"
          style={{ backgroundColor: "white", border: "1px solid #e7e5e4" }}
        >
          <h2 
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
          >
            Still have questions?
          </h2>
          
          <p className="mb-4" style={{ color: "#57534e" }}>
            If you're not sure which program is right for you, or if you have any concerns, 
            I'm happy to chat—no pressure, no commitment.
          </p>

          <a
            href="https://wa.me/13055550123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium"
            style={{ color: "#16a34a" }}
          >
            <MessageCircle className="w-5 h-5" />
            Message me on WhatsApp
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all"
            style={{ backgroundColor: "#1c1917", color: "white" }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View Programs
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all"
            style={{ backgroundColor: "#16a34a", color: "white" }}
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
