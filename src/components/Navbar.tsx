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
    { name: "Room Packages", path: "/room-packages" },
    { name: "Virtual Showroom", path: "/virtual-showroom" },
    { name: "Series", path: "/series" },
    { name: "Projects", path: "/projects" },
    { name: "B2B", path: "/b2b" },
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
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <Link to="/showrooms" className="hover:text-foreground transition-colors">
                Showrooms
              </Link>
              <Link to="/warranty" className="hover:text-foreground transition-colors">
                Warranty
              </Link>
              <Link to="/services/custom-design" className="hover:text-foreground transition-colors">
                Designing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span>English</span>
              <span>PKR</span>
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
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium hover:text-accent transition-colors bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-2">
                          {servicesItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                              <div className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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

              {navItems.slice(6).map((item) => (
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
                    {navItems.slice(0, 6).map((item) => (
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

                    {navItems.slice(6).map((item) => (
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
