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
