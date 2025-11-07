import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    { icon: Target, title: "Quality First", desc: "We never compromise on materials, craftsmanship, or design excellence" },
    { icon: Users, title: "Customer Focus", desc: "Your success is our priority. We listen, adapt, and deliver beyond expectations" },
    { icon: Award, title: "Innovation", desc: "Continuously evolving our designs to meet modern workspace needs" },
    { icon: Eye, title: "Transparency", desc: "Honest pricing, clear communication, and reliable service every time" },
  ];

  const milestones = [
    { year: "2003", event: "WOODEX Founded", desc: "Started with a vision to transform office spaces" },
    { year: "2010", event: "Regional Expansion", desc: "Opened showrooms across the UAE" },
    { year: "2015", event: "1000+ Projects", desc: "Completed our thousandth office installation" },
    { year: "2020", event: "Sustainable Initiative", desc: "Launched eco-friendly furniture line" },
    { year: "2025", event: "Industry Leader", desc: "Recognized as top office furniture provider" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About WOODEX</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            For over 20 years, we've been transforming workspaces across the region with premium office furniture that combines functionality, comfort, and style.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Founded in 2003, WOODEX began with a simple mission: to create office environments that inspire productivity and well-being. What started as a small showroom in Dubai has grown into a comprehensive furniture solution provider serving businesses across the UAE and beyond.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, we're proud to have furnished over 1,000 offices, from startups to Fortune 500 companies, always maintaining our commitment to quality, service, and innovation.
          </p>
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
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "20+", label: "Years Experience" },
            { number: "1,000+", label: "Projects Completed" },
            { number: "500+", label: "Corporate Clients" },
            { number: "50,000+", label: "Furniture Pieces Delivered" },
          ].map((stat, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-muted">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Create Your Perfect Workspace</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the WOODEX difference. Contact us today to start your office transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg">Get Free Quote</Button>
              </Link>
              <Link to="/showrooms">
                <Button size="lg" variant="outline">Visit Our Showrooms</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default About;
