import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Factory, Palette, Truck, ShieldCheck } from "lucide-react";

import heroOfficeImg from "@/assets/hero-office.jpg";
import workstationImg from "@/assets/workstation.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import heroSofaImg from "@/assets/hero-sofa.jpg";

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  supportingText: string;
  buttons: { text: string; link: string; variant: "primary" | "outline" }[];
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: "Pakistan's Leading Office Furniture Manufacturer",
    title: "Custom Office Furniture\n— Designed for Your Space,\nBuilt in Our Factory",
    supportingText: "From concept to installation — we design, manufacture, and deliver premium office furniture tailored to your workspace, brand identity, and budget. No middlemen. No compromise.",
    buttons: [
      { text: "Explore Our Collection", link: "/shop", variant: "primary" },
      { text: "Get Free 3D Design", link: "/e-quotation", variant: "outline" },
    ],
    image: heroOfficeImg,
  },
  {
    id: 2,
    subtitle: "Premium Ergonomic Workstations",
    title: "Make Your\nSpace Work —\nProductivity by Design",
    supportingText: "Premium ergonomic workstations for the modern professional. 2, 4, 6-person clusters with acoustic panels, cable management, and integrated power modules.",
    buttons: [
      { text: "Explore Workstations", link: "/shop?category=workstations", variant: "primary" },
      { text: "Get E-Quote", link: "/e-quotation", variant: "outline" },
    ],
    image: workstationImg,
  },
  {
    id: 3,
    subtitle: "Conference & Meeting Solutions",
    title: "Tables Designed for\nEquitable Meetings —\nEvery Voice Matters",
    supportingText: "Conference solutions that enable inclusive participation — from 4-seat huddle tables to 20-seat boardroom setups with AV integration, power modules, and cable management.",
    buttons: [
      { text: "View Meeting Tables", link: "/shop?category=meeting", variant: "primary" },
      { text: "Request Consultation", link: "/contact", variant: "outline" },
    ],
    image: meetingRoomImg,
  },
  {
    id: 4,
    subtitle: "Introducing the Woodex Home Collection",
    title: "Home Furniture\nCollection — Bedroom,\nLiving & Dining",
    supportingText: "Extend the WOODEX quality to your home. Premium bedroom sets, living room sofas, coffee tables, TV units, and dining sets — all with factory-direct pricing.",
    buttons: [
      { text: "Shop Home Furniture", link: "/shop?category=bedroom", variant: "primary" },
      { text: "Get E-Quote", link: "/e-quotation", variant: "outline" },
    ],
    image: heroSofaImg,
  },
];

const trustBadges = [
  { icon: Factory, title: "Direct Factory Prices", desc: "No middlemen — buy straight from our Lahore manufacturing facility" },
  { icon: Palette, title: "Free 3D Design", desc: "We create a photorealistic layout of your workspace before production" },
  { icon: Truck, title: "Nationwide Delivery", desc: "Free delivery & professional installation across Pakistan" },
  { icon: ShieldCheck, title: "Up to 3-Year Warranty", desc: "Structural warranty on all furniture — chairs, desks, and workstations" },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] whitespace-pre-line mb-4">
              {slide.title}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              {slide.supportingText}
            </p>
            <div className="flex flex-wrap gap-3">
              {slide.buttons.map((btn, i) => (
                <Link
                  key={i}
                  to={btn.link}
                  className={`inline-block text-sm font-semibold tracking-wider px-8 py-3 transition-colors ${
                    btn.variant === "primary"
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {btn.text}
                </Link>
              ))}
            </div>
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
