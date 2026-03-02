import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Star, CreditCard, RotateCcw, Truck } from "lucide-react";
import { Product, formatPrice } from "@/data/products";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const descriptionBullets = [
    "50% to 75% advance payment is required to confirm your order.",
    "Our representatives will contact you to confirm order details.",
    "Available in a variety of sizes, colors, and finishes.",
    "Grommets are pre-installed for easy cable management.",
    "Matching storage cabinets, bookcases, and accessories available.",
    "High-quality material, scratch-resistant, and easy to clean.",
    "A 2-year manufacturer's warranty guarantees quality.",
    "Delivery timeline: 7 to 10 business days.",
  ];

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 gap-0">
        <TabsTrigger
          value="description"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 font-semibold text-muted-foreground data-[state=active]:text-foreground"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="specifications"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 font-semibold text-muted-foreground data-[state=active]:text-foreground"
        >
          Specifications
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 font-semibold text-muted-foreground data-[state=active]:text-foreground"
        >
          Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="pt-8">
        <h3 className="text-xl font-bold mb-4">Pakistan's Largest Variety of High-Quality {product.category}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our top priority is to provide the best {product.category.toLowerCase()}, relaxing seating at affordable prices, and the best quality. WoodEx's best collection of office furniture and chairs delivered to your doorstep. We guarantee that our excellent workforce produces office furniture that meets the highest standards of quality. Home office furniture or commercial furniture is in smart styles and meets your needs perfectly.
        </p>
        <ul className="space-y-3 mb-8">
          {descriptionBullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold mb-4">Pakistan's Largest Variety of High-Quality {product.category}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {product.description || `The ${product.name} is a premium ${product.category.toLowerCase()} from WoodEx. Engineered for modern offices across Pakistan, it combines ergonomic support with professional aesthetics. Priced at ${formatPrice(product.price)} with factory-direct savings, this ${product.category.toLowerCase()} comes with a 2-year manufacturer warranty and free nationwide delivery.`}
        </p>
      </TabsContent>

      <TabsContent value="specifications" className="pt-8">
        <h3 className="text-xl font-bold mb-6">Product Specifications</h3>
        {product.features ? (
          <div className="border border-border rounded-xl overflow-hidden">
            {Object.entries(product.features).map(([key, value], i) => (
              <div
                key={key}
                className={`flex items-start gap-4 px-6 py-4 ${
                  i % 2 === 0 ? "bg-muted/30" : "bg-background"
                }`}
              >
                <span className="font-semibold min-w-[140px] text-foreground">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Detailed specifications coming soon. Contact our team for more information.</p>
        )}
      </TabsContent>

      <TabsContent value="reviews" className="pt-8">
        <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
        <div className="space-y-6">
          {[
            { name: "Ahmed K.", rating: 5, date: "2 weeks ago", text: `Excellent quality ${product.category.toLowerCase()}. Very comfortable for long working hours. WoodEx delivery was prompt and professional.` },
            { name: "Sara M.", rating: 5, date: "1 month ago", text: "Amazing build quality and the finish is top-notch. Highly recommend WoodEx for office furniture." },
            { name: "Usman R.", rating: 4, date: "2 months ago", text: "Good value for money. The product looks exactly like the pictures. Delivery was within the promised timeline." },
          ].map((review, i) => (
            <div key={i} className="border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < review.rating ? "fill-accent text-accent" : "text-muted"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">— {review.name}, {review.date}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
