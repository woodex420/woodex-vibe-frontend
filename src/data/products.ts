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
    description: "A perfect blend of style and ergonomic comfort with high backrest for superior posture support.",
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
    description: "Premium PU leather chairs with ergonomic back support",
    productCount: executiveChairs.length,
    image: ambassadorExecutiveImg,
  },
  {
    id: "manager-chairs",
    name: "Manager Chairs",
    description: "Breathable mesh fabric with 4D armrests",
    productCount: managerChairs.length,
    image: atlasManagerImg,
  },
  {
    id: "staff-chairs",
    name: "Staff Chairs",
    description: "Ergonomic mesh chairs for everyday comfort",
    productCount: staffChairs.length,
    image: premiumStaffImg,
  },
  {
    id: "visitor-chairs",
    name: "Visitor Chairs",
    description: "Comfortable seating for guests and conferences",
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
