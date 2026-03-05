

# Plan: Interactive Room Configurator with Runtime Material Masking

## Current Problem
The configurator has a single room view with blurry radial gradient overlays that don't visually change the furniture. No room switching, no real masking, no save/share.

## What We'll Build

A **3-room configurator** (Open Plan, Executive, Conference) matching the reference screenshots, with:
- **SVG polygon masks** over each furniture zone for realistic color/texture application via `mix-blend-mode: multiply`
- **Runtime visual feedback** — selecting a material instantly tints that furniture zone
- **Room switching** with unique hotspot layouts per room
- **Save/Share/Reset** toolbar at bottom
- **Right-side slide-in panel** matching the reference UI (Product Selection header, category filter tabs, texture swatches)

## Architecture

```text
InteractiveConfigurator (rewrite)
├── Room Tabs: Open Plan | Executive | Conference
├── Scene Container (relative, overflow-hidden)
│   ├── Base room image (per room)
│   ├── Mask Overlay layers (one per hotspot)
│   │   └── <div> with clip-path:polygon(), fill color, mix-blend-mode:multiply
│   └── Hotspot markers (animated dots)
├── Material Panel (slide-in from right, 350px)
│   ├── Header: "PRODUCT SELECTION" + hotspot label
│   ├── Category tabs: All | Wood | Solid & Laminate | Metal | Fabric
│   ├── Brightness filter (3 icons)
│   └── Swatch grid (color squares with labels)
└── Bottom Bar: Reset | Save Config | Share | Get Quote button
```

## Room Definitions

**Open Plan Office** (5 hotspots):
- Desk tops → wood mask polygon
- Chair upholstery → fabric mask
- Metal frames → frame mask
- Softboard partitions → fabric mask
- Drawer units → wood mask

**Executive Office** (4 hotspots):
- Executive desk → wood mask
- Chair leather → fabric mask
- Sofa upholstery → fabric mask
- Wall panel → wood mask

**Conference Room** (4 hotspots):
- Meeting table → wood mask
- Chair upholstery → fabric mask
- Wall accent → wood mask
- Screen frame → frame mask

## Masking Approach

Each hotspot defines a `maskPath` — a CSS `polygon()` string covering the furniture surface area. When a material is applied:

1. A `<div>` is rendered with `position: absolute`, sized to fill the scene
2. `clip-path: polygon(x1% y1%, x2% y2%, ...)` crops it to the furniture zone
3. `background-color` is set to the selected material color
4. `mix-blend-mode: multiply` blends it realistically with the base image
5. Wood textures get a subtle `repeating-linear-gradient` overlay; fabric gets a dot pattern

This replaces the current blurry radial gradient with a precise, realistic tint.

## Save & Share

- **Save**: `localStorage.setItem('woodex-config', JSON.stringify({room, materials}))` + toast
- **Share**: Encode config as base64 URL param, copy to clipboard
- **Load**: Check URL params and localStorage on mount

## Files Changed

| File | Change |
|------|--------|
| `src/components/InteractiveConfigurator.tsx` | Complete rewrite with room system, mask zones, blend-mode overlays, slide-in panel, save/share, bottom toolbar |
| Generate 2 room images | Executive office + Conference room scenes (Open Plan already exists) |

## UI Layout (matching reference)

- Room tabs at top left (green active state)
- Full-width room image with hotspot dots
- Right panel slides in when hotspot clicked (white bg, close X button)
- Bottom bar with Reset/Save/Share buttons left-aligned, "Get Quote for This Layout" button right-aligned in green

