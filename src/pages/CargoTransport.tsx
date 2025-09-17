import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Truck,
  Package,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Calculator,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const CargoTransport = () => {
  useScrollToTop();

  const cargoTypes = [
    {
      title: "General Cargo",
      description: "Standard goods and merchandise",
      icon: Package,
      features: ["Secure packaging", "Real-time tracking", "Insurance coverage"]
    },
    {
      title: "Heavy Machinery",
      description: "Industrial equipment and machinery",
      icon: Truck,
      features: ["Specialized handling", "Expert loading", "Route planning"]
    },
    {
      title: "Fragile Items",
      description: "Delicate and breakable goods",
      icon: Shield,
      features: ["Extra protection", "Careful handling", "Custom packaging"]
    },
    {
      title: "Bulk Cargo",
      description: "Large volume shipments",
      icon: Package,
      features: ["Volume discounts", "Efficient loading", "Dedicated vehicles"]
    }
  ];

  const vehicles = [
    {
      type: "Mini Truck",
      capacity: "1-2 Tons",
      suitable: "Small packages, documents, local deliveries",
      features: ["City access", "Quick delivery", "Cost-effective"]
    },
    {
      type: "Medium Truck",
      capacity: "3-7 Tons",
      suitable: "Medium cargo, furniture, appliances",
      features: ["Versatile", "Reliable", "GPS tracking"]
    },
    {
      type: "Heavy Truck",
      capacity: "8-15 Tons",
      suitable: "Large cargo, machinery, bulk goods",
      features: ["High capacity", "Long distance", "Professional drivers"]
    },
    {
      type: "Container Truck",
      capacity: "16+ Tons",
      suitable: "Container cargo, export/import goods",
      features: ["International standards", "Secure", "Weather protection"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.5% on-time delivery rate with real-time tracking"
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage for your valuable goods"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Service across Tamil Nadu and neighboring states"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "ISO certified processes and quality standards"
    }
  ];

  const serviceData = {
    id: "cargo-transport",
    title: "Cargo Transport",
    description: "Reliable cargo transportation across Tamil Nadu and neighboring states with real-time tracking.",
    price: "Starting from ₹5/km",
    slug: "cargo-transport",
    features: [
      "Local & Interstate delivery",
      "Real-time GPS tracking", 
      "Insured cargo protection",
      "Timely delivery guarantee",
      "Multiple vehicle options",
      "24/7 customer support"
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Cargo Transport Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Safe, reliable, and efficient cargo transportation solutions for all your 
              business needs. From small packages to heavy machinery, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/quote">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Comprehensive Cargo Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all types of cargo with specialized equipment and expert handling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cargoTypes.map((cargo, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cargo.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{cargo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{cargo.description}</p>
                  <div className="space-y-2">
                    {cargo.features.map((feature, idx) => (
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

      {/* Vehicle Fleet */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Vehicle Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, well-maintained vehicles for every cargo requirement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-primary">{vehicle.type}</CardTitle>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {vehicle.capacity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <strong>Suitable for:</strong> {vehicle.suitable}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-accent mr-2" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose Our Cargo Transport?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional cargo transport services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Transport Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient, and transparent process from pickup to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Request Quote",
                description: "Submit your cargo details and get instant quote"
              },
              {
                step: "2",
                title: "Schedule Pickup",
                description: "Choose convenient pickup date and time"
              },
              {
                step: "3",
                title: "Safe Transport",
                description: "Professional handling and real-time tracking"
              },
              {
                step: "4",
                title: "Delivery",
                description: "On-time delivery with proof of delivery"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-accent mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden charges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Local Transport</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">₹8-12</span>
                  <span className="text-gray-600">/km</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Within city limits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Same day delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Basic insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    GPS tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Interstate</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">₹15-25</span>
                  <span className="text-gray-600">/km</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Cross-state delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    2-5 days delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Full insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    24/7 support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Express</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">₹30-50</span>
                  <span className="text-gray-600">/km</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Priority delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Same/next day
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Premium insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dedicated support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/quote">
                <Calculator className="w-5 h-5 mr-2" />
                Get Detailed Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get started with our reliable cargo transport services today. 
              Contact us for a free quote or to schedule your shipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/quote">
                  <Calculator className="w-5 h-5 mr-2" />
                  Request Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CargoTransport;
