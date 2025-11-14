import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import RoomPackages from "./pages/RoomPackages";
import VirtualShowroom from "./pages/VirtualShowroom";
import Series from "./pages/Series";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import DeliveryInstallation from "./pages/DeliveryInstallation";
import FactoryDirect from "./pages/FactoryDirect";
import ProjectQuoting from "./pages/ProjectQuoting";
import CustomDesign from "./pages/CustomDesign";
import SpacePlanning from "./pages/SpacePlanning";
import B2B from "./pages/B2B";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EQuotation from "./pages/EQuotation";
import Materials from "./pages/Materials";
import Showrooms from "./pages/Showrooms";
import Warranty from "./pages/Warranty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/room-packages" element={<RoomPackages />} />
          <Route path="/virtual-showroom" element={<VirtualShowroom />} />
          <Route path="/series" element={<Series />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/delivery-installation" element={<DeliveryInstallation />} />
          <Route path="/services/factory-direct" element={<FactoryDirect />} />
          <Route path="/services/project-quoting" element={<ProjectQuoting />} />
          <Route path="/services/custom-design" element={<CustomDesign />} />
          <Route path="/services/space-planning" element={<SpacePlanning />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/e-quotation" element={<EQuotation />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/showrooms" element={<Showrooms />} />
          <Route path="/warranty" element={<Warranty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
