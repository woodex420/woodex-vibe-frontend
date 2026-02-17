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

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-14 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                    E-Quote
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                {index < services.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Quotation Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Now you can Create your Own E-Quotation Instantly!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
            Browse products, add to cart, customize options, and get your instant quotation with transparent pricing in PKR.
          </p>

          {/* 3-Step Process */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-14">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-4">
                <ShoppingCart className="h-10 w-10 text-foreground" />
              </div>
              <p className="font-bold text-sm tracking-wider">ADD TO CART</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center px-6">
              <ArrowRight className="h-8 w-8 text-accent" />
            </div>
            <div className="flex md:hidden items-center py-2">
              <ArrowRight className="h-8 w-8 text-accent rotate-90" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative">
              <div className="w-24 h-24 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-4">
                <ClipboardList className="h-10 w-10 text-foreground" />
              </div>
              <span className="absolute top-16 right-2 bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded">
                PKR
              </span>
              <p className="font-bold text-sm tracking-wider">REVIEW & SUBMIT</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center px-6">
              <ArrowRight className="h-8 w-8 text-accent" />
            </div>
            <div className="flex md:hidden items-center py-2">
              <ArrowRight className="h-8 w-8 text-accent rotate-90" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-4">
                <Download className="h-10 w-10 text-foreground" />
              </div>
              <p className="font-bold text-sm tracking-wider">DOWNLOAD</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            If you are having difficulties or require product customization, you can always{" "}
            <Link to="/contact" className="text-accent font-medium hover:underline">Contact Us</Link>
            {" "}and our consultant will be in touch with you and assist with customized office furniture quotations.
          </p>

          <Link to="/e-quotation">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 text-base rounded-full">
              <ArrowRight className="mr-2 h-5 w-5" />
              CREATE A QUOTE!
            </Button>
          </Link>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Bestsellers</h2>
              <p className="text-muted-foreground mt-1">Our most popular office furniture picks</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-2">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-2">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                    <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 z-10">
                      BESTSELLER
                    </div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 text-center bg-card">
                    <p className="text-xs text-accent font-medium mb-1 uppercase tracking-wide">{product.category}</p>
                    <h3 className="text-base font-bold">{product.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Office Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent">Complete Office Solutions</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <ChevronRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-base mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/services">
                <Button variant="outline" className="mt-10 border-foreground border-2">
                  Load More
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={officeIsometricImg} 
                alt="Complete Office Solutions - Isometric View"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Categories - Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Explore Our Products</h2>
            <p className="text-muted-foreground">Complete furniture solutions for every workspace need</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {exploreProducts.map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 z-10">
                        NEW
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 bg-card">
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2 min-h-[40px]">{product.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-accent">
                        Rs. {product.price > 0 ? product.price.toLocaleString() : 'Quote'}
                      </span>
                      {product.oldPrice > 0 && (
                        <span className="text-xs text-muted-foreground line-through">
                          Rs. {product.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/shop">
              <Button variant="secondary" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Trusted by Leading Brands</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Join 1,200+ satisfied clients across Pakistan who trust WoodEx for their office furniture needs.
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-accent transition-colors cursor-pointer">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Transform Your Workspace Today
          </h2>
          <p className="text-accent-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            Get a free consultation and 3D design for your workspace. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button variant="secondary" size="lg" className="min-w-[180px] font-bold">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="min-w-[180px] font-bold bg-transparent border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about WoodEx</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6 bg-card shadow-sm">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ Links Grid */}
          <div className="mt-12 pt-10 border-t">
            <h3 className="font-bold text-lg mb-6 text-center">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3 max-w-3xl mx-auto">
              {faqLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to="/contact" 
                  className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
                >
                  <ChevronRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                  {link}
                </Link>
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
