import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import HeroSlider from "@/components/HeroSlider";
import { SEO, generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";
import { ChevronRight, Ruler, Palette, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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

// Bestseller images
import matrixFlowManager from "@/assets/products/matrix-flow-manager.jpg";
import infinityExecutive from "@/assets/products/infinity-executive.jpg";
import crownExecutive from "@/assets/products/crown-executive.jpg";
import eliteExecutive from "@/assets/products/elite-executive.jpg";

// Explore images
import ambassadorExecutive from "@/assets/products/ambassador-executive.jpg";
import waveComfortStaff from "@/assets/products/wave-comfort-staff.jpg";
import nexaExecutive from "@/assets/products/nexa-executive.jpg";
import diamondExecutive from "@/assets/products/diamond-executive.jpg";
import milanoExecutive from "@/assets/products/milano-executive.jpg";
import phoenixExecutive from "@/assets/products/phoenix-executive.jpg";

const faqs = [
  { question: "Are Woodex chairs durable?", answer: "Yes, all Woodex chairs are built with high-density plywood frames, premium PU foam, and quality materials designed to last 5-7 years with daily use." },
  { question: "Do Woodex office chairs come with warranty?", answer: "Yes, all our office furniture comes with 5-7 year comprehensive warranty covering manufacturing defects and structural issues." },
  { question: "Where does Woodex deliver?", answer: "We deliver nationwide across Pakistan including Lahore, Karachi, Islamabad, Faisalabad, and all major cities with free delivery and installation." },
  { question: "What types of ergonomic chairs does Woodex offer?", answer: "We offer Executive Chairs, Manager Chairs, Staff Chairs, and Visitor Chairs with ergonomic features including lumbar support, adjustable headrests, and 4D armrests." },
];

const Index = () => {
  const services = [
    {
      title: "Project Based Quoting",
      icon: "📋",
      description: "Free Initial Budget Estimate to fully furnish your workspace and estimate the total project cost, as well as evaluate saving opportunities.",
      link: "/services/project-quoting",
    },
    {
      title: "Space Management and Consultancy",
      icon: "📐",
      description: "Ask for consultation for space management, project management, personalized planning, assessment budget development, purchasing and installation.",
      link: "/services/space-planning",
    },
    {
      title: "Choose Color, Finishes & Sizes",
      icon: "🎨",
      description: "Providing hundreds of options to customize the size, color and finish of your office furniture to meet the requirements of every company and individual.",
      link: "/materials",
    },
  ];

  const bestsellers = [
    { name: "Matrix Flow Manager Chair", category: "Manager Chairs", series: "MatrixFlow", price: "PKR 42,000", image: matrixFlowManager, colors: ["#333", "#666", "#8B7355"] },
    { name: "Crown Executive Chair", category: "Executive Chairs", series: "Crown", price: "PKR 65,000", image: crownExecutive, colors: ["#333", "#1a1a1a"] },
    { name: "Elite Executive Chair", category: "Executive Chairs", series: "Elite", price: "PKR 58,000", image: eliteExecutive, colors: ["#333", "#8B7355", "#A0522D"] },
    { name: "Infinity Executive Desk", category: "Executive Desks", series: "Infinity", price: "PKR 85,000", image: infinityExecutive, colors: ["#F5F5DC", "#333", "#8B7355", "#A0522D"] },
    { name: "Workstation Cluster of 4", category: "Workstations", series: "AVA Series", price: "PKR 120,000", image: workstationImg, colors: ["#F5F5DC", "#333", "#8B7355"] },
    { name: "Reception Desk", category: "Reception", series: "CareLine", price: "PKR 75,000", image: receptionDeskImg, colors: ["#F5F5DC", "#333"] },
  ];

  const exploreProducts = [
    { name: "Ambassador Executive Chair", price: "PKR 60,000", image: ambassadorExecutive, isNew: true },
    { name: "Wave Comfort Staff Chair", price: "PKR 25,000", image: waveComfortStaff },
    { name: "Nexa Executive Chair", price: "PKR 55,000", image: nexaExecutive, isNew: true },
    { name: "Diamond Executive Chair", price: "PKR 48,000", image: diamondExecutive },
    { name: "Milano Executive Chair", price: "PKR 52,000", image: milanoExecutive },
    { name: "Phoenix Executive Chair", price: "PKR 45,000", image: phoenixExecutive, discount: "-15%" },
  ];

  const structuredData = {
    ...generateOrganizationSchema(),
    ...generateLocalBusinessSchema(),
  };
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Modern Office Furniture Pakistan - Ergonomic Chairs & Desks"
        description="Pakistan's #1 B2B office furniture manufacturer. Premium ergonomic chairs, executive desks, workstations with 5-7 year warranty. Factory-direct prices."
        keywords="office furniture Pakistan, ergonomic chairs Lahore, executive desks, office workstations"
        canonical="https://woodex.pk"
        structuredData={[structuredData, faqSchema]}
      />
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Icons Row - 3 columns like workspace.ae */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group text-center">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-sm mb-2">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Innovative and Exclusive</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Materials and Finishes</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Woodex creates a modern workplace with award-winning boards and innovative office furniture combining trendy materials and sleek design.
              </p>
              <Link to="/materials" className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1">
                Learn More <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden">
              <img src={officeIsometricImg} alt="Innovative Materials and Finishes" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Woodex</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-8">Bestsellers</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {bestsellers.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <div className="bg-background border border-border hover:shadow-md transition-all duration-300">
                  <div className="aspect-[3/4] bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{product.category}</p>
                    <h3 className="text-xs font-bold mb-1 line-clamp-2 min-h-[32px]">{product.name}</h3>
                    <p className="text-[10px] text-muted-foreground mb-2">{product.series}</p>
                    {/* Color swatches */}
                    <div className="flex gap-1 mb-2">
                      {product.colors.map((color, ci) => (
                        <span key={ci} className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    <p className="text-sm font-bold">{product.price}</p>
                    <p className="text-[10px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                      Premium quality office furniture with modern design.
                    </p>
                    <button className="mt-2 text-[10px] font-semibold text-accent hover:underline">
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Products Grid */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Explore Our Range</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {exploreProducts.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <div className="bg-background border border-border hover:shadow-md transition-all duration-300">
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[9px] font-bold px-1.5 py-0.5 z-10">
                        New
                      </span>
                    )}
                    {product.discount && (
                      <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-[9px] font-bold px-1.5 py-0.5 z-10">
                        {product.discount}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-semibold mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-sm font-bold">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="outline" className="border-foreground text-sm font-medium rounded-none px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-lg font-bold mb-2">Office Furniture Pakistan</h2>
            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <p>
                At Woodex, we design ergonomic office chairs that go beyond basic seating. These chairs are built to support your posture, reduce strain, and keep you comfortable throughout long working hours. By combining premium cushioning, adjustable features, and durable materials, Woodex chairs help improve your health, focus, and productivity.
              </p>
              <p>
                A great chair isn't just where you sit—it's the foundation of a smarter, healthier, and more productive workspace. From executive suites to open-plan offices, our furniture solutions are designed and manufactured in Pakistan for the modern professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold mb-6">FAQs</h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border px-4 bg-background">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
