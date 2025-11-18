import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    { icon: Target, title: "Quality Craftsmanship", desc: "Every piece reflects superior Pakistani manufacturing with finest materials" },
    { icon: Users, title: "Customer-Centric Innovation", desc: "Technology serving business needs with 3D visualization and automated quotations" },
    { icon: Eye, title: "Transparency & Trust", desc: "Clear pricing and honest communication with our quote-first approach" },
    { icon: Award, title: "Continuous Improvement", desc: "Evolving with market demands and setting new industry standards" },
  ];

  const milestones = [
    { year: "Founded", event: "Manufacturing Excellence", desc: "Established Lahore-based manufacturing hub" },
    { year: "2020", event: "Digital Transformation", desc: "Launched Pakistan's first B2B furniture e-commerce platform" },
    { year: "2023", event: "1,000+ Clients", desc: "Served over 1,000 businesses across Pakistan" },
    { year: "2024", event: "Technology Leadership", desc: "Introduced 3D visualization and automated quotations" },
    { year: "2025", event: "Market Leader", desc: "1,200+ clients, 56 products, nationwide delivery network" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About WoodEx Furniture</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Pakistan's Premier B2B Office Furniture E-commerce Platform - Empowering businesses with world-class furniture solutions through innovation, quality craftsmanship, and exceptional customer service.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-accent">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Empowering Pakistani businesses with world-class office furniture solutions through innovation, quality craftsmanship, and exceptional customer service."
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent">
              <CardContent className="pt-6">
                <Eye className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "To be Pakistan's most trusted and technologically advanced office furniture manufacturer, setting the standard for B2B furniture excellence across South Asia."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-lg text-muted-foreground mb-6">
              WoodEx has established itself as the nation's leading provider of custom office furniture through an innovative quote-first business model, combining traditional craftsmanship with cutting-edge e-commerce technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { number: "1,200+", label: "Satisfied Clients" },
                { number: "56", label: "Premium Products" },
                { number: "11", label: "Categories" },
                { number: "95%", label: "Platform Ready" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <div className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1,200+", label: "Satisfied Clients" },
              { number: "56", label: "Premium Products" },
              { number: "11", label: "Product Categories" },
              { number: "5-7 Years", label: "Warranty Coverage" },
            ].map((stat, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Business Philosophy */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Business Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            WoodEx operates on a <span className="font-semibold text-foreground">quote-first strategy</span> that prioritizes relationship building over immediate sales. This approach allows for deep understanding of client needs, customization beyond standard offerings, premium pricing justified by personalized service, and long-term client relationships with repeat business.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-accent text-accent-foreground">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Transform Your Office Space</h2>
              <p className="opacity-90 mb-6">
                Join 1,200+ satisfied businesses that trust WoodEx for premium office furniture solutions
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/e-quotation">
                  <Button size="lg" variant="secondary">Get Free Quote</Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-2">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
