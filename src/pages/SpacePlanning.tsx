import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import spacePlanningImage from "@/assets/space-planning-design.jpg";
import meetingImage from "@/assets/meeting-room.jpg";
import workstationImage from "@/assets/workstation.jpg";
import { Lightbulb, Layers, Maximize2, Users, TrendingUp, Zap, CheckCircle2, ArrowRight } from "lucide-react";

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

  const packages = [
    {
      name: "Basic Space Plan",
      price: "PKR 75,000",
      features: ["2D floor plan", "Furniture layout", "Measurements", "Single revision"],
      recommended: false,
    },
    {
      name: "Premium Package",
      price: "PKR 150,000",
      features: ["2D & 3D floor plans", "Multiple concepts", "3D visualization", "Unlimited revisions", "Material recommendations"],
      recommended: true,
    },
    {
      name: "Full-Service Design",
      price: "Custom Quote",
      features: ["Complete planning", "Furniture procurement", "Project management", "Installation coordination", "Post-install support"],
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img 
          src={spacePlanningImage} 
          alt="Professional Space Planning & Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Professional Workspace Design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Space Planning <br />
                <span className="text-accent">& Design</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                Transform your workspace with expert space planning services. We create efficient, productive office layouts that maximize every square foot while enhancing employee wellbeing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Get Space Plan Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-accent text-accent-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">300+</div>
              <div className="text-xs md:text-sm opacity-90">Spaces Designed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">2M+</div>
              <div className="text-xs md:text-sm opacity-90">Sq. Ft. Planned</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">35%</div>
              <div className="text-xs md:text-sm opacity-90">Avg. Space Saved</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5-7</div>
              <div className="text-xs md:text-sm opacity-90">Days Turnaround</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Comprehensive Space Planning</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From initial concept to final completion, we handle every aspect of professional workspace design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image + Content Section */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">Why Space Planning Matters</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A well-planned workspace isn't just about fitting desks—it's about creating an environment where people thrive. Good space planning improves productivity, reduces costs, and creates better experiences for employees and clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src={meetingImage} 
              alt="Well Planned Meeting Room" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">35%</div>
              <div className="text-sm">More Efficient</div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Our Planning Process</h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />
            {process.map((phase, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl flex-shrink-0 relative z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <Card className="flex-1 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{phase.step}</h3>
                      <p className="text-muted-foreground mb-3">{phase.desc}</p>
                      <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-medium">
                        📋 {phase.deliverable}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Service Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={i} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.recommended ? 'border-2 border-accent ring-2 ring-accent/20 scale-105' : 'border-border/50'}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${pkg.recommended ? 'pt-12' : ''}`}>
                  <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-accent mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/e-quotation">
                    <Button className={`w-full ${pkg.recommended ? 'bg-accent hover:bg-accent/90' : ''}`} variant={pkg.recommended ? 'default' : 'outline'}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            * Planning fees are fully credited toward furniture purchases exceeding PKR 1,500,000
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={workstationImage} alt="Modern Workstation Layout" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Open Plan Workspaces</h3>
                  <p className="text-white/80">Optimized for collaboration</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={meetingImage} alt="Meeting Space Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Meeting Spaces</h3>
                  <p className="text-white/80">Designed for productivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Schedule a complimentary 30-minute consultation to discuss your space planning needs. We'll provide preliminary expert recommendations during the call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Get Space Planning Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SpacePlanning;
