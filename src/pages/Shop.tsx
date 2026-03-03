import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  allProducts, 
  executiveChairs, 
  managerChairs, 
  staffChairs, 
  visitorChairs,
  ceoTables,
  executiveTables,
  managerTables,
  officeDesks,
  workstations,
  officeSofas,
  meetingTables,
  receptionDesks,
  storageFurniture,
  bedroomFurniture,
  livingRoomFurniture,
  diningFurniture,
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

  const shopFaqs = [
    { question: "Can I see products before buying?", answer: "Yes! Visit our Lahore showroom at LG 89, Zainab Tower, Model Town Link Road, or contact us for a video walkthrough. Walk-ins welcome Mon-Sat 10:30AM-7:30PM." },
    { question: "Is online pricing the same as showroom pricing?", answer: "Yes, our online prices match showroom prices. In fact, online-exclusive deals and seasonal offers may give you additional savings. All prices are factory-direct with no middleman markups." },
    { question: "Can I modify or customize products?", answer: "Absolutely! Most products can be customized — upholstery color, fabric type, dimensions, finish, and even logo embroidery. Visit our Custom Design page or call +92 322 4000 768." },
    { question: "What about installation and assembly?", answer: "Professional installation is available nationwide. In Lahore, we offer free doorstep assembly. For other cities, assembly service is available at a nominal fee." },
    { question: "Do you offer bulk discounts for offices?", answer: "Yes! 10-25 units get 10% off with free delivery in Lahore. 26-50 units get 15% off. 51-100 units get 20% off with a dedicated project manager. For 100+ units, custom pricing is available." },
    { question: "What warranty do your products come with?", answer: "Up to 3-year structural warranty on desks, tables, and workstations. Office chairs include 1-year warranty on wheels, gas lift, and base mechanism. Home furniture carries a 2-year warranty." },
    { question: "How long does delivery take?", answer: "Lahore: 3-5 business days. Major cities (Karachi, Islamabad, Faisalabad): 5-8 business days. Rest of Pakistan: 8-12 business days with tracking provided." },
    { question: "Do you sell home furniture too?", answer: "Yes! We now offer a complete home furniture range including bedroom sets, living room sofas, coffee tables, TV units, dining sets, and more — all with the same factory-direct quality and pricing." },
    { question: "What materials do you use?", answer: "High-quality MDF with melamine finish, imported PVC edge banding, 18-gauge MS powder-coated steel frames, MoltyFoam cushioning, premium upholstery fabrics, solid Sheesham wood, and tempered glass." },
    { question: "What payment options are available?", answer: "We accept credit/debit cards, bank transfers, and easy installments. Corporate accounts with net-30 payment terms are available for verified businesses." },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Shop", url: "https://woodex.pk/shop" },
  ]);

  const faqSchema = generateFAQSchema(shopFaqs);

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
        case "ceo-tables": products = [...ceoTables]; break;
        case "executive-tables": products = [...executiveTables]; break;
        case "manager-tables": products = [...managerTables]; break;
        case "desks": products = [...officeDesks]; break;
        case "workstations": products = [...workstations]; break;
        case "sofas": products = [...officeSofas]; break;
        case "meeting": products = [...meetingTables]; break;
        case "reception": products = [...receptionDesks]; break;
        case "storage": products = [...storageFurniture]; break;
        case "bedroom": products = [...bedroomFurniture]; break;
        case "living": products = [...livingRoomFurniture]; break;
        case "dining": products = [...diningFurniture]; break;
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

  const sidebarSections = [
    {
      heading: "Office Chairs",
      filters: [
        { id: "executive", name: "Executive Chairs", count: executiveChairs.length },
        { id: "manager", name: "Manager Chairs", count: managerChairs.length },
        { id: "staff", name: "Staff Chairs", count: staffChairs.length },
        { id: "visitor", name: "Visitor Chairs", count: visitorChairs.length },
      ],
    },
    {
      heading: "Office Tables",
      filters: [
        { id: "ceo-tables", name: "CEO Tables", count: ceoTables.length },
        { id: "executive-tables", name: "Executive Tables", count: executiveTables.length },
        { id: "manager-tables", name: "Manager Tables", count: managerTables.length },
        { id: "desks", name: "Office Desks", count: officeDesks.length },
      ],
    },
    {
      heading: "Office Furniture",
      filters: [
        { id: "workstations", name: "Workstations", count: workstations.length },
        { id: "sofas", name: "Office Sofas", count: officeSofas.length },
        { id: "meeting", name: "Meeting Tables", count: meetingTables.length },
        { id: "reception", name: "Reception Desks", count: receptionDesks.length },
        { id: "storage", name: "Storage & Filing", count: storageFurniture.length },
      ],
    },
    {
      heading: "Home Furniture",
      filters: [
        { id: "bedroom", name: "Bedroom", count: bedroomFurniture.length },
        { id: "living", name: "Living Room", count: livingRoomFurniture.length },
        { id: "dining", name: "Dining", count: diningFurniture.length },
      ],
    },
  ];

  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const allFilters = sidebarSections.flatMap(s => s.filters);
  const activeCategoryName = allFilters.find(c => c.id === activeCategory)?.name || "All Products";

  // Dynamic price range
  const priceRange = useMemo(() => {
    const prices = filteredProducts.map(p => p.price);
    if (prices.length === 0) return { min: 0, max: 0 };
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${activeCategoryName} - Shop Office & Home Furniture Online | WoodEx Pakistan`}
        description="Shop 100+ premium office chairs, desks, workstations, meeting tables, reception desks, bedroom sets, dining tables & living room furniture. Factory-direct prices, up to 3-year warranty, free delivery nationwide."
        keywords="buy office furniture Pakistan, office chairs online, executive desks Lahore, workstations, meeting tables, reception desks, bedroom furniture Pakistan, dining sets, home sofa, TV units, coffee tables"
        canonical="https://woodex.pk/shop"
        structuredData={[breadcrumbSchema, faqSchema]}
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
              <span className="font-medium">Up to 3-Year Warranty</span>
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

                {/* All Products */}
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm transition-colors ${
                    activeCategory === null
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>All Products</span>
                  <span className={`text-xs ${activeCategory === null ? 'text-background/70' : 'text-muted-foreground/50'}`}>
                    ({allProducts.length})
                  </span>
                </button>

                {/* Grouped sections */}
                {sidebarSections.map((section) => (
                  <div key={section.heading} className="mt-4">
                    <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">
                      {section.heading}
                    </p>
                    <div className="space-y-0.5">
                      {section.filters.map((filter) => (
                        <button
                          key={filter.id}
                          onClick={() => handleCategoryChange(filter.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${
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
                ))}
              </div>

              {/* Price Range Info */}
              <div className="mb-8 p-4 bg-muted/50 border border-border">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Price Range</h3>
                <p className="text-sm text-muted-foreground">
                  {formatPrice(priceRange.min)} – {formatPrice(priceRange.max)}
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
                          {product.description ? (
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {product.description}
                            </p>
                          ) : product.features ? (
                            <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                              {Object.values(product.features).slice(0, 2).join(" • ")}
                            </p>
                          ) : null}
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
          <h2 className="text-2xl font-bold mb-3">Start Building Your Perfect Space</h2>
          <p className="text-sm mb-6 max-w-xl mx-auto opacity-80">
            Can't find what you're looking for? Our team can help you find the perfect furniture or create custom solutions tailored to your space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link to="/e-quotation">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-bold">
                Request Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-none font-bold border-background text-background hover:bg-background hover:text-foreground">
                Contact Sales Team
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs opacity-60">
            <span>Popular: Ergonomic Chairs</span>
            <span>•</span>
            <span>Executive Desks</span>
            <span>•</span>
            <span>Conference Tables</span>
            <span>•</span>
            <span>Workstations</span>
            <span>•</span>
            <span>Bedroom Sets</span>
            <span>•</span>
            <span>Dining Tables</span>
          </div>
        </section>
      </div>

      {/* FAQ Accordion */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="text-muted-foreground text-sm">Everything you need to know before buying</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {shopFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:text-accent text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Buy Office & Home Furniture Online in Pakistan – WoodEx Shop
            </h2>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              Welcome to <strong>WoodEx</strong>, Pakistan's premier destination for premium office and home furniture. Browse our collection of <strong>100+ products</strong> — from ergonomic office chairs and executive desks to bedroom sets, dining tables, and living room furniture — all at factory-direct prices with nationwide free delivery.
            </p>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              Our <strong>Office Chairs</strong> range includes Executive leather chairs (from Rs. 35,000), Manager mesh chairs with lumbar support, ergonomic Staff chairs, and professional Visitor seating. <strong>Office Desks</strong> span compact computer desks to premium director suites with veneer finishes. <strong>Workstations</strong> are available in 2, 4, 6-person clusters, cubicles, and open-plan configurations — ideal for IT companies, call centers, and corporate offices.
            </p>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              New to WoodEx: our <strong>Home Furniture</strong> collection. Explore <strong>Bedroom Sets</strong> with king and queen-size beds, dressing tables, and mirrors. Furnish your living room with premium <strong>sofas, coffee tables, TV units, and console tables</strong>. Complete your dining area with solid Sheesham wood <strong>dining sets</strong>, upholstered chairs, and extendable tables.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every WoodEx product comes with <strong>up to 3-year structural warranty</strong>, free professional assembly, and expert consultation. Whether you're furnishing a single home office or a 500-seat corporate headquarters, we offer bulk pricing, customization options, and dedicated project management. Shop online or visit our showroom in <strong>Lahore</strong>. We deliver across Pakistan including Karachi, Islamabad, Faisalabad, Rawalpindi, Multan, and Peshawar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;