import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, User, FileText } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Room Packages", path: "/room-packages" },
    { name: "Virtual Showroom", path: "/virtual-showroom" },
    { name: "Series", path: "/series" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "B2B", path: "/b2b" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <Link to="/showrooms" className="hover:text-foreground transition-colors">
                Showrooms
              </Link>
              <Link to="/materials" className="hover:text-foreground transition-colors">
                Material and Colors
              </Link>
              <Link to="/warranty" className="hover:text-foreground transition-colors">
                Warranty
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span>English</span>
              <span>AED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight">
              WOODEX
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Link to="/e-quotation">
                <Button variant="outline" className="hidden md:flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  E-Quotation
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link to="/e-quotation" onClick={() => setIsOpen(false)}>
                      <Button className="w-full mt-4">E-Quotation</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
