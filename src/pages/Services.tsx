import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import consultationImage from "@/assets/consultation.jpg";
import deliveryImage from "@/assets/delivery-service.jpg";
import { Lightbulb, Box, Truck, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Space Planning & Design",
      desc: "Free 3D design and floor planning services. Our expert consultants analyze your space, workflow, and team needs to create optimal office layouts that maximize productivity and efficiency.",
      image: consultationImage,
      features: [
        "Free on-site consultation",
        "Professional 3D floor plans",
        "CAD design services",
        "Ergonomic assessments",
        "Space optimization strategies",
        "Future growth planning",
      ],
    },
    {
      icon: Box,
      title: "Custom Design Studio",
      desc: "Bespoke furniture manufacturing tailored to your exact specifications. From corporate branding integration to unique space requirements, we bring your vision to life with precision craftsmanship.",
      image: null,
      features: [
        "Custom dimensions & designs",
        "200+ material & color options",
        "Brand identity integration",
        "Prototype development",
        "6-8 week production timeline",
        "Quality craftsmanship guarantee",
      ],
    },
    {
      icon: Truck,
      title: "Nationwide Delivery & Installation",
      desc: "Professional delivery across Pakistan with expert installation services. Our trained teams ensure your furniture is assembled correctly, ready to use, and meets quality standards.",
      image: deliveryImage,
      features: [
        "Coverage across all major cities",
        "Professional assembly team",
        "Debris removal & cleanup",
        "Final quality inspection",
        "Warranty activation on-site",
        "Post-installation support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">360-Degree Office Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From consultation to installation - complete turnkey solutions for your office furniture needs. Factory-direct manufacturing with nationwide service coverage.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid ${service.image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-0`}>
                  {service.image && (
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-8 ${service.image ? '' : 'md:px-16'}`}>
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.desc}</p>
                    <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Request a free consultation with our design experts and receive a detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
