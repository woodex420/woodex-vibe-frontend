import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, TrendingDown, HeadphonesIcon, FileCheck, Clock, Award } from "lucide-react";

const B2B = () => {
  const benefits = [
    { icon: TrendingDown, title: "Volume Pricing", desc: "Significant discounts on bulk orders for corporate clients" },
    { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Personal account manager for ongoing assistance" },
    { icon: FileCheck, title: "Flexible Terms", desc: "Customized payment plans and leasing options" },
    { icon: Clock, title: "Priority Service", desc: "Fast-track delivery and installation for business clients" },
    { icon: Award, title: "Extended Warranty", desc: "Enhanced warranty coverage for enterprise clients" },
    { icon: Building2, title: "Project Management", desc: "End-to-end coordination for large-scale projects" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">B2B Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with WOODEX for enterprise furniture solutions. Volume pricing, dedicated support, and flexible terms for businesses of all sizes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose WOODEX for B2B?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Corporate Offices",
              "Coworking Spaces",
              "Educational Institutions",
              "Healthcare Facilities",
              "Government Agencies",
              "Hospitality",
              "Real Estate Developers",
              "Financial Services",
            ].map((industry, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-muted">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our B2B team to discuss volume pricing, custom solutions, and partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg">Request B2B Quote</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Schedule Consultation</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our B2B Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Understand your needs" },
              { step: "2", title: "Proposal", desc: "Customized solution" },
              { step: "3", title: "Agreement", desc: "Flexible terms" },
              { step: "4", title: "Delivery", desc: "Professional installation" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default B2B;
