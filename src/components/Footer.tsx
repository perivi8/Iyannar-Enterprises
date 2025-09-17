import { Clock, Shield, DollarSign, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "On-time delivery guarantee with real-time tracking for complete peace of mind."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maintained Fleet",
      description: "Well-maintained vehicles with regular servicing and GPS tracking systems."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden charges. Get the best value for your money."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">Iyannar Enterprises?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            With years of experience in transport and logistics, we deliver excellence in every shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <div className="text-accent">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need Transport? Book Today.
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get instant quotes and book your transport service in just a few clicks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="btn-hero-accent text-lg"
              asChild
            >
              <Link to="/services">
                Book Service Now
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-white/20 backdrop-blur-sm font-semibold shadow-lg"
              asChild
            >
              <a href="tel:+91-9994214201">
                <Phone className="w-5 h-5 mr-2 text-white" />
                Call: +91 99942 14201
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-0.5">
                <img src={logo} alt="Iyannar Enterprises Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Iyannar Enterprises</h3>
                <p className="text-white/80 text-sm">Reliable Transport & Logistics</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Professional transport and logistics services in Salem, Tamil Nadu. 
              Serving businesses and individuals with reliable, on-time delivery solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                <span className="text-sm">Salem, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                <span className="text-sm">+91 99942 14201 / +91 96009 82184</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <span className="text-sm">iyannarenterprises21@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="text-white/80 hover:text-white transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/cargo-transport" className="text-white/80 hover:text-white transition-colors">Cargo Transport</Link></li>
              <li><Link to="/logistics-support" className="text-white/80 hover:text-white transition-colors">Logistics Support</Link></li>
              <li><Link to="/vehicle-hire" className="text-white/80 hover:text-white transition-colors">Vehicle Hire</Link></li>
              <li><Link to="/custom-solutions" className="text-white/80 hover:text-white transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          {/* Policy Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">
            <Link 
              to="/cancellation-refund" 
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Cancellation & Refund
            </Link>
            <span className="text-white/40 hidden md:inline">|</span>
            <Link 
              to="/privacy-policy" 
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-white/40 hidden md:inline">|</span>
            <Link 
              to="/shipping-policy" 
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Shipping Policy
            </Link>
            <span className="text-white/40 hidden md:inline">|</span>
            <Link 
              to="/terms-conditions" 
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60">
              2024 Iyannar Enterprises. All rights reserved. | Professional Transport & Logistics Services in Salem, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { WhyChooseUs, Footer };