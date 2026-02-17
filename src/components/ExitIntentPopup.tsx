"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Gift, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Exit intent detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger when mouse moves to top of viewport (exit intent)
    if (e.clientY <= 0 && !hasShown) {
      // Check if already dismissed this session
      const dismissed = sessionStorage.getItem("exit-popup-dismissed");
      if (!dismissed) {
        setIsVisible(true);
        setHasShown(true);
      }
    }
  }, [hasShown]);

  useEffect(() => {
    // Only on desktop (exit intent doesn't work well on mobile)
    if (window.innerWidth > 768) {
      // Delay enabling popup to avoid triggering on page load
      const timer = setTimeout(() => {
        document.addEventListener("mouseleave", handleMouseLeave);
      }, 5000); // Wait 5 seconds before enabling

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("exit-popup-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    await new Promise((r) => setTimeout(r, 500));
    setIsSubmitted(true);
    // Close after 3 seconds
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup - Center modal from popup-cro */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button - Always visible from popup-cro */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            aria-label="Close popup"
          >
            <X className="w-5 h-5" style={{ color: "#57534e" }} />
          </button>

          {isSubmitted ? (
            // Success state - link to PDF
            <div className="p-8 text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#dcfce7" }}
              >
                <Gift className="w-8 h-8" style={{ color: "#16a34a" }} />
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: "#1c1917" }}
              >
                Your Guide is Ready! 🎉
              </h3>
              <p className="mb-4" style={{ color: "#57534e" }}>
                Click below to download your free guide.
              </p>
              <a
                href="/5-nutrition-mistakes-guide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "#16a34a" }}
              >
                <Gift className="w-4 h-4" />
                Download Free Guide
              </a>
              <p className="text-xs mt-3" style={{ color: "#a8a29e" }}>
                We also sent it to your email for safekeeping.
              </p>
            </div>
          ) : (
            <>
              {/* Header with offer - Lead Magnet pattern from popup-cro */}
              <div 
                className="p-6 text-center text-white"
                style={{ backgroundColor: "#1c1917" }}
              >
                <span 
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ backgroundColor: "#22c55e" }}
                >
                  <Gift className="w-3 h-3" />
                  FREE GUIDE
                </span>
                <h3 
                  className="text-xl sm:text-2xl mb-2"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Wait! Don't Leave Empty-Handed
                </h3>
                <p className="text-sm" style={{ color: "#a8a29e" }}>
                  Get my "5 Nutrition Mistakes Killing Your Progress" guide free
                </p>
              </div>

              {/* Form - Email only from popup-cro */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full px-4 py-3 rounded-xl text-base"
                    style={{ 
                      border: "2px solid #e7e5e4",
                      outline: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-all"
                  style={{ backgroundColor: "#16a34a" }}
                >
                  Send Me the Free Guide
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Trust element - from popup-cro */}
                <p 
                  className="text-center text-xs mt-3 flex items-center justify-center gap-1"
                  style={{ color: "#a8a29e" }}
                >
                  <Shield className="w-3 h-3" />
                  No spam. Unsubscribe anytime.
                </p>

                {/* Polite decline - from popup-cro */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full text-center text-sm mt-4 transition-colors"
                  style={{ color: "#a8a29e" }}
                >
                  No thanks, I'll figure it out myself
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
