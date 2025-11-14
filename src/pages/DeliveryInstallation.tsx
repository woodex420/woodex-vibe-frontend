import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import deliveryImage from "@/assets/delivery-truck.jpg";
import { Truck, Clock, Shield, CheckCircle2, Package, MapPin } from "lucide-react";

const DeliveryInstallation = () => {
  const features = [
    {
      icon: Truck,
      title: "Nationwide Coverage",
      desc: "We deliver to all Emirates with our fleet of modern delivery vehicles equipped with GPS tracking.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Choose delivery times that work for your business. Weekend and after-hours delivery available.",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      desc: "All deliveries are fully insured. Your furniture is protected from warehouse to final placement.",
    },
    {
      icon: Package,
      title: "White Glove Service",
      desc: "Professional unpacking, assembly, and placement. We remove all packaging materials.",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      desc: "Track your delivery in real-time with SMS and email updates throughout the delivery process.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Inspection",
      desc: "Final quality check and walkthrough to ensure everything meets your expectations.",
    },
  ];

  const process = [
    { step: "1", title: "Order Confirmation", desc: "Receive order details and delivery estimate" },
    { step: "2", title: "Preparation", desc: "Furniture prepared and packaged at our warehouse" },
    { step: "3", title: "Dispatch", desc: "Team dispatched with real-time tracking link" },
    { step: "4", title: "Delivery", desc: "Professional delivery and installation at your site" },
    { step: "5", title: "Inspection", desc: "Final walkthrough and quality verification" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={deliveryImage} 
          alt="Delivery & Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Delivery & Installation
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Professional delivery and expert installation services across the UAE. From warehouse to workplace, we handle everything.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Delivery Process</h2>
          <div className="max-w-4xl mx-auto">
            {process.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Schedule?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get a detailed delivery quote based on your location and order size. Standard delivery starts from AED 500.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Request Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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

export default DeliveryInstallation;
