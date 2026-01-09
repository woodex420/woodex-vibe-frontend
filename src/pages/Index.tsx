import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { SEO, generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";
import { ArrowRight, Ruler, Palette, FileText, Factory, Truck, Building2, Users, Shield, Package, Briefcase, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import product images
import workstationImg from "@/assets/workstation.jpg";
import storageImg from "@/assets/storage.jpg";
import chairExecutiveImg from "@/assets/chair-executive.jpg";
import deskExecutiveImg from "@/assets/desk-executive.jpg";
import loungeImg from "@/assets/lounge.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import receptionDeskImg from "@/assets/reception-desk.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";

const faqs = [
  { question: "Are Woodex chairs durable?", answer: "Yes, all Woodex chairs are built with high-density plywood frames, premium PU foam, and quality materials designed to last 5-7 years with daily use." },
  { question: "Do Woodex office chairs come with warranty?", answer: "Yes, all our office furniture comes with 5-7 year comprehensive warranty covering manufacturing defects and structural issues." },
  { question: "Where does Woodex deliver?", answer: "We deliver nationwide across Pakistan including Lahore, Karachi, Islamabad, Faisalabad, and all major cities with free delivery and installation." },
  { question: "What types of ergonomic chairs does Woodex offer?", answer: "We offer Executive Chairs, Manager Chairs, Staff Chairs, and Visitor Chairs with ergonomic features including lumbar support, adjustable headrests, and 4D armrests." },
];

const Index = () => {
  const services = [{
    title: "Space Planning",
    icon: Ruler,
    link: "/services/space-planning"
  }, {
    title: "Custom Design",
    icon: Palette,
    link: "/services/custom-design"
  }, {
    title: "Project Based Quoting",
    icon: FileText,
    link: "/services/project-quoting"
  }, {
    title: "Factory Direct",
    icon: Factory,
    link: "/services/factory-direct"
  }, {
    title: "Delivery & Installation",
    icon: Truck,
    link: "/services/delivery-installation"
  }];
  const products = [{
    name: "Cubicle Workstation",
    image: workstationImg
  }, {
    name: "Office Storage",
    image: storageImg
  }, {
    name: "Office Chair",
    image: chairExecutiveImg
  }, {
    name: "Staff Tables",
    image: deskExecutiveImg
  }, {
    name: "Office Sofas",
    image: loungeImg
  }, {
    name: "Executive Table",
    image: deskExecutiveImg
  }, {
    name: "Meeting Table",
    image: meetingRoomImg
  }, {
    name: "Reception Desk",
    image: receptionDeskImg,
    highlight: true
  }];
  const features = [{
    icon: Palette,
    title: "Custom Design Consultation",
    description: "Professional design services tailored to your needs"
  }, {
    icon: Building2,
    title: "3D Visualization",
    description: "See your space before we build it"
  }, {
    icon: Truck,
    title: "Professional Installation",
    description: "Expert installation across Pakistan"
  }, {
    icon: Factory,
    title: "Direct Factory Rate",
    description: "Best prices with no middlemen"
  }];
  const clients = ["ETIHAD", "Haier", "MindBridge", "PACHEM", "PAF TOWN", "GLOBAL (Pvt) Limited"];
  const stats = [{
    icon: Users,
    value: "1,200+",
    label: "Satisfied Clients"
  }, {
    icon: Package,
    value: "56+",
    label: "Chair Products"
  }, {
    icon: Briefcase,
    value: "4",
    label: "Chair Categories"
  }, {
    icon: Shield,
    value: "5-7 Years",
    label: "Warranty"
  }];
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
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroOfficeImg})`
    }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-block mb-4">
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                Best Seller
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Woodex Lounge Series
            </h1>
            <p className="text-xl md:text-2xl mb-3">Sofa & Collection</p>
            <p className="text-lg mb-3 font-semibold">Living Room</p>
            <p className="text-base mb-8 max-w-2xl leading-relaxed">
              Design to delivery manufacturing for startups, SMEs, and corporate
              clients. Transform your workspace with furniture built exactly to
              your specifications.
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                SHOP NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => <Link key={index} to={service.link}>
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-3">{service.title}</h3>
                    <Button variant="outline" size="sm" className="w-full">
                      E-Quote
                    </Button>
                  </CardContent>
                </Card>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Products</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our complete range of premium office furniture categories
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                  <Link to="/shop" className="group text-center block">
                    <div className="relative overflow-hidden rounded-full aspect-square mb-3 bg-muted border-4 border-transparent group-hover:border-accent transition-all duration-300 shadow-md group-hover:shadow-xl">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-full" />
                    </div>
                    <h3 className={`text-sm font-medium transition-colors duration-300 ${product.highlight ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                      {product.name}
                    </h3>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-background border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-background border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={index} className="text-center">
                <div className="bg-background rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Best Selling Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Best Selling</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Complete Furniture Solution for every workspace need
            </p>
            <Link to="/shop">
              <Button variant="outline" size="lg">
                See All Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => <div key={index}>
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join 1,200+ satisfied clients across Pakistan who trust WoodEx for
              their office furniture needs.
            </p>
            <h3 className="text-2xl font-bold mb-6">Clients</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
              {clients.map((client, index) => <div key={index} className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  {client}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get a free consultation and 3D design for your workspace.
          </h2>
          <p className="text-xl mb-8 opacity-90">No commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Get Free Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="min-w-[200px] border-accent-foreground hover:bg-accent-foreground text-primary">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Modern Office Furniture Lahore Pakistan
            </h2>
            <div className="space-y-4">
              <p className="text-foreground">
                <strong>
                  Ergonomic Office Chairs in Pakistan – Comfort That Works as
                  Hard as You Do.
                </strong>{" "}
                At Woodex, we design ergonomic office chairs that go beyond basic
                seating. These chairs are built to support your posture, reduce
                strain, and keep you comfortable throughout long working hours. By
                combining Master MoltyFoam cushioning, adjustable features, and
                premium materials, Woodex chairs help improve not only your health
                but also your focus and productivity at work.
              </p>
              <p className="text-muted-foreground">
                A great chair isn't just where you sit—it's the foundation of a
                smarter, healthier, and more productive workspace.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us for More Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            {["Are Woodex chairs durable?", "Do Woodex office chairs come with warranty?", "Where does Woodex deliver?", "What types of ergonomic chairs does Woodex offer?"].map((question, index) => <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{question}</h3>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;