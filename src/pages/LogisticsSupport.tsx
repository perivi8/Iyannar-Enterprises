import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Warehouse,
  Package,
  BarChart3,
  Truck,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Calculator,
  Phone,
  ArrowRight,
  ShoppingCart
} from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "@/components/BookingModal";

const LogisticsSupport = () => {
  useScrollToTop();

  const services = [
    {
      title: "Warehouse Management",
      description: "Secure storage and inventory management solutions",
      icon: Warehouse,
      features: ["Climate controlled", "24/7 security", "Inventory tracking", "Pick & pack services"]
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization",
      icon: BarChart3,
      features: ["Route optimization", "Cost analysis", "Performance tracking", "Vendor management"]
    },
    {
      title: "Distribution Services",
      description: "Efficient distribution and delivery networks",
      icon: Truck,
      features: ["Multi-modal transport", "Last-mile delivery", "Cross-docking", "Hub operations"]
    },
    {
      title: "Inventory Management",
      description: "Smart inventory control and tracking",
      icon: Package,
      features: ["Real-time tracking", "Automated alerts", "Stock optimization", "Reporting tools"]
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Raw materials and finished goods logistics",
      challenges: ["Just-in-time delivery", "Quality control", "Bulk handling"]
    },
    {
      name: "Retail & E-commerce",
      description: "Consumer goods distribution and fulfillment",
      challenges: ["Fast delivery", "Returns management", "Seasonal fluctuations"]
    },
    {
      name: "Healthcare",
      description: "Medical supplies and pharmaceutical logistics",
      challenges: ["Temperature control", "Regulatory compliance", "Emergency delivery"]
    },
    {
      name: "Automotive",
      description: "Auto parts and vehicle logistics",
      challenges: ["Heavy cargo", "Precision handling", "Assembly line support"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Operations",
      description: "Streamlined processes reduce delivery times by 30%"
    },
    {
      icon: BarChart3,
      title: "Cost Reduction",
      description: "Optimized logistics can cut operational costs by 25%"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and tracking minimize losses"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated logistics professionals for your business"
    }
  ];

  // Service data for BookingModal
  const serviceData = {
    id: "logistics-support",
    title: "Logistics Support",
    description: "Complete logistics solutions for businesses with warehouse management and supply chain optimization.",
    price: "Custom pricing",
    slug: "logistics-support",
    features: [
      "Warehouse management",
      "Last-mile delivery",
      "Supply chain optimization",
      "Inventory management",
      "Pick & pack services",
      "Distribution network"
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
              Logistics Support Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Comprehensive logistics solutions to optimize your supply chain, reduce costs, 
              and improve efficiency. From warehousing to distribution, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal serviceData={serviceData}>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </BookingModal>
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Complete Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated logistics services designed to streamline your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored logistics support for different industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{industry.name}</CardTitle>
                  <p className="text-gray-600">{industry.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Challenges We Address:</h4>
                  <div className="space-y-2">
                    {industry.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-accent mr-2" />
                        {challenge}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Technology-Driven Logistics
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We leverage cutting-edge technology to provide real-time visibility, 
                optimize routes, and ensure efficient operations throughout your supply chain.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">GPS Tracking</h4>
                    <p className="text-gray-600 text-sm">Real-time location tracking for all shipments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Analytics Dashboard</h4>
                    <p className="text-gray-600 text-sm">Comprehensive reporting and performance metrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Inventory Management</h4>
                    <p className="text-gray-600 text-sm">Automated inventory tracking and alerts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                  <div className="text-gray-600 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-gray-600 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Benefits of Our Logistics Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your supply chain with our comprehensive logistics solutions
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

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Logistics Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined workflow for maximum efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Analysis",
                description: "Assess your current logistics needs and challenges"
              },
              {
                step: "2",
                title: "Planning",
                description: "Design customized logistics solution"
              },
              {
                step: "3",
                title: "Implementation",
                description: "Deploy systems and processes"
              },
              {
                step: "4",
                title: "Monitoring",
                description: "Track performance and optimize"
              },
              {
                step: "5",
                title: "Optimization",
                description: "Continuous improvement and scaling"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right logistics support package for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Basic Support</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">₹25,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Basic inventory management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Standard reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Email support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Monthly reviews
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mx-auto mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl text-primary text-center">Professional</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">₹50,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Real-time tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Weekly optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Enterprise</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">Custom</span>
                  <span className="text-gray-600"> pricing</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Full supply chain management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Daily optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal serviceData={serviceData}>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </BookingModal>
              <Button size="lg" variant="outline" asChild>
                <Link to="/quote">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let our logistics experts analyze your current operations and design 
              a customized solution to improve efficiency and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal serviceData={serviceData}>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </BookingModal>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/quote">
                  <Calculator className="w-5 h-5 mr-2" />
                  Request Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  Contact Our Experts
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

export default LogisticsSupport;
