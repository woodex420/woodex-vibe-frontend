import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";
import { 
  allProducts, 
  executiveChairs, 
  managerChairs, 
  staffChairs, 
  visitorChairs, 
  categories,
  formatPrice,
  Product 
} from "@/data/products";
import heroImage from "@/assets/hero-office.jpg";
import { Armchair, Star, Shield, Truck, Phone, Filter, X } from "lucide-react";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Shop", url: "https://woodex.pk/shop" },
  ]);

  // Get products based on active category
  const filteredProducts = useMemo(() => {
    if (!activeCategory) return allProducts;
    
    switch (activeCategory) {
      case "executive":
        return executiveChairs;
      case "manager":
        return managerChairs;
      case "staff":
        return staffChairs;
      case "visitor":
        return visitorChairs;
      default:
        return allProducts;
    }
  }, [activeCategory]);

  const categoryFilters = [
    { id: null, name: "All Products", count: allProducts.length },
    { id: "executive", name: "Executive Chairs", count: executiveChairs.length },
    { id: "manager", name: "Manager Chairs", count: managerChairs.length },
    { id: "staff", name: "Staff Chairs", count: staffChairs.length },
    { id: "visitor", name: "Visitor Chairs", count: visitorChairs.length },
  ];

  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const activeCategoryName = categoryFilters.find(c => c.id === activeCategory)?.name || "All Products";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${activeCategoryName} - Office Furniture Shop | WoodEx`}
        description="Browse 56+ premium office furniture products. Executive chairs, ergonomic desks, workstations, storage solutions. Factory-direct prices with 5-7 year warranty."
        keywords="buy office furniture Pakistan, office chairs online, executive desks, workstation furniture, office storage"
        canonical="https://woodex.pk/shop"
        structuredData={breadcrumbSchema}
      />
      <Navbar />
      
      {/* Hero Banner */}
      <section 
        className="relative h-[280px] md:h-[340px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Premium Office
              <span className="block text-accent">Furniture Shop</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl">
              Pakistan's most comprehensive B2B office furniture collection.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-accent-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">5-7 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span className="font-medium">Free Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">Expert Consultation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categoryFilters.map((filter) => (
              <Button
                key={filter.id || "all"}
                variant={activeCategory === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(filter.id)}
                className={`${
                  activeCategory === filter.id 
                    ? "bg-accent text-accent-foreground" 
                    : "border-border hover:border-accent"
                }`}
              >
                {filter.name}
                <Badge variant="secondary" className="ml-2 bg-muted text-muted-foreground">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
          
          {activeCategory && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products in "{activeCategoryName}"
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleCategoryChange(null)}
                className="h-7 px-2"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">{activeCategoryName}</h2>
            <p className="text-muted-foreground">
              {activeCategory 
                ? `Browse our ${activeCategoryName.toLowerCase()} collection`
                : "Explore our complete range of office furniture"
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all h-full">
                  <div className="aspect-square overflow-hidden relative">
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <p className="text-xs text-accent font-medium mb-1 uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="text-base font-bold mb-2 line-clamp-2 min-h-[48px]">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-accent">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <Button size="sm" className="w-full mt-4">View Details</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We offer custom furniture solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary">
                Request Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
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
