import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
            Work Your Way
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Modern office furniture designed for productivity and comfort
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90">
            Discover our comprehensive range of premium office furniture including ergonomic chairs, executive desks, workstations, and complete workspace solutions.
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
              { icon: Box, title: "Premium Quality", desc: "Crafted with finest materials" },
              { icon: Truck, title: "Free Delivery", desc: "On orders above AED 5,000" },
              { icon: Shield, title: "5-Year Warranty", desc: "Comprehensive coverage" },
              { icon: Lightbulb, title: "Design Support", desc: "Expert space planning" },
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
            <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our carefully curated selection of office furniture designed for modern workspaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: chairImage, title: "Executive Chairs", desc: "Ergonomic designs for all-day comfort" },
              { image: deskImage, title: "Standing Desks", desc: "Height-adjustable workspace solutions" },
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workspace?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a personalized quote for your office furniture needs. Our experts are ready to help you create the perfect workspace.
          </p>
          <Link to="/e-quotation">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Request Free Quotation
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose WOODEX?</h2>
              <div className="space-y-4">
                {[
                  "Over 20 years of furniture expertise",
                  "1000+ successful office installations",
                  "Premium materials with 5-year warranty",
                  "Expert space planning consultation",
                  "Professional delivery and installation",
                  "Customization options available",
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
    </div>
  );
};

export default Index;
