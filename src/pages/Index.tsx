import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import { WhyChooseUs, Footer } from "@/components/Footer";

const Index = () => {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default Index;
