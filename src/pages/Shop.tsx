import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import chairImage from "@/assets/chair-executive.jpg";
import chairMeshImage from "@/assets/chair-mesh.jpg";
import deskImage from "@/assets/desk-standing.jpg";
import deskExecutiveImage from "@/assets/desk-executive.jpg";
import workstationImage from "@/assets/workstation.jpg";
import storageImage from "@/assets/storage.jpg";
import bookshelfImage from "@/assets/bookshelf.jpg";
import loungeImage from "@/assets/lounge.jpg";
import receptionImage from "@/assets/reception-desk.jpg";
import meetingRoomImage from "@/assets/meeting-room.jpg";
import { Armchair, MonitorUp, LayoutGrid, Archive, Sofa, Star, Shield, Truck, Phone } from "lucide-react";

const Shop = () => {
  const categories = [
    { icon: Armchair, title: "Office Chairs", desc: "Executive, mesh & ergonomic seating solutions", image: chairImage, count: 8 },
    { icon: MonitorUp, title: "Office Desks", desc: "Executive, standing & modular desk systems", image: deskImage, count: 6 },
    { icon: LayoutGrid, title: "Workstations", desc: "Complete cubicle and open office systems", image: workstationImage, count: 5 },
    { icon: Archive, title: "Storage Solutions", desc: "Cabinets, filing systems & shelving units", image: storageImage, count: 7 },
    { icon: Sofa, title: "Lounge & Sofas", desc: "Reception seating & breakout furniture", image: loungeImage, count: 4 },
    { icon: Star, title: "Conference Tables", desc: "Meeting room & boardroom solutions", image: meetingRoomImage, count: 5 },
    { icon: Armchair, title: "Meeting Chairs", desc: "Visitor and conference room seating", image: chairMeshImage, count: 4 },
    { icon: Star, title: "Reception Desks", desc: "Welcome desks & front office furniture", image: receptionImage, count: 3 },
    { icon: Armchair, title: "Executive Suites", desc: "Premium CEO & director office furniture", image: deskExecutiveImage, count: 6 },
    { icon: Archive, title: "Bookshelf Systems", desc: "Library shelving & display units", image: bookshelfImage, count: 4 },
    { icon: Star, title: "Office Accessories", desc: "Monitor arms, cable management & more", image: storageImage, count: 4 },
  ];

  const featured = [
    { 
      name: "ErgoMax Executive Chair", 
      price: "45,000", 
      originalPrice: "55,000",
      image: chairImage,
      rating: 4.9,
      reviews: 156,
      badge: "Best Seller"
    },
    { 
      name: "FlexiDesk Pro Standing", 
      price: "68,000", 
      originalPrice: "78,000",
      image: deskImage,
      rating: 4.8,
      reviews: 203,
      badge: "New Arrival"
    },
    { 
      name: "AeroMesh Task Chair", 
      price: "28,500", 
      originalPrice: "35,000",
      image: chairMeshImage,
      rating: 4.7,
      reviews: 89,
      badge: null
    },
    { 
      name: "Premium L-Shape Desk", 
      price: "85,000", 
      originalPrice: "98,000",
      image: deskExecutiveImage,
      rating: 4.9,
      reviews: 124,
      badge: "Premium"
    },
    { 
      name: "ModernShelf Storage", 
      price: "32,000", 
      originalPrice: "38,000",
      image: bookshelfImage,
      rating: 4.6,
      reviews: 67,
      badge: null
    },
    { 
      name: "Welcome Reception Desk", 
      price: "125,000", 
      originalPrice: "145,000",
      image: receptionImage,
      rating: 4.8,
      reviews: 43,
      badge: "Featured"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            56 Products • 11 Categories
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Office Furniture</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Pakistan's most comprehensive B2B office furniture collection. Factory-direct pricing with 5-7 year warranty on all products.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-muted/50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span>5-7 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-accent" />
              <span>Free Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" />
              <span>Expert Consultation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">Explore our complete range of office furniture solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <Card key={i} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all hover:border-accent">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-accent">{category.count} products</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{category.desc}</p>
                  <Button className="w-full">Browse Category</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Our most popular office furniture selections</p>
          </div>
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
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">PKR {product.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">PKR {product.originalPrice}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-4">Get Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We offer custom furniture solutions tailored to your specific needs. Contact our design team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary">
                Request Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                Contact Design Team
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;