import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { MapPin, CreditCard, Building, Smartphone, Lock, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface AddressForm {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
}

interface PaymentForm {
  method: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
}

const Checkout = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const { state, clearCart } = useCart();
  const { toast } = useToast();

  const [addressForm, setAddressForm] = useState<AddressForm>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "Tamil Nadu",
    pincode: "",
    landmark: ""
  });

  const [paymentForm, setPaymentForm] = useState<PaymentForm>({
    method: "credit-card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: ""
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect to cart if empty
  if (state.items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">No Items to Checkout</h1>
            <p className="text-muted-foreground mb-8">
              Your cart is empty. Please add some services before proceeding to checkout.
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

  const handleAddressChange = (field: keyof AddressForm, value: string) => {
    setAddressForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field: keyof PaymentForm, value: string) => {
    setPaymentForm(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredAddressFields = ['fullName', 'phone', 'email', 'address', 'city', 'pincode'];
    const missingAddressFields = requiredAddressFields.filter(field => !addressForm[field as keyof AddressForm]);
    
    if (missingAddressFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required address fields.",
        variant: "destructive"
      });
      return false;
    }

    if (paymentForm.method === 'credit-card' || paymentForm.method === 'debit-card') {
      const requiredCardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardholderName'];
      const missingCardFields = requiredCardFields.filter(field => !paymentForm[field as keyof PaymentForm]);
      
      if (missingCardFields.length > 0) {
        toast({
          title: "Missing Payment Information",
          description: "Please fill in all required card details.",
          variant: "destructive"
        });
        return false;
      }
    }

    if (paymentForm.method === 'net-banking') {
      const requiredBankFields = ['bankName', 'accountNumber', 'ifscCode'];
      const missingBankFields = requiredBankFields.filter(field => !paymentForm[field as keyof PaymentForm]);
      
      if (missingBankFields.length > 0) {
        toast({
          title: "Missing Banking Information",
          description: "Please fill in all required banking details.",
          variant: "destructive"
        });
        return false;
      }
    }

    return true;
  };

  const handleConfirmBooking = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const bookingData = {
        orderId: `IYE${Date.now()}`,
        items: state.items,
        address: addressForm,
        payment: paymentForm,
        timestamp: new Date().toISOString()
      };

      // Store booking data in localStorage for confirmation page
      localStorage.setItem('lastBooking', JSON.stringify(bookingData));
      
      clearCart();
      setIsProcessing(false);
      
      toast({
        title: "Booking Confirmed!",
        description: "Your booking has been successfully processed.",
      });

      navigate('/booking-confirmation');
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild className="text-white hover:bg-white/10">
              <Link to="/cart">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cart
              </Link>
            </Button>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Checkout</span>
          </h1>
          <p className="text-xl opacity-90">
            Complete your booking with secure payment
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={addressForm.fullName}
                        onChange={(e) => handleAddressChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={addressForm.phone}
                        onChange={(e) => handleAddressChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={addressForm.email}
                      onChange={(e) => handleAddressChange('email', e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={addressForm.address}
                      onChange={(e) => handleAddressChange('address', e.target.value)}
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={addressForm.city}
                        onChange={(e) => handleAddressChange('city', e.target.value)}
                        placeholder="Enter city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={addressForm.state}
                        onChange={(e) => handleAddressChange('state', e.target.value)}
                        placeholder="Enter state"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={addressForm.pincode}
                        onChange={(e) => handleAddressChange('pincode', e.target.value)}
                        placeholder="Enter pincode"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="landmark">Landmark (Optional)</Label>
                    <Input
                      id="landmark"
                      value={addressForm.landmark}
                      onChange={(e) => handleAddressChange('landmark', e.target.value)}
                      placeholder="Enter nearby landmark"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-accent" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup
                    value={paymentForm.method}
                    onValueChange={(value) => handlePaymentChange('method', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="debit-card" id="debit-card" />
                      <Label htmlFor="debit-card" className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="net-banking" id="net-banking" />
                      <Label htmlFor="net-banking" className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Net Banking
                      </Label>
                    </div>
                  </RadioGroup>

                  {(paymentForm.method === 'credit-card' || paymentForm.method === 'debit-card') && (
                    <div className="space-y-4 p-4 border rounded-lg bg-secondary/20">
                      <div>
                        <Label htmlFor="cardholderName">Cardholder Name *</Label>
                        <Input
                          id="cardholderName"
                          value={paymentForm.cardholderName}
                          onChange={(e) => handlePaymentChange('cardholderName', e.target.value)}
                          placeholder="Enter cardholder name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          value={paymentForm.cardNumber}
                          onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            value={paymentForm.expiryDate}
                            onChange={(e) => handlePaymentChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={paymentForm.cvv}
                            onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentForm.method === 'net-banking' && (
                    <div className="space-y-4 p-4 border rounded-lg bg-secondary/20">
                      <div>
                        <Label htmlFor="bankName">Bank Name *</Label>
                        <Input
                          id="bankName"
                          value={paymentForm.bankName}
                          onChange={(e) => handlePaymentChange('bankName', e.target.value)}
                          placeholder="Enter your bank name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accountNumber">Account Number *</Label>
                        <Input
                          id="accountNumber"
                          value={paymentForm.accountNumber}
                          onChange={(e) => handlePaymentChange('accountNumber', e.target.value)}
                          placeholder="Enter account number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="ifscCode">IFSC Code *</Label>
                        <Input
                          id="ifscCode"
                          value={paymentForm.ifscCode}
                          onChange={(e) => handlePaymentChange('ifscCode', e.target.value)}
                          placeholder="Enter IFSC code"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">{item.price}</p>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total Items:</span>
                      <span>{state.totalItems}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span className="text-accent">Custom Quote</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleConfirmBooking}
                      disabled={isProcessing}
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Confirm Booking
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="text-center text-xs text-muted-foreground pt-2">
                    <Lock className="w-3 h-3 inline mr-1" />
                    Your payment information is secure and encrypted
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

export default Checkout;
