import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Materials & Colors</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our extensive range of premium materials and finishes to customize your furniture
          </p>
        </div>

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

        {/* Colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Popular Color Options</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {colors.map((color, i) => (
                  <div key={i} className="text-center">
                    <div 
                      className="w-20 h-20 rounded-lg border-2 border-border mx-auto mb-2 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-sm font-medium">{color.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                * Over 200 additional colors available. Request a physical sample book for the complete range.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-muted">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our design consultants can help you select the perfect materials and colors for your space. Request a sample kit or visit our showroom.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Materials;
