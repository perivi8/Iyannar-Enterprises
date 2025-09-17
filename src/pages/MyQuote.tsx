import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText,
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
  Calculator,
  Plus,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
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

const MyQuote = () => {
  useScrollToTop();
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get quote data from localStorage
    try {
      const savedQuote = localStorage.getItem('latestQuote');
      if (savedQuote) {
        setQuoteData(JSON.parse(savedQuote));
      }
    } catch (error) {
      console.error('Error loading quote data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const calculateEstimatedCost = () => {
    if (!quoteData) return '0';
    
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

  const handleDownloadPDF = () => {
    if (quoteData) {
      generateQuotePDF(quoteData);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your quote...</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (!quoteData) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                My Quote
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                View and manage your logistics quote requests
              </p>
            </div>
          </div>
        </section>

        {/* No Quote Found */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">No Quote Found</h2>
              <p className="text-gray-600 mb-8">
                You haven't created any quotes yet. Start by requesting a quote for your logistics needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/quote">
                    <Plus className="w-5 h-5 mr-2" />
                    Create New Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              My Quote
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
              Your latest logistics quote request
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
            {/* Status Alert */}
            <div className="mb-8">
              <Card className="border-l-4 border-l-blue-500 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-1">Quote Status: Under Review</h3>
                      <p className="text-blue-700 text-sm">
                        Our team is reviewing your quote request. You will receive a detailed quotation within 24 hours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

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
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Estimated Cost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ₹{calculateEstimatedCost()}
                      </div>
                      <p className="text-sm text-gray-600">
                        *Preliminary estimate. Final quote will be provided by our team.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" asChild>
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
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/quote">
                        <Plus className="w-4 h-4 mr-2" />
                        New Quote
                      </Link>
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

export default MyQuote;
