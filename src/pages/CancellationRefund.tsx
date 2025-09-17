import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CancellationRefund = () => {
  useScrollToTop();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Cancellation & <span className="text-accent">Refund Policy</span>
          </h1>
          <p className="text-xl opacity-90">
            Clear, Practical & Service-Oriented
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              At Iyyanar Enterprises, we aim to provide reliable and efficient logistics services. While we plan every booking with care, we understand that circumstances may change. This policy outlines our approach to cancellations and refunds, ensuring fairness for both our customers and operations.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Order Cancellations</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Cancellation Window:</h3>
            <ul className="mb-6 space-y-2">
              <li>Bookings can be cancelled within 2 hours of confirmation without penalty, provided the vehicle has not been dispatched.</li>
              <li>Once a vehicle has been assigned, loaded, or dispatched, cancellation charges may apply.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">How to Cancel:</h3>
            <ul className="mb-8 space-y-2">
              <li>Customers must provide the Booking ID and reason for cancellation via phone or email.</li>
              <li>Urgent cancellations should be communicated immediately to minimize charges.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Refunds</h2>
            <p className="mb-4">Refunds are considered in the following cases:</p>
            <ul className="mb-6 space-y-2">
              <li>Pre-paid bookings cancelled within the valid cancellation window.</li>
              <li>Services not fulfilled due to operational reasons from Iyyanar Enterprises.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Refund Processing:</h3>
            <ul className="mb-8 space-y-2">
              <li>Approved refunds are initiated within 3–5 business days.</li>
              <li>Refunds are processed to the original payment method (bank transfer, UPI, or card).</li>
              <li>Depending on the provider, it may take 5–10 business days for funds to reflect.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Non-Refundable Cases</h2>
            <p className="mb-4">Refunds will not be provided in the following situations:</p>
            <ul className="mb-8 space-y-2">
              <li>Vehicle already dispatched or goods already loaded.</li>
              <li>Delays caused by traffic, weather, strikes, or other factors beyond our control.</li>
              <li>Incorrect or incomplete delivery details provided by the customer.</li>
              <li>Cancellation after the service has already been partially or fully delivered.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Rescheduling</h2>
            <ul className="mb-8 space-y-2">
              <li>Customers may request rescheduling instead of cancellation.</li>
              <li>Rescheduling is subject to vehicle availability and may incur additional charges.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="mb-4">For cancellation or refund assistance, please contact:</p>
            <div className="bg-secondary/30 p-6 rounded-lg mb-8">
              <h3 className="font-heading text-lg font-semibold mb-3">Iyyanar Enterprises</h3>
              <p className="mb-2">📍 No 60, Umblicampatty, Kadayampatti, Upper Street, Omalur TK, Salem DT, Tamil Nadu – 636351</p>
              <p className="mb-2">📞 Phone: +91 99942 14201 / +91 96009 82184</p>
              <p>📧 Email: contact@iyannarenterprises.live</p>
            </div>

            <div className="text-center text-sm text-muted-foreground border-t pt-6">
              <p>Last Updated: August 2025</p>
              <p>© 2025 Iyyanar Enterprises. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CancellationRefund;
