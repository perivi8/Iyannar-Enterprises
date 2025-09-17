import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Truck,
  Car,
  Users,
  Fuel,
  Shield,
  CheckCircle,
  Clock,
  MapPin,
  Calculator,
  Phone,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const VehicleHire = () => {
  useScrollToTop();

  const vehicles = [
    {
      type: "Mini Truck",
      capacity: "1-2 Tons",
      description: "Perfect for small deliveries and city transport",
      features: ["Fuel efficient", "Easy maneuverability", "City access", "GPS tracking"],
      dailyRate: "₹1,500",
      monthlyRate: "₹35,000",
      image: "🚛"
    },
    {
      type: "Medium Truck",
      capacity: "3-7 Tons",
      description: "Ideal for medium cargo and furniture transport",
      features: ["Spacious cargo area", "Reliable engine", "Professional driver", "Insurance included"],
      dailyRate: "₹2,500",
      monthlyRate: "₹60,000",
      image: "🚚"
    },
    {
      type: "Heavy Truck",
      capacity: "8-15 Tons",
      description: "Heavy-duty transport for large cargo",
      features: ["High payload", "Long distance capable", "24/7 support", "Route optimization"],
      dailyRate: "₹4,000",
      monthlyRate: "₹95,000",
      image: "🚛"
    },
    {
      type: "Container Truck",
      capacity: "16+ Tons",
      description: "Container transport and port operations",
      features: ["Container compatible", "Port certified", "Experienced drivers", "Customs support"],
      dailyRate: "₹6,000",
      monthlyRate: "₹1,40,000",
      image: "🚛"
    },
    {
      type: "Refrigerated Truck",
      capacity: "5-10 Tons",
      description: "Temperature-controlled transport",
      features: ["Temperature control", "Food grade", "Monitoring system", "Emergency backup"],
      dailyRate: "₹5,000",
      monthlyRate: "₹1,20,000",
      image: "🧊"
    },
    {
      type: "Passenger Van",
      capacity: "8-15 Seats",
      description: "Comfortable passenger transport",
      features: ["AC equipped", "Safety certified", "Professional driver", "GPS tracking"],
      dailyRate: "₹2,000",
      monthlyRate: "₹45,000",
      image: "🚐"
    }
  ];

  const rentalTypes = [
    {
      title: "Hourly Rental",
      description: "Flexible hourly rates for short-term needs",
      icon: Clock,
      features: ["Minimum 4 hours", "Driver included", "Fuel extra", "Local area only"],
      rate: "₹200-800/hour"
    },
    {
      title: "Daily Rental",
      description: "Full day vehicle hire with driver",
      icon: Calendar,
      features: ["8-12 hour usage", "Driver & fuel included", "200km limit", "Overtime charges apply"],
      rate: "₹1,500-6,000/day"
    },
    {
      title: "Monthly Rental",
      description: "Long-term vehicle lease options",
      icon: Star,
      features: ["Dedicated vehicle", "Maintenance included", "Unlimited km", "Flexible terms"],
      rate: "₹35,000-1,40,000/month"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage for all vehicles"
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Experienced and licensed drivers for safe transport"
    },
    {
      icon: Fuel,
      title: "Well-Maintained Fleet",
      description: "Regular maintenance ensures reliable performance"
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time vehicle tracking for security and efficiency"
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
              Vehicle Hire Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Rent reliable vehicles for your transportation needs. From mini trucks to 
              heavy-duty vehicles, we have the right solution for every requirement.
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

      {/* Rental Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Flexible Rental Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the rental plan that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rentalTypes.map((rental, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <rental.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{rental.title}</CardTitle>
                  <p className="text-gray-600">{rental.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent mb-4">{rental.rate}</div>
                  <div className="space-y-2">
                    {rental.features.map((feature, idx) => (
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
              Modern, well-maintained vehicles for every transportation need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{vehicle.image}</div>
                    <CardTitle className="text-xl text-primary">{vehicle.type}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{vehicle.capacity}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{vehicle.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-accent mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Daily Rate:</span>
                      <span className="font-bold text-primary">{vehicle.dailyRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Rate:</span>
                      <span className="font-bold text-accent">{vehicle.monthlyRate}</span>
                    </div>
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
              Why Choose Our Vehicle Hire?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience reliable and professional vehicle rental services
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

      {/* Booking Process */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Easy Booking Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your vehicle rental
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Vehicle",
                description: "Select the right vehicle for your needs"
              },
              {
                step: "2",
                title: "Get Quote",
                description: "Receive instant pricing for your rental"
              },
              {
                step: "3",
                title: "Book & Pay",
                description: "Confirm booking with advance payment"
              },
              {
                step: "4",
                title: "Drive Away",
                description: "Collect your vehicle and start your journey"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden charges, clear pricing structure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Short Term</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">Hourly/Daily</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Flexible timing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Driver included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Basic insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Local area coverage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mx-auto mb-2">Popular</Badge>
                <CardTitle className="text-2xl text-primary text-center">Medium Term</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">Weekly</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Discounted rates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dedicated driver
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Comprehensive insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Interstate allowed
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Long Term</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">Monthly+</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Best value rates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Maintenance included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Full insurance coverage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Unlimited kilometers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/quote">
                <Calculator className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements & Terms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Rental Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Valid ID Proof</h4>
                      <p className="text-gray-600 text-sm">Driving license, Aadhar card, or passport</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Security Deposit</h4>
                      <p className="text-gray-600 text-sm">Refundable deposit based on vehicle type</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Age Requirement</h4>
                      <p className="text-gray-600 text-sm">Minimum 21 years for self-drive options</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Advance Booking</h4>
                      <p className="text-gray-600 text-sm">24 hours advance booking recommended</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Fuel Policy</h4>
                      <p className="text-gray-600 text-sm">Return with same fuel level or pay charges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Damage Policy</h4>
                      <p className="text-gray-600 text-sm">Customer liable for damages beyond normal wear</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Cancellation</h4>
                      <p className="text-gray-600 text-sm">Free cancellation up to 6 hours before pickup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Late Return</h4>
                      <p className="text-gray-600 text-sm">Additional charges apply for late returns</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Hire a Vehicle?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book your vehicle today and experience reliable, professional transport services. 
              Our team is ready to help you find the perfect vehicle for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/quote">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Quote Now
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

export default VehicleHire;
