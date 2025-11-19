import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">WoodEx</h3>
            <p className="text-sm opacity-90 mb-4">
              Pakistan's premium custom office furniture manufacturer. Design-to-delivery solutions for modern workspaces.
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

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/showrooms" className="hover:text-accent transition-colors">Showrooms</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/b2b" className="hover:text-accent transition-colors">B2B Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/shop" className="hover:text-accent transition-colors">Office Chairs</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Workstations</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Executive Desks</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Meeting Tables</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Storage Solutions</Link></li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services/space-planning" className="hover:text-accent transition-colors">Space Planning</Link></li>
              <li><Link to="/services/custom-design" className="hover:text-accent transition-colors">Custom Design</Link></li>
              <li><Link to="/services/delivery-installation" className="hover:text-accent transition-colors">Installation</Link></li>
              <li><Link to="/warranty" className="hover:text-accent transition-colors">Warranty</Link></li>
              <li><Link to="/e-quotation" className="hover:text-accent transition-colors">Get Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <div>
              <p className="font-semibold mb-2">Payment Method</p>
              <div className="flex gap-3 items-center">
                <span className="text-accent font-medium">JazzCash</span>
                <span>•</span>
                <span className="text-accent font-medium">easypaisa</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p>@ 2025 WoodEx Furniture. All rights reserved.</p>
              <p className="mt-1">Follow Us:</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
