

# Master Plan: Expand Shop with New Categories, Products & Home Furniture

## Current State Analysis

- **56 products** — all chairs (Executive 12, Manager 17, Staff 12, Visitor 15)
- **Navbar lists 5 dead categories** (Office Desks, Workstations, Office Sofas, Meeting Tables, Reception Desks) — clicking them shows 0 products
- **No Home Furniture** exists anywhere in the codebase
- **No product images** exist for non-chair items — will use placeholder images from existing assets

---

## Task Breakdown (10 Tasks)

### Task 1 — Add Office Furniture Product Data
Add placeholder products to `src/data/products.ts` for the 5 existing-but-empty Navbar categories:
- **Office Desks** (6 products): Executive Desk, L-Shape Desk, Standing Desk, Computer Desk, Manager Desk, Director Desk
- **Workstations** (6 products): 2-Seater, 4-Seater, 6-Seater, Linear, Cubicle, Open Plan
- **Office Sofas** (4 products): 3-Seater, 2-Seater, Reception Sofa, Lounge Chair
- **Meeting Tables** (4 products): Conference 8-Seater, Conference 12-Seater, Round Meeting, Boardroom Table
- **Reception Desks** (4 products): Modern Reception, L-Shape Reception, Curved Reception, Standing Reception

Each product gets: id, name, category, price, placeholder image (reuse existing assets like `desk-executive.jpg`, `workstation.jpg`, `lounge.jpg`, `meeting-room.jpg`, `reception-desk.jpg`), description, features.

### Task 2 — Add Home Furniture Product Data
Add new product arrays to `src/data/products.ts`:
- **Bedroom Furniture** (8 products): Bed Sets (2), Bed Side Tables (2), Dressing Tables (2), Mirrors (1), Bench & Settee (1)
- **Living Room** (8 products): Home Sofa (2), Center & Side Tables (2), Coffee Tables (2), Console (1), TV Unit (1)
- **Dining** (6 products): Dining Sets (2), Dining Chairs (2), Dining Tables (2)

Use existing images as placeholders. Add SEO descriptions and features for each.

### Task 3 — Update Product Data Exports & Helpers
Update `products.ts` bottom section:
- Export all new arrays (officeDesks, workstations, officeSofas, meetingTables, receptionDesks, bedroomFurniture, livingRoom, diningFurniture)
- Update `allProducts` to include everything
- Update `categories` array with all new categories
- Update `getProductsByCategory()` switch cases
- Add `homeFurnitureProducts` combined array

### Task 4 — Update Shop Page Sidebar & Filtering
Update `src/pages/Shop.tsx`:
- Add new category filters to sidebar with proper counts
- Group sidebar into "Office Chairs", "Office Furniture", "Home Furniture" sections with subheadings
- Update `filteredProducts` switch/case for all new category IDs
- Update price range display dynamically

### Task 5 — Update Navbar Shop Dropdown
Update `src/components/Navbar.tsx` `shopCategories` array:
- Group into 3 sections: Office Chairs, Office Furniture, Home Furniture
- Add all new subcategories with correct `?category=` params
- Style dropdown with section headers

### Task 6 — Update Homepage Category Grid
Update `src/pages/Index.tsx` category grid to show the new top-level categories (Office Chairs, Office Desks, Workstations, Meeting Tables, Reception, Storage, Home Bedroom, Home Living, Home Dining).

### Task 7 — Update Shop Page SEO & Content
Update `src/pages/Shop.tsx`:
- Expand meta title/description to include "home furniture", "bedroom sets", "dining tables"
- Update SEO content block with paragraphs about new categories
- Update FAQs with home furniture questions (delivery, materials, customization for home items)

### Task 8 — Add New Routes (if needed)
No new routes needed — all filtering happens via `/shop?category=X` query params. Verify `ProductDetail` page handles new product IDs correctly.

### Task 9 — Fix Pending Content Issues
- Fix Contact page placeholder data (use real Woodex address: LG 89 Zainab Tower, phone: +92 322 4000 768)
- Fix inconsistent warranty claims across pages (standardize to "Up to 3-Year Warranty")
- Fix About page "15+ years" → "7+ years"

### Task 10 — End-to-End Testing
Test all category filters, product detail pages, navbar links, mobile responsiveness, and SEO meta tags.

---

## Technical Approach

- **No new dependencies** — all changes are data and content
- **No design/theme changes** — same card styles, sidebar, grid/list views
- **Placeholder images** — reuse `desk-executive.jpg`, `workstation.jpg`, `lounge.jpg`, `meeting-room.jpg`, `reception-desk.jpg`, `bookshelf.jpg`, `storage.jpg` for new products until real photos are available
- **~46 new products** added (24 office furniture + 22 home furniture) bringing total from 56 to ~102
- **Product interface unchanged** — uses existing `Product` type with optional `subcategory` field already defined

