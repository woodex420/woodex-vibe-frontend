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

// ============ OFFICE FURNITURE ============

// Import placeholder images for non-chair products
import deskExecutiveImg from "@/assets/desk-executive.jpg";
import deskStandingImg from "@/assets/desk-standing.jpg";
import workstationImg from "@/assets/workstation.jpg";
import loungeImg from "@/assets/lounge.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import receptionDeskImg from "@/assets/reception-desk.jpg";
import bookshelfImg from "@/assets/bookshelf.jpg";
import storageImg from "@/assets/storage.jpg";
import heroSofaImg from "@/assets/hero-sofa.jpg";
import officeIsometricImg from "@/assets/office-isometric.jpg";

// Office Desks
export const officeDesks: Product[] = [
  {
    id: "desk-executive",
    name: "Executive Director Desk",
    category: "Office Desks",
    subcategory: "Executive Desks",
    price: 95000,
    image: deskExecutiveImg,
    badge: "Premium",
    featured: true,
    description: "Commanding executive desk crafted from premium MDF with melamine finish and integrated cable management. Designed for corner offices and boardrooms.",
    features: { Material: "MDF with Melamine Finish", Size: "180cm x 80cm x 75cm", "Cable Management": "Integrated wire tray", Edge: "PVC Edge Banding", Drawers: "3-Drawer Pedestal", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "desk-l-shape",
    name: "L-Shape Manager Desk",
    category: "Office Desks",
    subcategory: "L-Shape Desks",
    price: 78000,
    image: deskExecutiveImg,
    description: "Spacious L-shaped desk with return unit providing ample workspace for multitasking managers. Features modesty panel and lockable drawers.",
    features: { Material: "MDF with Melamine Finish", Size: "160cm + 120cm Return", "Cable Management": "Grommet holes", Edge: "PVC Edge Banding", Drawers: "3-Drawer Pedestal with Lock", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "desk-standing",
    name: "Height-Adjustable Standing Desk",
    category: "Office Desks",
    subcategory: "Standing Desks",
    price: 65000,
    image: deskStandingImg,
    badge: "Ergonomic",
    description: "Modern sit-stand desk with manual height adjustment for healthier working. Anti-collision technology and memory presets for quick transitions.",
    features: { Material: "MDF Melamine Top", "Height Range": "72cm–120cm", Mechanism: "Manual Crank Adjustment", "Weight Capacity": "80kg", Edge: "PVC Edge Banding", Frame: "Heavy-Duty Steel" },
  },
  {
    id: "desk-computer",
    name: "Computer Workstation Desk",
    category: "Office Desks",
    subcategory: "Computer Desks",
    price: 35000,
    image: workstationImg,
    description: "Compact computer desk with keyboard tray, CPU holder, and cable routing. Ideal for IT departments and data entry teams.",
    features: { Material: "MDF with Melamine Finish", Size: "120cm x 60cm x 75cm", "Keyboard Tray": "Slide-out", "CPU Holder": "Side-mounted", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "desk-manager",
    name: "Manager Office Desk",
    category: "Office Desks",
    subcategory: "Manager Desks",
    price: 55000,
    image: deskExecutiveImg,
    description: "Professional manager desk with front modesty panel, integrated drawers, and clean minimalist design. Perfect for mid-level management offices.",
    features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Modesty Panel": "Full front panel", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "desk-director",
    name: "Director Suite Desk",
    category: "Office Desks",
    subcategory: "Director Desks",
    price: 125000,
    image: deskExecutiveImg,
    badge: "Luxury",
    description: "Flagship director desk with veneer finish, brass accents, and integrated side credenza. The ultimate statement piece for senior leadership offices.",
    features: { Material: "Natural Wood Veneer Finish", Size: "200cm x 90cm x 75cm", Drawers: "4-Drawer Pedestal with Lock", Edge: "Solid Wood Edging", "Side Return": "Credenza with storage", Frame: "Premium Hardwood" },
  },
];

// Workstations
export const workstations: Product[] = [
  {
    id: "ws-2-seater",
    name: "2-Person Workstation Cluster",
    category: "Workstations",
    subcategory: "2-Seater",
    price: 45000,
    image: workstationImg,
    description: "Face-to-face 2-person workstation with privacy divider and shared wire management tray. Ideal for small teams and startups.",
    features: { Material: "MDF Melamine", Size: "240cm x 120cm", Divider: "Fabric Privacy Panel 30cm", "Wire Management": "Central cable tray", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "ws-4-seater",
    name: "4-Person Workstation Cluster",
    category: "Workstations",
    subcategory: "4-Seater",
    price: 85000,
    image: workstationImg,
    badge: "Best Seller",
    featured: true,
    description: "Popular 4-person cluster workstation with fabric dividers and integrated power outlets. The go-to solution for IT companies and corporate offices across Pakistan.",
    features: { Material: "MDF Melamine", Size: "240cm x 240cm", Divider: "Fabric Privacy Panel 30cm", "Wire Management": "Central cable tray", "Power Outlets": "4x integrated sockets", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "ws-6-seater",
    name: "6-Person Workstation Cluster",
    category: "Workstations",
    subcategory: "6-Seater",
    price: 120000,
    image: workstationImg,
    description: "High-density 6-person workstation for open-plan offices. Features acoustic panels, shared storage, and power modules for maximum team productivity.",
    features: { Material: "MDF Melamine", Size: "360cm x 240cm", Divider: "Acoustic Fabric Panel", "Wire Management": "Dual cable trays", "Power Outlets": "6x integrated sockets", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "ws-linear",
    name: "Linear Bench Workstation",
    category: "Workstations",
    subcategory: "Linear",
    price: 38000,
    image: workstationImg,
    description: "Clean single-row bench desking for call centers and data-entry teams. Maximizes floor space while providing individual work zones with minimal dividers.",
    features: { Material: "MDF Melamine", "Size per seat": "120cm x 60cm", Divider: "Desk-mounted screen 25cm", "Wire Management": "Under-desk cable basket", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "ws-cubicle",
    name: "Cubicle Workstation",
    category: "Workstations",
    subcategory: "Cubicle",
    price: 55000,
    image: workstationImg,
    description: "Three-sided cubicle with overhead storage and pinboard panels. Perfect for focused work environments where privacy and concentration are paramount.",
    features: { Material: "MDF Melamine", Size: "150cm x 150cm x 135cm", Panels: "3-sided fabric panels", Storage: "Overhead bin", "Pin Board": "Integrated fabric pinboard", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "ws-open-plan",
    name: "Open Plan Desk System",
    category: "Workstations",
    subcategory: "Open Plan",
    price: 32000,
    image: workstationImg,
    description: "Minimalist shared desk system with no dividers — designed for creative agencies and collaborative teams that thrive in open environments.",
    features: { Material: "MDF Melamine", "Size per seat": "140cm x 70cm", "Wire Management": "Central trough", Edge: "PVC Edge Banding", Finish: "Multiple color options", Frame: "18-Gauge MS Powder-Coated" },
  },
];

// Office Sofas
export const officeSofas: Product[] = [
  {
    id: "sofa-3-seater",
    name: "Executive 3-Seater Office Sofa",
    category: "Office Sofas",
    subcategory: "3-Seater",
    price: 85000,
    image: loungeImg,
    badge: "Premium",
    featured: true,
    description: "Premium 3-seater office sofa upholstered in Italian-inspired leatherette with MoltyFoam cushioning. Designed for executive lounges and CEO waiting areas.",
    features: { Material: "Premium Leatherette", Foam: "MoltyFoam High-Density", Frame: "Kiln-Dried Hardwood", Size: "200cm x 80cm x 85cm", Legs: "Chrome-Finish Metal", "Seat Depth": "55cm" },
  },
  {
    id: "sofa-2-seater",
    name: "Office 2-Seater Sofa",
    category: "Office Sofas",
    subcategory: "2-Seater",
    price: 58000,
    image: loungeImg,
    description: "Compact 2-seater sofa for small reception areas and private offices. Premium leatherette with chrome legs and firm MoltyFoam cushions.",
    features: { Material: "Premium Leatherette", Foam: "MoltyFoam High-Density", Frame: "Kiln-Dried Hardwood", Size: "150cm x 80cm x 85cm", Legs: "Chrome-Finish Metal", "Seat Depth": "55cm" },
  },
  {
    id: "sofa-reception",
    name: "Reception Sofa Set",
    category: "Office Sofas",
    subcategory: "Reception",
    price: 120000,
    image: heroSofaImg,
    badge: "Best Seller",
    description: "Complete reception sofa set (3+1+1) designed to create an impressive waiting area. Premium fabric upholstery with contemporary styling.",
    features: { Material: "Premium Fabric Upholstery", Foam: "MoltyFoam", Configuration: "3-Seater + 2 Single Chairs", Frame: "Kiln-Dried Hardwood", Legs: "Brushed Steel", "Color Options": "Gray, Navy, Beige" },
  },
  {
    id: "sofa-lounge-chair",
    name: "Lounge Accent Chair",
    category: "Office Sofas",
    subcategory: "Lounge",
    price: 42000,
    image: loungeImg,
    description: "Contemporary accent chair for executive lounges, breakout areas, and creative spaces. Velvet upholstery with gold-finish metal frame.",
    features: { Material: "Velvet Upholstery", Foam: "MoltyFoam", Frame: "Powder-Coated Metal", Size: "75cm x 80cm x 85cm", Legs: "Gold-Finish Metal", "Color Options": "Emerald, Navy, Blush" },
  },
];

// Meeting Tables
export const meetingTables: Product[] = [
  {
    id: "mt-conference-8",
    name: "Conference Table 8-Seater",
    category: "Meeting Tables",
    subcategory: "Conference",
    price: 95000,
    image: meetingRoomImg,
    badge: "Popular",
    featured: true,
    description: "Professional 8-seater conference table with integrated power and data ports. MDF melamine top with powder-coated steel base for long-lasting durability.",
    features: { Material: "MDF with Melamine Finish", Size: "240cm x 120cm x 75cm", "Power Integration": "4x power + 2x data ports", Edge: "PVC Edge Banding", "Wire Management": "Central cable box", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "mt-conference-12",
    name: "Conference Table 12-Seater",
    category: "Meeting Tables",
    subcategory: "Conference",
    price: 145000,
    image: meetingRoomImg,
    badge: "Premium",
    description: "Large 12-seater boardroom table with wire management and AV integration points. Designed for corporate headquarters and large meeting rooms.",
    features: { Material: "MDF with Melamine Finish", Size: "360cm x 140cm x 75cm", "Power Integration": "6x power + 4x data ports", Edge: "PVC Edge Banding", "AV Integration": "Central AV box", Frame: "Heavy-Duty Steel Base" },
  },
  {
    id: "mt-round",
    name: "Round Meeting Table",
    category: "Meeting Tables",
    subcategory: "Round",
    price: 55000,
    image: meetingRoomImg,
    description: "4-6 person round meeting table that promotes equal participation and collaboration. Perfect for brainstorming sessions and team huddles.",
    features: { Material: "MDF with Melamine Finish", Diameter: "120cm", Height: "75cm", Edge: "PVC Edge Banding", Base: "Central Column Base", Frame: "Chrome-Finish Steel" },
  },
  {
    id: "mt-boardroom",
    name: "Premium Boardroom Table",
    category: "Meeting Tables",
    subcategory: "Boardroom",
    price: 225000,
    image: meetingRoomImg,
    badge: "Luxury",
    description: "Flagship boardroom table with veneer finish, built-in microphone points, and power modules. A statement piece for Fortune-500-style boardrooms.",
    features: { Material: "Natural Wood Veneer", Size: "480cm x 160cm x 75cm", "Power Integration": "8x power + 6x data", "AV Integration": "Motorized AV pop-up", Edge: "Solid Wood Edging", Base: "Premium Hardwood Pedestal" },
  },
];

// Reception Desks
export const receptionDesks: Product[] = [
  {
    id: "rd-modern",
    name: "Modern Reception Counter",
    category: "Reception Desks",
    subcategory: "Modern",
    price: 85000,
    image: receptionDeskImg,
    badge: "Popular",
    featured: true,
    description: "Sleek modern reception desk with high counter and built-in storage. MDF melamine finish with LED accent lighting option. First impression guaranteed.",
    features: { Material: "MDF with Melamine Finish", Size: "200cm x 60cm x 110cm", Counter: "High reception counter", Storage: "Built-in shelving", "LED Option": "Accent lighting available", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "rd-l-shape",
    name: "L-Shape Reception Desk",
    category: "Reception Desks",
    subcategory: "L-Shape",
    price: 110000,
    image: receptionDeskImg,
    description: "Spacious L-shaped reception desk accommodating 2 receptionists. Features cable management, storage cabinets, and glass display panel.",
    features: { Material: "MDF with Melamine Finish", Size: "240cm + 180cm Return", Counter: "Dual-level counter", Storage: "4-door base cabinet", Glass: "Tempered glass accent panel", Frame: "18-Gauge MS Powder-Coated" },
  },
  {
    id: "rd-curved",
    name: "Curved Reception Counter",
    category: "Reception Desks",
    subcategory: "Curved",
    price: 135000,
    image: receptionDeskImg,
    badge: "Premium",
    description: "Elegant curved reception desk that creates a welcoming first impression. Available in multiple finishes with optional backlit branding panel.",
    features: { Material: "MDF with Laminate/Veneer", Size: "280cm Curved x 110cm Height", Counter: "Curved reception counter", Branding: "Backlit logo panel option", Storage: "Integrated filing", Frame: "Custom-Formed Steel" },
  },
  {
    id: "rd-standing",
    name: "Standing Reception Podium",
    category: "Reception Desks",
    subcategory: "Standing",
    price: 45000,
    image: receptionDeskImg,
    description: "Compact standing reception podium for small offices and co-working spaces. Clean design with built-in shelf and cable routing.",
    features: { Material: "MDF with Melamine Finish", Size: "100cm x 50cm x 110cm", Counter: "Single standing counter", Storage: "Internal shelf", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" },
  },
];

// Storage
export const storageFurniture: Product[] = [
  {
    id: "st-filing-3",
    name: "3-Drawer Filing Cabinet",
    category: "Storage",
    subcategory: "Filing Cabinets",
    price: 22000,
    image: storageImg,
    description: "Standard 3-drawer steel filing cabinet with central locking system. A4 and legal-size compatible for organized document storage.",
    features: { Material: "Cold-Rolled Steel", Drawers: "3 Full-Extension", Lock: "Central Locking", Size: "45cm x 62cm x 103cm", "Weight Capacity": "30kg per drawer", Finish: "Powder-Coated" },
  },
  {
    id: "st-bookshelf",
    name: "Open Bookshelf Unit",
    category: "Storage",
    subcategory: "Bookshelves",
    price: 28000,
    image: bookshelfImg,
    description: "5-tier open bookshelf for offices and libraries. MDF with melamine finish, adjustable shelf heights, and anti-tip wall bracket.",
    features: { Material: "MDF with Melamine Finish", Shelves: "5 Adjustable Shelves", Size: "80cm x 35cm x 180cm", "Weight Capacity": "20kg per shelf", Edge: "PVC Edge Banding", Safety: "Anti-tip wall bracket" },
  },
  {
    id: "st-locker-6",
    name: "6-Door Staff Locker",
    category: "Storage",
    subcategory: "Lockers",
    price: 35000,
    image: storageImg,
    description: "Heavy-duty 6-door staff locker with individual key locks. Ideal for offices, gyms, and factory facilities requiring personal storage.",
    features: { Material: "Cold-Rolled Steel", Compartments: "6 Individual Doors", Lock: "Individual Key Locks", Size: "90cm x 45cm x 180cm", Ventilation: "Louvered doors", Finish: "Powder-Coated" },
  },
  {
    id: "st-credenza",
    name: "Office Credenza Unit",
    category: "Storage",
    subcategory: "Credenzas",
    price: 48000,
    image: bookshelfImg,
    badge: "Popular",
    description: "Low-profile office credenza with sliding doors and adjustable shelves. Perfect behind executive desks for accessible storage with a clean aesthetic.",
    features: { Material: "MDF with Melamine Finish", Size: "160cm x 45cm x 75cm", Doors: "2 Sliding Doors", Shelves: "2 Adjustable", Edge: "PVC Edge Banding", Lock: "Central Lock" },
  },
];

// ============ HOME FURNITURE ============

// Bedroom Furniture
export const bedroomFurniture: Product[] = [
  {
    id: "bed-set-royal",
    name: "Royal Bedroom Set",
    category: "Bedroom",
    subcategory: "Bed Sets",
    price: 185000,
    image: deskExecutiveImg,
    badge: "Premium",
    featured: true,
    description: "Complete bedroom set including king-size bed frame, 2 bedside tables, and dressing table. Crafted from premium MDF with high-gloss lacquer finish.",
    features: { Material: "MDF with High-Gloss Lacquer", "Bed Size": "King (180cm x 200cm)", Includes: "Bed + 2 Side Tables + Dressing Table", Headboard: "Upholstered Tufted Panel", Finish: "Walnut / White / Gray", Assembly: "Professional installation included" },
  },
  {
    id: "bed-set-modern",
    name: "Modern Minimalist Bed Set",
    category: "Bedroom",
    subcategory: "Bed Sets",
    price: 145000,
    image: officeIsometricImg,
    description: "Clean-line modern bed set with floating nightstands and low-profile platform frame. Scandinavian-inspired design with warm wood tones.",
    features: { Material: "MDF with Wood Veneer", "Bed Size": "Queen (150cm x 200cm)", Includes: "Bed + 2 Floating Nightstands", Headboard: "Wooden slatted panel", Finish: "Oak / Ash / Charcoal", Storage: "Under-bed drawers optional" },
  },
  {
    id: "bed-side-table-classic",
    name: "Classic Bedside Table",
    category: "Bedroom",
    subcategory: "Bed Side Tables",
    price: 18000,
    image: bookshelfImg,
    description: "Elegant bedside table with 2 drawers and soft-close mechanisms. Matches our Royal and Classic bedroom sets for a cohesive look.",
    features: { Material: "MDF with Melamine", Size: "50cm x 40cm x 55cm", Drawers: "2 Soft-Close Drawers", Finish: "Walnut / White", Legs: "Tapered solid wood", Hardware: "Brushed gold handles" },
  },
  {
    id: "bed-side-table-modern",
    name: "Floating Bedside Shelf",
    category: "Bedroom",
    subcategory: "Bed Side Tables",
    price: 12000,
    image: officeIsometricImg,
    description: "Wall-mounted floating nightstand with single drawer and open shelf. Space-saving design for modern bedrooms.",
    features: { Material: "MDF with Laminate", Size: "45cm x 30cm x 20cm", Drawer: "1 Soft-Close Drawer", Shelf: "Open display shelf", Mounting: "Wall-mounted concealed bracket", Finish: "Oak / White / Black" },
  },
  {
    id: "dressing-table-vanity",
    name: "Vanity Dressing Table",
    category: "Bedroom",
    subcategory: "Dressing Tables",
    price: 45000,
    image: deskExecutiveImg,
    badge: "Popular",
    description: "Elegant vanity dressing table with LED-lit mirror, jewelry organizer drawers, and velvet-lined compartments. Every detail designed for luxury.",
    features: { Material: "MDF with High-Gloss Finish", Size: "120cm x 45cm x 75cm", Mirror: "LED-backlit frameless mirror", Drawers: "5 organizer drawers", Stool: "Included (upholstered)", Finish: "White / Rose Gold accents" },
  },
  {
    id: "dressing-table-compact",
    name: "Compact Dressing Console",
    category: "Bedroom",
    subcategory: "Dressing Tables",
    price: 32000,
    image: officeIsometricImg,
    description: "Space-efficient dressing console with flip-up mirror and hidden storage. Perfect for apartments and smaller bedrooms.",
    features: { Material: "MDF with Melamine", Size: "100cm x 40cm x 75cm", Mirror: "Flip-up concealed mirror", Storage: "Hidden compartments", Drawers: "2 Side drawers", Finish: "Walnut / White" },
  },
  {
    id: "bedroom-mirror",
    name: "Full-Length Standing Mirror",
    category: "Bedroom",
    subcategory: "Mirrors",
    price: 22000,
    image: officeIsometricImg,
    description: "Elegant full-length standing mirror with wooden frame and anti-tip support. Available in multiple frame finishes to match any bedroom décor.",
    features: { Mirror: "Full-length 180cm x 60cm", Frame: "Solid Wood Frame", Stand: "Freestanding with anti-tip", Finish: "Oak / Walnut / Black / Gold", Glass: "5mm HD clarity glass", Weight: "12kg" },
  },
  {
    id: "bedroom-bench",
    name: "Bedroom Bench & Settee",
    category: "Bedroom",
    subcategory: "Bench & Settee",
    price: 28000,
    image: loungeImg,
    description: "Upholstered bedroom bench with storage compartment beneath the seat. Perfect at the foot of the bed for both seating and linen storage.",
    features: { Material: "Velvet / Linen Upholstery", Foam: "High-Density Foam", Size: "120cm x 45cm x 50cm", Storage: "Lift-top hidden storage", Frame: "Kiln-Dried Hardwood", Legs: "Tapered solid wood" },
  },
];

// Living Room Furniture
export const livingRoomFurniture: Product[] = [
  {
    id: "home-sofa-3seater",
    name: "Luxury 3-Seater Home Sofa",
    category: "Living Room",
    subcategory: "Home Sofa",
    price: 125000,
    image: heroSofaImg,
    badge: "Premium",
    featured: true,
    description: "Premium 3-seater home sofa with deep-seated comfort, MoltyFoam cushioning, and stain-resistant fabric. A centerpiece for modern Pakistani living rooms.",
    features: { Material: "Premium Fabric / Leatherette", Foam: "MoltyFoam High-Density", Size: "220cm x 90cm x 85cm", Frame: "Kiln-Dried Hardwood", Cushions: "Reversible back cushions", "Color Options": "Gray, Navy, Beige, Olive" },
  },
  {
    id: "home-sofa-sectional",
    name: "L-Shape Sectional Sofa",
    category: "Living Room",
    subcategory: "Home Sofa",
    price: 175000,
    image: heroSofaImg,
    badge: "Best Seller",
    description: "Spacious L-shape sectional sofa that seats 5-6 comfortably. Modular design allows flexible configuration. Ottoman doubles as hidden storage.",
    features: { Material: "Premium Fabric", Foam: "MoltyFoam", Configuration: "L-Shape (left or right)", Frame: "Kiln-Dried Hardwood", Ottoman: "Storage ottoman included", Size: "280cm x 180cm x 85cm" },
  },
  {
    id: "home-center-table",
    name: "Center Table with Storage",
    category: "Living Room",
    subcategory: "Center & Side Tables",
    price: 35000,
    image: meetingRoomImg,
    description: "Contemporary center table with lower shelf and hidden drawer. Tempered glass top with wooden base for a modern living room aesthetic.",
    features: { Material: "MDF + Tempered Glass", Size: "120cm x 60cm x 45cm", Storage: "1 Hidden drawer + open shelf", Glass: "8mm Tempered Glass Top", Base: "Solid wood legs", Finish: "Walnut / Oak / White" },
  },
  {
    id: "home-side-table",
    name: "Accent Side Table Set",
    category: "Living Room",
    subcategory: "Center & Side Tables",
    price: 18000,
    image: bookshelfImg,
    description: "Set of 2 nesting side tables with gold-finish metal frames. Perfect beside sofas or as decorative accent pieces in any living space.",
    features: { Material: "MDF top + Metal frame", "Set Contents": "2 Nesting Tables", Sizes: "50cm + 40cm diameter", Height: "55cm + 45cm", Frame: "Gold / Black metal", Finish: "Marble effect / Wood grain" },
  },
  {
    id: "home-coffee-table-round",
    name: "Round Coffee Table",
    category: "Living Room",
    subcategory: "Coffee Tables",
    price: 28000,
    image: meetingRoomImg,
    description: "Elegant round coffee table with marble-effect top and brushed brass base. A statement piece for sophisticated living rooms.",
    features: { Material: "Engineered Stone / MDF", Diameter: "90cm", Height: "42cm", Base: "Brushed Brass Metal", "Weight Capacity": "25kg", Finish: "White Marble / Black Marble" },
  },
  {
    id: "home-coffee-table-rect",
    name: "Rectangular Coffee Table",
    category: "Living Room",
    subcategory: "Coffee Tables",
    price: 32000,
    image: meetingRoomImg,
    description: "Sleek rectangular coffee table with tempered glass top and wooden shelf beneath. Functional design with ample display and storage space.",
    features: { Material: "Tempered Glass + MDF", Size: "110cm x 60cm x 42cm", Shelf: "Lower wooden shelf", Glass: "8mm Tempered", Base: "Solid wood legs", Finish: "Oak / Walnut" },
  },
  {
    id: "home-console",
    name: "Entryway Console Table",
    category: "Living Room",
    subcategory: "Console",
    price: 38000,
    image: receptionDeskImg,
    description: "Narrow console table for entryways, hallways, and behind-sofa placement. Features 2 drawers and open shelf for keys, decor, and daily essentials.",
    features: { Material: "MDF with Veneer", Size: "120cm x 35cm x 80cm", Drawers: "2 Soft-Close Drawers", Shelf: "Open lower shelf", Legs: "Tapered solid wood", Finish: "Walnut / White / Black" },
  },
  {
    id: "home-tv-unit",
    name: "Modern TV Console Unit",
    category: "Living Room",
    subcategory: "TV Units",
    price: 55000,
    image: bookshelfImg,
    badge: "Popular",
    description: "Wall-mounted TV console with floating design, LED backlighting, and concealed cable management. Supports TVs up to 65 inches.",
    features: { Material: "MDF with High-Gloss/Matte", Size: "180cm x 40cm x 35cm", "TV Support": "Up to 65-inch TV", Storage: "4 compartments + 2 drawers", Cable: "Concealed cable management", LED: "RGB LED backlighting included" },
  },
];

// Dining Furniture
export const diningFurniture: Product[] = [
  {
    id: "dining-set-6",
    name: "6-Seater Dining Set",
    category: "Dining",
    subcategory: "Dining Sets",
    price: 125000,
    image: meetingRoomImg,
    badge: "Premium",
    featured: true,
    description: "Complete 6-seater dining set with solid wood table and upholstered chairs. Perfect for family dinners and entertaining guests in style.",
    features: { Material: "Solid Sheesham Wood", "Table Size": "180cm x 90cm x 75cm", Chairs: "6 Upholstered Dining Chairs", Finish: "Natural / Dark Walnut", Seats: "MoltyFoam cushioned", Assembly: "Professional installation included" },
  },
  {
    id: "dining-set-4",
    name: "4-Seater Compact Dining Set",
    category: "Dining",
    subcategory: "Dining Sets",
    price: 85000,
    image: meetingRoomImg,
    description: "Space-efficient 4-seater dining set ideal for apartments and small dining areas. Clean modern design with cushioned chairs.",
    features: { Material: "MDF with Veneer", "Table Size": "120cm x 80cm x 75cm", Chairs: "4 Upholstered Chairs", Finish: "Oak / Walnut / White", Seats: "Foam cushioned", Style: "Scandinavian Modern" },
  },
  {
    id: "dining-chair-upholstered",
    name: "Upholstered Dining Chair",
    category: "Dining",
    subcategory: "Dining Chairs",
    price: 15000,
    image: loungeImg,
    description: "Elegant upholstered dining chair with solid wood legs and stain-resistant fabric. Sold individually — mix and match with any dining table.",
    features: { Material: "Fabric Upholstery", Frame: "Solid Wood", Foam: "High-Density Foam", Size: "45cm x 55cm x 90cm", "Weight Capacity": "120kg", "Color Options": "Gray, Beige, Navy, Green" },
  },
  {
    id: "dining-chair-wooden",
    name: "Solid Wood Dining Chair",
    category: "Dining",
    subcategory: "Dining Chairs",
    price: 12000,
    image: bookshelfImg,
    description: "Classic solid Sheesham wood dining chair with contoured seat. Durable, low-maintenance, and perfect for everyday family dining.",
    features: { Material: "Solid Sheesham Wood", Finish: "Lacquered Natural / Dark", Size: "43cm x 50cm x 88cm", "Weight Capacity": "130kg", Maintenance: "Wipe clean", Style: "Classic / Farmhouse" },
  },
  {
    id: "dining-table-extendable",
    name: "Extendable Dining Table",
    category: "Dining",
    subcategory: "Dining Tables",
    price: 95000,
    image: meetingRoomImg,
    badge: "Versatile",
    description: "Ingenious extendable dining table that goes from 4-seater to 8-seater with a simple butterfly leaf mechanism. Solid wood construction.",
    features: { Material: "Solid Sheesham Wood", "Size Compact": "140cm x 90cm", "Size Extended": "200cm x 90cm", Mechanism: "Butterfly leaf extension", Seats: "4 to 8 persons", Finish: "Natural / Dark Walnut" },
  },
  {
    id: "dining-table-glass",
    name: "Glass Top Dining Table",
    category: "Dining",
    subcategory: "Dining Tables",
    price: 72000,
    image: meetingRoomImg,
    description: "Contemporary glass-top dining table with sculptural metal base. 10mm tempered safety glass top seats 6 comfortably.",
    features: { Material: "10mm Tempered Glass", Size: "160cm x 90cm x 75cm", Base: "Sculptural Metal Base", Seats: "6 persons", Glass: "Beveled edges, safety tempered", Finish: "Chrome / Matte Black base" },
  },
];

// ============ COMBINED EXPORTS ============

// All products combined
export const allProducts: Product[] = [
  ...executiveChairs,
  ...managerChairs,
  ...staffChairs,
  ...visitorChairs,
  ...officeDesks,
  ...workstations,
  ...officeSofas,
  ...meetingTables,
  ...receptionDesks,
  ...storageFurniture,
  ...bedroomFurniture,
  ...livingRoomFurniture,
  ...diningFurniture,
];

// Featured products for homepage
export const featuredProducts: Product[] = allProducts.filter((p) => p.featured);

// Home furniture combined
export const homeFurnitureProducts: Product[] = [
  ...bedroomFurniture,
  ...livingRoomFurniture,
  ...diningFurniture,
];

// Office furniture (non-chair)
export const officeFurnitureProducts: Product[] = [
  ...officeDesks,
  ...workstations,
  ...officeSofas,
  ...meetingTables,
  ...receptionDesks,
  ...storageFurniture,
];

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
  {
    id: "office-desks",
    name: "Office Desks",
    description: "Executive, manager, and standing desks in MDF melamine and veneer finishes. Complete range from compact computer desks to director suite desks.",
    productCount: officeDesks.length,
    image: deskExecutiveImg,
  },
  {
    id: "workstations",
    name: "Workstations",
    description: "Modular 2, 4, 6-person clusters, linear benching, cubicles, and open-plan desk systems for teams of any size.",
    productCount: workstations.length,
    image: workstationImg,
  },
  {
    id: "office-sofas",
    name: "Office Sofas",
    description: "Reception sofas, executive lounge seating, and accent chairs for waiting areas and breakout zones.",
    productCount: officeSofas.length,
    image: loungeImg,
  },
  {
    id: "meeting-tables",
    name: "Meeting Tables",
    description: "Conference tables from 8-seater to boardroom size with integrated power, data ports, and AV provisions.",
    productCount: meetingTables.length,
    image: meetingRoomImg,
  },
  {
    id: "reception-desks",
    name: "Reception Desks",
    description: "Custom reception counters, L-shape desks, curved counters, and standing podiums to create impressive first impressions.",
    productCount: receptionDesks.length,
    image: receptionDeskImg,
  },
  {
    id: "storage",
    name: "Storage & Filing",
    description: "Filing cabinets, bookshelves, lockers, and credenza units for organized, efficient workspaces.",
    productCount: storageFurniture.length,
    image: storageImg,
  },
  {
    id: "bedroom",
    name: "Bedroom Furniture",
    description: "Bed sets, bedside tables, dressing tables, mirrors, and bedroom benches for luxurious home bedrooms.",
    productCount: bedroomFurniture.length,
    image: deskExecutiveImg,
  },
  {
    id: "living-room",
    name: "Living Room",
    description: "Home sofas, coffee tables, side tables, consoles, and TV units for modern Pakistani living rooms.",
    productCount: livingRoomFurniture.length,
    image: heroSofaImg,
  },
  {
    id: "dining",
    name: "Dining Furniture",
    description: "Dining sets, dining chairs, and dining tables in solid wood, glass, and modern finishes.",
    productCount: diningFurniture.length,
    image: meetingRoomImg,
  },
];

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  switch (categoryId) {
    case "executive-chairs": return executiveChairs;
    case "manager-chairs": return managerChairs;
    case "staff-chairs": return staffChairs;
    case "visitor-chairs": return visitorChairs;
    case "office-desks": return officeDesks;
    case "workstations": return workstations;
    case "office-sofas": return officeSofas;
    case "meeting-tables": return meetingTables;
    case "reception-desks": return receptionDesks;
    case "storage": return storageFurniture;
    case "bedroom": return bedroomFurniture;
    case "living-room": return livingRoomFurniture;
    case "dining": return diningFurniture;
    default: return allProducts;
  }
};

// Format price in PKR
export const formatPrice = (price: number): string => {
  return `Rs.${price.toLocaleString("en-PK")}`;
};
