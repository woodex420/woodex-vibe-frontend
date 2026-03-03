import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Search, ShoppingCart, User, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [officeFurnitureOpen, setOfficeFurnitureOpen] = useState(false);
  const [homeFurnitureOpen, setHomeFurnitureOpen] = useState(false);

  const officeFurnitureSections = [
    {
      heading: "Office Chairs",
      items: [
        { name: "Executive Chairs", path: "/shop?category=executive" },
        { name: "Manager Chairs", path: "/shop?category=manager" },
        { name: "Staff Chairs", path: "/shop?category=staff" },
        { name: "Visitor Chairs", path: "/shop?category=visitor" },
      ],
    },
    {
      heading: "Office Tables",
      items: [
        { name: "CEO Tables", path: "/shop?category=ceo-tables" },
        { name: "Executive Tables", path: "/shop?category=executive-tables" },
        { name: "Manager Tables", path: "/shop?category=manager-tables" },
      ],
    },
    {
      heading: "More Office Furniture",
      items: [
        { name: "Workstations", path: "/shop?category=workstations" },
        { name: "Meeting & Conference Tables", path: "/shop?category=meeting" },
        { name: "Office Sofas", path: "/shop?category=sofas" },
        { name: "Reception Desks", path: "/shop?category=reception" },
        { name: "Storage & Filing", path: "/shop?category=storage" },
      ],
    },
  ];

  const homeFurnitureSections = [
    {
      heading: "Bedroom",
      items: [
        { name: "Bed Sets", path: "/shop?category=bedroom" },
        { name: "Bedside Tables", path: "/shop?category=bedroom" },
        { name: "Dressing Tables", path: "/shop?category=bedroom" },
        { name: "Mirrors", path: "/shop?category=bedroom" },
        { name: "Bench & Settee", path: "/shop?category=bedroom" },
      ],
    },
    {
      heading: "Living",
      items: [
        { name: "Home Sofa", path: "/shop?category=living" },
        { name: "Center & Side Tables", path: "/shop?category=living" },
        { name: "Coffee Tables", path: "/shop?category=living" },
        { name: "Console Tables", path: "/shop?category=living" },
        { name: "TV Units", path: "/shop?category=living" },
      ],
    },
    {
      heading: "Dining",
      items: [
        { name: "Dining Sets", path: "/shop?category=dining" },
        { name: "Dining Chairs", path: "/shop?category=dining" },
        { name: "Dining Tables", path: "/shop?category=dining" },
      ],
    },
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
      {/* Top Utility Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center gap-0 text-xs text-muted-foreground">
              <Link to="/showrooms" className="hover:text-foreground transition-colors px-2 first:pl-0">
                Showrooms
              </Link>
              <span className="text-border">|</span>
              <Link to="/materials" className="hover:text-foreground transition-colors px-2">
                Material and Colors
              </Link>
              <span className="text-border">|</span>
              <Link to="/warranty" className="hover:text-foreground transition-colors px-2">
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-baseline">
              <span className="text-3xl md:text-4xl font-black tracking-tight text-foreground" style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}>
                WOOD
              </span>
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground" style={{ fontFamily: "'Arial', 'Helvetica Neue', sans-serif" }}>
                EX
              </span>
              <span className="text-[8px] align-super ml-0.5 text-muted-foreground">®</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full">
              {/* Home */}
              <Link to="/" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Home
              </Link>

              {/* Office Furniture Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-5 h-11 rounded-none bg-transparent hover:bg-muted transition-colors data-[state=open]:bg-muted border-r border-border">
                      Office Furniture
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[520px] p-4 bg-background border border-border shadow-lg">
                        <Link to="/shop">
                          <div className="block select-none px-3 py-2.5 text-sm font-semibold leading-none no-underline outline-none transition-colors hover:bg-muted mb-2">
                            All Office Furniture
                          </div>
                        </Link>
                        <div className="grid grid-cols-3 gap-4">
                          {officeFurnitureSections.map((section) => (
                            <div key={section.heading}>
                              <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">
                                {section.heading}
                              </p>
                              {section.items.map((item) => (
                                <Link key={item.path + item.name} to={item.path}>
                                  <div className="block select-none px-3 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted">
                                    {item.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Home Furniture Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-5 h-11 rounded-none bg-transparent hover:bg-muted transition-colors data-[state=open]:bg-muted border-r border-border">
                      Home Furniture
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[420px] p-4 bg-background border border-border shadow-lg">
                        <Link to="/shop?category=bedroom">
                          <div className="block select-none px-3 py-2.5 text-sm font-semibold leading-none no-underline outline-none transition-colors hover:bg-muted mb-2">
                            All Home Furniture
                          </div>
                        </Link>
                        <div className="grid grid-cols-3 gap-4">
                          {homeFurnitureSections.map((section) => (
                            <div key={section.heading}>
                              <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">
                                {section.heading}
                              </p>
                              {section.items.map((item) => (
                                <Link key={item.path + item.name} to={item.path}>
                                  <div className="block select-none px-3 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted">
                                    {item.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Series */}
              <Link to="/series" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Series
              </Link>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-5 h-11 rounded-none bg-transparent hover:bg-muted transition-colors data-[state=open]:bg-muted border-r border-border">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[280px] p-3 bg-background border border-border shadow-lg">
                        <div className="grid gap-0.5">
                          {servicesItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                              <div className="block select-none px-3 py-2.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted">
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Projects */}
              <Link to="/projects" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Projects
              </Link>

              {/* About Us */}
              <Link to="/about" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                About Us
              </Link>

              {/* Contact Us */}
              <Link to="/contact" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Contact Us
              </Link>

              {/* Blog */}
              <Link to="/blog" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Blog
              </Link>
            </div>

            {/* Right Side - E-Quotation */}
            <div className="hidden lg:flex items-center gap-0 ml-auto h-full">
              <Link to="/e-quotation" className="text-sm font-medium px-5 h-11 flex items-center gap-2 border-l border-border hover:bg-muted transition-colors">
                <FileText className="h-4 w-4" />
                E-Quotation
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <span className="text-sm font-bold">Menu</span>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col gap-4 mt-8">
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                      Home
                    </Link>

                    {/* Office Furniture Mobile */}
                    <Collapsible open={officeFurnitureOpen} onOpenChange={setOfficeFurnitureOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-accent transition-colors">
                        Office Furniture
                        <ChevronDown className={`h-4 w-4 transition-transform ${officeFurnitureOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-2 mt-2 ml-4">
                          <Link to="/shop" onClick={() => { setIsOpen(false); setOfficeFurnitureOpen(false); }} className="text-base font-semibold hover:text-accent transition-colors">
                            All Office Furniture
                          </Link>
                          {officeFurnitureSections.map((section) => (
                            <div key={section.heading} className="mt-1">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">{section.heading}</p>
                              {section.items.map((item) => (
                                <Link key={item.path + item.name} to={item.path} onClick={() => { setIsOpen(false); setOfficeFurnitureOpen(false); }} className="block text-sm py-1 hover:text-accent transition-colors">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Home Furniture Mobile */}
                    <Collapsible open={homeFurnitureOpen} onOpenChange={setHomeFurnitureOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-accent transition-colors">
                        Home Furniture
                        <ChevronDown className={`h-4 w-4 transition-transform ${homeFurnitureOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-2 mt-2 ml-4">
                          {homeFurnitureSections.map((section) => (
                            <div key={section.heading} className="mt-1">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">{section.heading}</p>
                              {section.items.map((item) => (
                                <Link key={item.path + item.name} to={item.path} onClick={() => { setIsOpen(false); setHomeFurnitureOpen(false); }} className="block text-sm py-1 hover:text-accent transition-colors">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Link to="/series" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                      Series
                    </Link>

                    <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-accent transition-colors">
                        Services
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-3 mt-2 ml-4">
                          {servicesItems.map((item) => (
                            <Link key={item.path} to={item.path} onClick={() => { setIsOpen(false); setServicesOpen(false); }} className="text-base hover:text-accent transition-colors">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Link to="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                      Projects
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                      About Us
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                      Contact Us
                    </Link>
                    <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                      Blog
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
