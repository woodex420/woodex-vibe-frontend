import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Phone", 
      content: "+92 300 1234567",
      subtext: "Available 24/7"
    },
    { 
      icon: MessageCircle, 
      title: "WhatsApp", 
      content: "+92 300 1234567",
      subtext: "Quick responses"
    },
    { 
      icon: Mail, 
      title: "Email", 
      content: "info@woodex.pk",
      subtext: "support@woodex.pk"
    },
    { 
      icon: MapPin, 
      title: "Head Office", 
      content: "Lahore, Punjab",
      subtext: "Pakistan"
    },
    { 
      icon: Clock, 
      title: "Working Hours", 
      content: "Mon-Sat: 9AM-6PM",
      subtext: "Sunday: Closed"
    },
  ];

  const locations = [
    { city: "Lahore", address: "Factory & Main Office, Punjab", status: "Headquarters" },
    { city: "Karachi", address: "Sales Office, Sindh", status: "Branch" },
    { city: "Islamabad", address: "Sales Office, Federal", status: "Branch" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-wood py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 mb-4">
            Let's Transform Your Office Together
          </p>
          <p className="text-lg max-w-3xl mx-auto text-primary-foreground/80">
            Have questions? We're here to help. Reach out to our team and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Contact Form */}
          <Card className="hover:shadow-xl transition-all">
            <CardContent className="p-8 lg:p-10">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+92 300 1234567" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={5} required />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                          <info.icon className="h-7 w-7 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        {info.subtext && (
                          <p className="text-muted-foreground text-sm">{info.subtext}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20 hover:shadow-xl transition-all">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For urgent inquiries, contact us via WhatsApp for immediate assistance. Our team is ready to help you with quotes, consultations, and any questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Locations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Serving businesses across Pakistan with nationwide delivery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {locations.map((location, i) => (
              <Card key={i} className="hover:shadow-xl hover:border-accent transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                    {location.status}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
                  <p className="text-muted-foreground">{location.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-wood text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Request a free consultation and quote for your office furniture project
          </p>
          <Link to="/e-quotation">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Free Quote
            </Button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
