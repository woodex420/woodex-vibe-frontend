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
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={spacePlanningImage} 
          alt="Space Planning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Space Planning Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Transform your workspace with expert space planning. We create efficient, productive office layouts that maximize every square foot.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">Comprehensive Space Planning</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            From concept to completion, we handle every aspect of workspace design and planning.
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
        <Card className="mb-12 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Service Packages</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-2">Basic Space Plan</h4>
                <p className="text-muted-foreground mb-2">
                  2D floor plan with furniture layout and basic measurements
                </p>
                <p className="text-2xl font-bold text-accent">AED 2,500</p>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-lg font-bold mb-2">Premium Package</h4>
                <p className="text-muted-foreground mb-2">
                  Complete planning with 3D visualization, multiple concepts, and furniture recommendations
                </p>
                <p className="text-2xl font-bold text-accent">AED 5,000</p>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-lg font-bold mb-2">Full-Service Design</h4>
                <p className="text-muted-foreground mb-2">
                  End-to-end service including planning, design, furniture procurement, and project management
                </p>
                <p className="text-2xl font-bold text-accent">Custom Quote</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              * Planning fees credited toward furniture purchase over AED 50,000
            </p>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Schedule a free 30-minute consultation to discuss your space planning needs. We'll provide preliminary recommendations on the call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Space Planning Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
