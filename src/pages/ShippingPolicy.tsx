import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShippingPolicy = () => {
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
            Shipping & <span className="text-accent">Logistics Policy</span>
          </h1>
          <p className="text-xl opacity-90">
            Reliable, On-Time & Secure Transport
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              At Iyyanar Enterprises, we are committed to providing safe, efficient, and timely transportation of goods across Tamil Nadu and beyond. This Logistics Policy outlines how we manage bookings, handle shipments, and ensure smooth delivery of your consignments.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Order Processing & Dispatch</h2>
            <ul className="mb-8 space-y-2">
              <li>Bookings are confirmed once shipment details and payments are received.</li>
              <li>Dispatch timelines depend on distance, load size, and vehicle availability.</li>
              <li>Customers will be notified in advance regarding pickup schedules and expected delivery windows.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Coverage Areas</h2>
            <ul className="mb-8 space-y-2">
              <li><strong>Primary Coverage:</strong> Tamil Nadu, with extended services across South India.</li>
              <li><strong>Interstate Transport:</strong> Available for select routes on request.</li>
              <li><strong>Custom Logistics Solutions:</strong> Bulk or specialized goods transport can be arranged with prior discussion.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Delivery Timelines</h2>
            <ul className="mb-6 space-y-2">
              <li><strong>Within Tamil Nadu:</strong> 1–3 business days (depending on distance and load).</li>
              <li><strong>South India (Interstate):</strong> 3–7 business days.</li>
              <li><strong>Bulk/Heavy Consignments:</strong> Timelines will be shared at the time of booking.</li>
            </ul>
            <p className="mb-8"><strong>Note:</strong> Delivery times are estimates and may vary due to road conditions, weather, or unforeseen disruptions.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Charges & Fees</h2>
            <p className="mb-4">Transport charges are calculated based on:</p>
            <ul className="mb-6 space-y-2">
              <li>Distance (pickup to destination)</li>
              <li>Type and weight of goods</li>
              <li>Vehicle capacity required</li>
            </ul>
            <p className="mb-8">Additional fees may apply for loading/unloading assistance, tolls, or special handling needs. All charges are communicated clearly during booking.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Packaging & Handling</h2>
            <ul className="mb-8 space-y-2">
              <li>Customers must ensure goods are properly packed and secured before pickup.</li>
              <li>Fragile, hazardous, or special goods must be declared in advance for safe handling.</li>
              <li>Iyyanar Enterprises provides professional loading and unloading support on request (subject to service charges).</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Tracking & Updates</h2>
            <ul className="mb-8 space-y-2">
              <li>Customers will receive booking confirmation and dispatch details via SMS, phone, or email.</li>
              <li>For bulk consignments, vehicle details (driver contact, vehicle number) may be shared for direct coordination.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Delays & Exceptions</h2>
            <p className="mb-4">While we strive for timely delivery, delays may occur due to:</p>
            <ul className="mb-6 space-y-2">
              <li>Traffic congestion or roadblocks</li>
              <li>Weather disruptions or natural calamities</li>
              <li>Transport strikes or regulatory checks</li>
              <li>Force majeure events beyond our control</li>
            </ul>
            <p className="mb-8">In such cases, our support team will notify customers promptly with updated delivery estimates.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Customer Responsibilities</h2>
            <ul className="mb-8 space-y-2">
              <li>Provide accurate pickup and delivery details.</li>
              <li>Ensure accessibility for trucks and heavy vehicles at both ends.</li>
              <li>Arrange manpower or equipment for unloading unless prior arrangements are made with us.</li>
              <li>Declare restricted or regulated goods to avoid penalties.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="mb-4">For shipping or logistics-related queries, please contact:</p>
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

export default ShippingPolicy;
