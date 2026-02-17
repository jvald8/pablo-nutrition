"use client";

import { useState } from "react";
import { Send, Loader2, Check, Calendar, Shield } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Success state - Peak-End Rule from page-cro
  if (isSubmitted) {
    return (
      <div className="text-center py-10 sm:py-12">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse"
          style={{ backgroundColor: "#dcfce7" }}
        >
          <Check className="w-8 h-8" style={{ color: "#16a34a" }} />
        </div>
        <h3 
          className="text-xl sm:text-2xl mb-2"
          style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
        >
          You're In! 🎉
        </h3>
        <p className="mb-4" style={{ color: "#57534e" }}>
          Pablo will personally reach out within 24 hours.
        </p>
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
          style={{ backgroundColor: "#f0fdf4", color: "#15803d" }}
        >
          <Calendar className="w-4 h-4" />
          Check your email for next steps
        </div>
      </div>
    );
  }

  const inputStyles = {
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: "0.75rem",
    border: "1px solid #e7e5e4",
    outline: "none",
    fontSize: "1rem",
    transition: "all 0.2s ease",
    backgroundColor: "white",
  };

  // Multi-step form - Progressive Commitment from form-cro
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Progress indicator - Goal-Gradient Effect */}
      <div className="flex items-center gap-2 mb-6">
        <div 
          className="flex-1 h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "#e7e5e4" }}
        >
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ 
              width: step === 1 ? "50%" : "100%", 
              backgroundColor: "#22c55e" 
            }}
          />
        </div>
        <span className="text-sm font-medium" style={{ color: "#78716c" }}>
          Step {step}/2
        </span>
      </div>

      {step === 1 ? (
        <>
          {/* Step 1: Low friction start - just name and email */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: "#44403c" }}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={inputStyles}
              placeholder="John Doe"
              autoFocus
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: "#44403c" }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={inputStyles}
              placeholder="john@example.com"
            />
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!formData.name || !formData.email}
            className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue →
          </button>

          {/* Friction reducer */}
          <p className="text-center text-sm" style={{ color: "#a8a29e" }}>
            Takes less than 30 seconds
          </p>
        </>
      ) : (
        <>
          {/* Step 2: Goal and optional phone */}
          <div>
            <label
              htmlFor="goal"
              className="block text-sm font-medium mb-2"
              style={{ color: "#44403c" }}
            >
              What's your main goal?
            </label>
            <select
              id="goal"
              name="goal"
              required
              value={formData.goal}
              onChange={handleChange}
              style={inputStyles}
            >
              <option value="">Select your goal...</option>
              <option value="weight-loss">Lose weight & get lean</option>
              <option value="muscle">Build muscle & strength</option>
              <option value="energy">More energy & better health</option>
              <option value="performance">Athletic performance</option>
              <option value="not-sure">Not sure yet - need guidance</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2"
              style={{ color: "#44403c" }}
            >
              Phone <span style={{ color: "#a8a29e" }}>(optional - for faster response)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyles}
              placeholder="(305) 555-0123"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn btn-ghost"
              style={{ padding: "0.75rem 1.5rem" }}
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.goal}
              className="btn btn-primary flex-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Get My Free Consultation
                </>
              )}
            </button>
          </div>
        </>
      )}

      {/* Trust signals near form - from form-cro */}
      <div 
        className="flex items-center justify-center gap-4 pt-4 text-xs"
        style={{ color: "#a8a29e" }}
      >
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" />
          No spam, ever
        </span>
        <span>•</span>
        <span>Unsubscribe anytime</span>
      </div>
    </form>
  );
}
