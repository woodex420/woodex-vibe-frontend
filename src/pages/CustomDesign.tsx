import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import customDesignImage from "@/assets/custom-design-studio.jpg";
import { Palette, Ruler, Sparkles, CheckCircle2, Package, Clock } from "lucide-react";

const CustomDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "Bespoke Designs",
      desc: "Create furniture that perfectly matches your brand identity, workspace aesthetics, and functional requirements.",
    },
    {
      icon: Ruler,
      title: "Custom Dimensions",
      desc: "Furniture built to your exact measurements. Perfect for unique spaces, non-standard layouts, and specific needs.",
    },
    {
      icon: Sparkles,
      title: "Material Selection",
      desc: "Choose from premium woods, metals, fabrics, and finishes. Over 200 material and color combinations available.",
    },
    {
      icon: Package,
      title: "Prototype Development",
      desc: "Full-scale prototypes for approval before production. Make changes until it's exactly what you want.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Craftsmanship",
      desc: "Expert craftsmen with 25+ years experience. Every piece is inspected before delivery.",
    },
    {
      icon: Clock,
      title: "Production Timeline",
      desc: "Custom pieces delivered in 6-8 weeks. Rush production available for urgent projects.",
    },
  ];

  const designProcess = [
    { 
      phase: "Discovery", 
      desc: "Understanding your vision, requirements, space constraints, and design preferences",
      duration: "1-2 weeks"
    },
    { 
      phase: "Concept Design", 
      desc: "Initial sketches, 3D models, and material boards for your review",
      duration: "1-2 weeks"
    },
    { 
      phase: "Refinement", 
      desc: "Incorporate feedback, finalize designs, and approve specifications",
      duration: "1 week"
    },
    { 
      phase: "Prototype", 
      desc: "Build full-scale prototype for your approval and testing",
      duration: "2-3 weeks"
    },
    { 
      phase: "Production", 
      desc: "Manufacturing your custom pieces with regular progress updates",
      duration: "4-6 weeks"
    },
    { 
      phase: "Delivery", 
      desc: "Professional delivery, installation, and final walkthrough",
      duration: "1 week"
    },
  ];

  const customOptions = [
    "Executive desks with integrated technology",
    "Reception counters with brand integration",
    "Custom conference tables (any size/shape)",
    "Modular workstation systems",
    "Built-in storage solutions",
    "Bespoke seating collections",
    "Custom office partitions",
    "Specialized furniture for unique spaces",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={customDesignImage} 
          alt="WoodEx Custom Design Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Custom Design Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Bring your vision to life with our bespoke furniture design service. From initial concept to final creation, we craft unique pieces tailored precisely to your specifications and brand identity.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Custom Design Services</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Every piece is designed and crafted specifically for you. No two projects are the same—each is a unique reflection of your vision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">The Design Journey</h2>
          <div className="max-w-4xl mx-auto">
            {designProcess.map((phase, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold">{phase.phase}</h3>
                          <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{phase.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Options */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">What We Can Design</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {customOptions.map((option, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <Card className="mb-12 max-w-3xl mx-auto border-border/50">
          <CardContent className="p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-6">Investment & Timeline</h3>
            <div className="space-y-5 text-muted-foreground text-lg">
              <p>
                <strong className="text-foreground">Design Fee:</strong> PKR 150,000 - 450,000 (fully credited toward final order)
              </p>
              <p>
                <strong className="text-foreground">Minimum Order:</strong> PKR 750,000 for custom design projects
              </p>
              <p>
                <strong className="text-foreground">Timeline:</strong> 10-16 weeks from initial consultation to delivery and installation
              </p>
              <p>
                <strong className="text-foreground">Warranty:</strong> Comprehensive 5-year warranty on all custom manufactured pieces
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Custom Project</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Schedule a consultation with our expert design team to discuss your vision. Bring sketches, inspiration photos, mood boards, or just your ideas—we'll help bring them to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12">
                  Request Custom Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12">
                  Book Design Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CustomDesign;
