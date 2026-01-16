import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

import heroSofaImg from "@/assets/hero-sofa.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";
import chairExecutiveImg from "@/assets/chair-executive.jpg";
import workstationImg from "@/assets/workstation.jpg";

interface Slide {
  id: number;
  subtitle: string;
  title: string[];
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: "Woodex Lounge Series",
    title: ["Best Seller", "Sofa & Collection", "LivingRoom"],
    buttonText: "SHOP NOW",
    buttonLink: "/shop",
    image: heroSofaImg,
  },
  {
    id: 2,
    subtitle: "Premium Executive Collection",
    title: ["Executive", "Office Chairs", "Premium Comfort"],
    buttonText: "EXPLORE",
    buttonLink: "/shop?category=executive",
    image: chairExecutiveImg,
  },
  {
    id: 3,
    subtitle: "Modern Workstation Solutions",
    title: ["Complete", "Workstation", "Systems"],
    buttonText: "VIEW ALL",
    buttonLink: "/shop?category=workstations",
    image: workstationImg,
  },
  {
    id: 4,
    subtitle: "Transform Your Office",
    title: ["Professional", "Office Design", "Solutions"],
    buttonText: "GET QUOTE",
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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-background py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <p 
              key={`subtitle-${slide.id}`}
              className="text-sm font-medium text-muted-foreground mb-3 tracking-wider animate-fade-in"
            >
              {slide.subtitle}
            </p>
            <h1 
              key={`title-${slide.id}`}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in"
            >
              {slide.title.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <Link to={slide.buttonLink}>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold border-foreground border-2 px-8 animate-fade-in"
              >
                {slide.buttonText}
              </Button>
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                key={`image-${slide.id}`}
                src={slide.image} 
                alt={slide.title.join(" ")} 
                className="w-full h-auto max-w-xl mx-auto lg:max-w-none transition-all duration-500 animate-fade-in"
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="h-12 w-12 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="h-12 w-12 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-accent scale-110" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-center gap-4 mt-4 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="h-10 w-10 rounded-full border-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="h-10 w-10 rounded-full border-2"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSlider;
