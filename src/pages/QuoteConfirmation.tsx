import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle,
  Calendar,
  MapPin,
  Package,
  Truck,
  Clock,
  Phone,
  Mail,
  Download,
  Share,
  Edit,
  Calculator
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { generateQuotePDF } from "@/utils/pdfGenerator";

interface QuoteData {
  // Personal Information
  name: string;
  email: string;
  phone: string;
  company: string;
  
  // Service Details
  serviceType: string;
  vehicleType: string;
  
  // Shipment Details
  pickupLocation: string;
  deliveryLocation: string;
  pickupDate: string;
  deliveryDate: string;
  
  // Cargo Information
  cargoType: string;
  weight: string;
  dimensions: string;
  value: string;
  
  // Additional Services
  insurance: boolean;
  packaging: boolean;
  loading: boolean;
  tracking: boolean;
  
  // Additional Information
  specialRequirements: string;
  urgency: string;
  
  // Generated quote details
  quoteId: string;
  estimatedCost: string;
  submittedAt: string;
}

const QuoteConfirmation = () => {
  useScrollToTop();
  const location = useLocation();
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);

  useEffect(() => {
    // Get quote data from location state or localStorage
    const data = location.state?.quoteData || JSON.parse(localStorage.getItem('latestQuote') || 'null');
    if (data) {
      setQuoteData(data);
    }
  }, [location]);

  const handleDownloadPDF = () => {
    if (quoteData) {
      generateQuotePDF(quoteData);
    }
  };

  if (!quoteData) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">No Quote Found</h1>
            <p className="text-gray-600 mb-8">Please submit a quote request first.</p>
            <Button asChild>
              <Link to="/quote">Create New Quote</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const calculateEstimatedCost = () => {
    let baseCost = 5000; // Base cost
    
    // Vehicle type multiplier
    const vehicleMultipliers: { [key: string]: number } = {
      'mini-truck': 1,
      'medium-truck': 1.5,
      'heavy-truck': 2.5,
      'trailer': 4,
      'container': 3.5,
      'refrigerated': 3
    };
    
    // Urgency multiplier
    const urgencyMultipliers: { [key: string]: number } = {
      'standard': 1,
      'express': 1.5,
      'urgent': 2
    };
    
    baseCost *= vehicleMultipliers[quoteData.vehicleType] || 1;
    baseCost *= urgencyMultipliers[quoteData.urgency] || 1;
    
    // Additional services
    if (quoteData.insurance) baseCost += 1000;
    if (quoteData.packaging) baseCost += 500;
    if (quoteData.loading) baseCost += 800;
    if (quoteData.tracking) baseCost += 300;
    
    return baseCost.toLocaleString('en-IN');
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Quote Confirmed!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
              Your quote request has been successfully submitted.
            </p>
            <div className="bg-white/20 rounded-lg p-4 inline-block">
              <p className="text-lg font-semibold">Quote ID: {quoteData.quoteId}</p>
              <p className="text-sm opacity-90">Submitted on {quoteData.submittedAt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Quote Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Package className="w-5 h-5 mr-2" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="font-semibold">{quoteData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold">{quoteData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-semibold">{quoteData.phone}</p>
                      </div>
                      {quoteData.company && (
                        <div>
                          <p className="text-sm text-gray-600">Company</p>
                          <p className="font-semibold">{quoteData.company}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Service Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Truck className="w-5 h-5 mr-2" />
                      Service Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Service Type</p>
                        <Badge variant="secondary" className="mt-1">
                          {quoteData.serviceType?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Vehicle Type</p>
                        <Badge variant="outline" className="mt-1">
                          {quoteData.vehicleType?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Cargo Type</p>
                        <p className="font-semibold">{quoteData.cargoType?.replace(/\b\w/g, l => l.toUpperCase())}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Urgency</p>
                        <Badge variant={quoteData.urgency === 'urgent' ? 'destructive' : 'default'} className="mt-1">
                          {quoteData.urgency?.replace(/\b\w/g, l => l.toUpperCase())}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipment Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Shipment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Pickup Location</p>
                          <p className="font-semibold">{quoteData.pickupLocation}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Delivery Location</p>
                          <p className="font-semibold">{quoteData.deliveryLocation}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Pickup Date</p>
                          <p className="font-semibold flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {quoteData.pickupDate}
                          </p>
                        </div>
                        {quoteData.deliveryDate && (
                          <div>
                            <p className="text-sm text-gray-600">Required Delivery Date</p>
                            <p className="font-semibold flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {quoteData.deliveryDate}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        {quoteData.weight && (
                          <div>
                            <p className="text-sm text-gray-600">Weight</p>
                            <p className="font-semibold">{quoteData.weight} kg</p>
                          </div>
                        )}
                        {quoteData.dimensions && (
                          <div>
                            <p className="text-sm text-gray-600">Dimensions</p>
                            <p className="font-semibold">{quoteData.dimensions} cm</p>
                          </div>
                        )}
                        {quoteData.value && (
                          <div>
                            <p className="text-sm text-gray-600">Cargo Value</p>
                            <p className="font-semibold">₹{quoteData.value}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Services */}
                {(quoteData.insurance || quoteData.packaging || quoteData.loading || quoteData.tracking) && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Additional Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {quoteData.insurance && <Badge variant="secondary">Cargo Insurance</Badge>}
                        {quoteData.packaging && <Badge variant="secondary">Packaging Services</Badge>}
                        {quoteData.loading && <Badge variant="secondary">Loading/Unloading</Badge>}
                        {quoteData.tracking && <Badge variant="secondary">Real-time Tracking</Badge>}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Special Requirements */}
                {quoteData.specialRequirements && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Special Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{quoteData.specialRequirements}</p>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Estimated Cost */}
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800 flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Estimated Cost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        ₹{calculateEstimatedCost()}
                      </div>
                      <p className="text-sm text-green-700">
                        *Final quote may vary based on actual requirements
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      What's Next?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Review & Contact</p>
                        <p className="text-xs text-gray-600">Our team will review your request within 2 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Detailed Quote</p>
                        <p className="text-xs text-gray-600">Receive detailed pricing within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Confirm & Book</p>
                        <p className="text-xs text-gray-600">Approve quote and schedule service</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/quote" state={{ editQuote: quoteData }}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Quote
                      </Link>
                    </Button>
                    <Button className="w-full" variant="outline" onClick={handleDownloadPDF}>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Share className="w-4 h-4 mr-2" />
                      Share Quote
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Support */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline" asChild>
                      <a href="tel:+919876543210">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Us
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="mailto:quotes@iyannar.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default QuoteConfirmation;
