import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Showrooms = () => {
  const showrooms = [
    {
      name: "Dubai Design District",
      address: "Building 6, Dubai Design District, Dubai, UAE",
      phone: "+971 4 123 4567",
      hours: "Sat-Thu: 9:00 AM - 6:00 PM",
      features: ["Full product range", "3D visualization room", "Design consultation"],
    },
    {
      name: "Abu Dhabi",
      address: "Mussafah Industrial Area, Abu Dhabi, UAE",
      phone: "+971 2 234 5678",
      hours: "Sat-Thu: 9:00 AM - 6:00 PM",
      features: ["Executive furniture", "Custom solutions", "B2B services"],
    },
    {
      name: "Sharjah",
      address: "Industrial Area 15, Sharjah, UAE",
      phone: "+971 6 345 6789",
      hours: "Sat-Thu: 9:00 AM - 5:30 PM",
      features: ["Workstation displays", "Storage solutions", "Bulk ordering"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Visit Our Showrooms</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our furniture collections in person. Walk-ins welcome, or schedule an appointment for personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {showrooms.map((showroom, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{showroom.name}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{showroom.address}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{showroom.phone}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{showroom.hours}</p>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <p className="font-semibold mb-2">Features:</p>
                  <ul className="space-y-1">
                    {showroom.features.map((feature, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Get Directions</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Appointment Card */}
        <Card className="bg-muted">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Schedule a Showroom Visit</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book an appointment with our design consultants for a personalized showroom tour and expert advice.
            </p>
            <Button size="lg">Schedule Appointment</Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Showrooms;
