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
  formatPrice,
  Product 
} from "@/data/products";
import { Shield, Truck, Phone, Grid3X3, LayoutList, ChevronRight, SlidersHorizontal, Eye, ShoppingCart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Shop", url: "https://woodex.pk/shop" },
  ]);

  const filteredProducts = useMemo(() => {
    let products: Product[];
    if (!activeCategory) {
      products = [...allProducts];
    } else {
      switch (activeCategory) {
        case "executive": products = [...executiveChairs]; break;
        case "manager": products = [...managerChairs]; break;
        case "staff": products = [...staffChairs]; break;
        case "visitor": products = [...visitorChairs]; break;
        default: products = [...allProducts];
      }
    }

    switch (sortBy) {
      case "price-low": products.sort((a, b) => a.price - b.price); break;
      case "price-high": products.sort((a, b) => b.price - a.price); break;
      case "name-az": products.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "name-za": products.sort((a, b) => b.name.localeCompare(a.name)); break;
    }

    return products;
  }, [activeCategory, sortBy]);

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
      
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Shop</span>
            {activeCategory && (
              <>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground font-medium">{activeCategoryName}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <section className="py-3 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-xs text-accent-foreground">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              <span className="font-medium">5-7 Year Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="h-4 w-4" />
              <span className="font-medium">Free Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Expert Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Sidebar + Products */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="lg:w-[240px] flex-shrink-0">
            <div className="sticky top-20">
              {/* Categories */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal className="h-4 w-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">Categories</h3>
                </div>
                <div className="space-y-1">
                  {categoryFilters.map((filter) => (
                    <button
                      key={filter.id || "all"}
                      onClick={() => handleCategoryChange(filter.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-none transition-colors ${
                        activeCategory === filter.id
                          ? "bg-foreground text-background font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{filter.name}</span>
                      <span className={`text-xs ${activeCategory === filter.id ? 'text-background/70' : 'text-muted-foreground/50'}`}>
                        ({filter.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Info */}
              <div className="mb-8 p-4 bg-muted/50 border border-border">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Price Range</h3>
                <p className="text-sm text-muted-foreground">
                  Rs. 8,500 – Rs. 82,000
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">Factory-direct pricing</p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Link to="/e-quotation" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-foreground rounded-none text-xs font-semibold">
                    <ShoppingCart className="h-3.5 w-3.5 mr-2" />
                    Get E-Quotation
                  </Button>
                </Link>
                <Link to="/services/custom-design" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-border rounded-none text-xs">
                    Custom Design →
                  </Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Products Area */}
          <main className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div>
                <h1 className="text-xl font-bold">{activeCategoryName}</h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px] h-9 text-xs rounded-none border-border">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name-az">Name: A–Z</SelectItem>
                    <SelectItem value="name-za">Name: Z–A</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="hidden md:flex border border-border">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === 'list' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <LayoutList className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <Card className="overflow-hidden border border-border shadow-none hover:shadow-lg transition-all duration-300 rounded-none h-full">
                      <div className="aspect-square overflow-hidden relative bg-muted">
                        {product.badge && (
                          <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground text-[10px] rounded-none px-2 py-0.5">
                            {product.badge}
                          </Badge>
                        )}
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Quick View Overlay */}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-background text-foreground text-xs font-semibold px-4 py-2 flex items-center gap-1.5">
                              <Eye className="h-3.5 w-3.5" />
                              Quick View
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-3 bg-card border-t border-border">
                        <p className="text-[10px] text-accent font-medium uppercase tracking-wider mb-1">
                          {product.category}
                        </p>
                        <h3 className="text-xs font-bold mb-2 line-clamp-2 min-h-[32px] leading-tight">
                          {product.name}
                        </h3>
                        <span className="text-sm font-bold">
                          {formatPrice(product.price)}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <Card className="overflow-hidden border border-border shadow-none hover:shadow-md transition-all duration-300 rounded-none">
                      <div className="flex">
                        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden bg-muted relative">
                          {product.badge && (
                            <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground text-[10px] rounded-none px-2 py-0.5">
                              {product.badge}
                            </Badge>
                          )}
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-4 flex flex-col justify-center flex-1">
                          <p className="text-[10px] text-accent font-medium uppercase tracking-wider mb-1">
                            {product.category}
                          </p>
                          <h3 className="text-sm font-bold mb-1">{product.name}</h3>
                          {product.features && (
                            <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                              {Object.values(product.features).slice(0, 2).join(" • ")}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-base font-bold">{formatPrice(product.price)}</span>
                            <Button size="sm" variant="outline" className="rounded-none text-xs border-foreground h-8">
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>

        {/* CTA */}
        <section className="mt-16 mb-8 bg-foreground text-background p-10 md:p-14 text-center">
          <h2 className="text-2xl font-bold mb-3">Can't Find What You're Looking For?</h2>
          <p className="text-sm mb-6 max-w-xl mx-auto opacity-80">
            We offer custom furniture solutions tailored to your specific needs. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-bold">
                Request Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-none font-bold border-background text-background hover:bg-background hover:text-foreground">
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
