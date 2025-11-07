import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-office.jpg";
import workstationImage from "@/assets/workstation.jpg";
import loungeImage from "@/assets/lounge.jpg";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing successful office transformations across diverse industries
          </p>
        </div>

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

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "1,000+", label: "Projects Completed" },
            { number: "50,000+", label: "Furniture Pieces Installed" },
            { number: "500+", label: "Corporate Clients" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-muted">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Create Your Success Story</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your workspace? Contact us to discuss your project requirements.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
