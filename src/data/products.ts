// Executive Chair Images
import ambassadorExecutiveImg from "@/assets/products/ambassador-executive.jpg";
import crownExecutiveImg from "@/assets/products/crown-executive.jpg";
import eliteExecutiveImg from "@/assets/products/elite-executive.jpg";
import imperialExecutiveImg from "@/assets/products/imperial-executive.jpg";
import milanoExecutiveImg from "@/assets/products/milano-executive.jpg";
import regalExecutiveImg from "@/assets/products/regal-executive.jpg";
import ascotExecutiveImg from "@/assets/products/ascot-executive.jpg";
import diamondExecutiveImg from "@/assets/products/diamond-executive.jpg";
import infinityExecutiveImg from "@/assets/products/infinity-executive.jpg";
import nexaExecutiveImg from "@/assets/products/nexa-executive.jpg";
import phoenixExecutiveImg from "@/assets/products/phoenix-executive.jpg";
import blackPearlExecutiveImg from "@/assets/products/black-pearl-executive.jpg";

// Manager Chair Images
import atlasManagerImg from "@/assets/products/atlas-manager.jpg";
import titanProManagerImg from "@/assets/products/titan-pro-manager.jpg";
import onyxPrestigeManagerImg from "@/assets/products/onyx-prestige-manager.jpg";
import eliteCommandManagerImg from "@/assets/products/elite-command-manager.jpg";
import keystoneManagerImg from "@/assets/products/keystone-manager.jpg";
import nexusCommandManagerImg from "@/assets/products/nexus-command-manager.jpg";
import spotWorkManagerImg from "@/assets/products/spot-work-manager.jpg";
import formaErgofitManagerImg from "@/assets/products/forma-ergofit-manager.jpg";
import primePerformanceManagerImg from "@/assets/products/prime-performance-manager.jpg";
import titanProV2ManagerImg from "@/assets/products/titan-pro-v2-manager.jpg";
import titanProChromeManagerImg from "@/assets/products/titan-pro-chrome-manager.jpg";
import apexFlowManagerImg from "@/assets/products/apex-flow-manager.jpg";
import matrixFlowManagerImg from "@/assets/products/matrix-flow-manager.jpg";
import reliefProManagerImg from "@/assets/products/relief-pro-manager.jpg";
import gripBackManagerImg from "@/assets/products/grip-back-manager.jpg";
import boltQuickstartManagerImg from "@/assets/products/bolt-quickstart-manager.jpg";
import quickstartManagerImg from "@/assets/products/quickstart-manager.jpg";

// Staff Chair Images
import gridStaffImg from "@/assets/products/grid-staff.jpg";
import liteCompactStaffImg from "@/assets/products/lite-compact-staff.jpg";
import maxStaffImg from "@/assets/products/max-staff.jpg";
import paceStaffImg from "@/assets/products/pace-staff.jpg";
import premiumStaffImg from "@/assets/products/premium-staff.jpg";
import rockSolidStaffImg from "@/assets/products/rock-solid-staff.jpg";
import signalStaffImg from "@/assets/products/signal-staff.jpg";
import supportStaffImg from "@/assets/products/support-staff.jpg";
import taskMasterStaffImg from "@/assets/products/task-master-staff.jpg";
import teamStaffImg from "@/assets/products/team-staff.jpg";
import unitStaffImg from "@/assets/products/unit-staff.jpg";
import waveComfortStaffImg from "@/assets/products/wave-comfort-staff.jpg";

// Visitor Chair Images
import backSupportVisitorImg from "@/assets/products/back-support-visitor.jpg";
import balanceVisitorImg from "@/assets/products/balance-visitor.jpg";
import clarityManagerVisitorImg from "@/assets/products/clarity-manager-visitor.jpg";
import curveVisitorImg from "@/assets/products/curve-visitor.jpg";
import quadConferenceVisitorImg from "@/assets/products/quad-conference-visitor.jpg";
import starVisitorImg from "@/assets/products/star-visitor.jpg";
import edgeExecutiveVisitorImg from "@/assets/products/edge-executive-visitor.jpg";
import gridConferenceVisitorImg from "@/assets/products/grid-conference-visitor.jpg";
import lineVisitorImg from "@/assets/products/line-visitor.jpg";
import welcomeVisitorImg from "@/assets/products/welcome-visitor.jpg";
import wingConferenceVisitorImg from "@/assets/products/wing-conference-visitor.png";
import primeManagerVisitorImg from "@/assets/products/prime-manager-visitor.jpg";
import comfortConferenceVisitorImg from "@/assets/products/comfort-conference-visitor.jpg";
import swanExecutiveVisitorImg from "@/assets/products/swan-executive-visitor.jpg";
import crownExecutiveVisitorImg from "@/assets/products/crown-executive-visitor.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  image: string;
  description?: string;
  features?: Record<string, string>;
  badge?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image: string;
}

// Executive Chairs - Premium PU Leather
export const executiveChairs: Product[] = [
  {
    id: "exec-ambassador",
    name: "Ambassador Executive Chair",
    category: "Executive Chairs",
    price: 82000,
    image: ambassadorExecutiveImg,
    badge: "Premium",
    featured: true,
    description: "The flagship Ambassador Executive Chair represents the pinnacle of executive seating. Designed for CEOs and senior leaders, it combines premium PU leather upholstery with an advanced reclining mechanism that converts into a full recliner. The high-density molded foam and aluminum base ensure all-day comfort during 10+ hour workdays.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Convert into Recliner when open",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-crown",
    name: "Crown Executive Chair",
    category: "Executive Chairs",
    price: 48000,
    image: crownExecutiveImg,
    description: "The Crown Executive Chair delivers commanding presence with its high-back ergonomic design and premium PU leather. Featuring a reclining back lock for personalized comfort, this chair is ideal for directors and senior managers who demand both style and support throughout the workday.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-elite",
    name: "Elite Executive Chair",
    category: "Executive Chairs",
    price: 75000,
    image: eliteExecutiveImg,
    badge: "Best Seller",
    featured: true,
    description: "Our best-selling Elite Executive Chair combines Italian-inspired design with advanced ergonomic engineering. The full recliner mechanism, premium PU leather, and high-density foam create an unmatched seating experience for professionals who spend 8+ hours at their desk. Trusted by 500+ corporate offices across Pakistan.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Convert into Recliner when open",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-imperial",
    name: "Imperial Executive Chair",
    category: "Executive Chairs",
    price: 65000,
    image: imperialExecutiveImg,
    description: "The Imperial Executive Chair exudes authority with its commanding profile and superior build quality. Engineered for long working hours, it features premium PU leather, high-density plywood frame, and a reliable reclining back lock mechanism. Perfect for executive offices that demand both durability and elegance.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-milano",
    name: "Milano Luxury Executive Chair",
    category: "Executive Chairs",
    price: 65000,
    image: milanoExecutiveImg,
    badge: "Luxury",
    description: "Inspired by Italian furniture craftsmanship, the Milano Luxury Executive Chair brings European sophistication to your office. The premium PU leather upholstery is hand-selected for its rich texture, while the ergonomic back support and aluminum base deliver comfort that lasts all day. A statement piece for discerning executives.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-regal",
    name: "Regal Executive Chair",
    category: "Executive Chairs",
    price: 50000,
    image: regalExecutiveImg,
    description: "The Regal Executive Chair offers premium executive comfort at an accessible price point. With its classic high-back design, premium PU leather, and robust aluminum base, it delivers the professional look and ergonomic support expected in boardrooms and executive suites across Pakistan.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-ascot",
    name: "Ascot Executive Chair",
    category: "Executive Chairs",
    price: 42000,
    image: ascotExecutiveImg,
    description: "The Ascot Executive Chair brings refined British-inspired design to the modern office. A smart entry point into executive seating, it features premium PU leather, high-density foam, and the same robust build quality found in our premium range. Ideal for managers stepping into leadership roles.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-diamond",
    name: "Diamond Executive Chair",
    category: "Executive Chairs",
    price: 42000,
    image: diamondExecutiveImg,
    description: "The Diamond Executive Chair features a distinctive quilted PU leather design that adds visual depth and luxury to any office. The ergonomic back support and high-density foam ensure comfort during extended meetings and work sessions, while the aluminum base provides lasting durability.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-infinity",
    name: "Infinity Executive Chair",
    category: "Executive Chairs",
    price: 45000,
    image: infinityExecutiveImg,
    description: "The Infinity Executive Chair lives up to its name with limitless comfort features. The full recliner mechanism lets you transition seamlessly from focused work to relaxation. Premium PU leather and high-density molded foam create a seating experience designed for Pakistan's hardest-working professionals.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Convert into Recliner when open",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-nexa",
    name: "Nexa Executive Chair",
    category: "Executive Chairs",
    price: 52000,
    image: nexaExecutiveImg,
    description: "The Nexa Executive Chair bridges contemporary design with executive tradition. Its sleek profile and premium PU leather upholstery make it a modern choice for progressive leaders. The ergonomic back support and reclining lock ensure you stay comfortable and productive throughout the day.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-phoenix",
    name: "Phoenix Executive Chair",
    category: "Executive Chairs",
    price: 52000,
    image: phoenixExecutiveImg,
    description: "Rise to new heights with the Phoenix Executive Chair. Engineered for professionals who demand resilience and style, it features premium PU leather that ages beautifully, high-density foam that maintains its shape, and an aluminum base built to last. A dependable choice for 8-12 hour workdays.",
    features: {
      Design: "Executive Ergonomic Back Support",
      Material: "Premium PU Leather Upholstery",
      Foam: "High-Density PU Molded Foam",
      Frame: "High-Density Plywood",
      Rotation: "360° rotation for easy movement",
      Recliner: "Reclining Back Lock",
      Base: "Aluminum Base",
      Wheel: "360-degree swivel wheel",
    },
  },
  {
    id: "exec-black-pearl",
    name: "Black Pearl Executive Chair",
    category: "Executive Chairs",
    price: 35000,
    image: blackPearlExecutiveImg,
    description: "The Black Pearl Executive Chair combines executive presence with breathable mesh technology. Featuring a 4D armrest, 2D adjustable headrest, and advanced tilting mechanism, it's designed for executives who prefer a cooler, more modern seating experience — perfect for Pakistan's warm climate.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
];

// Manager Chairs - Ergonomic Mesh
export const managerChairs: Product[] = [
  {
    id: "mgr-atlas",
    name: "Atlas Manager Chair",
    category: "Manager Chairs",
    price: 65000,
    image: atlasManagerImg,
    badge: "Top Rated",
    featured: true,
    description: "The Atlas Manager Chair is a perfect blend of style and ergonomic comfort, featuring a high backrest for superior posture support. Its breathable mesh fabric keeps you cool during long work sessions, while the 4D armrests and 2D headrest provide fully customizable support for professionals who spend 8+ hours at their desk.",
    features: {
      "Lumbar Support": "No",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-titan-pro",
    name: "Titan Pro Manager Chair",
    category: "Manager Chairs",
    price: 39000,
    image: titanProManagerImg,
    description: "The Titan Pro Manager Chair delivers heavyweight performance at a mid-range price. Built with a sturdy chrome base, breathable mesh fabric, and integrated lumbar support, it's engineered for managers who need reliable, all-day comfort without the premium price tag. A smart investment for growing teams.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-onyx-prestige",
    name: "Onyx Prestige Manager Chair",
    category: "Manager Chairs",
    price: 65000,
    image: onyxPrestigeManagerImg,
    badge: "Premium",
    description: "The Onyx Prestige Manager Chair is the definitive choice for managers who refuse to compromise. Premium breathable mesh, advanced lumbar support, and 4D armrests create an ergonomic cocoon that supports you through the most demanding workdays. Its sleek design commands respect in any office setting.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-elite-command",
    name: "Elite Command Manager Chair",
    category: "Manager Chairs",
    price: 75000,
    image: eliteCommandManagerImg,
    badge: "Best Seller",
    featured: true,
    description: "Our best-selling manager chair, the Elite Command sets the standard for ergonomic seating in Pakistan. Its distinctive white nylon base, breathable mesh back, and full lumbar support system have made it the go-to choice for IT companies, software houses, and modern corporate offices. Rated for 12-hour daily use.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "White Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-keystone",
    name: "Keystone Manager Chair",
    category: "Manager Chairs",
    price: 35000,
    image: keystoneManagerImg,
    description: "The Keystone Manager Chair is the foundation of ergonomic office seating at an accessible price. With integrated lumbar support, breathable mesh, and a polished chrome base, it provides essential comfort features without unnecessary extras — making it perfect for startups and small business offices.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-nexus-command",
    name: "Nexus Command Manager Chair",
    category: "Manager Chairs",
    price: 36000,
    image: nexusCommandManagerImg,
    description: "The Nexus Command Manager Chair connects form and function with its modern design language. Breathable mesh keeps you cool, integrated lumbar support protects your lower back, and the tilting mechanism lets you recline during brief breaks. A reliable choice for team leads and project managers.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-spot-work",
    name: "Spot Work Manager Chair",
    category: "Manager Chairs",
    price: 27000,
    image: spotWorkManagerImg,
    description: "The Spot Work Manager Chair is designed for flexible, task-oriented workspaces. At our most competitive manager price point, it delivers essential ergonomic features — lumbar support, mesh breathability, and 4D armrests — making it ideal for co-working spaces, hot desks, and agile office environments.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-forma-ergofit",
    name: "Forma ErgoFit Manager Chair",
    category: "Manager Chairs",
    price: 29000,
    image: formaErgofitManagerImg,
    description: "The Forma ErgoFit Manager Chair prioritizes ergonomic design with a form-fitting mesh back that naturally conforms to your spine. While it doesn't include separate lumbar support, the ergonomic curvature of the backrest provides excellent posture alignment for medium to long work sessions.",
    features: {
      "Lumbar Support": "No",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-prime-performance",
    name: "Prime Performance Manager Chair",
    category: "Manager Chairs",
    price: 44000,
    image: primePerformanceManagerImg,
    description: "The Prime Performance Manager Chair is built for professionals who push through demanding schedules. Full lumbar support, breathable mesh, and a chrome base combine to deliver a chair that performs as hard as you do. Popular with software developers, architects, and financial analysts across Pakistan.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-titan-pro-v2",
    name: "Titan Pro Manager Chair V2",
    category: "Manager Chairs",
    price: 32000,
    image: titanProV2ManagerImg,
    description: "The Titan Pro V2 is the refined evolution of our popular Titan Pro series. Updated with improved mesh fabric and a sleeker profile, it offers excellent value for offices furnishing multiple manager workstations. The lightweight nylon base keeps it agile while maintaining structural integrity.",
    features: {
      "Lumbar Support": "No",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-titan-pro-chrome",
    name: "Titan Pro Chrome Manager Chair",
    category: "Manager Chairs",
    price: 38000,
    image: titanProChromeManagerImg,
    description: "The Titan Pro Chrome elevates the Titan series with a premium polished chrome base that adds a professional finish to any office. Combined with integrated lumbar support and breathable mesh, it strikes the perfect balance between aesthetic appeal and ergonomic functionality.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-apex-flow",
    name: "Apex Flow Manager Chair",
    category: "Manager Chairs",
    price: 38000,
    image: apexFlowManagerImg,
    description: "The Apex Flow Manager Chair features a fluid, modern design that promotes natural movement throughout the workday. The breathable mesh back and integrated lumbar support encourage healthy posture, while the chrome base and 4D armrests provide the adjustability demanded by today's dynamic workplace.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-matrix-flow",
    name: "Matrix Flow Manager Chair",
    category: "Manager Chairs",
    price: 38000,
    image: matrixFlowManagerImg,
    description: "The Matrix Flow Manager Chair features an innovative grid-pattern mesh that maximizes airflow — a critical feature for Pakistan's warm office environments. With lumbar support, chrome base, and 4D armrests, it delivers premium comfort for managers who value breathability and modern aesthetics.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-relief-pro",
    name: "Relief Pro Manager Chair",
    category: "Manager Chairs",
    price: 35000,
    image: reliefProManagerImg,
    description: "Specifically designed for professionals dealing with back discomfort, the Relief Pro Manager Chair features enhanced lumbar support and an ergonomic mesh back that promotes spinal alignment. The chrome base and hydraulic gas lifter ensure smooth, reliable height adjustment for users of all sizes.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-grip-back",
    name: "Grip Back Manager Chair",
    category: "Manager Chairs",
    price: 55000,
    image: gripBackManagerImg,
    badge: "Ergonomic",
    description: "The Grip Back Manager Chair features a uniquely contoured backrest that grips your spine in all the right places. The premium ergonomic design distributes weight evenly, reducing pressure points and fatigue. Recommended by workplace ergonomic consultants for professionals working 10+ hours daily.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-bolt-quickstart",
    name: "Bolt QuickStart Manager Chair",
    category: "Manager Chairs",
    price: 35000,
    image: boltQuickstartManagerImg,
    description: "Need ergonomic seating fast? The Bolt QuickStart Manager Chair ships quickly and sets up in minutes. Despite its rapid availability, it doesn't compromise on quality — featuring full lumbar support, breathable mesh, and a chrome base that meets the demands of busy office environments.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "mgr-quickstart",
    name: "QuickStart Manager Chair",
    category: "Manager Chairs",
    price: 49000,
    image: quickstartManagerImg,
    description: "The QuickStart Manager Chair is the premium sibling in our QuickStart lineup. Its upgraded nylon base, enhanced lumbar support, and refined mesh back make it a step above, ideal for managers who want fast delivery without sacrificing the comfort and build quality of a premium ergonomic chair.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
];

// Staff Chairs - Mesh Ergonomic
export const staffChairs: Product[] = [
  {
    id: "staff-grid",
    name: "Grid Staff Chair",
    category: "Staff Chairs",
    price: 18500,
    image: gridStaffImg,
    description: "The Grid Staff Chair features a distinctive grid-pattern mesh back that provides excellent ventilation for staff working in warm office environments. With 4D armrests and a tilting mechanism, it offers premium features at an everyday price point — ideal for open-plan offices across Pakistan.",
    features: {
      "Lumbar Support": "No",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Black Nylon Base with Nylon Caster Wheels",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-lite-compact",
    name: "Lite Compact Staff Chair",
    category: "Staff Chairs",
    price: 11500,
    image: liteCompactStaffImg,
    badge: "Budget Friendly",
    description: "The Lite Compact Staff Chair packs essential ergonomic features into a space-efficient, budget-friendly package. With built-in lumbar support and a chrome base, it proves that comfort doesn't have to break the bank. Perfect for call centers, BPOs, and offices furnishing large teams on a budget.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-max",
    name: "Max Staff Chair",
    category: "Staff Chairs",
    price: 16500,
    image: maxStaffImg,
    description: "The Max Staff Chair maximizes comfort for everyday office work. Its breathable mesh back and integrated lumbar support keep staff comfortable through full shifts, while the chrome base adds a professional touch. An excellent choice for general office seating across departments.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-pace",
    name: "Pace Staff Chair",
    category: "Staff Chairs",
    price: 18000,
    image: paceStaffImg,
    description: "The Pace Staff Chair is built for busy office environments where staff move between tasks throughout the day. Its responsive tilting mechanism, lumbar support, and smooth-rolling chrome base help you keep up with the pace of modern work. Trusted by accounting firms and consulting offices.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-premium",
    name: "Premium Staff Chair",
    category: "Staff Chairs",
    price: 19500,
    image: premiumStaffImg,
    badge: "Best Value",
    featured: true,
    description: "The Premium Staff Chair delivers the best value in our staff range. Every feature — lumbar support, breathable mesh, 4D armrests, chrome base — punches above its price class. It's why this is our most recommended chair for offices equipping 20+ workstations with quality seating.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-rock-solid",
    name: "Rock Solid Staff Chair",
    category: "Staff Chairs",
    price: 16500,
    image: rockSolidStaffImg,
    description: "Built to withstand the demands of multi-shift office environments, the Rock Solid Staff Chair features reinforced construction and durable mesh fabric. Its lumbar support and sturdy chrome base make it a dependable choice for 24/7 operations, call centers, and high-traffic offices.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-signal",
    name: "Signal Staff Chair",
    category: "Staff Chairs",
    price: 16500,
    image: signalStaffImg,
    description: "The Signal Staff Chair signals your commitment to employee well-being. Its clean, modern design with breathable mesh and lumbar support creates a comfortable workspace that boosts productivity. The chrome base and 4D armrests make it a versatile choice for any professional setting.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-support",
    name: "Support Staff Chair",
    category: "Staff Chairs",
    price: 25000,
    image: supportStaffImg,
    description: "The Support Staff Chair is our enhanced staff option, featuring upgraded ergonomic support for employees who spend long hours at their desks. The combination of lumbar support, breathable mesh, and 4D armrests makes it a favorite for IT departments and design studios across Pakistan.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-task-master",
    name: "Task Master Staff Chair",
    category: "Staff Chairs",
    price: 39000,
    image: taskMasterStaffImg,
    badge: "Premium",
    description: "The Task Master Staff Chair bridges the gap between staff and manager seating. Its premium build quality, advanced lumbar support, and responsive tilting mechanism make it the ideal choice for team leaders, senior staff, and professionals who need manager-level comfort at a staff-level classification.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-team",
    name: "Team Staff Chair",
    category: "Staff Chairs",
    price: 18500,
    image: teamStaffImg,
    description: "The Team Staff Chair is designed for collaborative work environments where consistency matters. When you outfit your entire team with the same comfortable, ergonomic seating, productivity rises. Lumbar support, mesh breathability, and a sleek profile make it a team favorite.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-unit",
    name: "Unit Staff Chair",
    category: "Staff Chairs",
    price: 19500,
    image: unitStaffImg,
    description: "The Unit Staff Chair is the building block of comfortable office seating. Designed to be ordered in volume for entire departments, each unit delivers consistent quality with lumbar support, breathable mesh, and 4D armrests. Perfect for standardizing seating across your organization.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
  {
    id: "staff-wave-comfort",
    name: "Wave Comfort Staff Chair",
    category: "Staff Chairs",
    price: 19500,
    image: waveComfortStaffImg,
    description: "The Wave Comfort Staff Chair features a wave-contoured backrest that follows the natural curve of your spine. This design, combined with lumbar support and breathable mesh, creates a seating experience that reduces fatigue and promotes better posture — essential for staff working full 8-hour shifts.",
    features: {
      "Lumbar Support": "Yes",
      Material: "Breathable Mesh Fabric",
      Headrest: "2D Headrest adjustable up and down",
      "Arm Rest": "4D Arm Rest",
      Rotation: "360° rotation for easy movement",
      Base: "Chrome",
      Mechanism: "Tilting Mechanism Hydraulic Gas Lifter",
    },
  },
];

// Visitor Chairs
export const visitorChairs: Product[] = [
  {
    id: "visitor-back-support",
    name: "Back Support Visitor Chair",
    category: "Visitor Chairs",
    price: 15500,
    image: backSupportVisitorImg,
    description: "The Back Support Visitor Chair ensures your guests stay comfortable during meetings and consultations. Its mesh back and foam seat provide ergonomic support even for extended visits, while the fixed PP armrests and sturdy MS bended legs offer lasting durability in high-traffic reception areas.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed PP Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-balance",
    name: "Balance Visitor Chair",
    category: "Visitor Chairs",
    price: 12500,
    image: balanceVisitorImg,
    description: "The Balance Visitor Chair offers a harmonious blend of comfort and practicality for reception areas and meeting rooms. Its balanced proportions and mesh-and-foam construction keep visitors comfortable, while the sturdy MS bended legs ensure stability even with constant daily use.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed PP Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-clarity-manager",
    name: "Clarity Manager Visitor Chair",
    category: "Visitor Chairs",
    price: 14500,
    image: clarityManagerVisitorImg,
    description: "The Clarity Manager Visitor Chair brings a touch of managerial sophistication to visitor seating. Designed to pair with manager-level office furniture, it features a refined mesh back and foam seat that creates a cohesive, professional aesthetic in meeting rooms and executive waiting areas.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed PP Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-curve",
    name: "Curve Visitor Chair",
    category: "Visitor Chairs",
    price: 11500,
    image: curveVisitorImg,
    badge: "Popular",
    description: "Our most popular visitor chair, the Curve features a graceful curved design that's both welcoming and comfortable. Its accessible price and durable construction make it the go-to choice for offices outfitting large reception areas, training rooms, and multi-purpose conference spaces across Pakistan.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed PP Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-quad-conference",
    name: "QUAD Conference Visitor Chair",
    category: "Visitor Chairs",
    price: 10500,
    image: quadConferenceVisitorImg,
    description: "The QUAD Conference Visitor Chair is purpose-built for meeting rooms and conference spaces. Its compact design allows tight seating arrangements around conference tables, while the mesh back and foam seat keep attendees comfortable through long board meetings and training sessions.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed PP Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-star",
    name: "Star Visitor Chair",
    category: "Visitor Chairs",
    price: 16500,
    image: starVisitorImg,
    description: "The Star Visitor Chair stands out with its premium build quality and refined aesthetics. Designed for offices that want to make a lasting first impression on clients and guests, it features superior mesh-and-foam construction and sturdy MS bended legs that handle years of daily use.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed PP Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-edge-executive",
    name: "Edge Executive Visitor Chair",
    category: "Visitor Chairs",
    price: 25000,
    image: edgeExecutiveVisitorImg,
    badge: "Executive",
    description: "The Edge Executive Visitor Chair elevates guest seating to executive standards. Designed to complement our executive chair range, it features premium mesh and foam construction with fixed armrests and robust MS legs. Perfect for CEO offices, boardrooms, and VIP reception areas.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-grid-conference",
    name: "Grid Conference Visitor Chair",
    category: "Visitor Chairs",
    price: 28500,
    image: gridConferenceVisitorImg,
    description: "The Grid Conference Visitor Chair features a distinctive grid-pattern mesh back that adds visual interest to any conference room. Its premium construction and fixed armrests make it suitable for executive meeting rooms where aesthetics and comfort must coexist at the highest level.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-line",
    name: "Line Visitor Chair",
    category: "Visitor Chairs",
    price: 11500,
    image: lineVisitorImg,
    badge: "Budget Friendly",
    description: "The Line Visitor Chair delivers clean, modern design at our most competitive visitor price. Its streamlined silhouette and reliable mesh-and-foam construction make it the smart choice for offices that need large quantities of comfortable, presentable guest seating without overspending.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-welcome",
    name: "Welcome Visitor Chair",
    category: "Visitor Chairs",
    price: 14500,
    image: welcomeVisitorImg,
    description: "True to its name, the Welcome Visitor Chair creates a warm first impression for every guest who enters your office. Its comfortable mesh back, foam seat, and professional design make visitors feel valued — whether they're clients, partners, or interview candidates.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-wing-conference",
    name: "WING Conference Visitor Chair",
    category: "Visitor Chairs",
    price: 15000,
    image: wingConferenceVisitorImg,
    description: "The WING Conference Visitor Chair features a distinctive winged backrest design that provides superior shoulder support during long meetings. Its unique aesthetic makes conference rooms look polished and contemporary, while the foam seat keeps attendees comfortable throughout extended sessions.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-prime-manager",
    name: "Prime Manager Visitor Chair",
    category: "Visitor Chairs",
    price: 28500,
    image: primeManagerVisitorImg,
    description: "The Prime Manager Visitor Chair is a premium guest chair designed to match our manager chair range. Its refined proportions, mesh-and-foam construction, and professional finish make it the ideal companion for manager offices and mid-level executive meeting rooms.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-comfort-conference",
    name: "Comfort Conference Visitor Chair",
    category: "Visitor Chairs",
    price: 8500,
    image: comfortConferenceVisitorImg,
    badge: "Best Value",
    featured: true,
    description: "The Comfort Conference Visitor Chair is our most affordable seating solution without compromising on comfort. Starting at just Rs. 8,500, it's the go-to choice for training rooms, seminar halls, and offices that need to seat large groups. Mesh back and foam seat keep attendees engaged.",
    features: {
      Design: "Visitor Chair",
      Material: "Mesh back and foaming seat",
      Armrest: "Fixed PP Armrest",
      Base: "MS Bended Legs",
    },
  },
  {
    id: "visitor-swan-executive",
    name: "SWAN Executive Visitor Chair",
    category: "Visitor Chairs",
    price: 38000,
    image: swanExecutiveVisitorImg,
    badge: "Premium",
    description: "The SWAN Executive Visitor Chair brings executive luxury to guest seating. Upholstered in premium PU leather with a chrome-finish base, it makes a powerful statement in CEO offices and executive boardrooms. Designed to match our premium executive chair collection for a cohesive look.",
    features: {
      Design: "Visitor Chair",
      Material: "Premium PU Leather Upholstery for enhanced support",
      Armrest: "Fixed PP Armrest",
      Base: "Chrome finish",
    },
  },
  {
    id: "visitor-crown-executive",
    name: "Crown Executive Visitor Chair",
    category: "Visitor Chairs",
    price: 38500,
    image: crownExecutiveVisitorImg,
    badge: "Luxury",
    featured: true,
    description: "The Crown Executive Visitor Chair is the pinnacle of guest seating luxury. Premium PU leather upholstery and a chrome-finish base create a regal presence that commands respect. Designed to complement the Crown Executive Chair for a unified, prestigious office aesthetic.",
    features: {
      Design: "Visitor Chair",
      Material: "Premium PU Leather Upholstery",
      Armrest: "Fixed Armrests",
      Base: "Chrome finish",
    },
  },
];

// All products combined
export const allProducts: Product[] = [
  ...executiveChairs,
  ...managerChairs,
  ...staffChairs,
  ...visitorChairs,
];

// Featured products for homepage
export const featuredProducts: Product[] = allProducts.filter((p) => p.featured);

// Categories
export const categories: Category[] = [
  {
    id: "executive-chairs",
    name: "Executive Chairs",
    description: "Premium PU leather chairs with ergonomic back support, reclining mechanisms, and aluminum bases. Perfect for CEOs, directors, and senior management. Price range: Rs. 35,000 – Rs. 82,000.",
    productCount: executiveChairs.length,
    image: ambassadorExecutiveImg,
  },
  {
    id: "manager-chairs",
    name: "Manager Chairs",
    description: "Breathable mesh fabric chairs with 4D armrests, lumbar support, and tilting mechanisms. Ideal for managers, team leads, and professionals working 8+ hours daily. Price range: Rs. 27,000 – Rs. 75,000.",
    productCount: managerChairs.length,
    image: atlasManagerImg,
  },
  {
    id: "staff-chairs",
    name: "Staff Chairs",
    description: "Ergonomic mesh chairs for everyday office comfort. Designed for open-plan offices, call centers, and large teams needing reliable, comfortable seating. Price range: Rs. 11,500 – Rs. 39,000.",
    productCount: staffChairs.length,
    image: premiumStaffImg,
  },
  {
    id: "visitor-chairs",
    name: "Visitor Chairs",
    description: "Comfortable guest seating for reception areas, meeting rooms, and conference spaces. Available in mesh, foam, and premium PU leather options. Price range: Rs. 8,500 – Rs. 38,500.",
    productCount: visitorChairs.length,
    image: swanExecutiveVisitorImg,
  },
];

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  switch (categoryId) {
    case "executive-chairs":
      return executiveChairs;
    case "manager-chairs":
      return managerChairs;
    case "staff-chairs":
      return staffChairs;
    case "visitor-chairs":
      return visitorChairs;
    default:
      return allProducts;
  }
};

// Format price in PKR
export const formatPrice = (price: number): string => {
  return `Rs.${price.toLocaleString("en-PK")}`;
};
