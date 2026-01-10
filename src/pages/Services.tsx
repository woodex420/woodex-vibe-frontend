import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";
import consultationImage from "@/assets/consultation.jpg";
import customDesignImage from "@/assets/custom-design-studio.jpg";
import deliveryImage from "@/assets/delivery-service.jpg";
import spacePlanningImage from "@/assets/space-planning-design.jpg";
import projectQuotingImage from "@/assets/project-quoting.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import { Lightbulb, Ruler, Palette, Truck, CheckCircle2, Clock, Award, HeadphonesIcon, Package, Users } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Ruler,
    title: "Space Planning & Design",
    desc: "Transform your workspace with our professional 3D design and floor planning services. Our expert consultants analyze your space, workflow, and team needs to create optimal office layouts that maximize productivity and efficiency.",
    image: spacePlanningImage,
    features: ["Free on-site consultation & assessment", "Professional 3D visualization & floor plans", "CAD design services with detailed layouts", "Ergonomic assessments for employee wellness", "Space optimization strategies for better workflow", "Future growth planning & scalability"]
  }, {
    icon: Palette,
    title: "Custom Design Studio",
    desc: "Bespoke furniture manufacturing tailored to your exact specifications. From corporate branding integration to unique space requirements, we bring your vision to life with precision craftsmanship and attention to detail.",
    image: customDesignImage,
    features: ["Custom dimensions & unique designs", "200+ material & finish options", "Brand identity integration with custom colors", "Prototype development & approval process", "6-8 week production timeline", "Quality craftsmanship guarantee"]
  }, {
    icon: Truck,
    title: "Nationwide Delivery & Installation",
    desc: "Professional delivery across Pakistan with expert installation services. Our trained teams ensure your furniture is assembled correctly, ready to use, and meets our quality standards from day one.",
    image: deliveryImage,
    features: ["Coverage across all major cities in Pakistan", "Professional assembly & installation team", "Debris removal & complete cleanup", "Final quality inspection before handover", "Warranty activation on-site", "Post-installation support & service"]
  }, {
    icon: Package,
    title: "Project Quotation & Management",
    desc: "Get detailed quotations for large-scale projects with dedicated project management. We handle everything from initial assessment to final installation, ensuring smooth execution and timely delivery.",
    image: projectQuotingImage,
    features: ["Detailed itemized quotations", "Bulk order discounts available", "Dedicated project manager assigned", "Timeline planning & tracking", "Regular progress updates", "Quality assurance checkpoints"]
  }];
  const whyChoose = [{
    icon: Award,
    title: "Factory-Direct Quality",
    desc: "No middlemen - direct from our manufacturing facility to your office, ensuring the best prices and quality control."
  }, {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Ready-stock items ship within 3-5 days. Custom orders delivered in 6-8 weeks with priority production available."
  }, {
    icon: HeadphonesIcon,
    title: "Lifetime Support",
    desc: "Comprehensive warranty coverage with dedicated after-sales support team available via phone, WhatsApp, or email."
  }, {
    icon: Users,
    title: "Expert Consultation",
    desc: "Free design consultation with experienced professionals who understand workplace dynamics and ergonomics."
  }];
  const breadcrumbSchema = generateBreadcrumbSchema([{
    name: "Home",
    url: "https://woodex.pk"
  }, {
    name: "Services",
    url: "https://woodex.pk/services"
  }]);
  return <div className="min-h-screen bg-background">
      <SEO title="Office Furniture Services - Design, Delivery & Installation" description="Complete office furniture services: space planning, custom design studio, nationwide delivery & installation, project management. Free consultation available." keywords="office furniture services Pakistan, space planning, custom furniture design, furniture installation, office fit-out" canonical="https://woodex.pk/services" structuredData={breadcrumbSchema} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img src={servicesHero} alt="WoodEx Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                360-Degree Office <br />
                <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                From consultation to installation - complete turnkey solutions for your office furniture needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, i) => <Card key={i} className="overflow-hidden border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className={`grid ${service.image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-0`}>
                  {service.image && <div className="aspect-video md:aspect-auto overflow-hidden order-2 md:order-1">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>}
                  <div className={`p-8 md:p-12 ${service.image ? 'order-1 md:order-2' : ''}`}>
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.desc}</p>
                    <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Why Choose WoodEx */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose WoodEx?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pakistan's most trusted office furniture manufacturer with over 20 years of excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => <Card key={i} className="border-border hover:border-accent/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Request a free consultation with our design experts and receive a detailed quote within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 min-w-[200px]">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground/10 min-w-[200px] text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Services;