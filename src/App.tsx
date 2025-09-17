import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import QuoteConfirmation from "./pages/QuoteConfirmation";
import MyQuote from "./pages/MyQuote";
import CargoTransport from "./pages/CargoTransport";
import LogisticsSupport from "./pages/LogisticsSupport";
import VehicleHire from "./pages/VehicleHire";
import CustomSolutions from "./pages/CustomSolutions";
import BookService from "./pages/BookService";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookingConfirmation from "./pages/BookingConfirmation";
import CancellationRefund from "./pages/CancellationRefund";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/quote-confirmation" element={<QuoteConfirmation />} />
            <Route path="/my-quote" element={<MyQuote />} />
            <Route path="/cargo-transport" element={<CargoTransport />} />
            <Route path="/logistics-support" element={<LogisticsSupport />} />
            <Route path="/vehicle-hire" element={<VehicleHire />} />
            <Route path="/custom-solutions" element={<CustomSolutions />} />
            <Route path="/book-service" element={<BookService />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/cancellation-refund" element={<CancellationRefund />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
