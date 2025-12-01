import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, TrendingDown, HeadphonesIcon, FileCheck, Clock, Award, Users, Shield, Truck, CheckCircle2 } from "lucide-react";

const B2B = () => {
  const benefits = [
    { icon: TrendingDown, title: "Volume Discounts", desc: "Up to 40% off on bulk orders for corporate clients across Pakistan" },
    { icon: HeadphonesIcon, title: "Dedicated Account Manager", desc: "Personal support for all your furniture needs and queries" },
    { icon: FileCheck, title: "Flexible Payment Terms", desc: "Customized payment plans, credit facility, and leasing options" },
    { icon: Clock, title: "Priority Delivery", desc: "Fast-track production and installation for business clients" },
    { icon: Award, title: "Extended 7-Year Warranty", desc: "Enhanced warranty coverage exclusively for enterprise clients" },
    { icon: Building2, title: "Project Management", desc: "End-to-end coordination for large-scale office fit-outs" },
  ];

  const industries = [
    { name: "Corporate Offices", count: "450+ Projects" },
    { name: "Co-working Spaces", count: "120+ Projects" },
    { name: "Educational Institutions", count: "200+ Projects" },
    { name: "Healthcare Facilities", count: "85+ Projects" },
    { name: "Government Organizations", count: "65+ Projects" },
    { name: "Hospitality & Hotels", count: "95+ Projects" },
    { name: "Real Estate Developers", count: "150+ Projects" },
    { name: "Banks & Financial", count: "180+ Projects" },
  ];

  const features = [
    { icon: Users, title: "1,200+ Satisfied Clients", desc: "Trusted by businesses across Pakistan" },
    { icon: Shield, title: "Quality Guaranteed", desc: "Premium materials with ISO certification" },
    { icon: Truck, title: "Nationwide Delivery", desc: "Free delivery & installation in all major cities" },
    { icon: FileCheck, title: "Custom Solutions", desc: "Tailored furniture to match your brand" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Enterprise Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">B2B Office Furniture Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Partner with Pakistan's leading office furniture manufacturer. Volume pricing, dedicated support, and flexible terms for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground min-w-[200px]">
                  Request B2B Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px]">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-muted/50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Benefits Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose WoodEx for B2B?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand the unique needs of businesses. Our B2B program is designed to provide maximum value, flexibility, and support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="hover:shadow-xl transition-all hover:border-accent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From startups to Fortune 500 companies, we've furnished workspaces across every major industry in Pakistan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <Card key={i} className="hover:shadow-xl hover:border-accent transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-10 w-10 mx-auto mb-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  <h3 className="font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-accent font-medium">{industry.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* B2B Process */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our B2B Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined process designed for efficiency and transparency
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free needs assessment and space planning consultation with our experts" },
              { step: "02", title: "Custom Proposal", desc: "Detailed quotation with 3D visualization and product recommendations" },
              { step: "03", title: "Agreement", desc: "Flexible payment terms, timelines, and project milestones" },
              { step: "04", title: "Delivery & Setup", desc: "Professional installation with minimal disruption to your operations" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-6 text-2xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Volume Pricing Tiers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The more you order, the more you save
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { tier: "Starter", range: "PKR 500K - 2M", discount: "15% Off", features: ["Dedicated support", "Free delivery", "5-year warranty"] },
              { tier: "Business", range: "PKR 2M - 10M", discount: "25% Off", features: ["Priority production", "Installation included", "6-year warranty", "Design consultation"], popular: true },
              { tier: "Enterprise", range: "PKR 10M+", discount: "40% Off", features: ["Account manager", "Custom manufacturing", "7-year warranty", "Flexible payment", "After-sales support"] },
            ].map((tier, i) => (
              <Card key={i} className={`relative ${tier.popular ? 'border-2 border-accent shadow-xl' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.range}</p>
                  <div className="text-4xl font-bold text-accent mb-6">{tier.discount}</div>
                  <ul className="space-y-3 text-left mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/e-quotation">
                    <Button className={`w-full ${tier.popular ? 'bg-accent hover:bg-accent/90' : ''}`}>
                      Get Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our B2B team to discuss volume pricing, custom solutions, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground min-w-[200px]">
                Request B2B Quote
              </Button>
            </Link>
            <a href="tel:+923001234567">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px]">
                Call: +92 300 1234567
              </Button>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default B2B;