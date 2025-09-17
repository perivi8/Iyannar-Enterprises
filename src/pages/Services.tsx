import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Package, Car, Settings, MapPin, Clock, Shield, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import BookingModal from "@/components/BookingModal";

const Services = () => {
  useScrollToTop();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const services = [
    {
      id: "cargo-transport",
      title: "Cargo Transport",
      description: "Reliable cargo transportation across Tamil Nadu and neighboring states with real-time tracking.",
      icon: <Truck className="w-8 h-8" />,
      features: [
        "Local & Interstate delivery",
        "Real-time GPS tracking",
        "Insured cargo protection",
        "Timely delivery guarantee",
        "Multiple vehicle options",
        "24/7 customer support"
      ],
      slug: "cargo-transport",
      price: "Starting from ₹5/km"
    },
    {
      id: "logistics-support",
      title: "Logistics Support",
      description: "Complete logistics solutions for businesses with warehouse management and supply chain optimization.",
      icon: <Package className="w-8 h-8" />,
      features: [
        "Warehouse management",
        "Last-mile delivery",
        "Supply chain optimization",
        "Inventory management",
        "Pick & pack services",
        "Distribution network"
      ],
      slug: "logistics-support",
      price: "Custom pricing"
    },
    {
      id: "vehicle-hire",
      title: "Vehicle Hire",
      description: "Rent vehicles for your transportation needs with professional drivers and flexible periods.",
      icon: <Car className="w-8 h-8" />,
      features: [
        "Trucks, vans & lorries",
        "Professional drivers",
        "Flexible rental periods",
        "Well-maintained fleet",
        "Fuel included options",
        "Door-to-door service"
      ],
      slug: "vehicle-hire",
      price: "₹1,200/day onwards"
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      description: "Tailored transport solutions for specific industry requirements with dedicated support.",
      icon: <Settings className="w-8 h-8" />,
      features: [
        "Industry-specific solutions",
        "Contract logistics",
        "Specialized handling",
        "Dedicated support team",
        "Temperature controlled",
        "Hazmat certified"
      ],
      slug: "custom-solutions",
      price: "Quote based"
    }
  ];

  const handleAddToCart = (service: typeof services[0]) => {
    addToCart({
      id: service.id,
      title: service.title,
      description: service.description,
      price: service.price,
      slug: service.slug,
      features: service.features
    });
    
    toast({
      title: "Added to Cart",
      description: `${service.title} has been added to your cart.`,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-accent">Transport Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional transport and logistics services across Tamil Nadu. Book online for reliable, on-time delivery solutions.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/80">Fleet Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/80">Service Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mr-6">
                      <div className="text-accent">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                        {service.title}
                      </h3>
                      <p className="text-accent font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90" 
                      asChild
                    >
                      <Link to={`/${service.slug}`}>
                        Learn More
                      </Link>
                    </Button>
                    
                    <BookingModal serviceData={service}>
                      <Button 
                        variant="outline" 
                        className="border-accent text-accent hover:bg-accent hover:text-white"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </BookingModal>
                    
                    <Button 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                      asChild
                    >
                      <Link to={`/quote?service=${service.slug}`}>
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We provide transport services across Tamil Nadu and neighboring states
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {['Salem', 'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Tirunelveli', 'Erode', 'Vellore', 'Thanjavur', 'Dindigul', 'Kanchipuram', 'Karur'].map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="font-medium text-sm">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                We guarantee timely delivery with real-time tracking and regular updates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Insured Cargo</h3>
              <p className="text-muted-foreground">
                All cargo is fully insured for your peace of mind during transportation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Modern Fleet</h3>
              <p className="text-muted-foreground">
                Well-maintained vehicles with GPS tracking and professional drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;