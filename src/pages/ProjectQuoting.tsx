import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import quotingImage from "@/assets/project-quoting.jpg";
import { FileText, Calculator, Users, ClipboardCheck, TrendingUp, MessageSquare } from "lucide-react";
const ProjectQuoting = () => {
  const features = [{
    icon: FileText,
    title: "Detailed Proposals",
    desc: "Comprehensive quotes with itemized breakdowns, 3D renderings, and material specifications."
  }, {
    icon: Calculator,
    title: "Transparent Pricing",
    desc: "Clear pricing structure with no hidden costs. All taxes, delivery, and installation included."
  }, {
    icon: Users,
    title: "Dedicated Project Manager",
    desc: "Assigned project manager from quote to completion. Single point of contact throughout."
  }, {
    icon: ClipboardCheck,
    title: "Turnkey Solutions",
    desc: "Complete project management including design, manufacturing, delivery, and installation."
  }, {
    icon: TrendingUp,
    title: "Volume Discounts",
    desc: "Special pricing for large projects. Bulk ordering discounts up to 25% for qualified projects."
  }, {
    icon: MessageSquare,
    title: "Flexible Terms",
    desc: "Customized payment plans and leasing options available for large-scale projects."
  }];
  const projectTypes = [{
    title: "Office Fit-Outs",
    desc: "Complete office furniture solutions from 10 to 1000+ workstations",
    minBudget: "AED 50,000+"
  }, {
    title: "Commercial Spaces",
    desc: "Hotels, restaurants, retail spaces, and hospitality furniture",
    minBudget: "AED 100,000+"
  }, {
    title: "Educational Institutions",
    desc: "Schools, universities, training centers, and learning spaces",
    minBudget: "AED 75,000+"
  }, {
    title: "Healthcare Facilities",
    desc: "Hospitals, clinics, and medical office furniture solutions",
    minBudget: "AED 150,000+"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img src={quotingImage} alt="Project Based Quoting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Project Based Quoting
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Specialized quotes for large-scale furniture projects. From concept to completion, we handle everything with fixed pricing and guaranteed timelines.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">What's Included</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Our project-based quotes include everything you need for a successful furniture installation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => <Card key={i}>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-slate-950">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Project Types We Handle</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projectTypes.map((project, i) => <Card key={i}>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.desc}</p>
                  <div className="inline-block text-accent px-4 py-2 rounded-lg font-semibold bg-slate-950">
                    {project.minBudget}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Quoting Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[{
            step: "1",
            title: "Initial Consultation",
            desc: "Site visit and requirement gathering with your team",
            timeline: "Day 1-2"
          }, {
            step: "2",
            title: "Design & Planning",
            desc: "Space planning, 3D visualization, and product selection",
            timeline: "Day 3-7"
          }, {
            step: "3",
            title: "Quote Preparation",
            desc: "Detailed proposal with pricing, timeline, and specifications",
            timeline: "Day 8-10"
          }, {
            step: "4",
            title: "Presentation & Revision",
            desc: "Present proposal and refine based on your feedback",
            timeline: "Day 11-14"
          }, {
            step: "5",
            title: "Final Approval",
            desc: "Sign-off on final quote and project schedule",
            timeline: "Day 15"
          }].map((item, i) => <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full text-accent-foreground font-bold flex items-center justify-center text-xl flex-shrink-0 bg-neutral-800">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">{item.timeline}</span>
                      </div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Your Project Quote</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ready to discuss your project? Get a comprehensive quote within 14 days. Minimum project value: AED 50,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Request Project Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>;
};
export default ProjectQuoting;