import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-office.jpg";
import { Palette, Shield, Package, Truck } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      category: "Wood Finishes",
      options: ["Oak", "Walnut", "Maple", "Cherry", "Mahogany", "Ash"],
      desc: "Premium natural wood veneers and solid wood options",
    },
    {
      category: "Fabric Upholstery",
      options: ["Wool Blend", "Performance Fabric", "Microfiber", "Canvas", "Velvet"],
      desc: "Durable, stain-resistant fabrics in hundreds of colors",
    },
    {
      category: "Leather",
      options: ["Full Grain", "Top Grain", "Bonded Leather", "Vegan Leather"],
      desc: "Genuine and synthetic leather in various grades",
    },
    {
      category: "Laminates",
      options: ["HPL", "Acrylic", "Wood Grain", "Solid Colors", "Textured"],
      desc: "Low-maintenance, durable surface finishes",
    },
  ];

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Navy", hex: "#000080" },
    { name: "Gray", hex: "#808080" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Brown", hex: "#8B4513" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Royal Blue", hex: "#4169E1" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Taupe", hex: "#483C32" },
  ];

  const woodFinishes = [
    { name: "Light Oak", image: "linear-gradient(135deg, #D4A76A 0%, #C19A6B 100%)" },
    { name: "Walnut", image: "linear-gradient(135deg, #5C4033 0%, #3E2723 100%)" },
    { name: "White Ash", image: "linear-gradient(135deg, #F5F5DC 0%, #E8E8E8 100%)" },
    { name: "Dark Cherry", image: "linear-gradient(135deg, #8B4513 0%, #654321 100%)" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section 
        className="relative h-[340px] md:h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Materials &
              <span className="block text-accent">Colors</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Choose from our extensive range of premium materials and finishes to customize your furniture
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-accent-foreground">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              <span className="font-medium">200+ Color Options</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              <span className="font-medium">Premium Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Materials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Material Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{material.category}</h3>
                  <p className="text-muted-foreground mb-4">{material.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {material.options.map((option, j) => (
                      <Badge key={j} variant="secondary">{option}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Wood Finishes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Premium Wood Finishes</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {woodFinishes.map((finish, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                    <div 
                      className="w-full aspect-square rounded-lg border-2 border-border mb-3 shadow-md group-hover:shadow-xl transition-shadow"
                      style={{ background: finish.image }}
                    />
                    <p className="font-medium">{finish.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                All wood finishes are available in matte, satin, or high-gloss options
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fabric Colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upholstery Color Options</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
                {colors.map((color, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                    <div 
                      className="w-16 h-16 rounded-lg border-2 border-border mx-auto mb-2 shadow-sm group-hover:shadow-md transition-shadow"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-xs font-medium">{color.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                * Over 200 additional fabric colors available. Request a physical sample book for the complete range.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-accent text-accent-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our design consultants can help you select the perfect materials and colors for your space. Request a sample kit or visit our showroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary">
                  Request Sample Kit
                </Button>
              </Link>
              <Link to="/showrooms">
                <Button size="lg" variant="secondary">
                  Visit Showroom
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

export default Materials;