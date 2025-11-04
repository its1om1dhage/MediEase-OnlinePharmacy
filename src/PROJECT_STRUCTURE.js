/**
 * PROJECT STRUCTURE OVERVIEW
 * MediEase Online Pharmacy - E-commerce Platform
 * 
 * This file provides a quick reference to the project organization
 */

// ============================================
// 🎨 COMPONENT HIERARCHY
// ============================================

/*
App (Root)
└── CartProvider (Global State)
    └── BrowserRouter (Routing)
        └── Routes
            └── MainLayout
                ├── Navbar
                │   ├── Logo
                │   ├── Location Selector
                │   ├── Search Bar
                │   ├── Cart Icon
                │   └── Login Button
                ├── Outlet (Page Content)
                │   ├── HomePage
                │   │   ├── HeroSection
                │   │   ├── FeaturedCategories
                │   │   ├── PromotionalBanners
                │   │   ├── FeaturedProducts
                │   │   └── WhyChooseUs
                │   └── ShopPage
                │       ├── CategoryFilter
                │       └── ProductGrid
                │           └── ProductCard[]
                ├── Footer
                └── CartDrawer (Sidebar)
*/

// ============================================
// 📂 FOLDER ORGANIZATION
// ============================================

const FOLDER_STRUCTURE = {
  src: {
    // Page-level components (routes)
    pages: {
      Home: ["index.jsx", "HeroSection.jsx", "FeaturedCategories.jsx", "FeaturedProducts.jsx", "PromotionalBanners.jsx", "WhyChooseUs.jsx"],
      Shop: ["index.jsx"],
      Cart: ["index.jsx"],  // Future
      ProductDetails: ["index.jsx"]  // Future
    },
    
    // Reusable components by domain
    components: {
      common: ["Navbar.jsx", "Footer.jsx"],
      product: ["ProductCard.jsx", "CategoryFilter.jsx"],
      cart: ["CartDrawer.jsx"]
    },
    
    // Layout wrappers
    layouts: ["MainLayout.jsx"],
    
    // Global state management
    context: ["CartContext.jsx"],
    
    // Static/mock data
    data: ["products.js"],
    
    // Custom hooks (future)
    hooks: [],
    
    // Utility functions (future)
    utils: [],
    
    // Feature modules (future)
    features: []
  }
};

// ============================================
// 🔄 DATA FLOW
// ============================================

/*
1. User Actions
   └── Component (ProductCard, CartDrawer)
       └── Context (CartContext)
           └── LocalStorage
           └── Re-render components using cart data

2. Navigation
   └── User clicks link
       └── React Router
           └── Route change
               └── New page component loads

3. Product Display
   └── data/products.js
       └── Import in pages
           └── Map to ProductCard components
*/

// ============================================
// 🎯 COMPONENT RESPONSIBILITY
// ============================================

const COMPONENT_ROLES = {
  // Layout Components
  "MainLayout": "Wraps all pages with Navbar + Footer + CartDrawer",
  "Navbar": "Navigation, search, cart, login",
  "Footer": "Site links, contact info, legal",
  
  // Page Components
  "HomePage": "Composes home page sections",
  "ShopPage": "Product listing with filters",
  
  // Feature Components
  "ProductCard": "Displays single product with add to cart",
  "CategoryFilter": "Category selection buttons",
  "CartDrawer": "Sliding cart panel with items",
  
  // Context
  "CartContext": "Global cart state (add, remove, update, total)",
};

// ============================================
// 📋 NAMING CONVENTIONS
// ============================================

/*
✅ DO:
- PascalCase for components: ProductCard.jsx
- camelCase for utils/hooks: useCart.js
- Descriptive names: HeroSection not Section1
- Index files for main exports: pages/Home/index.jsx

❌ DON'T:
- Generic names: Component1, utils.js
- Abbreviations: ProdCard, Cat
- Mixed case: productCard, product-card
*/

export default FOLDER_STRUCTURE;
