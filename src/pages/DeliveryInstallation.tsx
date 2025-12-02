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
      title: "Pakistan-Wide Coverage",
      desc: "Delivery to all major cities across Pakistan with our modern fleet equipped with real-time GPS tracking.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Choose delivery times that work for your business. Weekend and evening delivery available upon request.",
    },
    {
      icon: Shield,
      title: "Fully Insured Transit",
      desc: "All deliveries are comprehensively insured. Your furniture is protected from warehouse to final installation.",
    },
    {
      icon: Package,
      title: "White Glove Service",
      desc: "Professional unpacking, expert assembly, and precise placement. Complete packaging material removal included.",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      desc: "Track your delivery in real-time with SMS and email updates at every stage of the delivery process.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Inspection",
      desc: "Comprehensive quality check and detailed walkthrough to ensure everything exceeds your expectations.",
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
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={deliveryImage} 
          alt="Professional Delivery & Installation Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Delivery & Installation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Professional delivery and expert installation services across Pakistan. From our warehouse to your workplace, we handle everything with precision and care.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Choose WoodEx Delivery</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Professional, reliable, and fully insured delivery services across Pakistan
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Delivery Process</h2>
          <div className="max-w-4xl mx-auto">
            {process.map((item, i) => (
              <div key={i} className="flex gap-6 mb-10 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Schedule?</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Get a detailed delivery quote based on your location and order size. Competitive rates starting from PKR 15,000 for Lahore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12">
                  Request Delivery Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12">
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
