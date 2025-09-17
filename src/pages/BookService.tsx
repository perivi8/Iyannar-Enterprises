import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  Truck,
  Package,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  User,
  CreditCard,
  Shield,
  Star,
  AlertCircle,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookService = () => {
  useScrollToTop();
  
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Service Details
    serviceType: '',
    vehicleType: '',
    priority: '',
    
    // Booking Details
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    pickupTime: '',
    
    // Cargo Details
    cargoDescription: '',
    weight: '',
    dimensions: '',
    
    // Additional Services
    insurance: false,
    packaging: false,
    loading: false,
    
    // Special Instructions
    specialInstructions: '',
    
    // Payment
    paymentMethod: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service booking submitted:', formData);
    alert('Thank you for booking our service! We will contact you shortly to confirm the details.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const services = [
    {
      title: "Cargo Transport",
      description: "Safe and reliable cargo transportation",
      icon: Truck,
      features: ["Door-to-door delivery", "Real-time tracking", "Insurance coverage"]
    },
    {
      title: "Logistics Support",
      description: "Comprehensive logistics management",
      icon: Package,
      features: ["Warehousing", "Inventory management", "Distribution"]
    },
    {
      title: "Vehicle Hire",
      description: "Rent vehicles for your transport needs",
      icon: Car,
      features: ["Flexible rental terms", "Professional drivers", "Well-maintained fleet"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored logistics solutions",
      icon: Star,
      features: ["Custom planning", "Specialized handling", "Dedicated support"]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Book Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Quick and easy service booking for all your logistics and transportation needs. 
              Get started in just a few simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Services Quick Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of logistics and transportation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      step <= currentStep ? 'bg-primary' : 'bg-gray-300'
                    }`}>
                      {step}
                    </div>
                    <span className={`ml-2 font-medium ${
                      step <= currentStep ? 'text-primary' : 'text-gray-400'
                    }`}>
                      {step === 1 && 'Personal Info'}
                      {step === 2 && 'Service Details'}
                      {step === 3 && 'Booking Info'}
                      {step === 4 && 'Confirmation'}
                    </span>
                    {step < 4 && (
                      <div className={`w-16 h-1 mx-4 ${
                        step < currentStep ? 'bg-primary' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  Book Your Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter company name (optional)"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Service Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Service Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cargo-transport">Cargo Transport</SelectItem>
                              <SelectItem value="logistics-support">Logistics Support</SelectItem>
                              <SelectItem value="vehicle-hire">Vehicle Hire</SelectItem>
                              <SelectItem value="custom-solutions">Custom Solutions</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vehicleType">Vehicle Type *</Label>
                          <Select onValueChange={(value) => handleSelectChange('vehicleType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mini-truck">Mini Truck (1-2 Tons)</SelectItem>
                              <SelectItem value="medium-truck">Medium Truck (3-7 Tons)</SelectItem>
                              <SelectItem value="heavy-truck">Heavy Truck (8-15 Tons)</SelectItem>
                              <SelectItem value="container">Container Truck</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="priority">Service Priority</Label>
                        <Select onValueChange={(value) => handleSelectChange('priority', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                            <SelectItem value="express">Express (1-2 days)</SelectItem>
                            <SelectItem value="urgent">Urgent (Same day)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cargoDescription">Cargo Description *</Label>
                        <Textarea
                          id="cargoDescription"
                          name="cargoDescription"
                          value={formData.cargoDescription}
                          onChange={handleInputChange}
                          placeholder="Describe what you're shipping..."
                          rows={3}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="weight">Approximate Weight (kg)</Label>
                          <Input
                            id="weight"
                            name="weight"
                            type="number"
                            value={formData.weight}
                            onChange={handleInputChange}
                            placeholder="Enter weight"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dimensions">Dimensions (L×W×H cm)</Label>
                          <Input
                            id="dimensions"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleInputChange}
                            placeholder="e.g., 100×80×60"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Booking Information */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Booking Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickupLocation">Pickup Location *</Label>
                          <Input
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleInputChange}
                            placeholder="Enter pickup address"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="deliveryLocation">Delivery Location *</Label>
                          <Input
                            id="deliveryLocation"
                            name="deliveryLocation"
                            value={formData.deliveryLocation}
                            onChange={handleInputChange}
                            placeholder="Enter delivery address"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickupDate">Pickup Date *</Label>
                          <Input
                            id="pickupDate"
                            name="pickupDate"
                            type="date"
                            value={formData.pickupDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickupTime">Preferred Time</Label>
                          <Select onValueChange={(value) => handleSelectChange('pickupTime', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                              <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800">Additional Services</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="insurance"
                              checked={formData.insurance}
                              onCheckedChange={(checked) => handleCheckboxChange('insurance', checked as boolean)}
                            />
                            <Label htmlFor="insurance" className="text-sm font-medium">
                              Cargo Insurance
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="packaging"
                              checked={formData.packaging}
                              onCheckedChange={(checked) => handleCheckboxChange('packaging', checked as boolean)}
                            />
                            <Label htmlFor="packaging" className="text-sm font-medium">
                              Packaging Service
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="loading"
                              checked={formData.loading}
                              onCheckedChange={(checked) => handleCheckboxChange('loading', checked as boolean)}
                            />
                            <Label htmlFor="loading" className="text-sm font-medium">
                              Loading/Unloading
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialInstructions">Special Instructions</Label>
                        <Textarea
                          id="specialInstructions"
                          name="specialInstructions"
                          value={formData.specialInstructions}
                          onChange={handleInputChange}
                          placeholder="Any special handling requirements or instructions..."
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="paymentMethod">Payment Method</Label>
                        <Select onValueChange={(value) => handleSelectChange('paymentMethod', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash on Delivery</SelectItem>
                            <SelectItem value="card">Credit/Debit Card</SelectItem>
                            <SelectItem value="upi">UPI Payment</SelectItem>
                            <SelectItem value="bank">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Booking Confirmation
                      </h3>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                          <h4 className="text-lg font-semibold text-green-800">Booking Summary</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                            <p><strong>Service:</strong> {formData.serviceType}</p>
                            <p><strong>Vehicle:</strong> {formData.vehicleType}</p>
                          </div>
                          <div>
                            <p><strong>Pickup:</strong> {formData.pickupLocation}</p>
                            <p><strong>Delivery:</strong> {formData.deliveryLocation}</p>
                            <p><strong>Date:</strong> {formData.pickupDate}</p>
                            <p><strong>Time:</strong> {formData.pickupTime}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <p className="font-semibold mb-1">Important Notes:</p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Our team will contact you within 2 hours to confirm the booking</li>
                              <li>Please ensure someone is available at the pickup location</li>
                              <li>Have all necessary documents ready for the shipment</li>
                              <li>Payment can be made as per your selected method</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    
                    {currentStep < totalSteps ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-primary hover:bg-primary/90">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Confirm Booking
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  Need Help with Booking?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our customer support team is available 24/7 to assist you with your booking
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-4 h-4 mr-2" />
                      Call: +91 98765 43210
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:bookings@iyannar.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email: bookings@iyannar.com
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookService;
