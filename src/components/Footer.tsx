import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">WOODEX</h3>
            <p className="text-sm opacity-90 mb-4">
              Premium office furniture designed for productivity and comfort. Transform your workspace with our modern solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/shop" className="hover:text-accent transition-colors">Executive Chairs</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Workstations</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Standing Desks</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Storage Solutions</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Lounge Furniture</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services" className="hover:text-accent transition-colors">Space Planning</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Custom Design</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Delivery & Installation</Link></li>
              <li><Link to="/virtual-showroom" className="hover:text-accent transition-colors">3D Visualization</Link></li>
              <li><Link to="/e-quotation" className="hover:text-accent transition-colors">E-Quotation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/b2b" className="hover:text-accent transition-colors">B2B Solutions</Link></li>
              <li><Link to="/showrooms" className="hover:text-accent transition-colors">Showrooms</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center opacity-90">
          <p>&copy; 2025 WOODEX. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
