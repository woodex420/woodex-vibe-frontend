import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import chairImage from "@/assets/chair-executive.jpg";
import deskImage from "@/assets/desk-standing.jpg";
import workstationImage from "@/assets/workstation.jpg";
import storageImage from "@/assets/storage.jpg";
import loungeImage from "@/assets/lounge.jpg";
import { Armchair, MonitorUp, LayoutGrid, Archive, Sofa } from "lucide-react";

const Shop = () => {
  const categories = [
    { icon: Armchair, title: "Executive Chairs", desc: "Premium ergonomic seating", image: chairImage, count: 45 },
    { icon: MonitorUp, title: "Standing Desks", desc: "Height-adjustable workspaces", image: deskImage, count: 32 },
    { icon: LayoutGrid, title: "Workstations", desc: "Complete desk systems", image: workstationImage, count: 28 },
    { icon: Archive, title: "Storage", desc: "Cabinets and filing solutions", image: storageImage, count: 52 },
    { icon: Sofa, title: "Lounge", desc: "Breakout and reception furniture", image: loungeImage, count: 38 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Shop Our Collection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete range of office furniture designed to enhance productivity and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <Card key={i} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{category.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{category.count} products</span>
                  <Button>Browse</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-muted rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer custom furniture solutions tailored to your specific needs. Contact our design team for personalized assistance.
          </p>
          <Button size="lg">Contact Design Team</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
