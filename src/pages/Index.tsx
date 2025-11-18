import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import heroImage from "@/assets/hero-office.jpg";
import chairImage from "@/assets/chair-executive.jpg";
import deskImage from "@/assets/desk-standing.jpg";
import workstationImage from "@/assets/workstation.jpg";
import { ArrowRight, CheckCircle2, Box, Truck, Shield, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Pakistan's Premier B2B Office Furniture
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            360-Degree Office Solutions from Manufacturing to Installation
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90">
            1,200+ Satisfied Clients | 56 Premium Products | 5-7 Year Warranty | Nationwide Delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Collection
              </Button>
            </Link>
            <Link to="/e-quotation">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Box, title: "Factory Direct", desc: "Lahore-based manufacturing hub" },
              { icon: Truck, title: "Nationwide Delivery", desc: "Covering all major cities" },
              { icon: Shield, title: "5-7 Year Warranty", desc: "Industry-leading coverage" },
              { icon: Lightbulb, title: "Free 3D Design", desc: "Floor plans & visualization" },
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="pt-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">56 Premium Products Across 11 Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From executive suites to complete office fitouts - we handle projects of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: chairImage, title: "Office Chairs", desc: "Executive, mesh & ergonomic seating" },
              { image: deskImage, title: "Office Desks", desc: "Executive, standing & modular desks" },
              { image: workstationImage, title: "Workstations", desc: "Complete office desk systems" },
            ].map((product, i) => (
              <Card key={i} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.desc}</p>
                  <Link to="/shop" className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,200+", label: "Satisfied Clients" },
              { number: "56", label: "Premium Products" },
              { number: "11", label: "Product Categories" },
              { number: "5-7 Years", label: "Warranty Coverage" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Office?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            From consultation to installation - we handle everything
          </p>
          <Link to="/e-quotation">
            <Button size="lg" variant="secondary" className="gap-2">
              Request Free Quotation <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose WoodEx?</h2>
              <div className="space-y-4">
                {[
                  "Pakistan's first digital B2B furniture platform",
                  "1,200+ satisfied clients nationwide",
                  "Factory-direct manufacturing in Lahore",
                  "5-7 year warranty on all products",
                  "Free 3D design & floor planning",
                  "Nationwide delivery & installation",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{point}</p>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button size="lg" className="mt-8">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={chairImage} alt="Office chair" className="rounded-lg shadow-lg" />
              <img src={deskImage} alt="Office desk" className="rounded-lg shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
