import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sun, SunMedium, Moon } from "lucide-react";
import officeImage from "@/assets/meeting-room.jpg";

interface Material {
  id: string;
  name: string;
  color: string;
  category: "wood" | "stone" | "metal";
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  component: "worktop" | "cabinet" | "chair" | "partition";
}

const materials: Material[] = [
  { id: "light-grey-concrete", name: "Light Grey Chicago Concrete", color: "#c4c4c4", category: "stone" },
  { id: "natural-walnut", name: "Natural Dijon Walnut", color: "#8b6914", category: "wood" },
  { id: "atom-black", name: "Atom Black", color: "#1a1a1a", category: "stone" },
  { id: "cognac-oak", name: "Cognac Kendal Oak", color: "#a0522d", category: "wood" },
  { id: "sand-oak", name: "Sand Gladstone Oak", color: "#c4a35a", category: "wood" },
  { id: "black-pietra", name: "Black Pietra Grigia Gloss", color: "#2d2d2d", category: "stone" },
  { id: "white-marble", name: "White Carrara Marble Gloss", color: "#f5f5f5", category: "stone" },
  { id: "natural-halifax", name: "Natural Halifax Oak", color: "#d4b896", category: "wood" },
  { id: "brown-kansas", name: "Brown Kansas Oak", color: "#8b4513", category: "wood" },
  { id: "black-thermo", name: "Black-Brown Thermo Oak", color: "#3d2b1f", category: "wood" },
  { id: "stone-grey", name: "Stone Grey", color: "#a9a9a9", category: "stone" },
  { id: "grey-bamenda", name: "Grey-Beige Bamenda", color: "#b8a898", category: "wood" },
  { id: "light-concrete", name: "Light Concrete", color: "#d3d3d3", category: "stone" },
  { id: "grey-bardolino", name: "Grey Bardolino Oak", color: "#9c8b7a", category: "wood" },
  { id: "urban-concrete", name: "Urban Concrete", color: "#8f8f8f", category: "stone" },
];

const hotspots: Hotspot[] = [
  { id: "1", x: 15, y: 25, label: "Storage Cabinet", component: "cabinet" },
  { id: "2", x: 35, y: 35, label: "Workstation", component: "worktop" },
  { id: "3", x: 55, y: 50, label: "Desk Partition", component: "partition" },
  { id: "4", x: 48, y: 70, label: "Executive Desk", component: "worktop" },
  { id: "5", x: 70, y: 40, label: "Meeting Table", component: "worktop" },
  { id: "6", x: 75, y: 85, label: "Reception Counter", component: "worktop" },
];

type BrightnessLevel = "light" | "medium" | "dark";

const InteractiveConfigurator = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[4]);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [brightness, setBrightness] = useState<BrightnessLevel>("medium");
  const [componentMaterials, setComponentMaterials] = useState<Record<string, Material>>({});

  const handleMaterialSelect = (material: Material) => {
    setSelectedMaterial(material);
    if (activeHotspot) {
      setComponentMaterials(prev => ({
        ...prev,
        [activeHotspot]: material
      }));
    }
  };

  const handleHotspotClick = (hotspotId: string) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  const filteredMaterials = materials.filter(m => {
    if (brightness === "light") return m.color.match(/^#[a-fA-F0-9]{2}[a-fA-F0-9]{2}[a-fA-F0-9]{2}$/) && 
      parseInt(m.color.slice(1, 3), 16) > 150;
    if (brightness === "dark") return parseInt(m.color.slice(1, 3), 16) < 100;
    return true;
  });

  return (
    <div className="bg-muted/30 rounded-3xl p-6 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Interactive Scene */}
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={officeImage} 
              alt="Office Configuration"
              className="w-full h-auto object-cover"
            />
            
            {/* Hotspots */}
            {hotspots.map((hotspot) => {
              const appliedMaterial = componentMaterials[hotspot.id];
              return (
                <button
                  key={hotspot.id}
                  onClick={() => handleHotspotClick(hotspot.id)}
                  className={cn(
                    "absolute w-10 h-10 rounded-full border-4 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer",
                    "hover:scale-125 focus:outline-none focus:ring-4 focus:ring-accent/50",
                    activeHotspot === hotspot.id 
                      ? "bg-accent border-white scale-125 shadow-xl" 
                      : "bg-white/90 border-white/50 shadow-lg hover:bg-accent hover:border-white"
                  )}
                  style={{ 
                    left: `${hotspot.x}%`, 
                    top: `${hotspot.y}%`,
                  }}
                  aria-label={hotspot.label}
                >
                  {appliedMaterial && (
                    <span 
                      className="absolute inset-1 rounded-full"
                      style={{ backgroundColor: appliedMaterial.color }}
                    />
                  )}
                  <span className={cn(
                    "absolute w-3 h-3 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    activeHotspot === hotspot.id ? "bg-white" : "bg-primary"
                  )} />
                </button>
              );
            })}

            {/* Active Hotspot Label */}
            {activeHotspot && (
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">
                  {hotspots.find(h => h.id === activeHotspot)?.label}
                </span>
                {componentMaterials[activeHotspot] && (
                  <span className="ml-2 opacity-80">
                    — {componentMaterials[activeHotspot].name}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-4 text-center text-muted-foreground text-sm">
            Click on hotspots to select a component, then choose a material from the palette
          </div>
        </div>

        {/* Material Selection Panel */}
        <div className="w-full lg:w-80 xl:w-96">
          <div className="bg-background rounded-2xl p-6 shadow-lg h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1">Product Selection</h3>
              <p className="text-accent font-semibold">Worktops & Surfaces</p>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-4">
              <select className="flex-1 h-10 px-3 rounded-lg border border-border bg-background text-sm focus:border-accent focus:ring-1 focus:ring-accent">
                <option>Decor Surfaces</option>
                <option>Laminates</option>
                <option>Veneers</option>
              </select>
              <select className="flex-1 h-10 px-3 rounded-lg border border-border bg-background text-sm focus:border-accent focus:ring-1 focus:ring-accent">
                <option>Design</option>
                <option>Wood Grain</option>
                <option>Stone</option>
                <option>Solid Color</option>
              </select>
            </div>

            {/* Brightness Toggle */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="text-sm text-muted-foreground">Brightness</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setBrightness("light")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    brightness === "light" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  )}
                  aria-label="Light materials"
                >
                  <Sun className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setBrightness("medium")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    brightness === "medium" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  )}
                  aria-label="Medium materials"
                >
                  <SunMedium className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setBrightness("dark")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    brightness === "dark" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  )}
                  aria-label="Dark materials"
                >
                  <Moon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Material Grid */}
            <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2">
              {(brightness === "medium" ? materials : filteredMaterials).map((material) => (
                <button
                  key={material.id}
                  onClick={() => handleMaterialSelect(material)}
                  className={cn(
                    "group flex flex-col items-center text-center transition-all duration-200",
                    selectedMaterial.id === material.id && "scale-105"
                  )}
                >
                  <div 
                    className={cn(
                      "w-full aspect-square rounded-lg mb-2 border-2 transition-all shadow-sm group-hover:shadow-md group-hover:scale-105",
                      selectedMaterial.id === material.id 
                        ? "border-accent ring-2 ring-accent ring-offset-2" 
                        : "border-border group-hover:border-accent/50"
                    )}
                    style={{ 
                      backgroundColor: material.color,
                      backgroundImage: material.category === "wood" 
                        ? "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)" 
                        : undefined
                    }}
                  />
                  <span className="text-xs font-medium leading-tight text-muted-foreground group-hover:text-foreground line-clamp-2">
                    {material.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Material Info */}
            {selectedMaterial && (
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg shadow-md border border-border"
                    style={{ backgroundColor: selectedMaterial.color }}
                  />
                  <div>
                    <p className="font-semibold text-sm">{selectedMaterial.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{selectedMaterial.category} finish</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveConfigurator;
