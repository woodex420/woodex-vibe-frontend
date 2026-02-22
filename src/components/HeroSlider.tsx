import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Truck, Clock, BadgeCheck, ShieldCheck } from "lucide-react";

import heroSofaImg from "@/assets/hero-sofa.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";
import chairExecutiveImg from "@/assets/chair-executive.jpg";
import workstationImg from "@/assets/workstation.jpg";

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: "Made in Pakistan",
    title: "Best Seller\nSofa & Chair\nCollection",
    buttonText: "SHOP NOW",
    buttonLink: "/shop",
    image: heroSofaImg,
  },
  {
    id: 2,
    subtitle: "Premium Executive",
    title: "Executive\nChair\nCollection",
    buttonText: "SHOP NOW",
    buttonLink: "/shop?category=executive",
    image: chairExecutiveImg,
  },
  {
    id: 3,
    subtitle: "Modern Workspace",
    title: "Modern\nWorkstation\nSystems",
    buttonText: "SHOP NOW",
    buttonLink: "/shop?category=workstations",
    image: workstationImg,
  },
  {
    id: 4,
    subtitle: "Transform Your Office",
    title: "Complete\nOffice\nSolutions",
    buttonText: "SHOP NOW",
    buttonLink: "/e-quotation",
    image: heroOfficeImg,
  },
];

const trustBadges = [
  { icon: Truck, title: "Fast, Free Shipping", desc: "On orders over PKR 50,000" },
  { icon: Clock, title: "Next Day Delivery", desc: "Free — spend over PKR 99,000" },
  { icon: BadgeCheck, title: "Low Price Guarantee", desc: "We offer competitive prices" },
  { icon: ShieldCheck, title: "Quality Guarantee", desc: "We Guarantee Our Products" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = slides[currentSlide];

  return (
    <section className="w-full bg-background">
      {/* Main Hero — split layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] gap-6">
          {/* Left: Text */}
          <div className="py-10 md:py-16">
            <p className="text-sm text-muted-foreground tracking-wide mb-3">{slide.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] whitespace-pre-line mb-8">
              {slide.title}
            </h1>
            <Link
              to={slide.buttonLink}
              className="inline-block border-2 border-foreground text-foreground text-sm font-semibold tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              {slide.buttonText}
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative flex items-center justify-center h-full">
            <img
              key={`img-${slide.id}`}
              src={slide.image}
              alt={slide.title.replace(/\n/g, " ")}
              className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-contain transition-opacity duration-500"
            />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-foreground scale-110"
                : "bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trust Badges Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <badge.icon className="h-7 w-7 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-bold text-foreground">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
