import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Package, Car, Settings } from "lucide-react";
import BookingModal from "@/components/BookingModal";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  slug: string;
  image?: string;
}

const ServiceCard = ({ title, description, icon, features, slug }: ServiceCardProps) => {
  // Create service data for BookingModal
  const serviceData = {
    id: slug,
    title,
    description,
    price: "Starting from ₹5/km",
    slug,
    features
  };

  return (
    <Card className="service-card h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
            <div className="text-accent">
              {icon}
            </div>
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Fixed button container with consistent alignment */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <BookingModal serviceData={serviceData}>
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90 min-h-[40px]" 
            >
              Book Now
            </Button>
          </BookingModal>
          
          <Button 
            variant="outline" 
            className="flex-1 border-accent text-accent hover:bg-accent hover:text-white min-h-[40px]"
            asChild
          >
            <Link to={`/quote?service=${slug}`}>
              Get Quote
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Cargo Transport",
      description: "Reliable cargo transportation across Tamil Nadu and neighboring states.",
      icon: <Truck className="w-6 h-6" />,
      features: [
        "Local & Interstate delivery",
        "Real-time GPS tracking", 
        "Insured cargo protection",
        "Timely delivery guarantee"
      ],
      slug: "cargo-transport"
    },
    {
      title: "Logistics Support", 
      description: "Complete logistics solutions for businesses and individuals.",
      icon: <Package className="w-6 h-6" />,
      features: [
        "Warehouse management",
        "Last-mile delivery",
        "Supply chain optimization",
        "Inventory management"
      ],
      slug: "logistics-support"
    },
    {
      title: "Vehicle Hire",
      description: "Rent vehicles for your transportation needs with professional drivers.",
      icon: <Car className="w-6 h-6" />,
      features: [
        "Trucks, vans & lorries",
        "Professional drivers",
        "Flexible rental periods",
        "Well-maintained fleet"
      ],
      slug: "vehicle-hire"
    },
    {
      title: "Custom Solutions",
      description: "Tailored transport solutions for specific industry requirements.",
      icon: <Settings className="w-6 h-6" />,
      features: [
        "Industry-specific solutions",
        "Contract logistics",
        "Specialized handling",
        "Dedicated support team"
      ],
      slug: "custom-solutions"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Transport Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From small packages to large cargo, we provide comprehensive transport and logistics 
            solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="btn-hero-primary"
            asChild
          >
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;