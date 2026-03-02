import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO, generateBreadcrumbSchema, generateProductSchema, generateFAQSchema } from "@/components/SEO";
import { allProducts, formatPrice, Product } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield, Truck, Phone, ChevronRight, ArrowLeft,
  Star, ArrowRight, MessageSquare
} from "lucide-react";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductTabs from "@/components/product/ProductTabs";
import ProductPolicies from "@/components/product/ProductPolicies";

/** Build a 4-image array for any product by reusing same-category images */
const getProductImages = (product: Product): string[] => {
  const sameCategory = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const images = [product.image];
  for (let i = 0; i < 3 && i < sameCategory.length; i++) {
    images.push(sameCategory[i].image);
  }
  // Fill remaining slots with the main image if not enough
  while (images.length < 4) images.push(product.image);
  return images;
};

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
          <Link to="/shop"><Button>Back to Shop</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const productImages = getProductImages(product);

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

  const productFaqs = [
    { question: `What is the warranty on the ${product.name}?`, answer: `The ${product.name} comes with a 2-year manufacturer's warranty covering the frame, base, and mechanism. Upholstery and fabric are covered for 1 year. Extended warranty options are available for corporate clients.` },
    { question: `Is the ${product.name} available for customization?`, answer: "Yes! You can customize the upholstery color, fabric type, arm style, and base finish. Visit our Custom Design page or contact our team for bespoke options tailored to your brand identity." },
    { question: "What is the delivery timeline?", answer: "Standard delivery within Lahore takes 3-5 business days. Islamabad/Rawalpindi 5-7 days. Nationwide delivery typically takes 7-10 business days. Express delivery options are available for urgent orders." },
    { question: "What payment methods do you accept?", answer: "We accept bank transfers (HBL, Meezan, UBL, Allied Bank), JazzCash, EasyPaisa, cash on delivery (Lahore only), and cheque payments for corporate orders. 50-75% advance is required to confirm." },
    { question: "Can I see this product in a showroom?", answer: "Yes, visit our showroom at LG 89 Zainab Tower, Lahore to see and test this product. Book an appointment at +92 322 4000 768 for a personalized walkthrough." },
    { question: "Do you offer bulk pricing for offices?", answer: "Absolutely! We offer tiered discounts: 10% off for 10+ units, 15% off for 25+ units, and custom project pricing for 50+ units. Contact our B2B team for details." },
    { question: "What is the return policy?", answer: "We offer a 7-day return policy for manufacturing defects. Products must be in original packaging and unused condition. Custom-made orders are non-refundable. Refunds processed within 7-10 business days." },
  ];

  const faqSchema = generateFAQSchema(productFaqs);

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.name} - ${product.category} | WoodEx Pakistan`}
        description={product.description || `Buy ${product.name} - Premium ${product.category} at factory-direct price ${formatPrice(product.price)}. 2-year warranty, free delivery across Pakistan.`}
        keywords={`${product.name}, ${product.category}, office furniture Pakistan, buy office furniture online, ${product.category.toLowerCase()} Lahore`}
        canonical={`https://woodex.pk/product/${product.id}`}
        ogType="product"
        structuredData={[breadcrumbSchema, productSchema, faqSchema]}
      />
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/shop?category=${product.category.toLowerCase().replace(" ", "-")}`} className="hover:text-foreground transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 4-Image Gallery */}
            <ProductImageGallery
              images={productImages}
              productName={product.name}
              category={product.category}
              badge={product.badge}
            />

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm text-accent font-medium uppercase tracking-wide">{product.category}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="ml-1">(4.8)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-accent">{formatPrice(product.price)}</span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(Math.round(product.price * 1.15))}
                </span>
                <Badge variant="secondary" className="text-xs">Save 15%</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-6">Inclusive of all taxes • Factory-direct pricing</p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description || `Premium ${product.category.toLowerCase()} designed for maximum comfort and durability. Built with high-quality materials and backed by our 2-year warranty. Ideal for modern offices in Pakistan.`}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/e-quotation" className="flex-1">
                  <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" /> Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Policy Accordions */}
              <ProductPolicies />

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-xl border border-border mt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">2-Year Warranty</span>
                    <span className="text-xs text-muted-foreground">Manufacturer guarantee</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Free Delivery</span>
                    <span className="text-xs text-muted-foreground">Nationwide shipping</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Expert Support</span>
                    <span className="text-xs text-muted-foreground">Mon-Sat 9AM-7PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description / Specifications / Reviews Tabs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ProductTabs product={product} />
          </div>
        </div>
      </section>

      {/* Product FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="text-muted-foreground text-sm">Common questions about the {product.name}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {productFaqs.map((faq, i) => (
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related <span className="text-accent">Products</span></h2>
              <Link to="/shop">
                <Button variant="link" className="text-accent gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all border-border/50">
                    <div className="aspect-square overflow-hidden relative">
                      {relatedProduct.badge && (
                        <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs">
                          {relatedProduct.badge}
                        </Badge>
                      )}
                      <img
                        src={relatedProduct.image}
                        alt={`${relatedProduct.name} - ${relatedProduct.category}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-accent font-medium mb-1">{relatedProduct.category}</p>
                      <h3 className="font-bold mb-2 line-clamp-2 text-sm group-hover:text-accent transition-colors">{relatedProduct.name}</h3>
                      <span className="text-lg font-bold">{formatPrice(relatedProduct.price)}</span>
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
