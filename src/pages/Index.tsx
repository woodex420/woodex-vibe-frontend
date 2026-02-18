import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import HeroSlider from "@/components/HeroSlider";
import { SEO, generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";
import { ArrowRight, Ruler, Palette, FileText, Factory, Truck, ChevronRight, ChevronLeft, ShoppingCart, ClipboardList, Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import product images
import workstationImg from "@/assets/workstation.jpg";
import storageImg from "@/assets/storage.jpg";
import chairExecutiveImg from "@/assets/chair-executive.jpg";
import deskExecutiveImg from "@/assets/desk-executive.jpg";
import loungeImg from "@/assets/lounge.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import receptionDeskImg from "@/assets/reception-desk.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";
import heroSofaImg from "@/assets/hero-sofa.jpg";
import officeIsometricImg from "@/assets/office-isometric.jpg";

// Import bestseller images
import matrixFlowManager from "@/assets/products/matrix-flow-manager.jpg";
import infinityExecutive from "@/assets/products/infinity-executive.jpg";
import crownExecutive from "@/assets/products/crown-executive.jpg";
import eliteExecutive from "@/assets/products/elite-executive.jpg";

// Import explore category product images
import ambassadorExecutive from "@/assets/products/ambassador-executive.jpg";
import waveComfortStaff from "@/assets/products/wave-comfort-staff.jpg";
import nexaExecutive from "@/assets/products/nexa-executive.jpg";
import diamondExecutive from "@/assets/products/diamond-executive.jpg";
import milanoExecutive from "@/assets/products/milano-executive.jpg";
import phoenixExecutive from "@/assets/products/phoenix-executive.jpg";
import imperialExecutive from "@/assets/products/imperial-executive.jpg";
import regalExecutive from "@/assets/products/regal-executive.jpg";
import blackPearlExecutive from "@/assets/products/black-pearl-executive.jpg";
import ascotExecutive from "@/assets/products/ascot-executive.jpg";

const faqs = [
  { question: "Are Woodex chairs durable?", answer: "Yes, all Woodex chairs are built with high-density plywood frames, premium PU foam, and quality materials designed to last 5-7 years with daily use." },
  { question: "Do Woodex office chairs come with warranty?", answer: "Yes, all our office furniture comes with 5-7 year comprehensive warranty covering manufacturing defects and structural issues." },
  { question: "Where does Woodex deliver?", answer: "We deliver nationwide across Pakistan including Lahore, Karachi, Islamabad, Faisalabad, and all major cities with free delivery and installation." },
  { question: "What types of ergonomic chairs does Woodex offer?", answer: "We offer Executive Chairs, Manager Chairs, Staff Chairs, and Visitor Chairs with ergonomic features including lumbar support, adjustable headrests, and 4D armrests." },
];

const faqLinks = [
  { label: "Contact Us for More Options", group: 1 },
  { label: "Are Woodex chairs durable", group: 1 },
  { label: "Do Woodex office chairs", group: 1 },
  { label: "Where does Woodex deliver", group: 1 },
  { label: "What types of ergonomic chairs", group: 1 },
  { label: "Contact Us for More Options", group: 2 },
  { label: "Are Woodex chairs durable", group: 2 },
  { label: "Do Woodex office chairs", group: 2 },
  { label: "Where does Woodex deliver", group: 2 },
  { label: "What types of ergonomic chairs", group: 2 },
  { label: "Contact Us for More Options", group: 3 },
  { label: "Are Woodex chairs durable", group: 3 },
  { label: "Do Woodex office chairs", group: 3 },
  { label: "Where does Woodex deliver", group: 3 },
  { label: "What types of ergonomic chairs", group: 3 },
];

const Index = () => {
  const services = [
    {
      title: "Space Planning",
      icon: Ruler,
      description: "Ask for consultation for space management, project management, personalized planning, assessment budget",
      link: "/services/space-planning"
    },
    {
      title: "Custom Design",
      icon: Palette,
      description: "Every workspace is unique. We design furniture tailored to your exact specifications and workflow needs.",
      link: "/services/custom-design"
    },
    {
      title: "Project Based Quoting",
      icon: FileText,
      description: "Every workspace is unique. We design furniture tailored to your exact specifications and workflow needs.",
      link: "/services/project-quoting"
    },
    {
      title: "Factory Direct",
      icon: Factory,
      description: "Eliminate middleman costs. Premium quality furniture at manufacturer prices with transparent quotes.",
      link: "/services/factory-direct"
    },
    {
      title: "Delivery & Installation",
      icon: Truck,
      description: "Professional delivery and installation services ensure your furniture is set up correctly and ready to use.",
      link: "/services/delivery-installation"
    }
  ];

  const categories = [
    { name: "Cubicle Workstation", image: workstationImg },
    { name: "Office Storage", image: storageImg },
    { name: "Office Chair", image: chairExecutiveImg },
    { name: "Staff Tables", image: deskExecutiveImg },
    { name: "Office Sofas", image: loungeImg },
    { name: "Executive Table", image: deskExecutiveImg },
    { name: "Meeting Table", image: meetingRoomImg },
    { name: "Reception Desk", image: receptionDeskImg, highlight: true }
  ];

  const bestsellers = [
    { name: "Matrix Flow Manager Chair", category: "Ergonomic Chair", image: matrixFlowManager },
    { name: "CareLine Reception Desk", category: "Reception Desk", image: receptionDeskImg },
    { name: "Office Workstation", category: "Cubicle Workstation", image: workstationImg },
    { name: "Infinity Executive Desk", category: "Executive Desk", image: infinityExecutive }
  ];

  const exploreProducts = [
    { name: "Silverstone Executive Chair", price: 60000, oldPrice: 65000, image: ambassadorExecutive, isNew: true },
    { name: "Wave Comfort Staff Chair", price: 0, oldPrice: 42000, image: waveComfortStaff, isNew: true },
    { name: "Workstation 6", price: 70000, oldPrice: 75000, image: workstationImg, isNew: true },
    { name: "Pinnacle Office Reception Desk", price: 65000, oldPrice: 75000, image: receptionDeskImg, isNew: true },
    { name: "Vertex Active Back Manager Chair", price: 0, oldPrice: 42000, image: nexaExecutive, isNew: true },
    { name: "Nexus Meeting Table", price: 0, oldPrice: 25000, image: meetingRoomImg, isNew: true },
    { name: "Infinity Executive Desk", price: 65000, oldPrice: 75000, image: diamondExecutive, isNew: true },
    { name: "Command Executive Desk", price: 65000, oldPrice: 75000, image: milanoExecutive, isNew: true },
    { name: "Lite Compact Staff Chair", price: 0, oldPrice: 42000, image: phoenixExecutive, isNew: true },
    { name: "Infinity Executive Conference Table", price: 0, oldPrice: 25000, image: imperialExecutive, isNew: true }
  ];

  const features = [
    { title: "Custom Design Consultation", description: "Free consultation with our design experts to understand your workspace needs." },
    { title: "3D Visualization", description: "See your office furniture in 3D before manufacturing begins." },
    { title: "Professional Installation", description: "Expert installation team ensures perfect setup of your furniture." },
    { title: "Direct Factory Rate", description: "Comprehensive warranty coverage for peace of mind." }
  ];

  const clients = ["ETIHAD", "Haier", "MindBridge", "PACHEM", "PAF"];

  const structuredData = {
    ...generateOrganizationSchema(),
    ...generateLocalBusinessSchema(),
  };

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Modern Office Furniture Pakistan - Ergonomic Chairs & Desks"
        description="Pakistan's #1 B2B office furniture manufacturer. Premium ergonomic chairs, executive desks, workstations with 5-7 year warranty. Factory-direct prices. Free delivery nationwide."
        keywords="office furniture Pakistan, ergonomic chairs Lahore, executive desks, office workstations, B2B furniture, office chairs Pakistan"
        canonical="https://woodex.pk"
        structuredData={[structuredData, faqSchema]}
      />
      <Navbar />

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Services Description Banner */}
      <section className="py-6 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Design to delivery manufacturing for startups, SMEs, and corporate clients. Transform your workspace with furniture built exactly to your specifications.
          </p>
        </div>
      </section>

      {/* Services Section - 5 columns with E-Quote links */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-sm mb-2">{service.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline">
                    E-Quote
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                {index < services.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Thumbnails Strip */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, index) => (
              <Link 
                key={index} 
                to={`/shop?category=${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex flex-col items-center gap-2 min-w-[90px] group ${cat.highlight ? 'text-accent' : ''}`}
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted border border-border group-hover:border-accent transition-colors">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className={`text-xs font-medium text-center leading-tight ${cat.highlight ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'} transition-colors`}>
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-bold">Bestsellers</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-2 border-foreground">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-2 border-foreground">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bestsellers.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <Card className="overflow-hidden border border-border shadow-none hover:shadow-md transition-all duration-300 rounded-none">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 text-center bg-card border-t border-border">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="text-sm font-bold">{product.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Office Solutions */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-accent italic">Complete Office Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-0.5">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/services">
                <Button variant="outline" className="mt-8 border-foreground border-2 text-sm font-semibold rounded-none">
                  Load More
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={officeIsometricImg} 
                alt="Complete Office Solutions - Isometric View"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Categories - Product Grid */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2 italic">Explore Our Categories</h2>
            <p className="text-sm text-muted-foreground">Complete Furniture Solution for every workspace need</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {exploreProducts.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <Card className="overflow-hidden border border-border shadow-none hover:shadow-md transition-all duration-300 rounded-none">
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 z-10">
                        New
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-3 bg-card border-t border-border">
                    <h3 className="text-xs font-semibold mb-1 line-clamp-2 min-h-[32px]">{product.name}</h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold">
                        {product.price > 0 ? `$${product.price.toLocaleString()}.00` : '$0.00'}
                      </span>
                      {product.oldPrice > 0 && (
                        <span className="text-[10px] text-muted-foreground line-through">
                          ${product.oldPrice.toLocaleString()}.00
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="outline" className="border-foreground border-2 text-sm font-semibold rounded-none">
                Load More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-10 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Join 1,200+ satisfied clients across Pakistan who trust WoodEx for their office furniture needs.
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold text-muted-foreground/30 hover:text-foreground transition-colors cursor-pointer tracking-wider">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-3">
            Transform Your Office Workspace Today
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto text-sm">
            Get a free consultation and 3D design for your workspace. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/e-quotation">
              <Button variant="secondary" size="lg" className="font-bold rounded-none min-w-[160px]">
                Get Free Quote
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="font-bold rounded-none min-w-[160px] bg-transparent border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Modern Office Furniture Lahore Pakistan</h2>
            <h3 className="text-lg font-bold mb-4">Ergonomic Office Chairs in Pakistan – Comfort That Works as Hard as You Do</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                At Woodex, we design ergonomic office chairs that go beyond basic seating. These chairs are built to support your posture, reduce strain, and keep you comfortable throughout long working hours. By combining Master MoltyFoam cushioning, adjustable features, and premium materials, Woodex chairs help improve not only your health but also your focus and productivity at work.
              </p>
              <p>
                A great chair isn't just where you sit—it's the foundation of a smarter, healthier, and more productive workspace.
              </p>
              <p>
                Your chair isn't just a seat—it's where you spend hours thinking, working, and creating. That's why a poorly designed chair leads to back pain, fatigue, and low productivity.
              </p>
              <p>
                At Woodex Furniture Pakistan, our ergonomic office chairs are designed to help you work smarter, feel better, and stay productive all day. Built with premium Master MoltyFoam cushioning, adjustable features, and durable steel + wood frames, they're the perfect balance of health, comfort, and professional style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">FAQs – Woodex</h2>
          
          <div className="max-w-4xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-none px-5 bg-card">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ Links Grid - 3 Columns */}
          <div className="mt-10 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-2 max-w-4xl">
              {[1, 2, 3].map((group) => (
                <div key={group} className="space-y-2">
                  {faqLinks.filter(l => l.group === group).map((link, index) => (
                    <Link 
                      key={index} 
                      to="/contact" 
                      className="flex items-center gap-1.5 text-xs text-foreground hover:text-accent transition-colors group"
                    >
                      <ChevronRight className="h-3 w-3 text-accent group-hover:translate-x-0.5 transition-transform" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
