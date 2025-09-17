import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings,
  Lightbulb,
  Target,
  Zap,
  Users,
  CheckCircle,
  Clock,
  Shield,
  Calculator,
  Phone,
  ArrowRight,
  Cog,
  Puzzle,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";

const CustomSolutions = () => {
  useScrollToTop();

  const solutions = [
    {
      title: "Project Logistics",
      description: "End-to-end logistics for large-scale projects",
      icon: Target,
      features: ["Project planning", "Timeline management", "Resource allocation", "Risk assessment"],
      industries: ["Construction", "Oil & Gas", "Infrastructure", "Manufacturing"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Streamline your entire supply chain operations",
      icon: Settings,
      features: ["Process analysis", "Cost optimization", "Technology integration", "Performance monitoring"],
      industries: ["Retail", "E-commerce", "FMCG", "Automotive"]
    },
    {
      title: "Specialized Transport",
      description: "Custom transport solutions for unique requirements",
      icon: Zap,
      features: ["Oversized cargo", "Hazardous materials", "Temperature sensitive", "High-value goods"],
      industries: ["Pharmaceuticals", "Chemicals", "Art & Antiques", "Electronics"]
    },
    {
      title: "Warehousing Solutions",
      description: "Tailored storage and distribution facilities",
      icon: Puzzle,
      features: ["Custom layouts", "Automation systems", "Inventory management", "Quality control"],
      industries: ["Food & Beverage", "Textiles", "Consumer Goods", "Industrial"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Understanding your unique requirements and challenges",
      icon: Users,
      details: ["Requirement analysis", "Site assessment", "Stakeholder meetings", "Challenge identification"]
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Creating customized logistics solutions",
      icon: Lightbulb,
      details: ["Custom planning", "Technology selection", "Resource mapping", "Timeline creation"]
    },
    {
      step: "3",
      title: "Implementation",
      description: "Deploying the solution with minimal disruption",
      icon: Cog,
      details: ["Phased rollout", "Team training", "System integration", "Quality testing"]
    },
    {
      step: "4",
      title: "Optimization",
      description: "Continuous improvement and performance monitoring",
      icon: Rocket,
      details: ["Performance tracking", "Regular reviews", "Process refinement", "Scaling support"]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Solutions designed specifically for your business needs"
    },
    {
      icon: Clock,
      title: "Faster Implementation",
      description: "Quick deployment with minimal business disruption"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive risk assessment and mitigation strategies"
    },
    {
      icon: Calculator,
      title: "Cost Efficiency",
      description: "Optimized solutions that reduce operational costs"
    }
  ];

  const caseStudies = [
    {
      title: "Manufacturing Giant",
      industry: "Automotive",
      challenge: "Complex multi-location supply chain optimization",
      solution: "Integrated logistics network with real-time tracking",
      results: ["30% cost reduction", "50% faster delivery", "99.5% accuracy rate"]
    },
    {
      title: "E-commerce Leader",
      industry: "Retail",
      challenge: "Seasonal demand fluctuations and last-mile delivery",
      solution: "Flexible warehousing with dynamic routing system",
      results: ["40% improved efficiency", "25% cost savings", "Same-day delivery capability"]
    },
    {
      title: "Pharmaceutical Company",
      industry: "Healthcare",
      challenge: "Temperature-controlled distribution network",
      solution: "Cold chain logistics with IoT monitoring",
      results: ["100% compliance", "Zero product loss", "Real-time monitoring"]
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
              Custom Logistics Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Tailored logistics solutions designed to meet your unique business requirements. 
              From complex projects to specialized transport, we create solutions that work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/quote">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Discuss Your Needs
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create custom logistics solutions for unique business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Solution Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating the perfect logistics solution for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-gray-500">
                        • {detail}
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
              Why Choose Custom Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of tailored logistics solutions
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

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our custom logistics solutions in action
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{study.industry}</Badge>
                  <CardTitle className="text-xl text-primary">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                      <div className="space-y-1">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-green-600">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Technology-Enabled Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We integrate cutting-edge technology into our custom solutions to provide 
                real-time visibility, automation, and intelligent decision-making capabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">IoT & Sensors</h4>
                    <p className="text-gray-600 text-sm">Real-time monitoring of cargo conditions and vehicle performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">AI & Machine Learning</h4>
                    <p className="text-gray-600 text-sm">Predictive analytics for demand forecasting and route optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Cloud Integration</h4>
                    <p className="text-gray-600 text-sm">Seamless data sharing and collaboration across platforms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Mobile Solutions</h4>
                    <p className="text-gray-600 text-sm">On-the-go access to logistics data and controls</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-gray-600 text-sm">Automation Level</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-gray-600 text-sm">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Real-time Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-gray-600 text-sm">System Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Ready for a Custom Solution?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Let's discuss your unique logistics challenges and create a tailored solution 
                  that drives your business forward. Our experts are ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      <Users className="w-5 h-5 mr-2" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/quote">
                      <Calculator className="w-5 h-5 mr-2" />
                      Request Proposal
                    </Link>
                  </Button>
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
              Transform Your Logistics Today
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Don't let logistics challenges hold your business back. Partner with us to create 
              innovative solutions that give you a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/quote">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CustomSolutions;
