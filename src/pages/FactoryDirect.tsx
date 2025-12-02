import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import factoryImage from "@/assets/factory-floor.jpg";
import { Factory, TrendingDown, Award, Zap, Shield, Clock } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={factoryImage} 
          alt="WoodEx Factory Direct Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Factory Direct Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Buy directly from our Lahore manufacturing facility and save 30-50% compared to retail prices. No middlemen, no markups—just premium quality furniture at honest wholesale prices.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Buy Factory Direct?</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Skip the retail markup and buy directly from Pakistan's leading office furniture manufacturer. Better prices, superior quality, unmatched service.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">How Factory Direct Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
                <h3 className="text-xl font-bold mb-3">Browse & Select</h3>
                <p className="text-muted-foreground">
                  Choose from our catalog or request custom designs. Get instant factory pricing with no hidden fees.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
                <h3 className="text-xl font-bold mb-3">Production</h3>
                <p className="text-muted-foreground">
                  Your order goes straight to our production line. Track progress with regular updates from our team.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
                <h3 className="text-xl font-bold mb-3">Direct Delivery</h3>
                <p className="text-muted-foreground">
                  Delivered straight from factory to your door. Professional installation included with every order.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Saving Today</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Contact us for factory-direct wholesale pricing on your next furniture order. Minimum order value: PKR 300,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12">
                  Get Factory Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12">
                  Schedule Factory Tour
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default FactoryDirect;
