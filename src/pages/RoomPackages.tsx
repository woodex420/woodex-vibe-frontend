import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const RoomPackages = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "15,000",
      badge: "Best for Startups",
      desc: "Perfect for small teams and new businesses",
      includes: [
        "5 Ergonomic office chairs",
        "2 Height-adjustable desks",
        "1 Meeting table (6-seater)",
        "2 Storage cabinets",
        "Delivery & installation",
      ],
    },
    {
      name: "Professional Package",
      price: "45,000",
      badge: "Most Popular",
      desc: "Comprehensive solution for growing companies",
      includes: [
        "15 Executive chairs",
        "6 Workstation desks",
        "1 Conference table (12-seater)",
        "5 Storage units",
        "Reception area furniture",
        "Delivery, installation & setup",
      ],
    },
    {
      name: "Executive Package",
      price: "95,000",
      badge: "Premium",
      desc: "Luxury furnishing for established enterprises",
      includes: [
        "30 Premium executive chairs",
        "15 Custom workstations",
        "2 Conference rooms (complete)",
        "Executive office suite",
        "Lounge area furniture",
        "10 Storage & filing systems",
        "White-glove delivery & installation",
        "3-year extended warranty",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Room Packages</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete office furniture solutions designed for different business sizes and budgets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, i) => (
            <Card key={i} className={i === 1 ? "border-accent border-2 shadow-xl" : ""}>
              <CardContent className="p-8">
                {pkg.badge && (
                  <Badge className="mb-4 bg-accent text-accent-foreground">
                    {pkg.badge}
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">AED {pkg.price}</span>
                </div>
                <p className="text-muted-foreground mb-6">{pkg.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/e-quotation">
                  <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique. Let us create a customized furniture package tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg">Get Custom Quote</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Talk to Expert</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default RoomPackages;
