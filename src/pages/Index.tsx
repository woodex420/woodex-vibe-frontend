import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { SEO, generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";
import { ArrowRight, Ruler, Palette, FileText, Factory, Truck, ChevronRight, ChevronLeft } from "lucide-react";
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
  "Contact Us for More Options",
  "Are Woodex chairs durable",
  "Do Woodex office chairs",
  "Where does Woodex deliver",
  "What types of ergonomic chairs",
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
      description: "Professional delivery and installation services ensure your furniture is set up correctly and ready to use. Our expert team",
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
    { name: "Ambassador Executive Chair", price: 60000, oldPrice: 65000, image: ambassadorExecutive, isNew: true },
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

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="py-12">
              <p className="text-sm text-muted-foreground mb-2">Woodex Loung Searies</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                Best Seller<br />
                Sofa & Collection<br />
                LivingRoom
              </h1>
              <Link to="/shop">
                <Button variant="outline" size="lg" className="mt-6 border-foreground text-foreground hover:bg-foreground hover:text-background">
                  SHOP NOW
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={loungeImg} 
                alt="WoodEx Lounge Series Sofa" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-8 text-center border-b">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Design to delivery manufacturing for startups, SMEs, and corporate clients. Transform your workspace
            with furniture built exactly to your specifications.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="border-r last:border-r-0 pr-6 last:pr-0">
                <service.icon className="h-8 w-8 mb-3 text-foreground" />
                <h3 className="font-semibold text-sm mb-2">{service.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{service.description}</p>
                <Link to={service.link} className="text-xs text-foreground hover:text-accent flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  E-Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((category, index) => (
              <Link key={index} to="/shop" className="group text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 mx-auto border-2 border-transparent group-hover:border-accent transition-all">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className={`text-xs ${category.highlight ? 'text-accent' : 'text-foreground group-hover:text-accent'} transition-colors`}>
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Bestsellers</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Office Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Complete Office Solutions</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/services">
                <Button variant="outline" className="mt-8">
                  Load More
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={workstationImg} 
                alt="Complete Office Solutions"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Categories - Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Categories</h2>
            <p className="text-muted-foreground text-sm">Complete Furniture Solution for every workspace need</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {exploreProducts.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <Card className="overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 z-10">
                        New
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="text-xs font-medium mb-1 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        Rs. {product.oldPrice.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="outline">Load More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Explore Our Categories</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
            Join 1,200+ satisfied clients across Pakistan who trust WoodEx for their office furniture needs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Transform Your Office Workspace Today
          </h2>
          <p className="text-muted-foreground mb-8">
            Get a free consultation and 3D design for your workspace. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button variant="secondary" className="min-w-[160px]">
                Get Free Quote
              </Button>
            </Link>
            <Button variant="outline" className="min-w-[160px]">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">FAQs – Woodex</h2>
          
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="main-faq" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                Modern office Furniture Lahore Pakistan
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-4">
                <p>
                  <strong>Ergonomic Office Chairs in Pakistan – Comfort That Works as Hard as You Do.</strong> At Woodex, we design ergonomic office chairs that go beyond basic seating. These chairs are built to support your posture, reduce strain, and keep you comfortable throughout long working hours. By combining Master MoltyFoam cushioning, adjustable features, and premium materials, Woodex chairs help improve not only your health but also your focus and productivity at work.
                </p>
                <p>
                  A great chair isn't just where you sit—it's the foundation of a smarter, healthier, and more productive workspace. Ergonomic Office Chairs in Pakistan – Comfort That Works as Hard as You Do. At Woodex, we design ergonomic office chairs that go beyond basic seating. These chairs are built to support your posture, reduce strain, and keep you comfortable throughout long working hours. By combining Master MoltyFoam cushioning, adjustable features, and premium materials, Woodex chairs help improve not only your health but also your focus and productivity at work. A great chair isn't just where you sit—it's the foundation of a smarter, healthier, and more productive workspace. Your chair isn't just a seat—it's where you spend hours thinking, working, and creating. That's why a poorly designed chair leads to back pain, fatigue, and low productivity.
                </p>
                <p>
                  At Woodex Furniture Pakistan, our ergonomic office chairs are designed to help you work smarter, feel better, and stay productive all day. Built with premium Master MoltyFoam cushioning, adjustable features, and durable steel + wood frames, they're the perfect balance of health, comfort, and professional style. Your chair isn't just a seat—it's where you spend hours thinking, working, and creating. That's why a poorly designed chair leads to back pain, fatigue, and low productivity.
                </p>
                <p>
                  At Woodex Furniture Pakistan, our ergonomic office chairs are designed to help you work smarter, feel better, and stay productive all day. Built with premium Master MoltyFoam cushioning, adjustable features, and durable steel + wood frames, they're the perfect balance of health, comfort, and professional style.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* FAQ Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
            {[0, 1, 2].map((col) => (
              <div key={col} className="space-y-2">
                {faqLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    to="/contact" 
                    className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    <ChevronRight className="h-3 w-3" />
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
