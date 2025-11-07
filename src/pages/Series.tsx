import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import chairImage from "@/assets/chair-executive.jpg";
import deskImage from "@/assets/desk-standing.jpg";
import workstationImage from "@/assets/workstation.jpg";

const Series = () => {
  const series = [
    {
      name: "Executive Series",
      tagline: "Leadership deserves luxury",
      desc: "Premium furniture collection for C-suite and senior management offices",
      image: chairImage,
      features: ["Italian leather upholstery", "Solid wood construction", "Customizable finishes"],
    },
    {
      name: "Modern Series",
      tagline: "Contemporary design meets functionality",
      desc: "Sleek, minimalist furniture for modern workspaces",
      image: deskImage,
      features: ["Clean lines", "Integrated cable management", "Height-adjustable options"],
    },
    {
      name: "Collaborative Series",
      tagline: "Built for teamwork",
      desc: "Flexible furniture systems designed for open-plan offices",
      image: workstationImage,
      features: ["Modular design", "Quick reconfiguration", "Acoustic privacy panels"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Furniture Series</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated collections designed for different work styles and office environments
          </p>
        </div>

        <div className="space-y-16">
          {series.map((item, i) => (
            <Card key={i} className="overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-8 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-2">{item.name}</h2>
                  <p className="text-xl text-accent mb-4 italic">{item.tagline}</p>
                  <p className="text-lg text-muted-foreground mb-6">{item.desc}</p>
                  <div className="space-y-2 mb-8">
                    {item.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="w-fit">Explore Series</Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Series;
