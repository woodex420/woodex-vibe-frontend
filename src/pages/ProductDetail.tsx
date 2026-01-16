import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO, generateBreadcrumbSchema, generateProductSchema } from "@/components/SEO";
import { allProducts, formatPrice, Product } from "@/data/products";
import { Shield, Truck, Phone, ChevronRight, ArrowLeft, Check } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Shop", url: "https://woodex.pk/shop" },
    { name: product.category, url: `https://woodex.pk/shop?category=${product.category.toLowerCase().replace(" ", "-")}` },
    { name: product.name, url: `https://woodex.pk/product/${product.id}` },
  ]);

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description || `Premium ${product.category} from WoodEx`,
    price: product.price,
    image: product.image,
    category: product.category,
  });

  // Get related products from same category
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.name} - ${product.category} | WoodEx`}
        description={product.description || `${product.name} - Premium ${product.category} with factory-direct pricing and 5-7 year warranty.`}
        keywords={`${product.name}, ${product.category}, office chair Pakistan, ergonomic chair`}
        canonical={`https://woodex.pk/product/${product.id}`}
        structuredData={[breadcrumbSchema, productSchema]}
      />
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/shop?category=${product.category.toLowerCase().replace(" ", "-")}`} className="hover:text-foreground">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              {product.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              )}
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-accent font-medium mb-2 uppercase tracking-wide">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-accent">{formatPrice(product.price)}</span>
              </div>

              <p className="text-muted-foreground mb-8">
                {product.description || `Premium ${product.category.toLowerCase()} designed for maximum comfort and durability. Built with high-quality materials and backed by our 5-7 year warranty.`}
              </p>

              {/* Features */}
              {product.features && (
                <div className="mb-8">
                  <h3 className="font-bold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(product.features).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{key}:</span>{" "}
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/e-quotation" className="flex-1">
                  <Button size="lg" className="w-full">Get Quote</Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-foreground">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">5-7 Year Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-square overflow-hidden relative">
                      {relatedProduct.badge && (
                        <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
                          {relatedProduct.badge}
                        </Badge>
                      )}
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-accent font-medium mb-1">{relatedProduct.category}</p>
                      <h3 className="font-bold mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <span className="text-lg font-bold text-accent">{formatPrice(relatedProduct.price)}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
