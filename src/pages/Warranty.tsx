import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, FileText, Headphones } from "lucide-react";

const Warranty = () => {
  const coverage = [
    "Manufacturing defects in materials and workmanship",
    "Structural integrity of frames and mechanisms",
    "Hardware, hinges, and moving parts",
    "Upholstery and cushioning (under normal use)",
    "Wood and laminate finishes",
    "Pneumatic and hydraulic systems in chairs",
  ];

  const notCovered = [
    "Normal wear and tear",
    "Damage from improper use or maintenance",
    "Modifications made by unauthorized parties",
    "Accidental damage or misuse",
    "Commercial rental use",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 mx-auto mb-4 text-accent" />
          <h1 className="text-5xl font-bold mb-4">Warranty Information</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We stand behind the quality of our furniture with comprehensive warranty coverage
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Standard Warranty */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">5-Year Standard Warranty</h2>
              <p className="text-lg text-muted-foreground mb-6">
                All WOODEX furniture comes with a comprehensive 5-year warranty covering manufacturing defects and structural issues under normal commercial use.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">What's Covered:</h3>
              <div className="space-y-3 mb-8">
                {coverage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Not Covered:</h3>
              <div className="space-y-3">
                {notCovered.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Extended Warranty */}
          <Card className="border-accent">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Extended Warranty Options</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Extend your coverage up to 8 years for added peace of mind. Available for purchase at the time of order.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <p className="font-semibold mb-2">8-Year Extended Warranty</p>
                  <p className="text-sm text-muted-foreground">Additional 3 years of coverage</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-semibold mb-2">Priority Support</p>
                  <p className="text-sm text-muted-foreground">Expedited claims and service</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Claim */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">How to File a Warranty Claim</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">1</div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact Support</h3>
                    <p className="text-muted-foreground">Reach out via phone or email with your order details</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">2</div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Assessment</h3>
                    <p className="text-muted-foreground">Our team will evaluate the issue and determine coverage</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">3</div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Resolution</h3>
                    <p className="text-muted-foreground">Repair, replacement, or credit provided as appropriate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-muted">
            <CardContent className="p-8 text-center">
              <Headphones className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h2 className="text-2xl font-bold mb-4">Need Warranty Support?</h2>
              <p className="text-muted-foreground mb-6">
                Our customer service team is ready to assist with warranty claims and questions.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Warranty Hotline: +971 4 123 4567</p>
                <p className="text-muted-foreground">warranty@woodex.ae</p>
                <p className="text-sm text-muted-foreground">Available Sat-Thu, 9:00 AM - 6:00 PM GST</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Warranty;
