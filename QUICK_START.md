# Eddjos Collections - Quick Start Guide

## What's New?

Your e-commerce platform now includes a complete shopping experience with image carousels, product details, shopping cart, and WhatsApp integration.

## Key Features at a Glance

### 1. Header Image Carousel
- 3 rotating product images in the header (1/3 width)
- Auto-plays every 4 seconds
- Manual navigation with arrows or dots
- Desktop only (optimizes mobile space)

### 2. Hero & Category Sections
- Main hero has 4 rotating images
- Men's/Women's/Unisex categories each have 4 images
- Smooth fade transitions every 2 seconds
- Dark overlay ensures text readability

### 3. Enhanced Product Cards
Each product card now has:
- **View Details** button → Opens full product modal
- **Buy Now** button → Direct WhatsApp ordering
- Size badges showing available sizes
- Clear pricing with discount display

### 4. Product Detail Modal
Click "View Details" to see:
- Product image gallery (carousel)
- Full description
- Size selection
- Color selection
- Quantity adjuster
- Order via WhatsApp button

### 5. Shopping Cart
Click the shopping bag icon in header:
- View all cart items
- Adjust quantities
- Remove items
- See running total
- Proceed to checkout
- Enter delivery information
- Submit order via WhatsApp

### 6. WhatsApp Integration
- **From Product Card**: "Buy Now" sends pre-filled product inquiry
- **From Cart**: "Checkout" sends complete order with customer details
- **Floating Button**: General chat for inquiries
- All messages go to: +254740685488

## File Structure

```
New Components:
- components/HeaderCarousel.tsx       → 3-image header carousel
- components/ImageCarousel.tsx        → Reusable carousel (hero/category)
- components/ProductDetailModal.tsx   → Full product details overlay
- components/CartSidebar.tsx          → Shopping cart sidebar

New Utilities:
- lib/cartStore.ts                    → Cart management with localStorage
- lib/favoritesStore.ts               → Wishlist infrastructure
- lib/useCart.ts                      → React hook for cart state

Enhanced Files:
- components/Header.tsx               → Added carousel + cart button
- components/Hero.tsx                 → 4-image carousel
- components/CategoryHero.tsx          → 4-image carousel per category
- components/ProductCard.tsx           → Added buttons + sizing
- components/ProductGrid.tsx           → Modal integration
- lib/whatsapp.ts                      → Enhanced messaging
- App.tsx                              → Cart state management
```

## How to Use

### For Customers

1. **Browse Products**
   - Use navigation to find category (Men, Women, Unisex)
   - View product cards with prices and sizes

2. **View Product Details**
   - Click "Details" button on any product
   - See full description, multiple images, all options
   - Select size and color

3. **Order Directly**
   - Click "Buy Now" from product card or modal
   - WhatsApp opens with pre-filled product info
   - Store responds with pricing and next steps

4. **Use Shopping Cart**
   - Click shopping bag icon (top right)
   - Add items by clicking "Buy Now" or cart buttons
   - Adjust quantities as needed
   - Fill in delivery information
   - Click "Checkout" to send order via WhatsApp

### For Developers

#### Adding Products

Products are in `supabase/migrations/20251116_complete_categories.sql`

Each product needs:
```typescript
{
  name: "Product Name",
  category: "men" | "women" | "unisex",
  subcategory: "Type Name",
  description: "Full description",
  price: 9999,
  original_price: 11999 (optional, for sales),
  discounted_price: 9999 (optional),
  colors: ["Black", "White", "Blue"],
  sizes: ["S", "M", "L", "XL"],
  image_url: "https://...",
  featured: true/false,
  in_stock: true/false,
  sort_order: 1
}
```

#### Customizing WhatsApp Number

Update in `.env`:
```
VITE_WHATSAPP_NUMBER=254740685488
```

#### Styling

All components use Tailwind CSS. Key classes:
- Colors: `text-black`, `bg-gray-50`, `hover:bg-gray-800`
- Spacing: `px-4`, `py-2`, `gap-2`, `space-y-3`
- Animations: `transition-colors`, `duration-300`, `hover:scale-110`

## Product Categories Included

12 complete categories × 7 types each:

1. **Tops** - T-shirts, Tank tops, Button-ups, Blouses, Polos, Crop tops, Henleys
2. **Bottoms** - Jeans, Dress pants, Leggings, Joggers, Shorts, Skirts, Cargo pants
3. **Outerwear** - Hoodies, Jackets, Coats, Blazers, Windbreakers, Parkas, Vests
4. **Activewear** - Sports bra, Gym shorts, Sweatpants, Compression, Running shirts, Track jackets, Cycling shorts
5. **Footwear** - Sneakers, Boots, Sandals, Loafers, Heels, Dress shoes, Slides
6. **Underwear** - Boxers, Briefs, Trunks, Panties, Long johns, Camisoles, Undershirts
7. **Swimwear** - One-piece, Bikini, Swim trunks, Board shorts, Swim briefs, Rash guard, Tankini
8. **Formalwear** - Suit, Tuxedo, Evening gown, Cocktail dress, Dress shirt, Dress trousers, Waistcoat
9. **Loungewear** - Pajamas, Robes, Lounge pants, Oversized tees, Slippers, Nightgowns, Sweatshirts
10. **Accessories** - Hats, Scarves, Gloves, Belts, Ties, Hair accessories, Sunglasses
11. **Workwear** - Overalls, Coveralls, Work boots, Hi-vis vests, Tool belts, Cargo cover pants, Work jackets
12. **Seasonal** - Raincoat, Snow pants, Thermal tops, Sun hats, Ponchos, Beach cover-ups, Waterproof boots

## Performance

- **Build Size**: 310.9 KB (91.5 KB gzipped)
- **Fully Responsive**: Works on mobile, tablet, desktop
- **Fast Load**: Optimized images and lazy loading ready
- **Smooth Animations**: 60fps transitions on modern browsers

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Mobile

## What's Not Yet Implemented

Optional features you might add later:
- Payment gateway (Stripe/Pesapal)
- Customer login/accounts
- Order tracking
- Product reviews
- Advanced search filters
- Admin dashboard
- Email notifications

## Troubleshooting

**Cart not persisting?**
- Clear browser localStorage and try again
- Check if cookies/storage are enabled

**WhatsApp links not opening?**
- Ensure WhatsApp number is correct in `.env`
- Check message formatting in `lib/whatsapp.ts`

**Images not showing in carousel?**
- Verify image URLs are valid (test in browser)
- Check image URLs in component data

**Styles looking odd?**
- Run `npm run build` to ensure Tailwind processes all classes
- Check browser DevTools for CSS conflicts

## Support

For questions about implementation:
1. Check FEATURES.md for detailed feature list
2. Review component PropTypes and TypeScript interfaces
3. Check component comments for usage examples
