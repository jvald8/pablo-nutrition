import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { SuccessContent } from "./SuccessContent";

function LoadingState() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center py-20"
      style={{ background: "linear-gradient(to bottom, #f0fdf4, white)" }}
    >
      <div className="text-center">
        <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4" style={{ color: "#16a34a" }} />
        <p style={{ color: "#57534e" }}>Loading...</p>
      </div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SuccessContent />
    </Suspense>
  );
}
