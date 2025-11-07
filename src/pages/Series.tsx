import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import chairImage from "@/assets/chair-executive.jpg";
import deskImage from "@/assets/desk-standing.jpg";
import workstationImage from "@/assets/workstation.jpg";
import loungeImage from "@/assets/lounge.jpg";
import { Award, Sparkles, Users2 } from "lucide-react";

const Series = () => {
  const series = [
    {
      name: "Executive Series",
      tagline: "Leadership deserves luxury",
      desc: "Premium furniture collection for C-suite and senior management offices. Crafted with the finest materials and attention to detail, this collection embodies sophistication and authority.",
      image: chairImage,
      icon: Award,
      badge: "Premium",
      features: ["Italian leather upholstery", "Solid wood construction", "Customizable finishes", "Lifetime structural warranty"],
      priceRange: "AED 15,000 - 45,000"
    },
    {
      name: "Modern Series",
      tagline: "Contemporary design meets functionality",
      desc: "Sleek, minimalist furniture for modern workspaces. Perfect for tech companies and creative agencies seeking a clean, professional aesthetic with maximum functionality.",
      image: deskImage,
      icon: Sparkles,
      badge: "Bestseller",
      features: ["Clean lines", "Integrated cable management", "Height-adjustable options", "Eco-friendly materials"],
      priceRange: "AED 8,000 - 25,000"
    },
    {
      name: "Collaborative Series",
      tagline: "Built for teamwork",
      desc: "Flexible furniture systems designed for open-plan offices. Enhance productivity and collaboration with modular solutions that adapt to your team's evolving needs.",
      image: workstationImage,
      icon: Users2,
      badge: "Popular",
      features: ["Modular design", "Quick reconfiguration", "Acoustic privacy panels", "Integrated power outlets"],
      priceRange: "AED 6,000 - 20,000"
    },
    {
      name: "Comfort Series",
      tagline: "Where wellness meets design",
      desc: "Ergonomically designed furniture that prioritizes employee health and comfort. Perfect for companies that value employee wellbeing and long-term productivity.",
      image: loungeImage,
      icon: Award,
      badge: "New",
      features: ["Ergonomic certification", "Breathable materials", "Adjustable components", "Posture support"],
      priceRange: "AED 5,000 - 18,000"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Furniture Series</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated collections designed for different work styles and office environments
          </p>
        </div>

        <div className="space-y-16">
          {series.map((item, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {item.badge && (
                    <Badge className="absolute top-6 left-6 z-10 bg-accent text-accent-foreground">
                      {item.badge}
                    </Badge>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover min-h-[500px]"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{item.name}</h2>
                  <p className="text-xl text-accent mb-4 italic">{item.tagline}</p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>
                  
                  <div className="mb-6">
                    <p className="font-semibold mb-3">Key Features:</p>
                    <div className="space-y-2">
                      {item.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                    <p className="text-xl font-bold">{item.priceRange}</p>
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg">Explore Series</Button>
                    <Button size="lg" variant="outline">Request Catalog</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Series;
