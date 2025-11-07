import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Box, Armchair, LayoutGrid, Archive, Sofa } from "lucide-react";

const VirtualShowroom = () => {
  const categories = [
    { icon: Armchair, label: "Executive Chairs" },
    { icon: LayoutGrid, label: "Workstations" },
    { icon: Archive, label: "Storage" },
    { icon: Box, label: "Desks" },
    { icon: Sofa, label: "Lounge" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Virtual Showroom</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience our furniture in immersive 3D. Design your perfect office space with real-time visualization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Launch 3D Configurator
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {categories.map((cat, i) => (
            <Button
              key={i}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2 hover:border-accent hover:bg-accent/5"
            >
              <cat.icon className="h-6 w-6" />
              <span className="text-sm">{cat.label}</span>
            </Button>
          ))}
        </div>

        {/* 3D Configurator Placeholder */}
        <Card className="bg-muted">
          <CardContent className="py-32 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-6 shadow-lg">
                <Box className="h-12 w-12 text-accent" />
              </div>
              <h2 className="text-3xl font-bold mb-4">3D Configurator</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Interactive 3D room visualization will load here
              </p>
              <Button size="lg">Launch Configurator</Button>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Real-Time Visualization</h3>
              <p className="text-muted-foreground">
                See exactly how furniture will look in your space with photorealistic 3D rendering
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Custom Layouts</h3>
              <p className="text-muted-foreground">
                Design multiple layouts and compare options to find the perfect configuration
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Material Selection</h3>
              <p className="text-muted-foreground">
                Choose from hundreds of finishes, fabrics, and colors to match your brand
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VirtualShowroom;
