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
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={customDesignImage} 
          alt="Custom Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Custom Design Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Bring your vision to life with our bespoke furniture design service. From concept to creation, we craft unique pieces tailored to your exact specifications.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">Our Custom Design Services</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Every piece is designed and crafted specifically for you. No two projects are the same.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
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
        <Card className="mb-12 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Investment & Timeline</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Design Fee:</strong> AED 5,000 - 15,000 (credited toward final order)
              </p>
              <p>
                <strong className="text-foreground">Minimum Order:</strong> AED 25,000 for custom design projects
              </p>
              <p>
                <strong className="text-foreground">Timeline:</strong> 10-16 weeks from initial consultation to delivery
              </p>
              <p>
                <strong className="text-foreground">Warranty:</strong> 5-year warranty on all custom manufactured pieces
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Your Custom Project</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Schedule a consultation with our design team to discuss your vision. Bring sketches, inspiration photos, or just your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Request Custom Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
