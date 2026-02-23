

# Content Update Plan — Keep Current Design, Update Content Only

No changes to theme colors, Navbar, Footer, or overall design style. Only content (text, data, sections) will be updated.

---

## Phase 1: Hero Slider Content Update (HeroSlider.tsx)

**Update slide text and CTAs only** (keep split layout, dots, trust badges style):
- Slide 1: "Custom Office Furniture -- Designed for Your Space, Built in Our Factory" with dual CTAs (Shop Now + Free Consultation)
- Slide 2: "We Don't Just Sell Furniture -- We Build Workspaces" with consultation CTA
- Slide 3: "Luxury Meets Functionality -- Italian-Inspired Office & Home Furniture" with shop CTA
- Update trust badges text: Factory Direct Prices, Free 3D Design, Nationwide Delivery, Up to 3-Year Warranty

---

## Phase 2: Homepage Content Rebuild (Index.tsx)

Keep existing section styling patterns, update/add content sections in this order:

1. **Update SEO meta** -- new title, description, keywords from document
2. **Replace Services Row** with "Who We Are" intro block -- "Pakistan's Most Trusted Office Furniture Brand", 1,200+ offices stat, Learn More CTA
3. **Replace Materials Banner** with 8-Category Product Grid -- Executive Tables, Office Chairs, Workstations, Conference Tables, Reception, Storage, Office Sofas, Home Office (reuse existing images)
4. **Update Bestsellers** -- new heading "Our Most Popular Products", subtext targeting cities, show 8 products
5. **Add "Why Choose Woodex" section** -- 6 USP cards: Custom Design, Free 3D, Factory-Direct Pricing, Delivery & Installation, Warranty, Nationwide Coverage
6. **Add "How It Works" section** -- 4 steps: Consultation, 3D Design, Manufacturing, Delivery
7. **Add Portfolio Showcase** -- "Workspaces We've Transformed" grid using existing project images
8. **Add Stats Counter** -- 1,200+ Offices, 7+ Years, 50+ Cities, 100% Custom-Made
9. **Add Testimonials** -- 3 reviews (Ahmed R., Sara K., Usman T.)
10. **Update SEO Content Block** -- ergonomic chairs long-form content from document
11. **Add Furniture Series Showcase** -- Cubicle, Lounge, Executive, Home Office cards
12. **Add CTA Banner** -- "Ready to Transform Your Workspace?" with Call Now, E-Quote, WhatsApp buttons
13. **Replace FAQs** -- 10 new Q&As from document

---

## Phase 3: Workspace Design Page (SpacePlanning.tsx)

Keep existing page structure and card/hero styles. Update content:

1. **Hero text** -- update to document's workspace design headline and trust bar (500+ Offices Designed, Certified Designers, 48-Hour Turnaround)
2. **Service intro** -- add productivity stats paragraph
3. **Update 6 service cards** -- Space Planning, 3D Visualization, Ergonomic Assessment, Interior Design, MEP Coordination, Furniture Specification
4. **Update process timeline** -- 5 steps from document
5. **Add design philosophies section** -- ABW, Biophilic, Flexible Spaces, Cultural Sensitivity
6. **Add industry specializations** -- IT, Banking, Healthcare, Education, Call Centers, Law Firms
7. **Update pricing tiers** -- Basic PKR 50-75K, Professional PKR 100-150K, Enterprise PKR 200K+
8. **Add 8 FAQs** from document
9. **Update SEO meta tags**

---

## Phase 4: Factory Direct Page (FactoryDirect.tsx)

Keep existing page structure. Update content:

1. **Update SEO meta** from document
2. **Update hero text** with document's factory direct headline
3. **Update stats** to match document data
4. **Update benefits cards** text from document
5. **Update comparison table** values
6. **Update factory facility section** text
7. **Update CTA text**

---

## Technical Details

- **Files modified**: `HeroSlider.tsx`, `Index.tsx`, `SpacePlanning.tsx`, `FactoryDirect.tsx`
- **Files NOT modified**: `Navbar.tsx`, `Footer.tsx`, `index.css`, any UI components
- **No new dependencies** required
- **Existing images** from `src/assets/` reused throughout
- All content sourced directly from the uploaded document
