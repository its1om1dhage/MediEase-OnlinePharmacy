# 🔄 CODE FLOW DIAGRAM - MediEase Pharmacy

## Complete Application Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER VISITS SITE                         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  main.jsx                                                        │
│  ├── StrictMode                                                  │
│  └── Renders <App />                                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  App.jsx (Root Component)                                        │
│  ├── <CartProvider> (Wraps entire app)                          │
│  │   └── Cart State Management (Global)                         │
│  │       ├── cartItems []                                        │
│  │       ├── addToCart()                                         │
│  │       ├── removeFromCart()                                    │
│  │       ├── updateQuantity()                                    │
│  │       └── getCartTotal()                                      │
│  │                                                                │
│  └── <BrowserRouter>                                             │
│      └── <Routes>                                                │
│          └── <Route path="/" element={<MainLayout />}>          │
│              ├── <Route index element={<HomePage />} />         │
│              ├── <Route path="shop" element={<ShopPage />} />   │
│              └── <Route path="*" redirect to "/" />             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  MainLayout.jsx (Layout Wrapper)                                 │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  <Navbar />                                              │   │
│  │  ├── Logo (Link to /)                                    │   │
│  │  ├── Location Selector                                   │   │
│  │  ├── Search Bar                                          │   │
│  │  ├── Cart Icon (shows count badge)                       │   │
│  │  └── Login Button                                        │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              ↓                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  <Outlet /> - Renders current route:                    │   │
│  │                                                           │   │
│  │  Route: "/"         → HomePage                           │   │
│  │  Route: "/shop"     → ShopPage                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              ↓                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  <Footer />                                              │   │
│  │  ├── Company Info                                        │   │
│  │  ├── Quick Links                                         │   │
│  │  ├── Customer Service                                    │   │
│  │  └── Contact Information                                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              ↓                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  <CartDrawer isOpen={state} />                           │   │
│  │  └── Sliding panel (opens when cart clicked)            │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## HomePage Flow (Route: "/")

```
HomePage (pages/Home/index.jsx)
│
├── Import all section components
├── Import products data
│
└── Render sections in order:
    │
    ├─── <HeroSection />
    │    └── Banner with value propositions
    │        ├── "Licensed Pharmacy"
    │        ├── "Fast Delivery"
    │        └── "Secure Payment"
    │
    ├─── <FeaturedCategories />
    │    └── 6 category cards
    │        ├── Pain Relief (45 products)
    │        ├── Vitamins (67 products)
    │        ├── First Aid (32 products)
    │        └── ... more categories
    │
    ├─── <PromotionalBanners />
    │    └── 2 promotional cards
    │        ├── Special Offer (20% OFF vitamins)
    │        └── Free Delivery (on $50+)
    │
    ├─── <FeaturedProducts products={products} />
    │    └── Grid of 8 product cards
    │        └── Each card → <ProductCard />
    │            ├── Product image
    │            ├── Name, price, description
    │            ├── Stock status
    │            └── "Add to Cart" button
    │                └── onClick → addToCart()
    │                    └── Updates CartContext
    │                        └── Navbar badge updates
    │
    └─── <WhyChooseUs />
         └── 4 feature cards
             ├── Licensed & Certified
             ├── 24/7 Support
             ├── Quality Guaranteed
             └── Best Prices
```

---

## ShopPage Flow (Route: "/shop")

```
ShopPage (pages/Shop/index.jsx)
│
├── useState: selectedCategory
├── Import products data
│
├─── <CategoryFilter />
│    ├── Render category buttons
│    └── onClick → setSelectedCategory()
│
└─── Filter & Display Products
     │
     ├── Filter logic:
     │   products.filter(p => 
     │     p.category === selectedCategory
     │   )
     │
     └── Render filtered products:
         └── <ProductCard /> for each product
             └── Same as HomePage
```

---

## Cart Operations Flow

```
USER ACTION: Click "Add to Cart"
│
└─── ProductCard.jsx
     └── handleAddToCart()
         │
         ├── Check if prescription required
         │   └── YES → Show alert, return
         │   └── NO  → Continue
         │
         └── Call addToCart(product)
             │
             └─── CartContext.jsx
                  │
                  ├── Check if item exists in cart
                  │   ├── YES → Update quantity
                  │   └── NO  → Add new item
                  │
                  ├── Update state: setCartItems()
                  │
                  └── Save to localStorage
                      │
                      └── Components re-render:
                          ├── Navbar (badge count updates)
                          └── CartDrawer (if open)
```

---

## Navigation Flow

```
USER CLICKS LINK
│
└─── React Router intercepts
     │
     ├── Link to="/"
     │   └── Navigate to HomePage
     │       └── MainLayout → <Outlet /> → HomePage
     │
     ├── Link to="/shop"
     │   └── Navigate to ShopPage
     │       └── MainLayout → <Outlet /> → ShopPage
     │
     └── Unknown route
         └── Navigate to="/" (redirect)
```

---

## Cart Drawer Flow

```
USER CLICKS CART ICON
│
└─── Navbar.jsx
     └── onClick → onCartClick()
         │
         └─── MainLayout.jsx
              └── handleCartOpen()
                  └── setIsCartOpen(true)
                      │
                      └─── CartDrawer.jsx
                           └── Renders if isOpen === true
                               │
                               ├── Display cart items
                               │   └── Map cartItems → Item cards
                               │       ├── Image, name, price
                               │       ├── Quantity controls
                               │       │   ├── + → updateQuantity()
                               │       │   └── - → updateQuantity()
                               │       └── Delete → removeFromCart()
                               │
                               ├── Show totals
                               │   └── getCartTotal()
                               │
                               └── Action buttons
                                   ├── "Proceed to Checkout"
                                   └── "Clear Cart" → clearCart()
```

---

## Data Flow Summary

```
┌──────────────────┐
│  products.js     │  ← Static data
│  (12 products)   │
└────────┬─────────┘
         │
         ├──→ HomePage (FeaturedProducts)
         ├──→ ShopPage (ProductGrid)
         └──→ CategoryFilter (categories)
              │
              ↓
         ┌──────────────────┐
         │  ProductCard      │
         │  - Display        │
         │  - Add to Cart    │
         └────────┬──────────┘
                  │
                  ↓
         ┌──────────────────┐
         │  CartContext      │  ← Global State
         │  - cartItems []   │
         │  - Operations     │
         └────────┬──────────┘
                  │
                  ├──→ localStorage (persist)
                  ├──→ Navbar (badge count)
                  └──→ CartDrawer (display items)
```

---

## Component Reusability

```
<ProductCard />  ← Used in:
  ├── HomePage → FeaturedProducts
  └── ShopPage → Product Grid

<CategoryFilter />  ← Used in:
  └── ShopPage

useCart()  ← Used in:
  ├── Navbar (getCartItemsCount)
  ├── ProductCard (addToCart)
  └── CartDrawer (all operations)
```

---

## State Management

```
Global State (CartContext):
  ├── cartItems: Array of products in cart
  ├── addToCart(product, quantity)
  ├── removeFromCart(productId)
  ├── updateQuantity(productId, quantity)
  ├── clearCart()
  ├── getCartTotal()
  └── getCartItemsCount()

Local State (Component-level):
  ├── MainLayout: isCartOpen
  ├── ShopPage: selectedCategory
  └── Navbar: searchTerm, selectedLocation
```

This diagram shows the complete flow of your application! 🎯
