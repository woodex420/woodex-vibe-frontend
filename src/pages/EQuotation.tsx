import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText, Clock, DollarSign, Users } from "lucide-react";
import { toast } from "sonner";

const EQuotation = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll respond within 24 hours.");
  };

  const benefits = [
    { icon: Clock, title: "24-Hour Response", desc: "Receive detailed quotes within one business day" },
    { icon: DollarSign, title: "Transparent Pricing", desc: "Clear breakdown of costs with no hidden fees" },
    { icon: CheckCircle2, title: "No Obligation", desc: "Free quotes with no pressure to commit" },
    { icon: Users, title: "Expert Advice", desc: "Recommendations based on your specific needs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <FileText className="h-3 w-3 mr-1" />
              NEW SERVICE
            </Badge>
            <h1 className="text-5xl font-bold mb-4">Get Instant Quotation</h1>
            <p className="text-xl text-muted-foreground">
              Fast, transparent pricing for all your office furniture needs. Fill out the form below and receive a detailed quote within 24 hours.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <benefit.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quote Form */}
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Company Inc." required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+971 50 123 4567" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Project Type *</Label>
                  <Input id="project" placeholder="e.g., New office setup, Office renovation" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements & Details *</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Please describe your furniture needs, space size, number of employees, preferred style, budget range, and any specific requirements..."
                    rows={6}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range (AED)</Label>
                    <Input id="budget" placeholder="e.g., 50,000 - 100,000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Input id="timeline" placeholder="e.g., 2-3 months" />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Quote Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We'll only use your information to provide the requested quotation.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-3 text-xl">1</div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-sm text-muted-foreground">Our team reviews your requirements</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-3 text-xl">2</div>
                <h3 className="font-semibold mb-2">Prepare Quote</h3>
                <p className="text-sm text-muted-foreground">We create a detailed quotation</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-3 text-xl">3</div>
                <h3 className="font-semibold mb-2">Receive Quote</h3>
                <p className="text-sm text-muted-foreground">Get your quote within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EQuotation;
