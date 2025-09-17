import { useEffect, useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  CreditCard, 
  Phone, 
  Mail, 
  Download,
  Home,
  Truck,
  Clock
} from "lucide-react";

interface BookingData {
  orderId: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    price: string;
    quantity: number;
    features: string[];
  }>;
  address: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  payment: {
    method: string;
    cardNumber?: string;
    cardholderName?: string;
    bankName?: string;
  };
  timestamp: string;
}

const BookingConfirmation = () => {
  useScrollToTop();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem('lastBooking');
    if (savedBooking) {
      setBookingData(JSON.parse(savedBooking));
    }
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPaymentMethodDisplay = (method: string) => {
    switch (method) {
      case 'credit-card':
        return 'Credit Card';
      case 'debit-card':
        return 'Debit Card';
      case 'net-banking':
        return 'Net Banking';
      default:
        return method;
    }
  };

  const handleDownloadReceipt = () => {
    // In a real application, this would generate and download a PDF receipt
    alert('Receipt download functionality would be implemented here');
  };

  if (!bookingData) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">No Booking Found</h1>
            <p className="text-muted-foreground mb-8">
              We couldn't find your booking details. Please try booking again.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Success Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-green-700 mb-6">
              Thank you for choosing Iyannar Enterprises. Your booking has been successfully processed.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Booking ID</p>
              <p className="text-2xl font-bold text-primary">{bookingData.orderId}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-accent" />
                    Booked Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookingData.items.map((item, index) => (
                      <div key={item.id} className="flex justify-between items-start p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <Badge variant="secondary">Qty: {item.quantity}</Badge>
                            <span className="text-accent font-semibold">{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">{bookingData.address.fullName}</p>
                    <p className="text-muted-foreground">{bookingData.address.address}</p>
                    <p className="text-muted-foreground">
                      {bookingData.address.city}, {bookingData.address.state} - {bookingData.address.pincode}
                    </p>
                    {bookingData.address.landmark && (
                      <p className="text-sm text-muted-foreground">
                        Landmark: {bookingData.address.landmark}
                      </p>
                    )}
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4" />
                        {bookingData.address.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4" />
                        {bookingData.address.email}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-accent" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Payment Method:</span>
                      <span className="font-medium">{getPaymentMethodDisplay(bookingData.payment.method)}</span>
                    </div>
                    {bookingData.payment.cardNumber && (
                      <div className="flex justify-between">
                        <span>Card Number:</span>
                        <span className="font-medium">**** **** **** {bookingData.payment.cardNumber.slice(-4)}</span>
                      </div>
                    )}
                    {bookingData.payment.cardholderName && (
                      <div className="flex justify-between">
                        <span>Cardholder:</span>
                        <span className="font-medium">{bookingData.payment.cardholderName}</span>
                      </div>
                    )}
                    {bookingData.payment.bankName && (
                      <div className="flex justify-between">
                        <span>Bank:</span>
                        <span className="font-medium">{bookingData.payment.bankName}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Booking Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Booking Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Booking Date</p>
                    <p className="font-medium">{formatDate(bookingData.timestamp)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Services</p>
                    <p className="font-medium">{bookingData.items.length}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Items</p>
                    <p className="font-medium">{bookingData.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Quote</p>
                    <p className="font-medium text-accent">Custom Pricing</p>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    What's Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <div>
                        <p className="font-medium">Confirmation Call</p>
                        <p className="text-muted-foreground">Our team will call you within 2 hours to confirm details</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <div>
                        <p className="font-medium">Quote Finalization</p>
                        <p className="text-muted-foreground">We'll provide detailed pricing based on your requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <div>
                        <p className="font-medium">Service Execution</p>
                        <p className="text-muted-foreground">Professional service delivery as per schedule</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <Button 
                    onClick={handleDownloadReceipt}
                    variant="outline" 
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Receipt
                  </Button>
                  
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link to="/services">
                      Book More Services
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/">
                      <Home className="w-4 h-4 mr-2" />
                      Back to Home
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Need Help?</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Our customer support team is available 24/7 to assist you.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+91-9876543210</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>support@iyannar.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookingConfirmation;
