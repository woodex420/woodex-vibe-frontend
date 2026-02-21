import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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
    subtitle: "Woodex Lounge Series",
    title: "Designed to impress.",
    buttonText: "Discover",
    buttonLink: "/shop",
    image: heroSofaImg,
  },
  {
    id: 2,
    subtitle: "Premium Executive Collection",
    title: "Comfort meets authority.",
    buttonText: "Discover",
    buttonLink: "/shop?category=executive",
    image: chairExecutiveImg,
  },
  {
    id: 3,
    subtitle: "Modern Workstation Systems",
    title: "Built for productivity.",
    buttonText: "Discover",
    buttonLink: "/shop?category=workstations",
    image: workstationImg,
  },
  {
    id: 4,
    subtitle: "Transform Your Office",
    title: "Professional solutions.",
    buttonText: "Discover",
    buttonLink: "/e-quotation",
    image: heroOfficeImg,
  },
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
    <section className="relative w-full overflow-hidden bg-muted">
      <div className="relative w-full" style={{ aspectRatio: '16/7' }}>
        {/* Full-width background image */}
        <img
          key={`image-${slide.id}`}
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-transparent to-transparent" />

        {/* Text content positioned on right side like workspace.ae */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="ml-auto max-w-lg text-right">
              <p className="text-sm text-muted-foreground mb-2 tracking-wide">{slide.subtitle}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {slide.title}
              </h1>
              <Link
                to={slide.buttonLink}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {slide.buttonText}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent scale-110"
                : "bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
