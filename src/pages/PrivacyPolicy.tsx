import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <span className="text-accent">Privacy Policy</span>
          </h1>
          <p className="text-xl opacity-90">
            Your Data, Our Responsibility
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              At Iyyanar Enterprises, we respect the trust you place in us when you choose our transport and logistics services. Protecting your personal and business information is as important to us as ensuring your goods are delivered safely and on time.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This Privacy Policy explains what data we collect, why we collect it, how we protect it, and your rights when engaging with our services.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="mb-4">When you interact with us—through booking, inquiries, or our logistics services—we may collect the following information:</p>
            <ul className="mb-8 space-y-2">
              <li>Full Name / Business Name</li>
              <li>Email Address & Phone Number</li>
              <li>Pickup & Delivery Address</li>
              <li>Shipment Details (goods type, weight, volume, etc.)</li>
              <li>Payment Details (via secure third-party gateways)</li>
              <li>Logistics Tracking Data</li>
              <li>Order History & Service Preferences</li>
              <li>Device & Browser Information (if using our website)</li>
              <li>Cookies & Analytics Data (for service performance)</li>
            </ul>
            <p className="mb-8">We only collect the data necessary to deliver efficient, reliable, and secure logistics services.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why We Collect Your Information</h2>
            <p className="mb-4">Your data is used for legitimate business purposes, including:</p>
            <ul className="mb-8 space-y-2">
              <li>Processing and managing transport bookings</li>
              <li>Providing real-time shipment tracking updates</li>
              <li>Coordinating pickups, deliveries, and logistics routes</li>
              <li>Sending confirmations, invoices, and service updates</li>
              <li>Offering customer support and assistance</li>
              <li>Improving operational efficiency and service quality</li>
              <li>Meeting legal, tax, and regulatory requirements</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">How We Protect Your Information</h2>
            <p className="mb-4">We implement strong measures to safeguard your information:</p>
            <ul className="mb-8 space-y-2">
              <li><strong>SSL Encryption:</strong> All data shared online is encrypted</li>
              <li><strong>Secure Payments:</strong> Payments are processed through PCI-compliant providers—we never store your banking details</li>
              <li><strong>Restricted Access:</strong> Only authorized staff access sensitive information</li>
              <li><strong>Server Protection:</strong> Firewalls and access controls safeguard our systems</li>
              <li><strong>Regular Audits:</strong> Systems are reviewed periodically to identify and prevent vulnerabilities</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Your Rights & Choices</h2>
            <p className="mb-4">As a customer, you have full control over your personal data. You may:</p>
            <ul className="mb-6 space-y-2">
              <li>Request access to the data we hold about you</li>
              <li>Ask for updates or corrections</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications</li>
              <li>Raise concerns about data handling practices</li>
            </ul>
            <p className="mb-8">All valid requests will be addressed within 30 business days.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Third-Party Sharing</h2>
            <p className="mb-4">We do not sell or rent your data. Information is shared only with:</p>
            <ul className="mb-8 space-y-2">
              <li>Logistics partners and carriers (for transport and delivery execution)</li>
              <li>Payment processors (for secure transactions)</li>
              <li>Regulatory authorities (if legally required)</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
            <p className="mb-8">This Privacy Policy may be updated periodically to reflect changes in regulations, technologies, or our business practices. Updates will always be posted here with a revised "Last Updated" date.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="mb-4">For any privacy-related questions, requests, or concerns, please contact:</p>
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

export default PrivacyPolicy;
