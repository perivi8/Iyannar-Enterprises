import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
            Terms & <span className="text-accent">Conditions</span>
          </h1>
          <p className="text-xl opacity-90">
            Last Updated: August 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to Iyyanar Enterprises. By booking our transport services, accessing our website, or engaging with us in any way, you agree to comply with the following Terms & Conditions. These terms govern all logistics services, bookings, and interactions with Iyyanar Enterprises.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              If you do not agree with any part of these terms, please discontinue use of our services.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. General Use of Services</h2>
            <ul className="mb-8 space-y-2">
              <li>You confirm that you are legally authorized to book transport services either on your own behalf or for your business entity.</li>
              <li>Services must only be used for lawful transportation of goods. Prohibited or illegal goods will not be carried under any circumstances.</li>
              <li>Iyyanar Enterprises reserves the right to refuse, suspend, or terminate services in cases of misuse, fraud, or regulatory violations.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Service Bookings</h2>
            <ul className="mb-8 space-y-2">
              <li>Bookings are confirmed only upon receipt of required details, including pickup/delivery addresses, goods type, and payment arrangements.</li>
              <li>Customers must provide accurate shipment information, including dimensions, weight, and handling requirements.</li>
              <li>Any changes to bookings must be communicated before dispatch.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Payments</h2>
            <ul className="mb-8 space-y-2">
              <li>All services must be paid for in full at the time of booking unless alternate arrangements have been approved.</li>
              <li>Accepted payment methods include UPI, bank transfers, debit/credit cards, or authorized offline methods.</li>
              <li>We do not store sensitive payment information; all transactions are securely processed through trusted third-party providers.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Delivery & Logistics</h2>
            <ul className="mb-8 space-y-2">
              <li>Delivery timelines are estimates and depend on distance, road conditions, weather, and other logistical factors.</li>
              <li>Customers are responsible for ensuring proper loading/unloading facilities at pickup and delivery points.</li>
              <li>Risk of goods passes to the customer once delivery is completed at the agreed destination.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Liability</h2>
            <p className="mb-4">Iyyanar Enterprises takes utmost care in handling goods but shall not be liable for:</p>
            <ul className="mb-6 space-y-2">
              <li>Delays caused by traffic, weather, strikes, or force majeure events</li>
              <li>Damage caused by improper packaging by the customer</li>
              <li>Loss of goods due to incorrect or incomplete delivery details provided by the customer</li>
            </ul>
            <p className="mb-8">Liability, if any, shall be limited to the service fee paid unless insurance coverage is separately arranged.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Cancellations & Refunds</h2>
            <ul className="mb-8 space-y-2">
              <li>Cancellations are permitted only within a limited timeframe before dispatch.</li>
              <li>Refund eligibility depends on service stage and administrative costs incurred.</li>
              <li>For details, refer to our Cancellation & Refund Policy.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Customer Responsibilities</h2>
            <p className="mb-4">By booking with us, customers agree to:</p>
            <ul className="mb-8 space-y-2">
              <li>Provide complete and accurate shipment details</li>
              <li>Ensure goods are properly packaged for safe transport</li>
              <li>Comply with all applicable laws and regulations regarding goods movement</li>
              <li>Not transport prohibited or hazardous items without proper clearance</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="mb-8">All content on our website, including text, images, and branding, is the intellectual property of Iyyanar Enterprises. Unauthorized reproduction or use is prohibited.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. Governing Law & Jurisdiction</h2>
            <p className="mb-8">These terms are governed by the laws of India, and any disputes will fall under the jurisdiction of the courts in Salem, Tamil Nadu.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
            <p className="mb-4">For questions, clarifications, or assistance regarding these Terms & Conditions, please contact:</p>
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

export default TermsConditions;
