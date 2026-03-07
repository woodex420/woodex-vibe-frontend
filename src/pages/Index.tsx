import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import HeroSlider from "@/components/HeroSlider";
import { SEO, generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";
import {
  ChevronRight, ChevronLeft, Paintbrush, Eye, Factory, Truck, ShieldCheck,
  MapPin, Phone, FileText, MessageCircle, Star, Compass, PenTool,
  Calculator, Building2, PackageCheck, Check, Users, Award, Clock,
  Armchair, Monitor, Table, BookOpen, Lamp, LayoutGrid, Sofa, Archive
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

// Import images
import workstationImg from "@/assets/workstation.jpg";
import storageImg from "@/assets/storage.jpg";
import chairExecutiveImg from "@/assets/chair-executive.jpg";
import deskExecutiveImg from "@/assets/desk-executive.jpg";
import loungeImg from "@/assets/lounge.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import receptionDeskImg from "@/assets/reception-desk.jpg";
import officeIsometricImg from "@/assets/office-isometric.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";
import consultationImg from "@/assets/consultation.jpg";
import customDesignImg from "@/assets/custom-design-studio.jpg";
import deliveryImg from "@/assets/delivery-service.jpg";
import factoryImg from "@/assets/factory-floor.jpg";
import spacePlanningImg from "@/assets/space-planning-design.jpg";

// Bestseller images
import matrixFlowManager from "@/assets/products/matrix-flow-manager.jpg";
import infinityExecutive from "@/assets/products/infinity-executive.jpg";
import crownExecutive from "@/assets/products/crown-executive.jpg";
import eliteExecutive from "@/assets/products/elite-executive.jpg";
import ambassadorExecutive from "@/assets/products/ambassador-executive.jpg";
import waveComfortStaff from "@/assets/products/wave-comfort-staff.jpg";
import nexaExecutive from "@/assets/products/nexa-executive.jpg";
import diamondExecutive from "@/assets/products/diamond-executive.jpg";

// ─── DATA ───────────────────────────────────────────────

const serviceStrip = [
  { icon: Compass, title: "Space Planning", desc: "Consultation for space management, project management & personalized planning.", link: "/space-planning" },
  { icon: PenTool, title: "Custom Design", desc: "Furniture tailored to your exact specifications and workflow needs.", link: "/custom-design" },
  { icon: Calculator, title: "E-Quoting", desc: "Get instant, transparent quotes online — no middleman, no hidden costs.", link: "/e-quotation" },
  { icon: Building2, title: "Factory Direct", desc: "Premium quality at manufacturer prices with fully transparent quotes.", link: "/factory-direct" },
  { icon: PackageCheck, title: "Delivery & Installation", desc: "Professional delivery and setup — furniture ready to use on arrival.", link: "/delivery-installation" },
];

const productCategories = [
  { icon: Armchair, name: "Executive Chairs", link: "/shop?category=executive" },
  { icon: Monitor, name: "CEO Tables", link: "/shop?category=ceo-tables" },
  { icon: Table, name: "Manager Tables", link: "/shop?category=manager-tables" },
  { icon: LayoutGrid, name: "Workstations", link: "/shop?category=workstations" },
  { icon: BookOpen, name: "Meeting Tables", link: "/shop?category=meeting" },
  { icon: Sofa, name: "Office Sofas", link: "/shop?category=sofas" },
  { icon: Lamp, name: "Reception Desks", link: "/shop?category=reception" },
  { icon: Archive, name: "Storage & Filing", link: "/shop?category=storage" },
];

const latestCollection = [
  { name: "Ambassador Executive Chair", category: "Executive Chairs", price: "PKR 60,000", image: ambassadorExecutive, link: "/shop" },
  { name: "Crown Executive Chair", category: "Executive Chairs", price: "PKR 65,000", image: crownExecutive, link: "/shop" },
  { name: "Infinity Executive Desk", category: "Executive Desks", price: "PKR 85,000", image: infinityExecutive, link: "/shop" },
  { name: "Diamond Executive Chair", category: "Executive Chairs", price: "PKR 48,000", image: diamondExecutive, link: "/shop" },
];

const workspacePlanningFeatures = [
  { icon: Compass, title: "Space Assessment", desc: "Comprehensive analysis of your floor plan and requirements" },
  { icon: PenTool, title: "3D Design & Visualization", desc: "Photorealistic renders before manufacturing begins" },
  { icon: Factory, title: "Custom Manufacturing", desc: "Every piece built to your exact specifications" },
  { icon: PackageCheck, title: "Installation & Support", desc: "Professional setup with post-delivery warranty" },
];

const ourServicesChecklist = [
  "Free On-Site Consultation & Measurement",
  "Photorealistic 3D Workspace Design",
  "Custom Material & Finish Selection",
  "Factory-Direct Manufacturing",
  "Nationwide Delivery & Installation",
  "Up to 3-Year Structural Warranty",
];

const googleReviews = [
  { name: "Ahmed R.", rating: 5, text: "Woodex furnished our entire 8,000 sq. ft. office — from the reception to 60 workstations. Exceptional quality.", time: "2 months ago", avatar: "A" },
  { name: "Sara K.", rating: 5, text: "We compared five vendors and Woodex offered the best balance of design, build quality, and price. Highly recommended.", time: "1 month ago", avatar: "S" },
  { name: "Usman T.", rating: 5, text: "The ergonomic chairs have made a huge difference — fewer complaints about back pain. Great after-sales support.", time: "3 weeks ago", avatar: "U" },
  { name: "Fatima Z.", rating: 5, text: "Their 3D design service blew us away. We could visualize the entire office before placing the order. Brilliant team!", time: "1 month ago", avatar: "F" },
  { name: "Bilal M.", rating: 5, text: "Factory direct pricing is unbeatable. We saved almost 30% compared to other brands for the same quality. Will order again.", time: "2 weeks ago", avatar: "B" },
];

const clientLogos = [
  "Haier", "Etihad Airways", "PAF", "MindBridge", "Pachem", "LTN Group", "National Bank", "Jazz",
];

const faqs = [
  { question: "What types of office furniture does Woodex manufacture?", answer: "We manufacture a complete range — executive desks, manager tables, staff workstations, ergonomic chairs, conference tables, reception desks, filing cabinets, bookshelves, office sofas, and café/lounge furniture. Every piece can be customized to your specifications." },
  { question: "Can I get furniture customized to my office space?", answer: "Absolutely. Customization is our core strength. We offer custom sizing, finish colors, material selection (MDF melamine, veneer, glass, fabric, leather), and branded elements — all based on your space measurements and brand guidelines." },
  { question: "Do you offer free site visits and 3D design?", answer: "Yes. For corporate and bulk orders, we provide a complimentary site visit, space assessment, and photorealistic 3D design layout — so you can visualize your workspace before placing an order." },
  { question: "What is the delivery timeline?", answer: "Standard production takes 10–15 working days depending on order size and customization level. Ready-stock items ship within 3–5 working days." },
  { question: "Do you deliver across Pakistan?", answer: "Yes — we deliver nationwide. Priority delivery for Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and Peshawar." },
  { question: "What warranty do you offer?", answer: "Up to a 3-year structural warranty on desks, tables, and workstations. Office chairs come with a 1-year warranty on wheels, gas lift, and base mechanism." },
];

const bestsellers = [
  { name: "Matrix Flow Manager Chair", category: "Manager Chairs", series: "MatrixFlow", price: "PKR 42,000", image: matrixFlowManager, colors: ["#333", "#666", "#8B7355"] },
  { name: "Crown Executive Chair", category: "Executive Chairs", series: "Crown", price: "PKR 65,000", image: crownExecutive, colors: ["#333", "#1a1a1a"] },
  { name: "Elite Executive Chair", category: "Executive Chairs", series: "Elite", price: "PKR 58,000", image: eliteExecutive, colors: ["#333", "#8B7355", "#A0522D"] },
  { name: "Infinity Executive Desk", category: "Executive Desks", series: "Infinity", price: "PKR 85,000", image: infinityExecutive, colors: ["#F5F5DC", "#333", "#8B7355", "#A0522D"] },
  { name: "Ambassador Executive Chair", category: "Executive Chairs", series: "Ambassador", price: "PKR 60,000", image: ambassadorExecutive, colors: ["#333", "#1a1a1a"] },
  { name: "Nexa Executive Chair", category: "Executive Chairs", series: "Nexa", price: "PKR 55,000", image: nexaExecutive, colors: ["#333", "#8B7355"] },
  { name: "Wave Comfort Staff Chair", category: "Staff Chairs", series: "Wave", price: "PKR 25,000", image: waveComfortStaff, colors: ["#333", "#666"] },
  { name: "Diamond Executive Chair", category: "Executive Chairs", series: "Diamond", price: "PKR 48,000", image: diamondExecutive, colors: ["#333", "#A0522D"] },
];

const projectImages = [
  { img: heroOfficeImg, label: "Corporate Office" },
  { img: meetingRoomImg, label: "Meeting Room" },
  { img: workstationImg, label: "Open Plan Workspace" },
  { img: receptionDeskImg, label: "Reception Area" },
  { img: consultationImg, label: "Consultation Room" },
  { img: customDesignImg, label: "Custom Design Studio" },
];

// ─── COMPONENT ──────────────────────────────────────────

const Index = () => {
  const structuredData = { ...generateOrganizationSchema(), ...generateLocalBusinessSchema() };
  const faqSchema = generateFAQSchema(faqs);

  // Google Reviews auto-slide
  const [reviewIndex, setReviewIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setReviewIndex(i => (i + 1) % googleReviews.length), 4000);
    return () => clearInterval(timer);
  }, []);

  // Client logos auto-slide
  const logosRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = logosRef.current;
    if (!el) return;
    const timer = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Workspace Planning auto-slide
  const [planningIndex, setPlanningIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setPlanningIndex(i => (i + 1) % workspacePlanningFeatures.length), 3500);
    return () => clearInterval(timer);
  }, []);

  // Projects carousel
  const [projIndex, setProjIndex] = useState(0);
  const visibleProjects = 3;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Best Office Furniture in Pakistan | Custom Design & Manufacturing — Woodex"
        description="Woodex Furniture — Pakistan's leading custom office furniture manufacturer. Executive desks, ergonomic chairs, workstations & complete office fit-outs. Free 3D design, factory-direct prices, nationwide delivery."
        keywords="office furniture Pakistan, ergonomic chairs Lahore, executive desks, office workstations, custom office furniture, factory direct furniture, office chairs Pakistan, CEO tables, manager tables, workstations Lahore"
        canonical="https://woodexfurniture.pk"
        structuredData={[structuredData, faqSchema]}
      />
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* ═══ SECTION 1: Services Strip ═══ */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {serviceStrip.map((s, i) => (
              <Link key={i} to={s.link} className="group text-center p-4 border border-border bg-background hover:border-accent hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <s.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-bold mb-1">{s.title}</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: Product Categories Row — horizontal scroll circles ═══ */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Browse By Category</p>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Product Categories</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {productCategories.map((cat, i) => (
              <Link key={i} to={cat.link} className="flex-shrink-0 group text-center w-[100px]">
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-border bg-muted/50 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <cat.icon className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <p className="text-[11px] font-medium mt-2 leading-tight">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: Latest Collection Grid ═══ */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">New Arrivals</p>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Latest Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {latestCollection.map((p, i) => (
              <Link key={i} to={p.link} className="group bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{p.category}</p>
                  <h3 className="text-sm font-bold mb-1 line-clamp-1">{p.name}</h3>
                  <p className="text-sm font-bold text-accent">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: Workspace Planning — split layout + auto-slide ═══ */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">End-to-End Solutions</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">We Help You Plan Your Workspace</h2>
              <div className="space-y-4">
                {workspacePlanningFeatures.map((f, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 border transition-all duration-500 cursor-pointer ${
                      i === planningIndex
                        ? "border-accent bg-accent/5 shadow-sm"
                        : "border-border bg-background hover:border-muted-foreground/30"
                    }`}
                    onClick={() => setPlanningIndex(i)}
                  >
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                      i === planningIndex ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <f.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-0.5">{f.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/space-planning" className="mt-6 inline-block">
                <Button className="rounded-none px-6 text-sm">Start Planning <ChevronRight className="h-4 w-4 ml-1" /></Button>
              </Link>
            </div>
            <div className="relative overflow-hidden aspect-[4/3] bg-muted">
              <img
                src={spacePlanningImg}
                alt="Workspace planning and 3D design"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground px-4 py-2">
                <p className="text-[10px] font-medium uppercase tracking-wider">Step {planningIndex + 1} of {workspacePlanningFeatures.length}</p>
                <p className="text-sm font-bold">{workspacePlanningFeatures[planningIndex].title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: Our Services Block — checklist + badge ═══ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden aspect-[4/3] bg-muted order-2 lg:order-1">
              <img src={factoryImg} alt="Woodex manufacturing facility" className="w-full h-full object-cover" loading="lazy" />
              {/* 20+ Years badge */}
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-accent text-accent-foreground flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-black leading-none">20+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider">Years</span>
                <span className="text-[8px] uppercase tracking-wider">Experience</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Services</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                From initial consultation to final installation — we handle every step of your office furniture project with precision and care.
              </p>
              <div className="space-y-3 mb-8">
                {ourServicesChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/services">
                <Button className="rounded-none px-6 text-sm">Explore Services <ChevronRight className="h-4 w-4 ml-1" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Best Sellers</p>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Our Most Popular Products</h2>
          <p className="text-xs text-muted-foreground mb-8">Hand-picked favorites trusted by offices across Lahore, Karachi, and Islamabad.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {bestsellers.slice(0, 8).map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <div className="bg-background border border-border hover:shadow-md transition-all duration-300">
                  <div className="aspect-[3/4] bg-muted overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{product.category}</p>
                    <h3 className="text-xs font-bold mb-1 line-clamp-2 min-h-[32px]">{product.name}</h3>
                    <p className="text-[10px] text-muted-foreground mb-2">{product.series}</p>
                    <div className="flex gap-1 mb-2">
                      {product.colors.map((color, ci) => (
                        <span key={ci} className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    <p className="text-sm font-bold">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="outline" className="border-foreground text-sm font-medium rounded-none px-8">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: Google Reviews Widget ═══ */}
      <section className="py-14 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Google summary */}
            <div className="md:w-1/3 flex-shrink-0">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">What Our Clients Say</p>
              <h2 className="text-xl md:text-2xl font-bold mb-3">Google Reviews</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-bold">4.9</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">Based on 57+ Google reviews</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 rounded-full bg-[hsl(217,89%,51%)] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-xs text-muted-foreground">Verified Google Business</span>
              </div>
            </div>

            {/* Right: Sliding review cards */}
            <div className="md:w-2/3 overflow-hidden relative">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${reviewIndex * 100}%)` }}>
                {googleReviews.map((r, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <div className="border border-border bg-background p-6 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                          {r.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-bold">{r.name}</p>
                          <p className="text-[10px] text-muted-foreground">{r.time}</p>
                        </div>
                        <div className="ml-auto w-5 h-5 rounded-full bg-[hsl(217,89%,51%)] flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold">G</span>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(r.rating)].map((_, si) => (
                          <Star key={si} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed italic">"{r.text}"</p>
                      <p className="text-[10px] text-accent mt-2 font-medium">✓ Verified Purchase</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {googleReviews.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${i === reviewIndex ? "bg-accent" : "bg-border"}`}
                    onClick={() => setReviewIndex(i)}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: Latest Projects Carousel ═══ */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Latest Projects</p>
              <h2 className="text-xl md:text-2xl font-bold">Transforming Spaces With Design</h2>
            </div>
            <div className="flex gap-2">
              <button
                className="w-9 h-9 border border-border flex items-center justify-center hover:border-accent transition-colors disabled:opacity-30"
                onClick={() => setProjIndex(i => Math.max(0, i - 1))}
                disabled={projIndex === 0}
                aria-label="Previous projects"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                className="w-9 h-9 border border-border flex items-center justify-center hover:border-accent transition-colors disabled:opacity-30"
                onClick={() => setProjIndex(i => Math.min(projectImages.length - visibleProjects, i + 1))}
                disabled={projIndex >= projectImages.length - visibleProjects}
                aria-label="Next projects"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${projIndex * (100 / visibleProjects)}%)` }}
            >
              {projectImages.map((p, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-[calc(33.333%-11px)]">
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-bold">{p.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" className="border-foreground text-sm font-medium rounded-none px-8">View Full Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: Prestigious Clients — auto-sliding logo carousel ═══ */}
      <section className="py-12 border-t border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 text-center">Trusted By Industry Leaders</p>
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">Our Prestigious Clients</h2>
          <div ref={logosRef} className="flex gap-8 overflow-x-auto scrollbar-hide py-2">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-[140px] h-16 border border-border bg-background flex items-center justify-center px-4 hover:border-accent transition-colors">
                <span className="text-sm font-bold text-muted-foreground tracking-wide whitespace-nowrap">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,200+", label: "Offices Furnished" },
              { number: "20+", label: "Years of Excellence" },
              { number: "50+", label: "Cities Delivered To" },
              { number: "100%", label: "Custom-Made to Order" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black mb-1">{stat.number}</div>
                <div className="text-xs opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Workspace?</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
            Get a free consultation, 3D workspace design, and itemized quote — with zero obligation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+923224000768">
              <Button variant="outline" className="rounded-none px-6 text-sm border-foreground">
                <Phone className="h-4 w-4 mr-2" /> Call Now
              </Button>
            </a>
            <Link to="/e-quotation">
              <Button className="rounded-none px-6 text-sm bg-accent text-accent-foreground hover:bg-accent/90">
                <FileText className="h-4 w-4 mr-2" /> Request Free E-Quote
              </Button>
            </Link>
            <a href="https://wa.me/923224000768" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-none px-6 text-sm border-foreground">
                <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FAQs — 3-Column Layout ═══ */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 text-center">Frequently Asked Questions</p>
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">FAQs — Woodex Office Furniture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`faq-${index}`} className="border border-border px-4 bg-background">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/contact" className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1">
              Have More Questions? Contact Us <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
