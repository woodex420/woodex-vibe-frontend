import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-office.jpg";
import workstationImage from "@/assets/workstation.jpg";
import loungeImage from "@/assets/lounge.jpg";
import { Users, Package, Building2, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Tech Startup Hub",
      client: "InnovateTech Solutions",
      category: "Technology",
      size: "500+ workstations",
      image: workstationImage,
      desc: "Complete office furnishing for a rapidly growing tech company, featuring collaborative workspaces and modern aesthetics.",
    },
    {
      name: "Corporate Headquarters",
      client: "Global Finance Corp",
      category: "Finance",
      size: "1,200+ seats",
      image: heroImage,
      desc: "Premium executive offices and employee workstations across 5 floors, combining luxury with functionality.",
    },
    {
      name: "Creative Agency Space",
      client: "Design Studios",
      category: "Creative",
      size: "300+ workstations",
      image: loungeImage,
      desc: "Dynamic workspace with flexible furniture arrangements, breakout areas, and collaborative zones.",
    },
  ];

  const stats = [
    { icon: Building2, number: "1,000+", label: "Projects Completed" },
    { icon: Package, number: "50,000+", label: "Furniture Pieces Installed" },
    { icon: Users, number: "500+", label: "Corporate Clients" },
    { icon: Award, number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section 
        className="relative h-[340px] md:h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our
              <span className="block text-accent">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Showcasing successful office transformations across diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-accent-foreground">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <stat.icon className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-lg font-bold">{stat.number}</div>
                  <div className="text-xs opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, i) => (
            <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge variant="outline">{project.size}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                <p className="text-muted-foreground">{project.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-accent text-accent-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Create Your Success Story</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Ready to transform your workspace? Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
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

export default Projects;