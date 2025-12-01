import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, FileText, Clock, DollarSign, Users, Phone, MessageCircle, Shield } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const EQuotation = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll respond within 24 hours.");
  };

  const benefits = [
    { icon: Clock, title: "24-Hour Response", desc: "Receive detailed quotes within one business day" },
    { icon: DollarSign, title: "Transparent Pricing", desc: "Clear breakdown of costs with no hidden fees" },
    { icon: CheckCircle2, title: "No Obligation", desc: "Free quotes with no pressure to commit" },
    { icon: Users, title: "Expert Advice", desc: "Personalized recommendations for your needs" },
  ];

  const features = [
    "Free 3D visualization of your space",
    "Customization options available",
    "Factory-direct pricing",
    "Nationwide delivery across Pakistan",
    "5-7 year warranty on all products",
    "Professional installation included",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4 inline mr-2" />
            Free Quote Service
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Your Free Quotation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Fast, transparent pricing for all your office furniture needs. Fill out the form and receive a detailed quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-3xl font-bold mb-8">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Muhammad Ali" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your Company Pvt Ltd" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="ali@company.pk" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp *</Label>
                      <Input id="phone" type="tel" placeholder="+92 300 1234567" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lahore">Lahore</SelectItem>
                          <SelectItem value="karachi">Karachi</SelectItem>
                          <SelectItem value="islamabad">Islamabad</SelectItem>
                          <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                          <SelectItem value="faisalabad">Faisalabad</SelectItem>
                          <SelectItem value="multan">Multan</SelectItem>
                          <SelectItem value="peshawar">Peshawar</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-office">New Office Setup</SelectItem>
                          <SelectItem value="renovation">Office Renovation</SelectItem>
                          <SelectItem value="expansion">Office Expansion</SelectItem>
                          <SelectItem value="replacement">Furniture Replacement</SelectItem>
                          <SelectItem value="custom">Custom Project</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-100">51-100 employees</SelectItem>
                          <SelectItem value="101-250">101-250 employees</SelectItem>
                          <SelectItem value="250+">250+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (PKR)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under 500,000</SelectItem>
                          <SelectItem value="500k-1m">500,000 - 1,000,000</SelectItem>
                          <SelectItem value="1m-3m">1,000,000 - 3,000,000</SelectItem>
                          <SelectItem value="3m-5m">3,000,000 - 5,000,000</SelectItem>
                          <SelectItem value="5m-10m">5,000,000 - 10,000,000</SelectItem>
                          <SelectItem value="10m+">10,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Requirements & Details *</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please describe your furniture needs: types of furniture required, preferred style, specific features, space dimensions, delivery timeline, and any other requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Submit Quote Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting, you agree to our privacy policy. Your information is secure and will only be used for this quotation.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What's Included */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Prefer to Talk?</h3>
                <div className="space-y-4">
                  <a href="tel:+923001234567" className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold">Call Us</p>
                      <p className="text-sm text-muted-foreground">+92 300 1234567</p>
                    </div>
                  </a>
                  <a href="https://wa.me/923001234567" className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Quick Response</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badge */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Trusted by 1,200+ Businesses</h3>
                <p className="text-sm opacity-80">
                  Join Pakistan's leading companies who trust WoodEx for their office furniture needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Happens Next?</h2>
            <p className="text-lg text-muted-foreground">Our simple 3-step quotation process</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "We Review", desc: "Our team reviews your requirements and prepares a detailed assessment within hours" },
              { step: "2", title: "We Design", desc: "We create a customized quotation with product recommendations and 3D visualization" },
              { step: "3", title: "You Decide", desc: "Receive your quote within 24 hours with no obligation to purchase" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-muted rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our sales team is available to discuss your requirements and provide instant guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+923001234567">
              <Button size="lg">Call Now: +92 300 1234567</Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline">Visit Contact Page</Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EQuotation;