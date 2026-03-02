import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Package, Shield } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  category: string;
  badge?: string;
}

const ProductImageGallery = ({ images, productName, category, badge }: ProductImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative">
      {badge && (
        <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
          {badge}
        </Badge>
      )}
      <div className="aspect-square bg-muted rounded-2xl overflow-hidden mb-4">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - ${category} by WoodEx Pakistan`}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnail Strip */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              selectedIndex === i
                ? "border-accent ring-2 ring-accent/20"
                : "border-border hover:border-muted-foreground/40"
            }`}
          >
            <img
              src={img}
              alt={`${productName} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Mini trust badges */}
      <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><RotateCcw className="h-3 w-3" /> Easy Returns</span>
        <span className="flex items-center gap-1"><Package className="h-3 w-3" /> Secure Packaging</span>
        <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> Quality Assured</span>
      </div>
    </div>
  );
};

export default ProductImageGallery;
