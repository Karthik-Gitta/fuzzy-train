# COOKIES AND CREAM (CNC) - Official Website

A production-ready, fully responsive, multi-page website for **COOKIES AND CREAM (CNC)** — Nizamabad's premier artisan cafe and confectionery.

---

## 🌟 Brand & Business Details

- **Cafe Name**: COOKIES AND CREAM (CNC)
- **Tagline**: Crafting Sweet Moments
- **Address**: 1/12-142/7/1, Srinagar Colony, Vinayak Nagar, Nizamabad, Telangana – 503003
- **Primary Mobile**: `+91 88853 66660` *(Click-to-call enabled)*
- **Secondary Mobile**: `+91 84668 66660` *(Click-to-call enabled)*
- **Email**: `cookiesncreamscnc@gmail.com`
- **Working Hours**: Open All 7 Days of the week, **10:00 AM – 10:00 PM**
- **Live Status Checker**: Real-time IST-based script displaying dynamic 🟢 **Open Now** / 🔴 **Closed Now** status and closing countdown across all pages.

---

## 🎨 Design System & Palette

- **Primary Theme**: Deep Dark Green (`#002F06`)
- **Primary Dark Surface**: `#001c04`
- **Soft Cream & Off-White**: `#FAF7F2` & `#F4EFEA`
- **Warm Gold & Bronze Accent**: `#C5A059` & `#dfbf7e`
- **Dark Charcoal Body Text**: `#1E221E`
- **Typography**: Google Fonts — *Plus Jakarta Sans* (Clean Body), *Outfit* (Modern Headers), and *Playfair Display* (Editorial Luxury Accents)
- **Device Support**: 100% responsive without horizontal scroll on **all screen sizes**:
  - Small phones (320px – 375px)
  - Modern smartphones (390px – 430px)
  - Tablets & iPads (768px – 1024px)
  - Laptops and high-res desktop monitors (1200px+)

---

## 📁 Project Directory Structure

```text
d:\cnc1\
├── index.html                  # Home Page (Hero, Highlights, Delivery, Gallery, Reviews, FAQs)
├── menu.html                   # Menu Page (Categorized items, Search, Veg/Non-Veg filter, 41-scan viewer)
├── about.html                  # About Us Page (Cafe story, Sourcing philosophy, Stats, Team placeholders)
├── contact.html                # Contact & Visit Page (Click-to-call, Interactive Google Maps, Form)
├── README.md                   # Complete documentation & customization guide
└── assets/
    ├── css/
    │   ├── style.css           # Core design system, variables, reset, navbar & footer
    │   └── components.css      # Gallery, review cards, FAQ accordions, delivery cards, modals
    ├── js/
    │   ├── main.js             # Sticky nav, mobile drawer, live IST open/close checker, gallery filter, FAQ
    │   ├── menu-data.js        # Structured data repository for all 42 menu items
    │   ├── menu.js             # Category filter, real-time search, diet toggle & scan lightbox
    │   └── contact.js          # Inquiry & reservation form handling, copy-to-clipboard
    ├── images/
    │   ├── logo.png            # Official circular emblem logo (CNC)
    │   ├── logo-horizontal.png # Horizontal brand banner logo
    │   └── favicon.png         # Site favicon
    ├── menu/
    │   ├── menu-page-01.jpg    # Original menu screenshot scans (Pages 01 - 41)
    │   └── ...                 # High-resolution original menu card photos
    └── videos/                 # Directory for optional slow-mo cafe background video loop
```

---

## 🚀 Key Sections Added & Enhanced

1. **Interactive Photo Gallery Section** ([index.html#gallery-section](file:///d:/cnc1/index.html#gallery-section)):
   - Filter tabs: *All Moments*, *Ambience & Interiors*, *Shakes & Desserts*, *Artisan Coffee*, *Pizzas & Savory*.
   - Clickable cards with image placeholders / actual images, category tags, hover zoom, and lightbox popup.

2. **Customer Reviews & Testimonials Section** ([index.html#reviews-section](file:///d:/cnc1/index.html#reviews-section)):
   - **Google Review Rating Summary Badge**: `4.8 ★★★★★ Based on 500+ Happy Reviews on Google`.
   - Cards with verified guest badges, star ratings, recommended dish chips, and authentic quotes.
   - Direct link to Google Maps reviews.

3. **Frequently Asked Questions (FAQ) Accordion** ([index.html#faq-section](file:///d:/cnc1/index.html#faq-section)):
   - Smooth vanilla JS accordion addressing timings, vegetarian/eggless options, birthday party bookings, Swiggy/Zomato delivery, and parking/Wi-Fi.

4. **Cleaned Delivery Options (No WhatsApp Order)**:
   - Streamlined into a sleek 2-column card showcase focusing strictly on **Swiggy** and **Zomato**.
   - Removed all WhatsApp order cards and takeaway ordering buttons as requested.

5. **Cleaned Mobile Floating Action Bar**:
   - Replaced WhatsApp button with **Call Now**, **Menu**, **Gallery**, and **Directions**.
