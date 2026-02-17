"use client";

import { useState, useEffect } from "react";
import { X, Clock, Users } from "lucide-react";
import Link from "next/link";

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [spotsLeft, setSpotsLeft] = useState(3);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem("urgency-banner-dismissed");
    if (dismissed) {
      setIsVisible(false);
    }
    
    // Simulate dynamic spots (in production, this would come from an API)
    const stored = sessionStorage.getItem("spots-left");
    if (stored) {
      setSpotsLeft(Number(stored));
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("urgency-banner-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 text-white text-center text-sm sm:text-base"
      style={{ 
        background: "linear-gradient(90deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
        borderTop: "1px solid #22c55e"
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span 
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold animate-pulse"
            style={{ backgroundColor: "#ef4444" }}
          >
            <Clock className="w-3 h-3" />
            LIMITED
          </span>
          <span>
            <strong style={{ color: "#4ade80" }}>Only {spotsLeft} spots left</strong> for February coaching
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all"
          style={{ backgroundColor: "#22c55e", color: "white" }}
        >
          Claim Your Spot →
        </Link>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
