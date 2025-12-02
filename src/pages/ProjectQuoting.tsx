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
    desc: "Complete office furniture solutions from 10 to 1000+ workstations across Pakistan",
    minBudget: "PKR 1,500,000+"
  }, {
    title: "Commercial Spaces",
    desc: "Hotels, restaurants, retail spaces, and hospitality furniture installations",
    minBudget: "PKR 3,000,000+"
  }, {
    title: "Educational Institutions",
    desc: "Schools, universities, training centers, libraries, and modern learning spaces",
    minBudget: "PKR 2,250,000+"
  }, {
    title: "Healthcare Facilities",
    desc: "Hospitals, clinics, medical offices, and healthcare furniture solutions",
    minBudget: "PKR 4,500,000+"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img src={quotingImage} alt="Project Based Quoting & Management" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Project Based Quoting
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Specialized comprehensive quotes for large-scale furniture projects across Pakistan. From initial concept to final completion, we handle everything with transparent fixed pricing and guaranteed timelines.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What's Included</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Our comprehensive project-based quotes include everything you need for a successful, hassle-free furniture installation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => <Card key={i} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-accent/10">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Project Types We Handle</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projectTypes.map((project, i) => <Card key={i} className="border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{project.desc}</p>
                  <div className="inline-block text-accent px-5 py-2 rounded-lg font-bold bg-accent/10 text-lg">
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
            desc: "Comprehensive site visit and detailed requirement gathering session with your team",
            timeline: "Day 1-2"
          }, {
            step: "2",
            title: "Design & Planning",
            desc: "Professional space planning, photorealistic 3D visualization, and strategic product selection",
            timeline: "Day 3-7"
          }, {
            step: "3",
            title: "Quote Preparation",
            desc: "Detailed comprehensive proposal with transparent pricing, realistic timeline, and complete specifications",
            timeline: "Day 8-10"
          }, {
            step: "4",
            title: "Presentation & Revision",
            desc: "Professional presentation of proposal and refinement based on your detailed feedback",
            timeline: "Day 11-14"
          }, {
            step: "5",
            title: "Final Approval",
            desc: "Official sign-off on final quote, project schedule, and commencement plan",
            timeline: "Day 15"
          }].map((item, i) => <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full text-accent-foreground font-bold flex items-center justify-center text-xl flex-shrink-0 bg-accent shadow-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground font-medium">{item.timeline}</span>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Project Quote</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Ready to discuss your large-scale project? Get a comprehensive detailed quote within 14 business days. Minimum project value: PKR 1,500,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12">
                  Request Project Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12">
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