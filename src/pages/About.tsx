import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Users, Award, Clock, Target, Eye, Heart, MapPin, Phone, Mail, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              About Iyannar Enterprises
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Professional transport and logistics services in Salem, Tamil Nadu. 
              Serving businesses and individuals with reliable, on-time delivery solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Iyannar Enterprises was founded with a vision to provide safe, efficient, and timely 
                transportation of goods across Tamil Nadu and beyond. Based in Salem, we have grown from 
                a small local transport service to a comprehensive logistics solution provider.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our commitment to reliability, efficiency, and customer satisfaction has made 
                us the preferred choice for businesses across various industries. We understand 
                that every shipment is crucial to your business success.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in cargo transportation, logistics support, vehicle hire, and custom 
                solutions, ensuring that we meet all your transportation needs with professional 
                service and competitive pricing.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
                  <div className="text-gray-600">Deliveries Made</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800">Fleet Size</h3>
                    <p className="text-2xl font-bold text-accent">50+</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800">Team Members</h3>
                    <p className="text-2xl font-bold text-accent">100+</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800">Experience</h3>
                    <p className="text-2xl font-bold text-accent">15+ Years</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800">On-Time Rate</h3>
                    <p className="text-2xl font-bold text-accent">99.5%</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Service Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive logistics solutions across Tamil Nadu and neighboring states
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Primary Coverage</h3>
                <p className="text-gray-600">Tamil Nadu with extended services across South India</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Truck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Interstate Transport</h3>
                <p className="text-gray-600">Available for select routes on request</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Bulk or specialized goods transport arrangements</p>
              </CardContent>
            </Card>
          </div>

          {/* Delivery Timelines */}
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Delivery Timelines</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">1-3 Days</div>
                <p className="text-gray-600">Within Tamil Nadu</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">3-7 Days</div>
                <p className="text-gray-600">South India (Interstate)</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Custom</div>
                <p className="text-gray-600">Bulk/Heavy Consignments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Target className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide safe, efficient, and timely transportation of goods while 
                  ensuring customer satisfaction through professional service and 
                  competitive pricing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Eye className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading logistics and transportation service provider 
                  in South India, known for reliability, innovation, and customer-centric 
                  solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, reliability, customer satisfaction, safety, and continuous 
                  improvement in all our services and operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90">
              Ready to experience reliable logistics services? Contact us today!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-white/90">
                    No 60, Umblicampatty, Kadayampatti,<br />
                    Upper Street, Omalur TK,<br />
                    Salem DT, Tamil Nadu – 636351
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-white/90 mb-2">+91 99942 14201</p>
                  <p className="text-white/90">+91 96009 82184</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 inline-block">
                <CardContent className="p-6">
                  <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-white/90">iyannarenterprises21@gmail.com</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Contact Us Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose Iyannar Enterprises?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out in the logistics industry through our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock support and service availability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-600">Professional processes and quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Fleet</h3>
              <p className="text-gray-600">Well-maintained, GPS-enabled vehicles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to your success</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
