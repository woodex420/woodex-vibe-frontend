import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Search, ShoppingCart, User, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Series", path: "/series" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesItems = [
    { name: "All Services", path: "/services" },
    { name: "Delivery & Installation", path: "/services/delivery-installation" },
    { name: "Factory Direct", path: "/services/factory-direct" },
    { name: "Project Based Quoting", path: "/services/project-quoting" },
    { name: "Custom Design", path: "/services/custom-design" },
    { name: "Space Planning", path: "/services/space-planning" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <Link to="/showrooms" className="hover:text-foreground transition-colors hover:underline">
                Showrooms
              </Link>
              <span className="text-border">|</span>
              <Link to="/warranty" className="hover:text-foreground transition-colors hover:underline">
                Warranty
              </Link>
              <span className="text-border">|</span>
              <Link to="/services/custom-design" className="hover:text-foreground transition-colors hover:underline">
                Designing
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Search className="h-4 w-4" />
              <User className="h-4 w-4" />
              <ShoppingCart className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight underline decoration-2 underline-offset-4">
              WOODEX
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/series"
                className="text-sm font-medium px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                Series
              </Link>

              <Link
                to="/projects"
                className="text-sm font-medium px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                Projects
              </Link>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-4 py-2 border border-border rounded hover:bg-muted transition-colors bg-transparent h-auto">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[280px] p-3">
                        <div className="grid gap-1">
                          {servicesItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                              <div className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted">
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/about"
                className="text-sm font-medium px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-sm font-medium px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                Contact
              </Link>

              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <Link to="/services/custom-design" className="hidden lg:flex items-center gap-2 text-sm font-medium">
                <span className="text-orange-500">🎨</span>
                Customization
              </Link>
              <Link to="/e-quotation">
                <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 border-foreground">
                  <FileText className="h-4 w-4" />
                  E-Quotation
                </Button>
              </Link>
              <div className="hidden lg:flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </div>

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
                    
                    {/* Services Collapsible */}
                    <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-accent transition-colors">
                        Services
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-3 mt-2 ml-4">
                          {servicesItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                              className="text-base font-medium hover:text-accent transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Link to="/virtual-showroom" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">
                      Virtual Showroom
                    </Link>
                    <Link to="/b2b" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">
                      B2B
                    </Link>
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
