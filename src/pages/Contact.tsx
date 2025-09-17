import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Building,
  Globe,
  Users
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  useScrollToTop();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Get in touch with our team for all your logistics and transportation needs. 
              We're here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  No 60, Umblicampatty, Kadayampatti,<br />
                  Upper Street, Omalur TK,<br />
                  Salem DT, Tamil Nadu – 636351
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+919994214201" className="hover:text-accent">
                    +91 99942 14201
                  </a><br />
                  <a href="tel:+919600982184" className="hover:text-accent">
                    +91 96009 82184
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-primary mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:contact@iyannarenterprises.live" className="hover:text-accent">
                    contact@iyannarenterprises.live
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-primary mb-2">Business Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Sat: 8:00 AM - 8:00 PM<br />
                  Sunday: 9:00 AM - 5:00 PM<br />
                  Emergency: 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <a 
                        href="https://wa.me/919876543210?text=Hi%20Iyannar%20Enterprises,%20I%20need%20transport%20service"
                        className="text-green-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat with us instantly
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Phone className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Emergency Hotline</h4>
                      <a 
                        href="tel:+919994214201"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        +91 99942 14201
                      </a>
                      <p className="text-sm text-gray-600">Available 24/7 for urgent needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Building className="w-6 h-6 mr-2" />
                    Office Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Head Office</h4>
                      <p className="text-gray-600">
                        No 60, Umblicampatty, Kadayampatti,<br />
                        Upper Street, Omalur TK,<br />
                        Salem DT, Tamil Nadu – 636351
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Service Areas</h4>
                      <p className="text-gray-600">
                        Tamil Nadu, Karnataka, Kerala,<br />
                        Andhra Pradesh, Telangana
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Team Size</h4>
                      <p className="text-gray-600">
                        100+ dedicated professionals<br />
                        50+ vehicles in our fleet
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Salem, Tamil Nadu</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    asChild
                  >
                    <a 
                      href="https://maps.google.com/?q=Salem,Tamil Nadu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
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

export default Contact;
