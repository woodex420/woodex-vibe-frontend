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

// ============ EXECUTIVE CHAIRS ============
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
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
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
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Convert into Recliner when open", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-imperial",
    name: "Imperial Executive Chair",
    category: "Executive Chairs",
    price: 65000,
    image: imperialExecutiveImg,
    description: "The Imperial Executive Chair exudes authority with its commanding profile and superior build quality. Engineered for long working hours, it features premium PU leather, high-density plywood frame, and a reliable reclining back lock mechanism. Perfect for executive offices that demand both durability and elegance.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-milano",
    name: "Milano Luxury Executive Chair",
    category: "Executive Chairs",
    price: 65000,
    image: milanoExecutiveImg,
    badge: "Luxury",
    description: "Inspired by Italian furniture craftsmanship, the Milano Luxury Executive Chair brings European sophistication to your office.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-regal",
    name: "Regal Executive Chair",
    category: "Executive Chairs",
    price: 50000,
    image: regalExecutiveImg,
    description: "The Regal Executive Chair offers premium executive comfort at an accessible price point.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-ascot",
    name: "Ascot Executive Chair",
    category: "Executive Chairs",
    price: 42000,
    image: ascotExecutiveImg,
    description: "The Ascot Executive Chair brings refined British-inspired design to the modern office.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-diamond",
    name: "Diamond Executive Chair",
    category: "Executive Chairs",
    price: 42000,
    image: diamondExecutiveImg,
    description: "The Diamond Executive Chair features a distinctive quilted PU leather design that adds visual depth and luxury to any office.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-infinity",
    name: "Infinity Executive Chair",
    category: "Executive Chairs",
    price: 45000,
    image: infinityExecutiveImg,
    description: "The Infinity Executive Chair lives up to its name with limitless comfort features.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Convert into Recliner when open", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-nexa",
    name: "Nexa Executive Chair",
    category: "Executive Chairs",
    price: 52000,
    image: nexaExecutiveImg,
    description: "The Nexa Executive Chair bridges contemporary design with executive tradition.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-phoenix",
    name: "Phoenix Executive Chair",
    category: "Executive Chairs",
    price: 52000,
    image: phoenixExecutiveImg,
    description: "Rise to new heights with the Phoenix Executive Chair. Engineered for professionals who demand resilience and style.",
    features: { Design: "Executive Ergonomic Back Support", Material: "Premium PU Leather Upholstery", Foam: "High-Density PU Molded Foam", Frame: "High-Density Plywood", Rotation: "360° rotation for easy movement", Recliner: "Reclining Back Lock", Base: "Aluminum Base", Wheel: "360-degree swivel wheel" },
  },
  {
    id: "exec-black-pearl",
    name: "Black Pearl Executive Chair",
    category: "Executive Chairs",
    price: 35000,
    image: blackPearlExecutiveImg,
    description: "The Black Pearl Executive Chair combines executive presence with breathable mesh technology.",
    features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" },
  },
];

// ============ MANAGER CHAIRS ============
export const managerChairs: Product[] = [
  { id: "mgr-atlas", name: "Atlas Manager Chair", category: "Manager Chairs", price: 65000, image: atlasManagerImg, badge: "Top Rated", featured: true, description: "The Atlas Manager Chair is a perfect blend of style and ergonomic comfort.", features: { "Lumbar Support": "No", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-titan-pro", name: "Titan Pro Manager Chair", category: "Manager Chairs", price: 39000, image: titanProManagerImg, description: "The Titan Pro Manager Chair delivers heavyweight performance at a mid-range price.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Chrome", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-onyx-prestige", name: "Onyx Prestige Manager Chair", category: "Manager Chairs", price: 65000, image: onyxPrestigeManagerImg, badge: "Premium", description: "The Onyx Prestige Manager Chair is the definitive choice for managers.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-elite-command", name: "Elite Command Manager Chair", category: "Manager Chairs", price: 75000, image: eliteCommandManagerImg, badge: "Best Seller", featured: true, description: "Our best-selling manager chair, the Elite Command sets the standard for ergonomic seating.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "White Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-keystone", name: "Keystone Manager Chair", category: "Manager Chairs", price: 42000, image: keystoneManagerImg, description: "The Keystone Manager Chair is the foundation of a productive workspace.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-nexus-command", name: "Nexus Command Manager Chair", category: "Manager Chairs", price: 55000, image: nexusCommandManagerImg, description: "The Nexus Command Manager Chair combines authority with advanced ergonomic technology.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-spot-work", name: "Spot Work Manager Chair", category: "Manager Chairs", price: 28000, image: spotWorkManagerImg, description: "The Spot Work Manager Chair is designed for managers who value simplicity and function.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-forma-ergofit", name: "Forma ErgoFit Manager Chair", category: "Manager Chairs", price: 48000, image: formaErgofitManagerImg, description: "The Forma ErgoFit Manager Chair features an ergonomically optimized design.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-prime-performance", name: "Prime Performance Manager Chair", category: "Manager Chairs", price: 35000, image: primePerformanceManagerImg, description: "The Prime Performance Manager Chair is a peak productivity partner.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-titan-pro-v2", name: "Titan Pro V2 Manager Chair", category: "Manager Chairs", price: 42000, image: titanProV2ManagerImg, description: "The Titan Pro V2 is the evolution of our popular Titan Pro series.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Chrome", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-titan-pro-chrome", name: "Titan Pro Chrome Manager Chair", category: "Manager Chairs", price: 45000, image: titanProChromeManagerImg, description: "The Titan Pro Chrome elevates the Titan series with premium chrome accents.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Chrome", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-apex-flow", name: "Apex Flow Manager Chair", category: "Manager Chairs", price: 55000, image: apexFlowManagerImg, description: "The Apex Flow Manager Chair features a flowing design with breathable mesh.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-matrix-flow", name: "Matrix Flow Manager Chair", category: "Manager Chairs", price: 42000, image: matrixFlowManagerImg, featured: true, description: "The Matrix Flow features a cutting-edge matrix-patterned mesh.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-relief-pro", name: "Relief Pro Manager Chair", category: "Manager Chairs", price: 32000, image: reliefProManagerImg, description: "The Relief Pro Manager Chair is designed specifically for back pain relief.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-grip-back", name: "Grip Back Manager Chair", category: "Manager Chairs", price: 35000, image: gripBackManagerImg, description: "The Grip Back features a contoured backrest for superior spinal support.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-bolt-quickstart", name: "Bolt Quickstart Manager Chair", category: "Manager Chairs", price: 25000, image: boltQuickstartManagerImg, badge: "Budget Friendly", description: "The Bolt Quickstart is a ready-to-ship manager chair for quick office setups.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "Fixed Headrest", "Arm Rest": "Fixed Armrest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "mgr-quickstart", name: "Quickstart Manager Chair", category: "Manager Chairs", price: 22000, image: quickstartManagerImg, badge: "Value Pick", description: "The Quickstart Manager Chair gets your office seated fast.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "Fixed Headrest", "Arm Rest": "Fixed Armrest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
];

// ============ STAFF CHAIRS ============
export const staffChairs: Product[] = [
  { id: "staff-grid", name: "Grid Staff Chair", category: "Staff Chairs", price: 18500, image: gridStaffImg, description: "The Grid Staff Chair features a breathable grid-pattern mesh back.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-lite-compact", name: "Lite Compact Staff Chair", category: "Staff Chairs", price: 15500, image: liteCompactStaffImg, badge: "Space Saver", description: "The Lite Compact Staff Chair is designed for high-density office environments.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-max", name: "Max Staff Chair", category: "Staff Chairs", price: 22000, image: maxStaffImg, badge: "Best Seller", featured: true, description: "The Max Staff Chair delivers maximum comfort at a staff-level price.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Chrome", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-pace", name: "Pace Staff Chair", category: "Staff Chairs", price: 16500, image: paceStaffImg, description: "The Pace Staff Chair keeps your team moving at full speed.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-premium", name: "Premium Staff Chair", category: "Staff Chairs", price: 25000, image: premiumStaffImg, badge: "Premium", description: "The Premium Staff Chair bridges the gap between staff and manager seating.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Chrome", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-rock-solid", name: "Rock Solid Staff Chair", category: "Staff Chairs", price: 19500, image: rockSolidStaffImg, description: "The Rock Solid Staff Chair is built like a tank.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-signal", name: "Signal Staff Chair", category: "Staff Chairs", price: 17500, image: signalStaffImg, description: "The Signal Staff Chair sends a clear message: your team deserves comfort.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-support", name: "Support Staff Chair", category: "Staff Chairs", price: 16000, image: supportStaffImg, description: "The Support Staff Chair is engineered for ergonomic support.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-task-master", name: "Task Master Staff Chair", category: "Staff Chairs", price: 20000, image: taskMasterStaffImg, description: "The Task Master Staff Chair is purpose-built for task-intensive work.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-team", name: "Team Staff Chair", category: "Staff Chairs", price: 14500, image: teamStaffImg, badge: "Budget Friendly", description: "The Team Staff Chair is designed for bulk deployment.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-unit", name: "Unit Staff Chair", category: "Staff Chairs", price: 15000, image: unitStaffImg, description: "The Unit Staff Chair is a versatile, dependable choice.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Black Nylon Base with Nylon Caster Wheels", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
  { id: "staff-wave-comfort", name: "Wave Comfort Staff Chair", category: "Staff Chairs", price: 19500, image: waveComfortStaffImg, description: "The Wave Comfort Staff Chair features a wave-contoured backrest.", features: { "Lumbar Support": "Yes", Material: "Breathable Mesh Fabric", Headrest: "2D Headrest adjustable up and down", "Arm Rest": "4D Arm Rest", Rotation: "360° rotation for easy movement", Base: "Chrome", Mechanism: "Tilting Mechanism Hydraulic Gas Lifter" } },
];

// ============ VISITOR CHAIRS ============
export const visitorChairs: Product[] = [
  { id: "visitor-back-support", name: "Back Support Visitor Chair", category: "Visitor Chairs", price: 15500, image: backSupportVisitorImg, description: "The Back Support Visitor Chair ensures your guests stay comfortable.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed PP Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-balance", name: "Balance Visitor Chair", category: "Visitor Chairs", price: 12500, image: balanceVisitorImg, description: "The Balance Visitor Chair offers a harmonious blend of comfort and practicality.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed PP Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-clarity-manager", name: "Clarity Manager Visitor Chair", category: "Visitor Chairs", price: 14500, image: clarityManagerVisitorImg, description: "The Clarity Manager Visitor Chair brings managerial sophistication to visitor seating.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed PP Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-curve", name: "Curve Visitor Chair", category: "Visitor Chairs", price: 11500, image: curveVisitorImg, badge: "Popular", description: "Our most popular visitor chair, the Curve features a graceful curved design.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed PP Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-quad-conference", name: "QUAD Conference Visitor Chair", category: "Visitor Chairs", price: 10500, image: quadConferenceVisitorImg, description: "The QUAD Conference Visitor Chair is purpose-built for meeting rooms.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed PP Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-star", name: "Star Visitor Chair", category: "Visitor Chairs", price: 16500, image: starVisitorImg, description: "The Star Visitor Chair stands out with its premium build quality.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed PP Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-edge-executive", name: "Edge Executive Visitor Chair", category: "Visitor Chairs", price: 25000, image: edgeExecutiveVisitorImg, badge: "Executive", description: "The Edge Executive Visitor Chair elevates guest seating to executive standards.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-grid-conference", name: "Grid Conference Visitor Chair", category: "Visitor Chairs", price: 28500, image: gridConferenceVisitorImg, description: "The Grid Conference Visitor Chair features a distinctive grid-pattern mesh back.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-line", name: "Line Visitor Chair", category: "Visitor Chairs", price: 11500, image: lineVisitorImg, badge: "Budget Friendly", description: "The Line Visitor Chair delivers clean, modern design at our most competitive price.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-welcome", name: "Welcome Visitor Chair", category: "Visitor Chairs", price: 14500, image: welcomeVisitorImg, description: "True to its name, the Welcome Visitor Chair creates a warm first impression.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-wing-conference", name: "WING Conference Visitor Chair", category: "Visitor Chairs", price: 15000, image: wingConferenceVisitorImg, description: "The WING Conference Visitor Chair features a distinctive winged backrest.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-prime-manager", name: "Prime Manager Visitor Chair", category: "Visitor Chairs", price: 28500, image: primeManagerVisitorImg, description: "The Prime Manager Visitor Chair is a premium guest chair.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-comfort-conference", name: "Comfort Conference Visitor Chair", category: "Visitor Chairs", price: 8500, image: comfortConferenceVisitorImg, badge: "Best Value", featured: true, description: "Our most affordable seating solution without compromising on comfort.", features: { Design: "Visitor Chair", Material: "Mesh back and foaming seat", Armrest: "Fixed PP Armrest", Base: "MS Bended Legs" } },
  { id: "visitor-swan-executive", name: "SWAN Executive Visitor Chair", category: "Visitor Chairs", price: 38000, image: swanExecutiveVisitorImg, badge: "Premium", description: "The SWAN Executive Visitor Chair brings executive luxury to guest seating.", features: { Design: "Visitor Chair", Material: "Premium PU Leather Upholstery for enhanced support", Armrest: "Fixed PP Armrest", Base: "Chrome finish" } },
  { id: "visitor-crown-executive", name: "Crown Executive Visitor Chair", category: "Visitor Chairs", price: 38500, image: crownExecutiveVisitorImg, badge: "Luxury", featured: true, description: "The Crown Executive Visitor Chair is the pinnacle of guest seating luxury.", features: { Design: "Visitor Chair", Material: "Premium PU Leather Upholstery", Armrest: "Fixed Armrests", Base: "Chrome finish" } },
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

// CEO Table Images
import ceoAmbassadorImg from "@/assets/products/ceo-ambassador-table.jpg";
import ceoEleganceImg from "@/assets/products/ceo-elegance-table.jpg";
import ceoEliteImg from "@/assets/products/ceo-elite-table.jpg";
import ceoImperialImg from "@/assets/products/ceo-imperial-table.jpg";
import ceoRoyalImg from "@/assets/products/ceo-royal-prestige-table.jpg";

// Executive Table Images
import etCommandImg from "@/assets/products/et-command-desk.jpg";
import etEliteImg from "@/assets/products/et-elite-table.jpg";
import etImpactImg from "@/assets/products/et-impact-desk.jpg";
import etInfinityImg from "@/assets/products/et-infinity-table.jpg";
import etLegacyImg from "@/assets/products/et-legacy-desk.jpg";
import etNexusImg from "@/assets/products/et-nexus-table.jpg";
import etNovaImg from "@/assets/products/et-nova-desk.jpg";
import etSignatureImg from "@/assets/products/et-signature-table.jpg";
import etSpaceImg from "@/assets/products/et-space-desk.jpg";
import etVisionImg from "@/assets/products/et-vision-desk.jpg";

// Manager Table Images
import mtApexImg from "@/assets/products/mt-apex-table.jpg";
import mtEdgeImg from "@/assets/products/mt-edge-table.jpg";
import mtEliteImg from "@/assets/products/mt-elite-table.jpg";
import mtFluxImg from "@/assets/products/mt-flux-table.jpg";
import mtInfinityImg from "@/assets/products/mt-infinity-table.jpg";
import mtMetroImg from "@/assets/products/mt-metro-table.jpg";
import mtNovaImg from "@/assets/products/mt-nova-table.jpg";
import mtOrionImg from "@/assets/products/mt-orion-table.jpg";
import mtPrimeImg from "@/assets/products/mt-prime-table.jpg";
import mtPulseImg from "@/assets/products/mt-pulse-table.jpg";
import mtShiftErgoImg from "@/assets/products/mt-shift-ergo-table.jpg";
import mtVertexImg from "@/assets/products/mt-vertex-table.jpg";
import mtVibeImg from "@/assets/products/mt-vibe-table.jpg";
import mtSmartLshapeImg from "@/assets/products/mt-smart-lshape-table.jpg";

// Workstation Images
import wsEvolutionImg from "@/assets/products/ws-evolution.jpg";
import wsFlowImg from "@/assets/products/ws-flow.jpg";
import wsHorizonImg from "@/assets/products/ws-horizon.jpg";
import wsMomentumImg from "@/assets/products/ws-momentum.jpg";
import wsNexusImg from "@/assets/products/ws-nexus.jpg";

// Meeting Table Images
import meetingCitrusImg from "@/assets/products/meeting-citrus.jpg";
import meetingCircularImg from "@/assets/products/meeting-circular.jpg";
import meetingDiamondImg from "@/assets/products/meeting-diamond.jpg";
import meetingGrandImg from "@/assets/products/meeting-grand.jpg";
import meetingImperialImg from "@/assets/products/meeting-imperial.jpg";
import meetingNexusImg from "@/assets/products/meeting-nexus.jpg";

// ============ CEO TABLES (NEW) ============
export const ceoTables: Product[] = [
  { id: "ceo-ambassador", name: "Ambassador Executive Table", category: "CEO Tables", price: 150000, image: ceoAmbassadorImg, badge: "Premium", featured: true, description: "The flagship Ambassador Executive Table is designed for CEO offices and corner suites. Massive 200cm x 100cm worksurface with integrated side credenza, cable management, and premium wood veneer finish.", features: { Material: "Natural Wood Veneer Finish", Size: "200cm x 100cm x 75cm", "Side Return": "Integrated credenza unit", Drawers: "6-Drawer Pedestal with lock", "Cable Management": "Built-in wire tray & grommets", Frame: "Premium Hardwood Base" } },
  { id: "ceo-elegance", name: "Elegance Executive Office Table", category: "CEO Tables", price: 165000, image: ceoEleganceImg, badge: "Luxury", description: "The Elegance Executive Table brings Italian-inspired design to the CEO suite. Features a leather desk pad inlay, brass accent trim, and integrated power module.", features: { Material: "MDF with High-Gloss Lacquer", Size: "220cm x 100cm x 75cm", "Desk Pad": "Leather inlay top", Drawers: "4-Drawer Pedestal with lock", "Power Module": "Built-in 4x sockets + USB", Frame: "Brass-Accent Steel Base" } },
  { id: "ceo-elite-desk", name: "Elite Executive Desk", category: "CEO Tables", price: 145000, image: ceoEliteImg, featured: true, description: "The Elite Executive Desk combines modern aesthetics with powerful functionality. L-shape configuration with full cable management and modesty panel.", features: { Material: "MDF with Melamine Finish", Size: "200cm + 160cm Return", Drawers: "3-Drawer Pedestal with lock", "Cable Management": "Integrated cable tray", "Modesty Panel": "Full front panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ceo-imperial-desk", name: "Imperial Executive Desk", category: "CEO Tables", price: 175000, image: ceoImperialImg, badge: "Flagship", description: "The Imperial Executive Desk is our most prestigious offering. 240cm worksurface with motorized AV pop-up, built-in USB charging, and natural wood veneer.", features: { Material: "Natural Wood Veneer", Size: "240cm x 110cm x 75cm", "AV Integration": "Motorized pop-up AV module", Drawers: "Twin pedestals (6 drawers total)", "USB Charging": "Built-in 4x USB-C ports", Frame: "Premium Hardwood Pedestal" } },
  { id: "ceo-royal-prestige", name: "Royal Prestige Executive Table", category: "CEO Tables", price: 185000, image: ceoRoyalImg, badge: "Ultra Premium", description: "The Royal Prestige is designed for chairman-level offices. Full executive suite with desk, side return, credenza, and bookshelf — all in matching veneer.", features: { Material: "Premium Natural Veneer", Size: "250cm x 120cm x 75cm", Includes: "Desk + Return + Credenza + Shelf", Drawers: "8-Drawer total across all units", "Cable Management": "Full integrated system", Frame: "Solid Hardwood Construction" } },
];

// ============ EXECUTIVE TABLES (NEW) ============
export const executiveTables: Product[] = [
  { id: "et-command", name: "Command Executive Desk", category: "Executive Tables", price: 95000, image: etCommandImg, badge: "Popular", featured: true, description: "The Command Executive Desk is designed for directors and VPs. 180cm worksurface with integrated cable management and 3-drawer pedestal.", features: { Material: "MDF with Melamine Finish", Size: "180cm x 80cm x 75cm", Drawers: "3-Drawer Pedestal with lock", "Cable Management": "Grommet holes + cable tray", "Modesty Panel": "Full front panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "et-elite", name: "Elite Executive Table", category: "Executive Tables", price: 85000, image: etEliteImg, description: "The Elite Executive Table offers a clean, modern workspace for senior managers.", features: { Material: "MDF with Melamine Finish", Size: "160cm x 80cm x 75cm", Drawers: "3-Drawer Pedestal", "Cable Management": "Dual grommet holes", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "et-impact", name: "Impact Executive Desk", category: "Executive Tables", price: 78000, image: etImpactImg, description: "The Impact Executive Desk makes a statement with its bold proportions and clean lines.", features: { Material: "MDF with Melamine Finish", Size: "160cm x 75cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Modesty Panel": "Full front panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "et-infinity", name: "Infinity Executive Table", category: "Executive Tables", price: 88000, image: etInfinityImg, description: "The Infinity Executive Table features a seamless curved front edge and premium finish.", features: { Material: "MDF with Melamine Finish", Size: "180cm x 80cm x 75cm", Drawers: "3-Drawer Pedestal with lock", "Cable Management": "Integrated cable box", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "et-legacy", name: "Legacy Executive Desk", category: "Executive Tables", price: 105000, image: etLegacyImg, badge: "Premium", description: "The Legacy Executive Desk features a veneer finish and brass hardware for timeless appeal.", features: { Material: "Natural Wood Veneer", Size: "180cm x 90cm x 75cm", Drawers: "4-Drawer Pedestal with lock", Edge: "Solid Wood Edging", "Side Return": "120cm return available", Frame: "Premium Hardwood" } },
  { id: "et-nexus-6", name: "Nexus Table 6", category: "Executive Tables", price: 72000, image: etNexusImg, description: "The Nexus Table 6 combines compact efficiency with executive presence.", features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "2-Drawer Mobile Pedestal", "Cable Management": "Grommet holes", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "et-nova", name: "Nova Executive Desk", category: "Executive Tables", price: 82000, image: etNovaImg, description: "The Nova Executive Desk features a futuristic design with floating top effect.", features: { Material: "MDF with Melamine Finish", Size: "160cm x 80cm x 75cm", Drawers: "3-Drawer Pedestal", "Cable Management": "Under-desk cable basket", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "et-signature", name: "Signature Executive Table", category: "Executive Tables", price: 98000, image: etSignatureImg, badge: "Best Seller", featured: true, description: "The Signature Executive Table is our most refined design for discerning professionals.", features: { Material: "MDF with High-Gloss Finish", Size: "180cm x 85cm x 75cm", Drawers: "3-Drawer Pedestal with lock", "Cable Management": "Integrated cable tray", "Modesty Panel": "Glass modesty panel", Frame: "Chrome-Finish Steel" } },
  { id: "et-space", name: "Space Executive Desk", category: "Executive Tables", price: 75000, image: etSpaceImg, description: "The Space Executive Desk maximizes workspace with a minimal footprint.", features: { Material: "MDF with Melamine Finish", Size: "160cm x 75cm x 75cm", Drawers: "2-Drawer Pedestal", "Cable Management": "Grommet holes", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "et-vision", name: "Vision Executive Desk", category: "Executive Tables", price: 92000, image: etVisionImg, description: "The Vision Executive Desk features a glass front accent and integrated LED lighting option.", features: { Material: "MDF with Melamine Finish", Size: "180cm x 80cm x 75cm", Drawers: "3-Drawer Pedestal with lock", "Cable Management": "Integrated cable box", "LED Accent": "Optional LED strip lighting", Frame: "18-Gauge MS Powder-Coated" } },
];

// ============ MANAGER TABLES (NEW) ============
export const managerTables: Product[] = [
  { id: "mt-apex", name: "Apex Manager Table", category: "Manager Tables", price: 65000, image: mtApexImg, badge: "Popular", featured: true, description: "The Apex Manager Table offers a spacious L-shape configuration perfect for multitasking managers.", features: { Material: "MDF with Melamine Finish", Size: "160cm + 100cm Return", Drawers: "3-Drawer Pedestal", "Cable Management": "Grommet holes", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-edge-table", name: "Edge Manager Table", category: "Manager Tables", price: 55000, image: mtEdgeImg, description: "The Edge Manager Table features a clean, angular design for modern offices.", features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Modesty Panel": "Front panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-elite-table", name: "Elite Manager Table", category: "Manager Tables", price: 62000, image: mtEliteImg, description: "The Elite Manager Table bridges the gap between manager and executive desking.", features: { Material: "MDF with Melamine Finish", Size: "160cm x 75cm x 75cm", Drawers: "3-Drawer Pedestal", "Cable Management": "Dual grommet holes", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-flux", name: "Flux Manager Table", category: "Manager Tables", price: 48000, image: mtFluxImg, description: "The Flux Manager Table adapts to your workflow with modular add-on options.", features: { Material: "MDF with Melamine Finish", Size: "140cm x 70cm x 75cm", Drawers: "Mobile 2-Drawer Pedestal", Edge: "PVC Edge Banding", "Add-ons": "Side shelf, monitor riser available", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-infinity-table", name: "Infinity Manager Table", category: "Manager Tables", price: 58000, image: mtInfinityImg, description: "The Infinity Manager Table features a curved front edge for a softer, more welcoming workspace.", features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "2-Drawer Pedestal with lock", "Cable Management": "Grommet holes", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-metro", name: "Metro Manager Table", category: "Manager Tables", price: 52000, image: mtMetroImg, description: "The Metro Manager Table is designed for city offices where space is at a premium.", features: { Material: "MDF with Melamine Finish", Size: "140cm x 70cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Modesty Panel": "Partial panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-nova-table", name: "Nova Manager Table", category: "Manager Tables", price: 55000, image: mtNovaImg, description: "The Nova Manager Table features a floating-top design for a contemporary look.", features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "2-Drawer Mobile Pedestal", "Cable Management": "Under-desk basket", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-orion", name: "Orion Manager Table", category: "Manager Tables", price: 60000, image: mtOrionImg, description: "The Orion Manager Table offers an expansive worksurface for managers who need room to spread out.", features: { Material: "MDF with Melamine Finish", Size: "160cm x 80cm x 75cm", Drawers: "3-Drawer Pedestal", "Cable Management": "Grommet holes", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-prime-table", name: "Prime Manager Table", category: "Manager Tables", price: 58000, image: mtPrimeImg, description: "The Prime Manager Table sets the standard for mid-level management desking.", features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "3-Drawer Pedestal with lock", Edge: "PVC Edge Banding", "Modesty Panel": "Full front panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-pulse", name: "Pulse Manager Table", category: "Manager Tables", price: 50000, image: mtPulseImg, description: "The Pulse Manager Table keeps the energy flowing with its dynamic angular design.", features: { Material: "MDF with Melamine Finish", Size: "140cm x 70cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Cable Management": "Grommet holes", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-shift-ergo", name: "Shift Ergonomic Manager Table", category: "Manager Tables", price: 72000, image: mtShiftErgoImg, badge: "Ergonomic", description: "The Shift Ergonomic Manager Table features manual height adjustment for sit-stand flexibility.", features: { Material: "MDF Melamine Top", "Height Range": "72cm–110cm", Mechanism: "Manual Crank Adjustment", Drawers: "Mobile 2-Drawer Pedestal", Edge: "PVC Edge Banding", Frame: "Heavy-Duty Steel" } },
  { id: "mt-vertex", name: "Vertex Manager Table", category: "Manager Tables", price: 56000, image: mtVertexImg, description: "The Vertex Manager Table features a bold geometric base that adds architectural interest.", features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Modesty Panel": "Partial panel", Frame: "Geometric Steel Base" } },
  { id: "mt-vibe", name: "Vibe Manager Table", category: "Manager Tables", price: 52000, image: mtVibeImg, description: "The Vibe Manager Table creates a positive workspace energy with warm wood tones.", features: { Material: "MDF with Wood-Grain Melamine", Size: "140cm x 70cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Cable Management": "Grommet holes", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-smart-lshape", name: "Woodex Smart Series L-Shape", category: "Manager Tables", price: 78000, image: mtSmartLshapeImg, badge: "Best Seller", featured: true, description: "The Woodex Smart Series L-Shape is our most versatile manager desk with integrated smart features.", features: { Material: "MDF with Melamine Finish", Size: "160cm + 120cm Return", Drawers: "3-Drawer Pedestal with lock", "Cable Management": "Full integrated cable system", "USB Charging": "Built-in 2x USB ports", Frame: "18-Gauge MS Powder-Coated" } },
];

// Office Desks (existing — kept for backward compat)
export const officeDesks: Product[] = [
  { id: "desk-executive", name: "Executive Director Desk", category: "Office Desks", subcategory: "Executive Desks", price: 95000, image: deskExecutiveImg, badge: "Premium", featured: true, description: "Commanding executive desk crafted from premium MDF with melamine finish and integrated cable management.", features: { Material: "MDF with Melamine Finish", Size: "180cm x 80cm x 75cm", "Cable Management": "Integrated wire tray", Edge: "PVC Edge Banding", Drawers: "3-Drawer Pedestal", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "desk-l-shape", name: "L-Shape Manager Desk", category: "Office Desks", subcategory: "L-Shape Desks", price: 78000, image: deskExecutiveImg, description: "Spacious L-shaped desk with return unit providing ample workspace.", features: { Material: "MDF with Melamine Finish", Size: "160cm + 120cm Return", "Cable Management": "Grommet holes", Edge: "PVC Edge Banding", Drawers: "3-Drawer Pedestal with Lock", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "desk-standing", name: "Height-Adjustable Standing Desk", category: "Office Desks", subcategory: "Standing Desks", price: 65000, image: deskStandingImg, badge: "Ergonomic", description: "Modern sit-stand desk with manual height adjustment.", features: { Material: "MDF Melamine Top", "Height Range": "72cm–120cm", Mechanism: "Manual Crank Adjustment", "Weight Capacity": "80kg", Edge: "PVC Edge Banding", Frame: "Heavy-Duty Steel" } },
  { id: "desk-computer", name: "Computer Workstation Desk", category: "Office Desks", subcategory: "Computer Desks", price: 35000, image: workstationImg, description: "Compact computer desk with keyboard tray, CPU holder, and cable routing.", features: { Material: "MDF with Melamine Finish", Size: "120cm x 60cm x 75cm", "Keyboard Tray": "Slide-out", "CPU Holder": "Side-mounted", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "desk-manager", name: "Manager Office Desk", category: "Office Desks", subcategory: "Manager Desks", price: 55000, image: deskExecutiveImg, description: "Professional manager desk with front modesty panel and integrated drawers.", features: { Material: "MDF with Melamine Finish", Size: "150cm x 75cm x 75cm", Drawers: "2-Drawer Pedestal", Edge: "PVC Edge Banding", "Modesty Panel": "Full front panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "desk-director", name: "Director Suite Desk", category: "Office Desks", subcategory: "Director Desks", price: 125000, image: deskExecutiveImg, badge: "Luxury", description: "Flagship director desk with veneer finish, brass accents, and integrated side credenza.", features: { Material: "Natural Wood Veneer Finish", Size: "200cm x 90cm x 75cm", Drawers: "4-Drawer Pedestal with Lock", Edge: "Solid Wood Edging", "Side Return": "Credenza with storage", Frame: "Premium Hardwood" } },
];

// Workstations
export const workstations: Product[] = [
  { id: "ws-2-seater", name: "2-Person Workstation Cluster", category: "Workstations", subcategory: "2-Seater", price: 45000, image: workstationImg, description: "Face-to-face 2-person workstation with privacy divider.", features: { Material: "MDF Melamine", Size: "240cm x 120cm", Divider: "Fabric Privacy Panel 30cm", "Wire Management": "Central cable tray", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-4-seater", name: "4-Person Workstation Cluster", category: "Workstations", subcategory: "4-Seater", price: 85000, image: workstationImg, badge: "Best Seller", featured: true, description: "Popular 4-person cluster workstation with fabric dividers.", features: { Material: "MDF Melamine", Size: "240cm x 240cm", Divider: "Fabric Privacy Panel 30cm", "Wire Management": "Central cable tray", "Power Outlets": "4x integrated sockets", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-6-seater", name: "6-Person Workstation Cluster", category: "Workstations", subcategory: "6-Seater", price: 120000, image: workstationImg, description: "High-density 6-person workstation for open-plan offices.", features: { Material: "MDF Melamine", Size: "360cm x 240cm", Divider: "Acoustic Fabric Panel", "Wire Management": "Dual cable trays", "Power Outlets": "6x integrated sockets", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-linear", name: "Linear Bench Workstation", category: "Workstations", subcategory: "Linear", price: 38000, image: workstationImg, description: "Single-row bench desking for call centers.", features: { Material: "MDF Melamine", "Size per seat": "120cm x 60cm", Divider: "Desk-mounted screen 25cm", "Wire Management": "Under-desk cable basket", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-cubicle", name: "Cubicle Workstation", category: "Workstations", subcategory: "Cubicle", price: 55000, image: workstationImg, description: "Three-sided cubicle with overhead storage and pinboard panels.", features: { Material: "MDF Melamine", Size: "150cm x 150cm x 135cm", Panels: "3-sided fabric panels", Storage: "Overhead bin", "Pin Board": "Integrated fabric pinboard", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-open-plan", name: "Open Plan Desk System", category: "Workstations", subcategory: "Open Plan", price: 32000, image: workstationImg, description: "Minimalist shared desk system with no dividers.", features: { Material: "MDF Melamine", "Size per seat": "140cm x 70cm", "Wire Management": "Central trough", Edge: "PVC Edge Banding", Finish: "Multiple color options", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-evolution", name: "Evolution Workstation", category: "Workstations", subcategory: "4-Seater", price: 92000, image: wsEvolutionImg, badge: "New", description: "Next-gen 4-person workstation with acoustic panels and integrated power modules.", features: { Material: "MDF Melamine", Size: "280cm x 240cm", Divider: "Acoustic felt panels", "Power Outlets": "4x power + 4x USB-C", "Wire Management": "Dual cable trays", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-flow", name: "Flow Workstation", category: "Workstations", subcategory: "Linear", price: 42000, image: wsFlowImg, description: "Flowing linear bench with curved desk edges for a softer workspace.", features: { Material: "MDF Melamine", "Size per seat": "130cm x 65cm", Divider: "Low screen 20cm", "Wire Management": "Under-desk basket", Edge: "Rounded PVC Edge", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-horizon", name: "Horizon Workstation", category: "Workstations", subcategory: "6-Seater", price: 135000, image: wsHorizonImg, badge: "Premium", description: "Premium 6-person workstation with height-adjustable desk segments.", features: { Material: "MDF Melamine", Size: "360cm x 260cm", Divider: "Glass privacy panels", "Height Adjust": "Manual crank per seat", "Power Outlets": "6x integrated sockets", Frame: "Heavy-Duty Steel" } },
  { id: "ws-momentum", name: "Momentum Workstation", category: "Workstations", subcategory: "4-Seater", price: 78000, image: wsMomentumImg, description: "4-person workstation with built-in storage pedestals at each seat.", features: { Material: "MDF Melamine", Size: "240cm x 240cm", Divider: "Fabric panel 35cm", Storage: "4x mobile pedestals included", "Wire Management": "Central cable tray", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "ws-nexus-ws", name: "Nexus Workstation", category: "Workstations", subcategory: "2-Seater", price: 48000, image: wsNexusImg, description: "Compact 2-person workstation with side-by-side configuration.", features: { Material: "MDF Melamine", Size: "260cm x 70cm", Divider: "Desk-mounted screen 30cm", "Wire Management": "Under-desk cable basket", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
];

// Office Sofas
export const officeSofas: Product[] = [
  { id: "sofa-3-seater", name: "Executive 3-Seater Office Sofa", category: "Office Sofas", subcategory: "3-Seater", price: 85000, image: loungeImg, badge: "Premium", featured: true, description: "Premium 3-seater office sofa upholstered in Italian-inspired leatherette.", features: { Material: "Premium Leatherette", Foam: "MoltyFoam High-Density", Frame: "Kiln-Dried Hardwood", Size: "200cm x 80cm x 85cm", Legs: "Chrome-Finish Metal", "Seat Depth": "55cm" } },
  { id: "sofa-2-seater", name: "Office 2-Seater Sofa", category: "Office Sofas", subcategory: "2-Seater", price: 58000, image: loungeImg, description: "Compact 2-seater sofa for small reception areas.", features: { Material: "Premium Leatherette", Foam: "MoltyFoam High-Density", Frame: "Kiln-Dried Hardwood", Size: "150cm x 80cm x 85cm", Legs: "Chrome-Finish Metal", "Seat Depth": "55cm" } },
  { id: "sofa-reception", name: "Reception Sofa Set", category: "Office Sofas", subcategory: "Reception", price: 120000, image: heroSofaImg, badge: "Best Seller", description: "Complete reception sofa set (3+1+1).", features: { Material: "Premium Fabric Upholstery", Foam: "MoltyFoam", Configuration: "3-Seater + 2 Single Chairs", Frame: "Kiln-Dried Hardwood", Legs: "Brushed Steel", "Color Options": "Gray, Navy, Beige" } },
  { id: "sofa-lounge-chair", name: "Lounge Accent Chair", category: "Office Sofas", subcategory: "Lounge", price: 42000, image: loungeImg, description: "Contemporary accent chair for executive lounges.", features: { Material: "Velvet Upholstery", Foam: "MoltyFoam", Frame: "Powder-Coated Metal", Size: "75cm x 80cm x 85cm", Legs: "Gold-Finish Metal", "Color Options": "Emerald, Navy, Blush" } },
];

// Meeting Tables (expanded)
export const meetingTables: Product[] = [
  { id: "mt-conference-8", name: "Conference Table 8-Seater", category: "Meeting Tables", subcategory: "Conference", price: 95000, image: meetingRoomImg, badge: "Popular", featured: true, description: "Professional 8-seater conference table with integrated power and data ports.", features: { Material: "MDF with Melamine Finish", Size: "240cm x 120cm x 75cm", "Power Integration": "4x power + 2x data ports", Edge: "PVC Edge Banding", "Wire Management": "Central cable box", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-conference-12", name: "Conference Table 12-Seater", category: "Meeting Tables", subcategory: "Conference", price: 145000, image: meetingRoomImg, badge: "Premium", description: "Large 12-seater boardroom table with wire management and AV integration.", features: { Material: "MDF with Melamine Finish", Size: "360cm x 140cm x 75cm", "Power Integration": "6x power + 4x data ports", Edge: "PVC Edge Banding", "AV Integration": "Central AV box", Frame: "Heavy-Duty Steel Base" } },
  { id: "mt-round", name: "Round Meeting Table", category: "Meeting Tables", subcategory: "Round", price: 55000, image: meetingRoomImg, description: "4-6 person round meeting table for equal participation.", features: { Material: "MDF with Melamine Finish", Diameter: "120cm", Height: "75cm", Edge: "PVC Edge Banding", Base: "Central Column Base", Frame: "Chrome-Finish Steel" } },
  { id: "mt-boardroom", name: "Premium Boardroom Table", category: "Meeting Tables", subcategory: "Boardroom", price: 225000, image: meetingRoomImg, badge: "Luxury", description: "Flagship boardroom table with veneer finish and built-in AV.", features: { Material: "Natural Wood Veneer", Size: "480cm x 160cm x 75cm", "Power Integration": "8x power + 6x data", "AV Integration": "Motorized AV pop-up", Edge: "Solid Wood Edging", Base: "Premium Hardwood Pedestal" } },
  { id: "mt-citrus", name: "Citrus Meeting Table", category: "Meeting Tables", subcategory: "Conference", price: 65000, image: meetingCitrusImg, description: "Fresh, modern 6-seater meeting table with vibrant design options.", features: { Material: "MDF with Melamine Finish", Size: "200cm x 100cm x 75cm", Edge: "PVC Edge Banding", "Cable Management": "Grommet holes", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-jupiter", name: "Jupiter Conference Table", category: "Meeting Tables", subcategory: "Conference", price: 85000, image: meetingGrandImg, description: "8-seater conference table with commanding presence and integrated power.", features: { Material: "MDF with Melamine Finish", Size: "240cm x 120cm x 75cm", "Power Integration": "4x power sockets", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-cameron", name: "Cameron Meeting Table", category: "Meeting Tables", subcategory: "Conference", price: 72000, image: meetingDiamondImg, description: "6-seater meeting table with clean lines and oval top.", features: { Material: "MDF with Melamine Finish", Size: "200cm x 100cm x 75cm", Edge: "PVC Edge Banding", "Cable Management": "Central grommet", Frame: "Steel Pedestal Base" } },
  { id: "mt-diamond-conf", name: "Diamond Conference Table", category: "Meeting Tables", subcategory: "Conference", price: 110000, image: meetingImperialImg, badge: "Premium", description: "10-seater diamond-shaped conference table for dynamic discussions.", features: { Material: "MDF with Melamine Finish", Size: "300cm x 140cm x 75cm", "Power Integration": "6x power + 4x data", Edge: "PVC Edge Banding", "AV Integration": "Central AV box", Frame: "Heavy-Duty Steel" } },
  { id: "mt-circular", name: "Circular Conference Table", category: "Meeting Tables", subcategory: "Round", price: 78000, image: meetingCircularImg, description: "Large circular table for inclusive, equal-participation meetings.", features: { Material: "MDF with Melamine Finish", Diameter: "150cm", Height: "75cm", Edge: "PVC Edge Banding", Base: "Central Column Base", Frame: "Chrome-Finish Steel" } },
  { id: "mt-circle-round", name: "Circle Round Table", category: "Meeting Tables", subcategory: "Round", price: 45000, image: meetingRoomImg, description: "Compact round table for 4-person huddle meetings.", features: { Material: "MDF with Melamine Finish", Diameter: "100cm", Height: "75cm", Edge: "PVC Edge Banding", Base: "Central Column", Frame: "Chrome-Finish Steel" } },
  { id: "mt-edge-conf", name: "Edge Conference Table", category: "Meeting Tables", subcategory: "Conference", price: 88000, image: meetingRoomImg, description: "8-seater table with beveled edges and cable management.", features: { Material: "MDF with Melamine Finish", Size: "240cm x 120cm x 75cm", "Cable Management": "Integrated cable box", Edge: "Beveled PVC Edge", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-innovate", name: "Innovate Meeting Table", category: "Meeting Tables", subcategory: "Conference", price: 95000, image: meetingRoomImg, badge: "New", description: "Tech-forward meeting table with wireless charging zones.", features: { Material: "MDF with Melamine Finish", Size: "240cm x 120cm x 75cm", "Wireless Charging": "4x Qi charging zones", "Power Integration": "4x power + 2x USB-C", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-firestone", name: "Firestone Conference Table", category: "Meeting Tables", subcategory: "Conference", price: 68000, image: meetingRoomImg, description: "Solid 6-seater conference table with robust steel frame.", features: { Material: "MDF with Melamine Finish", Size: "200cm x 100cm x 75cm", Edge: "PVC Edge Banding", Frame: "Heavy-Gauge Steel", "Cable Management": "Grommet holes" } },
  { id: "mt-forest", name: "Forest Meeting Table", category: "Meeting Tables", subcategory: "Conference", price: 75000, image: meetingRoomImg, description: "Nature-inspired meeting table with wood-grain finish.", features: { Material: "MDF with Wood-Grain Melamine", Size: "220cm x 110cm x 75cm", Edge: "PVC Edge Banding", "Cable Management": "Central grommet", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-grand", name: "Grand Conference Table", category: "Meeting Tables", subcategory: "Boardroom", price: 185000, image: meetingGrandImg, badge: "Premium", description: "16-seater grand conference table for large boardrooms.", features: { Material: "MDF with Melamine Finish", Size: "420cm x 150cm x 75cm", "Power Integration": "8x power + 6x data", "AV Integration": "Twin AV boxes", Edge: "PVC Edge Banding", Frame: "Heavy-Duty Steel" } },
  { id: "mt-imperial-exec", name: "Imperial Executive Meeting Table", category: "Meeting Tables", subcategory: "Boardroom", price: 195000, image: meetingImperialImg, badge: "Luxury", description: "Executive boardroom table with veneer finish and premium hardware.", features: { Material: "Natural Wood Veneer", Size: "400cm x 150cm x 75cm", "Power Integration": "8x power + 4x data", Edge: "Solid Wood Edging", "AV Integration": "Motorized AV pop-up", Frame: "Premium Hardwood" } },
  { id: "mt-infinity-exec", name: "Infinity Executive Meeting Table", category: "Meeting Tables", subcategory: "Conference", price: 125000, image: meetingDiamondImg, description: "12-seater with curved edges and integrated cable management.", features: { Material: "MDF with Melamine Finish", Size: "360cm x 140cm x 75cm", "Power Integration": "6x power + 4x data", Edge: "Curved PVC Edge", "Cable Management": "Central cable box", Frame: "Heavy-Duty Steel" } },
  { id: "mt-juventus", name: "Juventus Meeting Table", category: "Meeting Tables", subcategory: "Conference", price: 82000, image: meetingCitrusImg, description: "Sporty 8-seater meeting table with dynamic angular design.", features: { Material: "MDF with Melamine Finish", Size: "240cm x 120cm x 75cm", Edge: "PVC Edge Banding", "Cable Management": "Grommet holes", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-luxury-conf", name: "Luxury Conference Table", category: "Meeting Tables", subcategory: "Boardroom", price: 210000, image: meetingImperialImg, badge: "Ultra Premium", description: "Ultra-luxury boardroom table with marble-effect top and gold accents.", features: { Material: "MDF with Marble-Effect Finish", Size: "450cm x 160cm x 75cm", "Power Integration": "10x power + 8x data", Edge: "Gold-Accent Edging", "AV Integration": "Dual motorized pop-ups", Frame: "Premium Steel with Gold Finish" } },
  { id: "mt-nexus-meeting", name: "Nexus Meeting Table", category: "Meeting Tables", subcategory: "Conference", price: 72000, image: meetingNexusImg, description: "Versatile 6-seater meeting table that connects for larger configurations.", features: { Material: "MDF with Melamine Finish", Size: "200cm x 100cm x 75cm", Edge: "PVC Edge Banding", "Cable Management": "Central grommet", Modular: "Connectable for 12+ seating", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-noxx-conf", name: "Noxx Conference Table", category: "Meeting Tables", subcategory: "Conference", price: 98000, image: meetingRoomImg, badge: "New", description: "Modern conference table with integrated display mount support.", features: { Material: "MDF with Melamine Finish", Size: "280cm x 130cm x 75cm", "Display Mount": "Central VESA mount support", "Power Integration": "4x power + 4x data", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "mt-noxx-prime", name: "Noxx Prime Conference Table", category: "Meeting Tables", subcategory: "Boardroom", price: 155000, image: meetingRoomImg, badge: "Premium", description: "Premium 14-seater conference table with dual AV integration points.", features: { Material: "MDF with Melamine Finish", Size: "400cm x 150cm x 75cm", "Power Integration": "8x power + 6x data", "AV Integration": "Dual AV boxes", Edge: "PVC Edge Banding", Frame: "Heavy-Duty Steel" } },
  { id: "mt-saturn", name: "Saturn Conference Table", category: "Meeting Tables", subcategory: "Round", price: 68000, image: meetingRoomImg, description: "Large round conference table seating 8 comfortably.", features: { Material: "MDF with Melamine Finish", Diameter: "180cm", Height: "75cm", Edge: "PVC Edge Banding", Base: "Heavy-Duty Central Column", Frame: "Chrome-Finish Steel" } },
  { id: "mt-sapphire-exec", name: "Sapphire Executive Table", category: "Meeting Tables", subcategory: "Conference", price: 115000, image: meetingRoomImg, badge: "Premium", description: "10-seater executive meeting table with glass accent panel.", features: { Material: "MDF with Melamine + Glass Accent", Size: "300cm x 130cm x 75cm", "Power Integration": "6x power + 4x data", Edge: "PVC Edge Banding", "Glass Panel": "Central tempered glass inlay", Frame: "Chrome-Finish Steel" } },
];

// Reception Desks
export const receptionDesks: Product[] = [
  { id: "rd-modern", name: "Modern Reception Counter", category: "Reception Desks", subcategory: "Modern", price: 85000, image: receptionDeskImg, badge: "Popular", featured: true, description: "Sleek modern reception desk with high counter and built-in storage.", features: { Material: "MDF with Melamine Finish", Size: "200cm x 60cm x 110cm", Counter: "High reception counter", Storage: "Built-in shelving", "LED Option": "Accent lighting available", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "rd-l-shape", name: "L-Shape Reception Desk", category: "Reception Desks", subcategory: "L-Shape", price: 110000, image: receptionDeskImg, description: "Spacious L-shaped reception desk accommodating 2 receptionists.", features: { Material: "MDF with Melamine Finish", Size: "240cm + 180cm Return", Counter: "Dual-level counter", Storage: "4-door base cabinet", Glass: "Tempered glass accent panel", Frame: "18-Gauge MS Powder-Coated" } },
  { id: "rd-curved", name: "Curved Reception Counter", category: "Reception Desks", subcategory: "Curved", price: 135000, image: receptionDeskImg, badge: "Premium", description: "Elegant curved reception desk that creates a welcoming first impression.", features: { Material: "MDF with Laminate/Veneer", Size: "280cm Curved x 110cm Height", Counter: "Curved reception counter", Branding: "Backlit logo panel option", Storage: "Integrated filing", Frame: "Custom-Formed Steel" } },
  { id: "rd-standing", name: "Standing Reception Podium", category: "Reception Desks", subcategory: "Standing", price: 45000, image: receptionDeskImg, description: "Compact standing reception podium for small offices.", features: { Material: "MDF with Melamine Finish", Size: "100cm x 50cm x 110cm", Counter: "Single standing counter", Storage: "Internal shelf", Edge: "PVC Edge Banding", Frame: "18-Gauge MS Powder-Coated" } },
];

// Storage
export const storageFurniture: Product[] = [
  { id: "st-filing-3", name: "3-Drawer Filing Cabinet", category: "Storage", subcategory: "Filing Cabinets", price: 22000, image: storageImg, description: "Standard 3-drawer steel filing cabinet with central locking.", features: { Material: "Cold-Rolled Steel", Drawers: "3 Full-Extension", Lock: "Central Locking", Size: "45cm x 62cm x 103cm", "Weight Capacity": "30kg per drawer", Finish: "Powder-Coated" } },
  { id: "st-bookshelf", name: "Open Bookshelf Unit", category: "Storage", subcategory: "Bookshelves", price: 28000, image: bookshelfImg, description: "5-tier open bookshelf for offices and libraries.", features: { Material: "MDF with Melamine Finish", Shelves: "5 Adjustable Shelves", Size: "80cm x 35cm x 180cm", "Weight Capacity": "20kg per shelf", Edge: "PVC Edge Banding", Safety: "Anti-tip wall bracket" } },
  { id: "st-locker-6", name: "6-Door Staff Locker", category: "Storage", subcategory: "Lockers", price: 35000, image: storageImg, description: "Heavy-duty 6-door staff locker with individual key locks.", features: { Material: "Cold-Rolled Steel", Compartments: "6 Individual Doors", Lock: "Individual Key Locks", Size: "90cm x 45cm x 180cm", Ventilation: "Louvered doors", Finish: "Powder-Coated" } },
  { id: "st-credenza", name: "Office Credenza Unit", category: "Storage", subcategory: "Credenzas", price: 48000, image: bookshelfImg, badge: "Popular", description: "Low-profile office credenza with sliding doors.", features: { Material: "MDF with Melamine Finish", Size: "160cm x 45cm x 75cm", Doors: "2 Sliding Doors", Shelves: "2 Adjustable", Edge: "PVC Edge Banding", Lock: "Central Lock" } },
];

// ============ HOME FURNITURE ============

export const bedroomFurniture: Product[] = [
  { id: "bed-set-royal", name: "Royal Bedroom Set", category: "Bedroom", subcategory: "Bed Sets", price: 185000, image: deskExecutiveImg, badge: "Premium", featured: true, description: "Complete bedroom set including king-size bed frame, 2 bedside tables, and dressing table.", features: { Material: "MDF with High-Gloss Lacquer", "Bed Size": "King (180cm x 200cm)", Includes: "Bed + 2 Side Tables + Dressing Table", Headboard: "Upholstered Tufted Panel", Finish: "Walnut / White / Gray", Assembly: "Professional installation included" } },
  { id: "bed-set-modern", name: "Modern Minimalist Bed Set", category: "Bedroom", subcategory: "Bed Sets", price: 145000, image: officeIsometricImg, description: "Clean-line modern bed set with floating nightstands.", features: { Material: "MDF with Wood Veneer", "Bed Size": "Queen (150cm x 200cm)", Includes: "Bed + 2 Floating Nightstands", Headboard: "Wooden slatted panel", Finish: "Oak / Ash / Charcoal", Storage: "Under-bed drawers optional" } },
  { id: "bed-side-table-classic", name: "Classic Bedside Table", category: "Bedroom", subcategory: "Bed Side Tables", price: 18000, image: bookshelfImg, description: "Elegant bedside table with 2 drawers.", features: { Material: "MDF with Melamine", Size: "50cm x 40cm x 55cm", Drawers: "2 Soft-Close Drawers", Finish: "Walnut / White", Legs: "Tapered solid wood", Hardware: "Brushed gold handles" } },
  { id: "bed-side-table-modern", name: "Floating Bedside Shelf", category: "Bedroom", subcategory: "Bed Side Tables", price: 12000, image: officeIsometricImg, description: "Wall-mounted floating nightstand.", features: { Material: "MDF with Laminate", Size: "45cm x 30cm x 20cm", Drawer: "1 Soft-Close Drawer", Shelf: "Open display shelf", Mounting: "Wall-mounted concealed bracket", Finish: "Oak / White / Black" } },
  { id: "dressing-table-vanity", name: "Vanity Dressing Table", category: "Bedroom", subcategory: "Dressing Tables", price: 45000, image: deskExecutiveImg, badge: "Popular", description: "Elegant vanity dressing table with LED-lit mirror.", features: { Material: "MDF with High-Gloss Finish", Size: "120cm x 45cm x 75cm", Mirror: "LED-backlit frameless mirror", Drawers: "5 organizer drawers", Stool: "Included (upholstered)", Finish: "White / Rose Gold accents" } },
  { id: "dressing-table-compact", name: "Compact Dressing Console", category: "Bedroom", subcategory: "Dressing Tables", price: 32000, image: officeIsometricImg, description: "Space-efficient dressing console with flip-up mirror.", features: { Material: "MDF with Melamine", Size: "100cm x 40cm x 75cm", Mirror: "Flip-up concealed mirror", Storage: "Hidden compartments", Drawers: "2 Side drawers", Finish: "Walnut / White" } },
  { id: "bedroom-mirror", name: "Full-Length Standing Mirror", category: "Bedroom", subcategory: "Mirrors", price: 22000, image: officeIsometricImg, description: "Full-length mirror with tilting mechanism.", features: { Material: "Solid Wood Frame", Size: "60cm x 170cm", Mirror: "Full-length beveled glass", Frame: "Solid hardwood", Tilt: "Adjustable tilt mechanism", Finish: "Oak / Black / White" } },
  { id: "bedroom-bench", name: "Upholstered Bedroom Bench", category: "Bedroom", subcategory: "Bench & Settee", price: 28000, image: loungeImg, badge: "New", description: "End-of-bed bench with velvet upholstery.", features: { Material: "Velvet Upholstery", Foam: "MoltyFoam cushioning", Frame: "Kiln-dried hardwood", Size: "120cm x 45cm x 50cm", Legs: "Gold-finish metal", "Color Options": "Emerald, Blush, Navy, Gray" } },
];

export const livingRoomFurniture: Product[] = [
  { id: "home-sofa-3", name: "Classic 3-Seater Home Sofa", category: "Living Room", subcategory: "Home Sofas", price: 95000, image: heroSofaImg, badge: "Best Seller", featured: true, description: "Premium 3-seater home sofa with MoltyFoam cushioning.", features: { Material: "Premium Fabric / Leatherette", Foam: "MoltyFoam High-Density", Frame: "Kiln-Dried Hardwood", Size: "210cm x 90cm x 85cm", Legs: "Solid Wood / Chrome", "Color Options": "12 fabric options" } },
  { id: "home-sofa-l", name: "L-Shape Corner Sofa", category: "Living Room", subcategory: "Home Sofas", price: 145000, image: heroSofaImg, badge: "Premium", description: "Spacious L-shape corner sofa for large living rooms.", features: { Material: "Premium Fabric Upholstery", Foam: "MoltyFoam High-Density", Frame: "Kiln-Dried Hardwood", Size: "280cm x 180cm x 85cm", Configuration: "Reversible chaise", "Color Options": "8 fabric options" } },
  { id: "home-coffee-table", name: "Modern Coffee Table", category: "Living Room", subcategory: "Coffee Tables", price: 28000, image: meetingRoomImg, description: "Contemporary coffee table with tempered glass top.", features: { Material: "MDF Base + Tempered Glass Top", Size: "120cm x 60cm x 45cm", Glass: "8mm Tempered Glass", Shelf: "Lower storage shelf", Finish: "Oak / Walnut / Black", Legs: "Solid Wood" } },
  { id: "home-tv-unit", name: "Wall-Mount TV Unit", category: "Living Room", subcategory: "TV Units", price: 42000, image: officeIsometricImg, badge: "Popular", description: "Floating TV unit with cable management.", features: { Material: "MDF with Melamine Finish", Size: "180cm x 40cm x 35cm", Storage: "2 cabinets + open shelves", "Cable Management": "Rear cable routing", Mounting: "Wall-mounted", "TV Size": "Supports up to 65-inch TV" } },
  { id: "home-console", name: "Entryway Console Table", category: "Living Room", subcategory: "Console Tables", price: 22000, image: bookshelfImg, description: "Slim console table for hallways and entryways.", features: { Material: "MDF with Wood Veneer", Size: "120cm x 35cm x 80cm", Drawers: "2 Small Drawers", Shelf: "Lower display shelf", Finish: "Oak / White / Walnut", Legs: "Tapered solid wood" } },
  { id: "home-side-table", name: "Nesting Side Tables (Set of 2)", category: "Living Room", subcategory: "Side Tables", price: 18000, image: officeIsometricImg, description: "Set of 2 nesting side tables with metal frames.", features: { Material: "MDF Top + Metal Frame", Sizes: "45cm + 35cm diameter", Height: "55cm + 45cm", Finish: "Oak / Marble-Effect / Black", Frame: "Gold / Black Metal", Nesting: "Stackable design" } },
];

export const diningFurniture: Product[] = [
  { id: "dining-set-6", name: "6-Seater Dining Set", category: "Dining", subcategory: "Dining Sets", price: 125000, image: meetingRoomImg, badge: "Best Seller", featured: true, description: "Complete 6-seater dining set with solid wood table and upholstered chairs.", features: { Material: "Solid Sheesham Wood", "Table Size": "180cm x 90cm x 76cm", Chairs: "6 Upholstered Dining Chairs", Finish: "Natural / Dark Walnut / Honey", "Chair Fabric": "Premium linen blend", Assembly: "Professional setup included" } },
  { id: "dining-set-4", name: "4-Seater Compact Dining Set", category: "Dining", subcategory: "Dining Sets", price: 78000, image: meetingRoomImg, description: "Space-efficient 4-seater dining set for apartments.", features: { Material: "MDF with Wood Veneer", "Table Size": "120cm x 80cm x 76cm", Chairs: "4 Upholstered Dining Chairs", Finish: "Oak / White / Gray", "Chair Fabric": "Linen blend", Legs: "Solid wood tapered" } },
  { id: "dining-table-glass", name: "Tempered Glass Dining Table", category: "Dining", subcategory: "Dining Tables", price: 65000, image: meetingRoomImg, description: "Modern glass-top dining table with chrome base.", features: { Material: "10mm Tempered Glass Top", Size: "160cm x 90cm x 76cm", Base: "Chrome-Finish Steel", Seating: "Seats 6 comfortably", Glass: "Clear / Frosted / Smoked", "Weight Capacity": "120kg" } },
  { id: "dining-chairs-set", name: "Upholstered Dining Chairs (Set of 4)", category: "Dining", subcategory: "Dining Chairs", price: 48000, image: loungeImg, description: "Set of 4 upholstered dining chairs with solid wood legs.", features: { Material: "Linen / Velvet Upholstery", Foam: "High-Density Foam", Frame: "Solid Beechwood", Size: "45cm x 55cm x 90cm", "Color Options": "Gray, Navy, Beige, Emerald", Legs: "Solid wood tapered" } },
];

// ============ ALL PRODUCTS AGGREGATION ============

export const allProducts: Product[] = [
  ...executiveChairs,
  ...managerChairs,
  ...staffChairs,
  ...visitorChairs,
  ...ceoTables,
  ...executiveTables,
  ...managerTables,
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

// ============ CATEGORIES ============

import chairExecutiveImg from "@/assets/chair-executive.jpg";

export const categories: Category[] = [
  { id: "executive-chairs", name: "Executive Chairs", description: "Premium PU leather chairs with reclining mechanisms, high-density foam, and aluminum bases.", productCount: executiveChairs.length, image: chairExecutiveImg },
  { id: "manager-chairs", name: "Manager Chairs", description: "Ergonomic mesh chairs with lumbar support, 4D armrests, and tilting mechanisms.", productCount: managerChairs.length, image: atlasManagerImg },
  { id: "staff-chairs", name: "Staff Chairs", description: "Comfortable, durable mesh chairs designed for 8-hour daily use in open offices.", productCount: staffChairs.length, image: gridStaffImg },
  { id: "visitor-chairs", name: "Visitor Chairs", description: "Professional guest seating for reception areas, meeting rooms, and conference spaces.", productCount: visitorChairs.length, image: curveVisitorImg },
  { id: "ceo-tables", name: "CEO Tables", description: "Flagship executive tables with veneer finish, integrated credenzas, and AV modules for C-suite offices.", productCount: ceoTables.length, image: ceoAmbassadorImg },
  { id: "executive-tables", name: "Executive Tables", description: "Professional desks for directors and senior managers with cable management and pedestals.", productCount: executiveTables.length, image: etSignatureImg },
  { id: "manager-tables", name: "Manager Tables", description: "Mid-level management desks with L-shape options, drawers, and smart features.", productCount: managerTables.length, image: mtSmartLshapeImg },
  { id: "office-desks", name: "Office Desks", description: "Executive, manager, and standing desks in MDF melamine and veneer finishes.", productCount: officeDesks.length, image: deskExecutiveImg },
  { id: "workstations", name: "Workstations", description: "Modular 2, 4, 6-person clusters, linear benching, cubicles, and open-plan desk systems.", productCount: workstations.length, image: wsHorizonImg },
  { id: "office-sofas", name: "Office Sofas", description: "Reception sofas, executive lounge seating, and accent chairs.", productCount: officeSofas.length, image: loungeImg },
  { id: "meeting-tables", name: "Meeting Tables", description: "Conference tables from 4-seater to boardroom size with integrated power and AV.", productCount: meetingTables.length, image: meetingGrandImg },
  { id: "reception-desks", name: "Reception Desks", description: "Custom reception counters, L-shape desks, curved counters, and standing podiums.", productCount: receptionDesks.length, image: receptionDeskImg },
  { id: "storage", name: "Storage & Filing", description: "Filing cabinets, bookshelves, lockers, and credenza units.", productCount: storageFurniture.length, image: storageImg },
  { id: "bedroom", name: "Bedroom Furniture", description: "Bed sets, bedside tables, dressing tables, mirrors, and bedroom benches.", productCount: bedroomFurniture.length, image: deskExecutiveImg },
  { id: "living-room", name: "Living Room", description: "Home sofas, coffee tables, side tables, consoles, and TV units.", productCount: livingRoomFurniture.length, image: heroSofaImg },
  { id: "dining", name: "Dining Furniture", description: "Dining sets, dining chairs, and dining tables in solid wood, glass, and modern finishes.", productCount: diningFurniture.length, image: meetingCircularImg },
];

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  switch (categoryId) {
    case "executive-chairs": return executiveChairs;
    case "manager-chairs": return managerChairs;
    case "staff-chairs": return staffChairs;
    case "visitor-chairs": return visitorChairs;
    case "ceo-tables": return ceoTables;
    case "executive-tables": return executiveTables;
    case "manager-tables": return managerTables;
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
