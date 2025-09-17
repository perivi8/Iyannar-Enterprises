import { Phone, MessageCircle, Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = "transition-colors font-medium";
    if (isActive(path)) {
      return `${baseClasses} text-accent border-b-2 border-accent pb-1`;
    }
    return `${baseClasses} text-white hover:text-accent`;
  };

  return (
    <header className="nav-sticky w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-0.5">
              <img src={logo} alt="Iyannar Enterprises Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-white font-heading text-xl font-bold">Iyannar Enterprises</h1>
              <p className="text-white/80 text-xs">Salem, Tamil Nadu</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClassName("/")}>
              Home
            </Link>
            <Link to="/services" className={getLinkClassName("/services")}>
              Services
            </Link>
            <Link to="/about" className={getLinkClassName("/about")}>
              About
            </Link>
            <Link to="/contact" className={getLinkClassName("/contact")}>
              Contact
            </Link>
            <Link to="/my-quote" className={getLinkClassName("/my-quote")}>
              My Quote
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <Button 
                variant="outline" 
                size="sm"
                className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                {state.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <Button 
              variant="outline" 
              size="sm"
              className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm"
              asChild
            >
              <a href="tel:+91-9994214201">
                <Phone className="w-4 h-4 mr-2 text-white" />
                Call Now
              </a>
            </Button>
            
            <Button 
              variant="default"
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white border-0"
              asChild
            >
              <Link to="/quote">
                Request Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={getLinkClassName("/")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={getLinkClassName("/services")}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={getLinkClassName("/about")}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={getLinkClassName("/contact")}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/my-quote" 
                className={getLinkClassName("/my-quote")}
                onClick={() => setIsMenuOpen(false)}
              >
                My Quote
              </Link>
              
              {/* Mobile Cart Link */}
              <Link 
                to="/cart" 
                className={`${getLinkClassName("/cart")} flex items-center`}
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart {state.totalItems > 0 && `(${state.totalItems})`}
              </Link>
              
              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:+91-9994214201">
                    <Phone className="w-4 h-4 mr-2 text-white" />
                    Call Now
                  </a>
                </Button>
                
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white border-0"
                  asChild
                >
                  <Link to="/quote">
                    Request Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* WhatsApp Sticky Button (Mobile) */}
      <a
        href="https://wa.me/919994214201?text=Hi%20Iyannar%20Enterprises,%20I%20need%20transport%20service"
        className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors md:hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </header>
  );
};

export default Header;