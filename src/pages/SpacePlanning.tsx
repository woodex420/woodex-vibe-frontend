import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import spacePlanningImage from "@/assets/space-planning-design.jpg";
import { Lightbulb, Layers, Maximize2, Users, TrendingUp, Zap, CheckCircle2 } from "lucide-react";

const SpacePlanning = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Space Analysis",
      desc: "Comprehensive evaluation of your current or planned workspace. We analyze traffic flow, natural light, acoustics, and ergonomics.",
    },
    {
      icon: Layers,
      title: "CAD Floor Plans",
      desc: "Professional 2D and 3D floor plans showing furniture placement, dimensions, and spatial relationships.",
    },
    {
      icon: Maximize2,
      title: "Space Optimization",
      desc: "Maximize efficiency and productivity. We help you use every square foot effectively without feeling cramped.",
    },
    {
      icon: Users,
      title: "Workplace Strategy",
      desc: "Design workspaces that support collaboration, focus work, and employee wellbeing based on your team's needs.",
    },
    {
      icon: TrendingUp,
      title: "Future-Proofing",
      desc: "Flexible layouts that can adapt as your business grows. Plan for expansion without complete redesigns.",
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      desc: "Receive initial space plans within 5-7 business days. Revisions completed within 48 hours.",
    },
  ];

  const process = [
    {
      step: "Consultation",
      desc: "Site visit to measure space, understand your needs, and discuss your vision",
      deliverable: "Meeting notes and preliminary measurements",
    },
    {
      step: "Analysis",
      desc: "Evaluate space constraints, opportunities, and develop multiple layout concepts",
      deliverable: "Concept sketches and initial recommendations",
    },
    {
      step: "Design",
      desc: "Create detailed CAD drawings with furniture placement and 3D visualizations",
      deliverable: "Professional floor plans and 3D renderings",
    },
    {
      step: "Refinement",
      desc: "Review plans together, make adjustments based on your feedback",
      deliverable: "Revised plans and final approval",
    },
    {
      step: "Implementation",
      desc: "Furniture selection, ordering, and installation coordination",
      deliverable: "Complete project management to completion",
    },
  ];

  const benefits = [
    "Increase workspace efficiency by 20-40%",
    "Improve employee satisfaction and productivity",
    "Reduce wasted space and rental costs",
    "Support hybrid and flexible work arrangements",
    "Comply with building codes and accessibility",
    "Create better first impressions for clients",
    "Plan for technology integration",
    "Optimize for collaboration and privacy",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={spacePlanningImage} 
          alt="Professional Space Planning & Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Space Planning & Design
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Transform your workspace with expert space planning services. We create efficient, productive office layouts that maximize every square foot while enhancing employee wellbeing.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Comprehensive Space Planning</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            From initial concept to final completion, we handle every aspect of professional workspace design and strategic planning.
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

        {/* Benefits */}
        <div className="mb-20 bg-muted rounded-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center mb-12">Why Space Planning Matters</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Planning Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((phase, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{phase.step}</h3>
                      <p className="text-muted-foreground mb-3">{phase.desc}</p>
                      <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded text-sm font-medium">
                        {phase.deliverable}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <Card className="mb-12 max-w-3xl mx-auto border-border/50">
          <CardContent className="p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-8">Service Packages</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Basic Space Plan</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Professional 2D floor plan with optimized furniture layout and detailed measurements
                </p>
                <p className="text-3xl font-bold text-accent">PKR 75,000</p>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-xl font-bold mb-2">Premium Package</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Complete planning with photorealistic 3D visualization, multiple design concepts, and comprehensive furniture recommendations
                </p>
                <p className="text-3xl font-bold text-accent">PKR 150,000</p>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-xl font-bold mb-2">Full-Service Design</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  End-to-end turnkey service including planning, design, furniture procurement, project management, and installation
                </p>
                <p className="text-3xl font-bold text-accent">Custom Quote</p>
              </div>
            </div>
            <p className="text-base text-muted-foreground mt-8">
              * Planning fees are fully credited toward furniture purchases exceeding PKR 1,500,000
            </p>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Schedule a complimentary 30-minute consultation to discuss your space planning needs. We'll provide preliminary expert recommendations during the call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12">
                  Get Space Planning Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12">
                  Book Free Consultation
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

export default SpacePlanning;
