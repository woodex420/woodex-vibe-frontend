

# Master Plan: Complete Website Overhaul — Nav, Hero, Products & Categories

## Overview

Restructure the main navigation to match the requested 9-tab layout, redesign the hero slider with new slides for Office Furniture/Home Furniture categories, and add ~40 new products matching the reference images (CEO Tables, Executive Tables, Manager Tables, Meeting Tables, Workstations).

---

## Task 1 — Restructure Navbar Tabs

Replace the current nav structure (Chairs | Desks | Storage | Lounge | Services | Series | Projects | About | Contact) with the exact 9-tab layout requested:

```text
| Home | Office Furniture ▼ | Home Furniture ▼ | Series | Services ▼ | Projects | About Us | Contact Us | Blog |
```

**Office Furniture dropdown** (mega-menu with sections):
- Office Chairs: Executive, Manager, Staff, Visitor
- Office Tables: CEO Tables, Executive Tables, Manager Tables
- Workstations
- Meeting & Conference Tables
- Office Sofas
- Reception Desks
- Storage & Filing

**Home Furniture dropdown**:
- Bedroom: Bed Sets, Bedside Tables, Dressing Tables, Mirrors, Bench & Settee
- Living: Home Sofa, Center & Side Tables, Coffee Tables, Console, TV Units
- Dining: Dining Sets, Dining Chairs, Dining Tables

Move E-Quotation and Inspirations to the right side (keep existing). Update mobile menu to match.

---

## Task 2 — Add New Office Table Products

Based on the reference images, add these new product subcategories and items to `products.ts`:

**CEO Tables** (5 products — from reference image 35):
Ambassador Executive Table, Elegance Executive Office Table, Elite Executive Desk, Imperial Executive Desk, Royal Prestige Executive Table
Price range: Rs.150,000

**Executive Tables** (10 products — from reference image 36):
Command, Elite, Impact, Infinity, Legacy, Nexus Table 6, Nova, Signature, Space, Vision Executive Desks
Price range: Rs.65,000

**Manager Tables** (14 products — from reference image 37):
Apex, Edge, Elite, Flux, Infinity, Metro, Nova, Orion, Prime, Pulse, Shift Ergonomic, Vertex, Vibe, Woodex Smart Series L-Shape
Price range: Rs.65,000

Update the existing `officeDesks` array to be split into these 3 subcategories, or add new arrays: `ceoTables`, `executiveTables`, `managerTables`.

---

## Task 3 — Expand Meeting Tables & Workstations

**Meeting Tables** — expand from 4 to ~30 products (reference image 38 shows many):
Add: Citrus, Jupiter, Cameron, Diamond, Circular, Circle Round, Edge, Innovate, Firestone, Forest, Grand, Imperial Executive, Infinity Executive, Liberty Workstation, Impressive Workstation, Juventus, Luxury, Nexus, Nexus Meeting, Noxx Conference, Noxx Prime Conference, Nexus Meeting 2, Noxx Meeting, Saturn, Sapphire Executive
Price range: Rs.0 (call for price) to Rs.70,000

**Workstations** — expand from 6 to 11 (reference image 39):
Add: Evolution, Flow, Horizon, Momentum, Nexus, Nova, Onyx, Quantum, Synergy, Vertex, Vibe
Price range: Rs.70,000

---

## Task 4 — Redesign Hero Slider

Replace the current 3 slides with 4 new slides matching the reference designs:

1. **Office Chairs** (keep existing office hero image) — "Custom Office Furniture — Designed for Your Space"
2. **Workstations** (use workstation.jpg) — "Make Your Space Work" / "Premium ergonomic workstations for the modern professional" / CTA: "Explore Workstations"
3. **Meeting Tables** (use meeting-room.jpg) — "Tables Designed for Equitable Meetings" / "Conference solutions that enable inclusive participation" / CTA: "View Tables"
4. **Home Furniture** (use hero-sofa.jpg) — "Home Furniture Collection" / "Extend the WOODEX quality to your bedroom, living room, and dining spaces" / CTA: "Shop Home"

---

## Task 5 — Update Shop Sidebar & Category Filters

Add new category filter entries for:
- CEO Tables, Executive Tables, Manager Tables (replacing single "Office Desks")
- Expanded product counts for Meeting Tables and Workstations

Update `getProductsByCategory()` and `filteredProducts` switch cases.

---

## Task 6 — Update Homepage Category Grid

Update the category grid to reflect the new subcategories (CEO Tables, Executive Tables, Manager Tables instead of generic "Office Desks").

---

## Technical Notes

- No new dependencies needed
- No design/theme changes — same Woodex styling throughout
- All new products reuse existing placeholder images until real photos are uploaded
- Product interface unchanged — uses existing `Product` type
- ~60+ new products added, bringing total from ~106 to ~166

