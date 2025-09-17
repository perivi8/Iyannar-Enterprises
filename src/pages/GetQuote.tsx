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
import { 
  Calculator,
  Truck,
  Package,
  MapPin,
  Calendar,
  Clock,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  Edit
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GetQuote = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isEditing, setIsEditing] = useState(false);
  const [originalQuoteId, setOriginalQuoteId] = useState<string>('');

  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Service Details
    serviceType: '',
    vehicleType: '',
    
    // Shipment Details
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    deliveryDate: '',
    
    // Cargo Information
    cargoType: '',
    weight: '',
    dimensions: '',
    value: '',
    
    // Additional Services
    insurance: false,
    packaging: false,
    loading: false,
    tracking: false,
    
    // Additional Information
    specialRequirements: '',
    urgency: ''
  });

  // Check if we're editing an existing quote
  useEffect(() => {
    const editQuoteData = location.state?.editQuote;
    if (editQuoteData) {
      setIsEditing(true);
      setOriginalQuoteId(editQuoteData.quoteId || '');
      setFormData({
        name: editQuoteData.name || '',
        email: editQuoteData.email || '',
        phone: editQuoteData.phone || '',
        company: editQuoteData.company || '',
        serviceType: editQuoteData.serviceType || '',
        vehicleType: editQuoteData.vehicleType || '',
        pickupLocation: editQuoteData.pickupLocation || '',
        deliveryLocation: editQuoteData.deliveryLocation || '',
        pickupDate: editQuoteData.pickupDate || '',
        deliveryDate: editQuoteData.deliveryDate || '',
        cargoType: editQuoteData.cargoType || '',
        weight: editQuoteData.weight || '',
        dimensions: editQuoteData.dimensions || '',
        value: editQuoteData.value || '',
        insurance: editQuoteData.insurance || false,
        packaging: editQuoteData.packaging || false,
        loading: editQuoteData.loading || false,
        tracking: editQuoteData.tracking || false,
        specialRequirements: editQuoteData.specialRequirements || '',
        urgency: editQuoteData.urgency || ''
      });
    }
  }, [location]);

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

  const generateQuoteId = () => {
    return 'QT' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Use existing quote ID if editing, otherwise generate new one
    const quoteId = isEditing ? originalQuoteId : generateQuoteId();
    const submittedAt = new Date().toLocaleString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Prepare quote data for confirmation page
    const quoteData = {
      ...formData,
      quoteId,
      submittedAt: isEditing ? `Updated on ${submittedAt}` : submittedAt,
      estimatedCost: '0' // Will be calculated in confirmation page
    };

    // Save to localStorage for persistence
    localStorage.setItem('latestQuote', JSON.stringify(quoteData));

    // Navigate to confirmation page with quote data
    navigate('/quote-confirmation', { 
      state: { quoteData },
      replace: true 
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {isEditing ? 'Edit Quote' : 'Get Your Quote'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {isEditing ? 'Update your existing quote' : 'Fill out our detailed form to receive a customized quote for your logistics and transportation needs. We\'ll get back to you within 24 hours.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-primary flex items-center">
                    {isEditing ? <Edit className="w-8 h-8 mr-3" /> : <Calculator className="w-8 h-8 mr-3" />}
                    {isEditing ? 'Edit Quote' : 'Request Quote'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
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

                    {/* Service Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Service Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange('serviceType', value)}>
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
                          <Select value={formData.vehicleType} onValueChange={(value) => handleSelectChange('vehicleType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mini-truck">Mini Truck (1-2 Tons)</SelectItem>
                              <SelectItem value="medium-truck">Medium Truck (3-7 Tons)</SelectItem>
                              <SelectItem value="heavy-truck">Heavy Truck (8-15 Tons)</SelectItem>
                              <SelectItem value="trailer">Trailer (16+ Tons)</SelectItem>
                              <SelectItem value="container">Container Truck</SelectItem>
                              <SelectItem value="refrigerated">Refrigerated Truck</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Shipment Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Shipment Details
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
                          <Label htmlFor="pickupDate">Preferred Pickup Date *</Label>
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
                          <Label htmlFor="deliveryDate">Required Delivery Date</Label>
                          <Input
                            id="deliveryDate"
                            name="deliveryDate"
                            type="date"
                            value={formData.deliveryDate}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Cargo Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Cargo Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cargoType">Cargo Type *</Label>
                          <Select value={formData.cargoType} onValueChange={(value) => handleSelectChange('cargoType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select cargo type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Cargo</SelectItem>
                              <SelectItem value="fragile">Fragile Items</SelectItem>
                              <SelectItem value="perishable">Perishable Goods</SelectItem>
                              <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                              <SelectItem value="machinery">Heavy Machinery</SelectItem>
                              <SelectItem value="vehicles">Vehicles</SelectItem>
                              <SelectItem value="documents">Documents</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weight">Total Weight (kg) *</Label>
                          <Input
                            id="weight"
                            name="weight"
                            type="number"
                            value={formData.weight}
                            onChange={handleInputChange}
                            placeholder="Enter total weight"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
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
                        <div className="space-y-2">
                          <Label htmlFor="value">Cargo Value (₹)</Label>
                          <Input
                            id="value"
                            name="value"
                            type="number"
                            value={formData.value}
                            onChange={handleInputChange}
                            placeholder="Enter cargo value for insurance"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Additional Services
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
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
                            Packaging Services
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
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="tracking"
                            checked={formData.tracking}
                            onCheckedChange={(checked) => handleCheckboxChange('tracking', checked as boolean)}
                          />
                          <Label htmlFor="tracking" className="text-sm font-medium">
                            Real-time Tracking
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b pb-2">
                        Additional Information
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="urgency">Urgency Level</Label>
                          <Select value={formData.urgency} onValueChange={(value) => handleSelectChange('urgency', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                              <SelectItem value="express">Express (1-2 days)</SelectItem>
                              <SelectItem value="urgent">Urgent (Same day)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="specialRequirements">Special Requirements</Label>
                          <Textarea
                            id="specialRequirements"
                            name="specialRequirements"
                            value={formData.specialRequirements}
                            onChange={handleInputChange}
                            placeholder="Any special handling requirements, access restrictions, or additional notes..."
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                      {isEditing ? <Edit className="w-5 h-5 mr-2" /> : <Calculator className="w-5 h-5 mr-2" />}
                      {isEditing ? 'Update Quote' : 'Get My Quote'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quote Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Quote Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Response Time</h4>
                      <p className="text-sm text-gray-600">
                        We'll send you a detailed quote within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Free Quote</h4>
                      <p className="text-sm text-gray-600">
                        No charges for quote requests
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Need Help?</h4>
                      <p className="text-sm text-gray-600">
                        Call us at <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-6 h-6 text-accent" />
                    <span className="text-sm">Modern Fleet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Package className="w-6 h-6 text-accent" />
                    <span className="text-sm">Safe Handling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-accent" />
                    <span className="text-sm">GPS Tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-accent" />
                    <span className="text-sm">On-Time Delivery</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
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
      </section>

      <Footer />
    </main>
  );
};

export default GetQuote;
