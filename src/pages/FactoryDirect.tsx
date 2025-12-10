import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import factoryImage from "@/assets/factory-floor.jpg";
import workstationImage from "@/assets/workstation.jpg";
import deskImage from "@/assets/desk-executive.jpg";
import { Factory, TrendingDown, Award, Zap, Shield, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const FactoryDirect = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "30-50% Lower Prices",
      desc: "Eliminate middleman markups. Buy directly from our factory at wholesale prices with no hidden costs.",
    },
    {
      icon: Factory,
      title: "Full Manufacturing Control",
      desc: "We control every step of production, ensuring consistent quality and faster turnaround times.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      desc: "ISO-certified manufacturing facility with rigorous quality control at every production stage.",
    },
    {
      icon: Zap,
      title: "Fast Production",
      desc: "Direct ordering means faster production schedules. Custom orders delivered in 4-6 weeks.",
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      desc: "Factory-direct buyers receive extended 5-year warranty on all furniture products.",
    },
    {
      icon: Clock,
      title: "Priority Service",
      desc: "Factory-direct customers get priority production slots and dedicated support team.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years Manufacturing" },
    { number: "50,000+", label: "Units Produced Annually" },
    { number: "ISO 9001", label: "Certified Quality" },
    { number: "5,000+", label: "Happy Customers" },
  ];

  const comparisons = [
    { feature: "Product Price", retail: "100%", factory: "50-70%" },
    { feature: "Customization", retail: "Limited", factory: "Full Custom" },
    { feature: "Lead Time", retail: "8-12 weeks", factory: "4-6 weeks" },
    { feature: "Warranty", retail: "1-2 years", factory: "5 years" },
    { feature: "Support", retail: "Standard", factory: "Priority" },
    { feature: "Quality Control", retail: "Basic", factory: "Direct QC" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src={factoryImage} 
          alt="WoodEx Factory Direct Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-in">
                Save 30-50% on Every Order
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Factory Direct <br />
                <span className="text-accent">Pricing</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-8">
                Buy directly from our Lahore manufacturing facility and save significantly compared to retail prices. No middlemen, no markups—just premium quality furniture at honest wholesale prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14 text-lg">
                    Get Factory Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-14 text-lg">
                    Schedule Factory Tour
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Why Buy Factory Direct?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Skip the retail markup and buy directly from Pakistan's leading office furniture manufacturer
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Comparison</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Retail vs Factory Direct</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground font-bold text-center">
                <div className="p-4">Feature</div>
                <div className="p-4">Retail</div>
                <div className="p-4 bg-accent text-accent-foreground">Factory Direct</div>
              </div>
              {comparisons.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-center ${i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
                  <div className="p-4 font-medium text-left pl-6">{row.feature}</div>
                  <div className="p-4 text-muted-foreground">{row.retail}</div>
                  <div className="p-4 font-bold text-accent">{row.factory}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image + Content Section */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Facility</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">State-of-the-Art Manufacturing</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our 100,000 sq. ft. Lahore facility houses the latest in furniture manufacturing technology. From precision CNC machines to climate-controlled finishing rooms, every aspect is designed for quality.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Modern CNC & automated machinery",
                "In-house wood seasoning & treatment",
                "Dedicated quality control lab",
                "Climate-controlled finishing area",
                "Eco-friendly manufacturing processes"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Book Factory Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img 
              src={workstationImage} 
              alt="Manufacturing Facility" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-sm">Sq. Ft. Facility</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">How Factory Direct Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Browse & Select", desc: "Choose from our catalog or request custom designs. Get instant factory pricing with no hidden fees.", icon: "🔍" },
              { step: "2", title: "Production", desc: "Your order goes straight to our production line. Track progress with regular updates from our team.", icon: "🏭" },
              { step: "3", title: "Direct Delivery", desc: "Delivered straight from factory to your door. Professional installation included with every order.", icon: "🚚" },
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Made in Our Factory</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={deskImage} alt="Executive Desks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Executive Desks</h3>
                  <p className="text-white/80 text-sm">Premium wood & metal finishes</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={workstationImage} alt="Workstations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Workstations</h3>
                  <p className="text-white/80 text-sm">Modular & customizable systems</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={factoryImage} alt="Custom Furniture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Custom Designs</h3>
                  <p className="text-white/80 text-sm">Built to your specifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Saving Today</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Contact us for factory-direct wholesale pricing on your next furniture order. Minimum order value: PKR 300,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Get Factory Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Schedule Factory Tour
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default FactoryDirect;
