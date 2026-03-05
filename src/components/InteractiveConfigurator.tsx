import { useState, useMemo, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  Sofa, TreePine, Layers, X, Check, RotateCcw, Share2, Save,
  ChevronRight, Sun, SunDim, Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

import roomOpenPlan from "@/assets/room-openplan.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomConference from "@/assets/room-conference.jpg";

// ─── Types ────────────────────────────────────────────────────
interface Material {
  id: string;
  name: string;
  color: string;
  price: number;
  category: "wood" | "laminate" | "metal" | "fabric";
  subcategory?: string;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  materialCategory: Material["category"][];
  description: string;
  maskPath: string; // CSS polygon()
}

interface RoomConfig {
  id: string;
  name: string;
  image: string;
  hotspots: Hotspot[];
}

// ─── Materials (30+ swatches) ─────────────────────────────────
const materials: Material[] = [
  // Wood
  { id: "oak-natural", name: "Natural Oak", color: "hsl(35, 50%, 65%)", price: 0, category: "wood", subcategory: "Oak" },
  { id: "oak-white", name: "White Oak", color: "hsl(40, 30%, 80%)", price: 50, category: "wood", subcategory: "Oak" },
  { id: "walnut-dark", name: "Dark Walnut", color: "hsl(25, 40%, 30%)", price: 100, category: "wood", subcategory: "Walnut" },
  { id: "walnut-medium", name: "Medium Walnut", color: "hsl(30, 45%, 40%)", price: 80, category: "wood", subcategory: "Walnut" },
  { id: "cherry", name: "American Cherry", color: "hsl(15, 55%, 45%)", price: 150, category: "wood", subcategory: "Cherry" },
  { id: "mahogany", name: "Mahogany", color: "hsl(10, 50%, 35%)", price: 180, category: "wood", subcategory: "Exotic" },
  { id: "teak", name: "Teak", color: "hsl(35, 45%, 45%)", price: 200, category: "wood", subcategory: "Exotic" },
  { id: "ash-natural", name: "Natural Ash", color: "hsl(45, 35%, 75%)", price: 60, category: "wood", subcategory: "Ash" },
  { id: "ash-black", name: "Black Ash", color: "hsl(0, 0%, 12%)", price: 120, category: "wood", subcategory: "Ash" },

  // Laminate / Solid
  { id: "lam-white", name: "White Laminate", color: "hsl(0, 0%, 95%)", price: 0, category: "laminate", subcategory: "Solid" },
  { id: "lam-grey", name: "Grey Laminate", color: "hsl(0, 0%, 60%)", price: 0, category: "laminate", subcategory: "Solid" },
  { id: "lam-black", name: "Black Laminate", color: "hsl(0, 0%, 10%)", price: 0, category: "laminate", subcategory: "Solid" },
  { id: "lam-beige", name: "Beige Laminate", color: "hsl(40, 25%, 80%)", price: 0, category: "laminate", subcategory: "Solid" },
  { id: "lam-navy", name: "Navy Laminate", color: "hsl(220, 50%, 25%)", price: 30, category: "laminate", subcategory: "Solid" },

  // Metal / Frame
  { id: "met-matte-black", name: "Matte Black", color: "hsl(0, 0%, 10%)", price: 0, category: "metal", subcategory: "Powder Coated" },
  { id: "met-white", name: "Matte White", color: "hsl(0, 0%, 92%)", price: 0, category: "metal", subcategory: "Powder Coated" },
  { id: "met-grey", name: "Industrial Grey", color: "hsl(0, 0%, 45%)", price: 50, category: "metal", subcategory: "Powder Coated" },
  { id: "met-chrome", name: "Chrome", color: "hsl(0, 0%, 80%)", price: 100, category: "metal", subcategory: "Polished" },
  { id: "met-gold", name: "Brushed Gold", color: "hsl(45, 80%, 55%)", price: 150, category: "metal", subcategory: "Polished" },
  { id: "met-bronze", name: "Antique Bronze", color: "hsl(30, 40%, 35%)", price: 120, category: "metal", subcategory: "Polished" },
  { id: "met-copper", name: "Copper", color: "hsl(20, 70%, 50%)", price: 180, category: "metal", subcategory: "Polished" },

  // Fabric / Leather
  { id: "fab-black-leather", name: "Black Leather", color: "hsl(0, 0%, 15%)", price: 350, category: "fabric", subcategory: "Leather" },
  { id: "fab-tan-leather", name: "Tan Leather", color: "hsl(25, 60%, 45%)", price: 350, category: "fabric", subcategory: "Leather" },
  { id: "fab-cognac", name: "Cognac Leather", color: "hsl(20, 70%, 35%)", price: 400, category: "fabric", subcategory: "Leather" },
  { id: "fab-navy-velvet", name: "Navy Velvet", color: "hsl(220, 70%, 25%)", price: 200, category: "fabric", subcategory: "Velvet" },
  { id: "fab-emerald", name: "Emerald Velvet", color: "hsl(150, 60%, 30%)", price: 200, category: "fabric", subcategory: "Velvet" },
  { id: "fab-burgundy", name: "Burgundy Velvet", color: "hsl(345, 60%, 30%)", price: 200, category: "fabric", subcategory: "Velvet" },
  { id: "fab-beige-linen", name: "Beige Linen", color: "hsl(40, 30%, 75%)", price: 120, category: "fabric", subcategory: "Linen" },
  { id: "fab-grey-linen", name: "Grey Linen", color: "hsl(0, 0%, 65%)", price: 120, category: "fabric", subcategory: "Linen" },
  { id: "fab-charcoal-mesh", name: "Charcoal Mesh", color: "hsl(0, 0%, 30%)", price: 180, category: "fabric", subcategory: "Mesh" },
  { id: "fab-blue-mesh", name: "Blue Mesh", color: "hsl(210, 50%, 45%)", price: 180, category: "fabric", subcategory: "Mesh" },
];

// ─── Room Configurations ──────────────────────────────────────
const rooms: RoomConfig[] = [
  {
    id: "open-plan",
    name: "Open Plan Office",
    image: roomOpenPlan,
    hotspots: [
      {
        id: "op-desktops",
        x: 50, y: 48,
        label: "Desk Tops",
        materialCategory: ["wood", "laminate"],
        description: "Workstation desktop surface",
        maskPath: "polygon(18% 38%, 82% 38%, 85% 55%, 15% 55%)",
      },
      {
        id: "op-chairs",
        x: 25, y: 62,
        label: "Chair Upholstery",
        materialCategory: ["fabric"],
        description: "Ergonomic chair fabric",
        maskPath: "polygon(8% 52%, 22% 48%, 28% 52%, 30% 72%, 24% 78%, 8% 75%)",
      },
      {
        id: "op-frames",
        x: 50, y: 70,
        label: "Metal Frames",
        materialCategory: ["metal"],
        description: "Desk & chair frame finish",
        maskPath: "polygon(15% 55%, 85% 55%, 88% 62%, 85% 75%, 15% 75%, 12% 62%)",
      },
      {
        id: "op-partitions",
        x: 50, y: 32,
        label: "Softboard Partitions",
        materialCategory: ["fabric", "laminate"],
        description: "Acoustic partition panels",
        maskPath: "polygon(20% 25%, 80% 25%, 82% 40%, 18% 40%)",
      },
      {
        id: "op-drawers",
        x: 78, y: 65,
        label: "Drawer Units",
        materialCategory: ["wood", "laminate", "metal"],
        description: "Under-desk storage",
        maskPath: "polygon(70% 55%, 88% 55%, 90% 78%, 68% 78%)",
      },
    ],
  },
  {
    id: "executive",
    name: "Executive Room",
    image: roomExecutive,
    hotspots: [
      {
        id: "ex-desk",
        x: 50, y: 52,
        label: "Executive Desk",
        materialCategory: ["wood"],
        description: "CEO desk surface & body",
        maskPath: "polygon(22% 40%, 78% 38%, 82% 58%, 18% 60%)",
      },
      {
        id: "ex-chair",
        x: 72, y: 48,
        label: "Chair Leather",
        materialCategory: ["fabric"],
        description: "Executive chair upholstery",
        maskPath: "polygon(62% 30%, 82% 28%, 86% 62%, 60% 64%)",
      },
      {
        id: "ex-sofa",
        x: 22, y: 55,
        label: "Sofa Upholstery",
        materialCategory: ["fabric"],
        description: "Seating area fabric",
        maskPath: "polygon(2% 42%, 38% 40%, 40% 68%, 0% 70%)",
      },
      {
        id: "ex-wall",
        x: 50, y: 20,
        label: "Wall Panel",
        materialCategory: ["wood", "laminate"],
        description: "Decorative wall paneling",
        maskPath: "polygon(0% 0%, 100% 0%, 100% 38%, 0% 40%)",
      },
    ],
  },
  {
    id: "conference",
    name: "Conference Room",
    image: roomConference,
    hotspots: [
      {
        id: "cf-table",
        x: 50, y: 58,
        label: "Meeting Table",
        materialCategory: ["wood", "laminate"],
        description: "Conference table top surface",
        maskPath: "polygon(15% 45%, 85% 45%, 90% 72%, 10% 72%)",
      },
      {
        id: "cf-chairs",
        x: 20, y: 60,
        label: "Chair Upholstery",
        materialCategory: ["fabric"],
        description: "Conference chair fabric",
        maskPath: "polygon(2% 42%, 18% 40%, 22% 48%, 24% 78%, 18% 82%, 0% 80%)",
      },
      {
        id: "cf-wall",
        x: 50, y: 22,
        label: "Wall Accent",
        materialCategory: ["wood", "laminate"],
        description: "Back wall accent panel",
        maskPath: "polygon(28% 5%, 72% 5%, 74% 42%, 26% 42%)",
      },
      {
        id: "cf-frame",
        x: 82, y: 58,
        label: "Chair Frames",
        materialCategory: ["metal"],
        description: "Metal frame finish",
        maskPath: "polygon(78% 48%, 98% 46%, 100% 80%, 76% 82%)",
      },
    ],
  },
];

const basePrice = 45000;
const STORAGE_KEY = "woodex-configurator-config";

// ─── Texture pattern helpers ──────────────────────────────────
function getTextureStyle(category: Material["category"]): React.CSSProperties {
  switch (category) {
    case "wood":
      return {
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 3px,
          rgba(0,0,0,0.04) 3px,
          rgba(0,0,0,0.04) 4px
        )`,
      };
    case "fabric":
      return {
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: "4px 4px",
      };
    case "metal":
      return {
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)`,
      };
    default:
      return {};
  }
}

// ─── Component ────────────────────────────────────────────────
const InteractiveConfigurator = () => {
  const [activeRoom, setActiveRoom] = useState<string>("open-plan");
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<Material["category"] | "all">("all");
  const [brightnessFilter, setBrightnessFilter] = useState<"all" | "light" | "dark">("all");
  // roomId -> hotspotId -> Material
  const [selections, setSelections] = useState<Record<string, Record<string, Material>>>({});

  const room = rooms.find(r => r.id === activeRoom)!;
  const hotspot = room.hotspots.find(h => h.id === activeHotspot);
  const roomSelections = selections[activeRoom] || {};

  // Load saved config on mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const shared = params.get("config");
      if (shared) {
        const decoded = JSON.parse(atob(shared));
        setSelections(decoded.selections || {});
        setActiveRoom(decoded.room || "open-plan");
        return;
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSelections(parsed.selections || {});
      }
    } catch { /* ignore */ }
  }, []);

  const handleHotspotClick = useCallback((h: Hotspot) => {
    if (activeHotspot === h.id) {
      setActiveHotspot(null);
      setPanelOpen(false);
    } else {
      setActiveHotspot(h.id);
      setPanelOpen(true);
      // Auto-select first compatible category
      const firstCat = h.materialCategory[0];
      setCategoryFilter(firstCat);
    }
  }, [activeHotspot]);

  const handleMaterialSelect = useCallback((mat: Material) => {
    if (!activeHotspot) return;
    setSelections(prev => ({
      ...prev,
      [activeRoom]: {
        ...(prev[activeRoom] || {}),
        [activeHotspot]: mat,
      },
    }));
  }, [activeHotspot, activeRoom]);

  const resetConfig = useCallback(() => {
    setSelections(prev => ({ ...prev, [activeRoom]: {} }));
    setActiveHotspot(null);
    setPanelOpen(false);
    toast({ title: "Configuration Reset", description: `${room.name} materials cleared.` });
  }, [activeRoom, room.name]);

  const saveConfig = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ selections, room: activeRoom }));
    toast({ title: "Configuration Saved", description: "Your material selections have been saved." });
  }, [selections, activeRoom]);

  const shareConfig = useCallback(() => {
    const encoded = btoa(JSON.stringify({ selections, room: activeRoom }));
    const url = `${window.location.origin}${window.location.pathname}?config=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      toast({ title: "Link Copied!", description: "Share this link to let others see your configuration." });
    });
  }, [selections, activeRoom]);

  const totalPrice = useMemo(() => {
    const extra = Object.values(roomSelections).reduce((s, m) => s + m.price, 0);
    return basePrice + extra;
  }, [roomSelections]);

  // Filtered materials based on hotspot compatibility + category + brightness
  const filteredMaterials = useMemo(() => {
    let mats = materials;
    if (hotspot) {
      mats = mats.filter(m => hotspot.materialCategory.includes(m.category));
    }
    if (categoryFilter !== "all") {
      mats = mats.filter(m => m.category === categoryFilter);
    }
    if (brightnessFilter === "light") {
      mats = mats.filter(m => {
        const match = m.color.match(/(\d+)%\)$/);
        return match && parseInt(match[1]) >= 50;
      });
    } else if (brightnessFilter === "dark") {
      mats = mats.filter(m => {
        const match = m.color.match(/(\d+)%\)$/);
        return match && parseInt(match[1]) < 50;
      });
    }
    return mats;
  }, [hotspot, categoryFilter, brightnessFilter]);

  const groupedMaterials = useMemo(() => {
    const groups: Record<string, Material[]> = {};
    filteredMaterials.forEach(m => {
      const key = m.subcategory || "Other";
      if (!groups[key]) groups[key] = [];
      groups[key].push(m);
    });
    return groups;
  }, [filteredMaterials]);

  const availableCategories = useMemo(() => {
    if (!hotspot) return ["all"] as const;
    return ["all", ...hotspot.materialCategory] as const;
  }, [hotspot]);

  const getCatIcon = (cat: string) => {
    switch (cat) {
      case "wood": return <TreePine className="h-3.5 w-3.5" />;
      case "fabric": return <Sofa className="h-3.5 w-3.5" />;
      case "metal": return <Layers className="h-3.5 w-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="relative bg-muted/30">
      {/* Room Tabs */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 py-2 overflow-x-auto">
            {rooms.map(r => (
              <button
                key={r.id}
                onClick={() => {
                  setActiveRoom(r.id);
                  setActiveHotspot(null);
                  setPanelOpen(false);
                }}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                  activeRoom === r.id
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {r.name}
              </button>
            ))}
            <div className="flex-1" />
            <Badge variant="secondary" className="hidden md:flex text-xs">
              {Object.keys(roomSelections).length} / {room.hotspots.length} customized
            </Badge>
          </div>
        </div>
      </div>

      {/* Scene + Panel */}
      <div className="relative flex">
        {/* Scene Viewer */}
        <div className={cn("flex-1 transition-all duration-300", panelOpen && "lg:mr-[360px]")}>
          <div className="p-4 lg:p-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted aspect-[16/10] max-h-[70vh]">
              {/* Base image */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />

              {/* Mask overlays for applied materials */}
              {Object.entries(roomSelections).map(([hId, mat]) => {
                const hs = room.hotspots.find(h => h.id === hId);
                if (!hs) return null;
                return (
                  <div
                    key={hId}
                    className="absolute inset-0 pointer-events-none transition-all duration-500"
                    style={{
                      clipPath: hs.maskPath,
                      backgroundColor: mat.color,
                      mixBlendMode: "multiply",
                      opacity: 0.7,
                      ...getTextureStyle(mat.category),
                    }}
                  />
                );
              })}

              {/* Hotspot markers */}
              {room.hotspots.map(h => {
                const isActive = activeHotspot === h.id;
                const applied = roomSelections[h.id];
                return (
                  <button
                    key={h.id}
                    onClick={() => handleHotspotClick(h)}
                    className={cn(
                      "absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group transition-all duration-300",
                      isActive ? "scale-125" : "hover:scale-110"
                    )}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    {/* Ping */}
                    <span
                      className={cn(
                        "absolute inset-0 rounded-full animate-ping",
                        isActive ? "bg-accent/50" : "bg-white/30"
                      )}
                      style={{ animationDuration: "2s" }}
                    />
                    {/* Dot */}
                    <span
                      className={cn(
                        "relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full border-2 shadow-xl transition-all",
                        isActive
                          ? "bg-accent border-white"
                          : "bg-white/90 border-white/60 hover:bg-accent hover:border-white"
                      )}
                    >
                      {applied ? (
                        <span
                          className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white shadow-inner"
                          style={{ backgroundColor: applied.color }}
                        />
                      ) : (
                        <span className={cn("transition-colors text-xs", isActive ? "text-white" : "text-primary group-hover:text-white")}>
                          {getCatIcon(h.materialCategory[0])}
                        </span>
                      )}
                    </span>
                    {/* Label */}
                    <span
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 -bottom-10 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium shadow-lg transition-all pointer-events-none",
                        isActive
                          ? "bg-accent text-accent-foreground opacity-100"
                          : "bg-primary text-primary-foreground opacity-0 group-hover:opacity-100"
                      )}
                    >
                      {h.label}
                    </span>
                  </button>
                );
              })}

              {/* Active hotspot info card */}
              {hotspot && (
                <div className="absolute bottom-3 left-3 right-3 md:right-auto md:max-w-xs bg-background/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-border">
                  <h4 className="font-bold text-sm">{hotspot.label}</h4>
                  <p className="text-xs text-muted-foreground">{hotspot.description}</p>
                  {roomSelections[hotspot.id] && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="w-4 h-4 rounded border border-border" style={{ backgroundColor: roomSelections[hotspot.id].color }} />
                      <span className="text-xs font-medium">{roomSelections[hotspot.id].name}</span>
                      {roomSelections[hotspot.id].price > 0 && (
                        <span className="text-xs text-accent font-semibold">+PKR {roomSelections[hotspot.id].price}</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Click on hotspot markers to customize materials in real-time
            </p>
          </div>
        </div>

        {/* Slide-in Material Panel */}
        <div
          className={cn(
            "fixed lg:absolute top-0 right-0 h-full w-full sm:w-[360px] bg-background border-l border-border z-40 transition-transform duration-300 overflow-y-auto shadow-2xl",
            panelOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Panel Header */}
          <div className="sticky top-0 bg-background z-10 border-b border-border p-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold uppercase tracking-wider">Product Selection</h3>
              <button onClick={() => { setPanelOpen(false); setActiveHotspot(null); }} className="p-1 rounded-md hover:bg-muted">
                <X className="h-4 w-4" />
              </button>
            </div>
            {hotspot && (
              <p className="text-xs text-muted-foreground">{hotspot.label} — {hotspot.description}</p>
            )}

            {/* Category filter tabs */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {availableCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat as any)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium transition-all capitalize flex items-center gap-1",
                    categoryFilter === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat !== "all" && getCatIcon(cat)}
                  {cat}
                </button>
              ))}
            </div>

            {/* Brightness filter */}
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-muted-foreground mr-1">Tone:</span>
              {([
                { key: "all", icon: <Sun className="h-3.5 w-3.5" />, label: "All" },
                { key: "light", icon: <SunDim className="h-3.5 w-3.5" />, label: "Light" },
                { key: "dark", icon: <Moon className="h-3.5 w-3.5" />, label: "Dark" },
              ] as const).map(b => (
                <button
                  key={b.key}
                  onClick={() => setBrightnessFilter(b.key)}
                  className={cn(
                    "p-1.5 rounded-md transition-all",
                    brightnessFilter === b.key ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"
                  )}
                  title={b.label}
                >
                  {b.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Swatches */}
          <div className="p-4 space-y-5">
            {Object.entries(groupedMaterials).map(([group, mats]) => (
              <div key={group}>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{group}</h4>
                <div className="grid grid-cols-4 gap-2">
                  {mats.map(mat => {
                    const isSelected = activeHotspot && roomSelections[activeHotspot]?.id === mat.id;
                    return (
                      <button
                        key={mat.id}
                        onClick={() => handleMaterialSelect(mat)}
                        className={cn(
                          "relative rounded-lg overflow-hidden transition-all group/swatch",
                          isSelected ? "ring-2 ring-accent ring-offset-2" : "hover:ring-2 hover:ring-border"
                        )}
                      >
                        <div
                          className="aspect-square rounded-lg"
                          style={{ backgroundColor: mat.color, ...getTextureStyle(mat.category) }}
                        />
                        {isSelected && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <p className="text-[10px] leading-tight text-center mt-1 text-muted-foreground group-hover/swatch:text-foreground truncate px-0.5">
                          {mat.name}
                        </p>
                        {mat.price > 0 && (
                          <p className="text-[9px] text-accent font-semibold text-center">+{mat.price}</p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            {filteredMaterials.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">No materials match the current filters.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={resetConfig}>
              <RotateCcw className="h-4 w-4 mr-1.5" /> Reset
            </Button>
            <Button variant="ghost" size="sm" onClick={saveConfig}>
              <Save className="h-4 w-4 mr-1.5" /> Save
            </Button>
            <Button variant="ghost" size="sm" onClick={shareConfig}>
              <Share2 className="h-4 w-4 mr-1.5" /> Share
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Estimated Total</div>
              <div className="text-lg font-bold text-accent">PKR {totalPrice.toLocaleString()}</div>
            </div>
            <Link to="/e-quotation">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Get Quote <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveConfigurator;
