import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import chairImage from "@/assets/chair-executive.jpg";
import chairMeshImage from "@/assets/chair-mesh.jpg";
import deskImage from "@/assets/desk-standing.jpg";
import deskExecutiveImage from "@/assets/desk-executive.jpg";
import workstationImage from "@/assets/workstation.jpg";
import storageImage from "@/assets/storage.jpg";
import bookshelfImage from "@/assets/bookshelf.jpg";
import loungeImage from "@/assets/lounge.jpg";
import receptionImage from "@/assets/reception-desk.jpg";
import { Armchair, MonitorUp, LayoutGrid, Archive, Sofa, Star } from "lucide-react";

const Shop = () => {
  const categories = [
    { icon: Armchair, title: "Office Chairs", desc: "Executive, mesh & ergonomic seating", image: chairImage, count: 8 },
    { icon: MonitorUp, title: "Office Desks", desc: "Executive, standing & modular desks", image: deskImage, count: 6 },
    { icon: LayoutGrid, title: "Workstations", desc: "Complete office desk systems", image: workstationImage, count: 5 },
    { icon: Archive, title: "Storage Solutions", desc: "Cabinets, filing & shelving", image: storageImage, count: 7 },
    { icon: Sofa, title: "Lounge Furniture", desc: "Reception & breakout seating", image: loungeImage, count: 4 },
    { icon: Star, title: "Conference Tables", desc: "Meeting & boardroom tables", image: receptionImage, count: 5 },
    { icon: Armchair, title: "Meeting Room Furniture", desc: "Complete meeting solutions", image: chairImage, count: 4 },
    { icon: Star, title: "Reception Desks", desc: "Welcome & front desk solutions", image: receptionImage, count: 3 },
    { icon: Armchair, title: "Executive Furniture", desc: "Premium office suites", image: chairMeshImage, count: 6 },
    { icon: Archive, title: "Bookshelf Systems", desc: "Library & display shelving", image: bookshelfImage, count: 4 },
    { icon: Star, title: "Office Accessories", desc: "Monitors, lamps & organizers", image: storageImage, count: 4 },
  ];

  const featured = [
    { 
      name: "ErgoMax Executive Chair", 
      price: "2,850", 
      image: chairImage,
      rating: 4.9,
      reviews: 156,
      badge: "Best Seller"
    },
    { 
      name: "FlexiDesk Pro Standing", 
      price: "3,200", 
      image: deskImage,
      rating: 4.8,
      reviews: 203,
      badge: "New Arrival"
    },
    { 
      name: "AeroMesh Task Chair", 
      price: "1,650", 
      image: chairMeshImage,
      rating: 4.7,
      reviews: 89,
      badge: null
    },
    { 
      name: "Premium L-Shape Desk", 
      price: "4,500", 
      image: deskExecutiveImage,
      rating: 4.9,
      reviews: 124,
      badge: "Premium"
    },
    { 
      name: "ModernShelf Storage", 
      price: "1,890", 
      image: bookshelfImage,
      rating: 4.6,
      reviews: 67,
      badge: null
    },
    { 
      name: "Welcome Reception Desk", 
      price: "5,200", 
      image: receptionImage,
      rating: 4.8,
      reviews: 43,
      badge: "Featured"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">56 Premium Products Across 11 Categories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pakistan's most comprehensive B2B office furniture collection. Factory-direct pricing with 5-7 year warranty on all products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <Card key={i} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all">
                <div className="aspect-square overflow-hidden relative">
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">AED {product.price}</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
