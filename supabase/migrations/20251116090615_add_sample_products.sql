/*
  # Add Sample Products for Eddjos Collections

  1. Sample Products
    - Added women's clothing items (dresses, sweaters, handbags)
    - Added men's clothing items (polos, blazers, caps)
    - Added unisex items (hoodies, t-shirts, caps)
    - All products marked in_stock and featured for visibility
    - Using Pexels image URLs for product images

  2. Product Details
    - Women's: Dresses, Open Sweaters, Handbags
    - Men's: Polo Shirts, Blazers, Caps
    - Unisex: Hoodies, T-Shirts, Accessories
    - All prices in Kenyan Shillings (KES)
    - Multiple colors and sizes per product
*/

INSERT INTO products (
  name,
  category,
  subcategory,
  description,
  price,
  original_price,
  discounted_price,
  colors,
  sizes,
  image_url,
  featured,
  in_stock,
  sort_order
) VALUES
-- Women's Products
(
  'Eddjos Premium Maxi Dress',
  'women',
  'Dresses',
  'Elegant maxi dress crafted from premium fabric with a flattering silhouette.',
  8999,
  9999,
  8999,
  ARRAY['Black', 'Navy', 'Burgundy'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  1
),
(
  'Eddjos Casual Summer Dress',
  'women',
  'Dresses',
  'Light and breezy summer dress perfect for warm days and casual outings.',
  5999,
  NULL,
  NULL,
  ARRAY['White', 'Cream', 'Light Blue'],
  ARRAY['S', 'M', 'L', 'XL'],
  'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  2
),
(
  'Eddjos Open Cardigan Sweater',
  'women',
  'Open Sweaters',
  'Stylish open cardigan perfect for layering and adding elegance to any outfit.',
  6499,
  7499,
  6499,
  ARRAY['Beige', 'Gray', 'Camel'],
  ARRAY['S', 'M', 'L', 'XL', 'XXL'],
  'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  3
),
(
  'Eddjos Luxury Handbag',
  'women',
  'Handbags',
  'Premium handbag with elegant design and comfortable carrying capacity.',
  12999,
  14999,
  12999,
  ARRAY['Black', 'Brown', 'Tan'],
  ARRAY['One Size'],
  'https://images.pexels.com/photos/4210867/pexels-photo-4210867.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  4
),
-- Men's Products
(
  'Eddjos Classic Polo Shirt',
  'men',
  'Polo',
  'Premium polo shirt in solid colors, perfect for casual or semi-formal occasions.',
  4999,
  5999,
  4999,
  ARRAY['White', 'Navy', 'Black', 'Red'],
  ARRAY['S', 'M', 'L', 'XL', 'XXL'],
  'https://images.pexels.com/photos/3026811/pexels-photo-3026811.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  5
),
(
  'Eddjos Business Blazer',
  'men',
  'Blazer',
  'Sharp business blazer tailored for professional and formal events.',
  15999,
  17999,
  15999,
  ARRAY['Navy', 'Charcoal', 'Black'],
  ARRAY['S', 'M', 'L', 'XL'],
  'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  6
),
(
  'Eddjos Cotton Cap',
  'men',
  'Cap',
  'Comfortable cotton cap with adjustable fit, ideal for everyday wear.',
  2499,
  NULL,
  NULL,
  ARRAY['Black', 'Navy', 'Khaki', 'Gray'],
  ARRAY['One Size'],
  'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  7
),
-- Unisex Products
(
  'Eddjos Oversized Hoodie',
  'unisex',
  'Hoodies',
  'Ultra-comfortable oversized hoodie perfect for casual lounging or street style.',
  7999,
  8999,
  7999,
  ARRAY['Black', 'Gray', 'Navy', 'White'],
  ARRAY['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  8
),
(
  'Eddjos Premium T-Shirt',
  'unisex',
  'T-Shirts',
  'High-quality premium t-shirt made from soft, breathable cotton fabric.',
  3499,
  4499,
  3499,
  ARRAY['Black', 'White', 'Gray', 'Navy', 'Red'],
  ARRAY['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  'https://images.pexels.com/photos/3369362/pexels-photo-3369362.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  9
),
(
  'Eddjos Designer Beanie',
  'unisex',
  'Accessories',
  'Cozy designer beanie to keep you warm and stylish all season long.',
  2999,
  NULL,
  NULL,
  ARRAY['Black', 'Navy', 'Burgundy', 'Gray'],
  ARRAY['One Size'],
  'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  10
),
(
  'Eddjos Casual Sweatpants',
  'unisex',
  'Bottom Wear',
  'Comfortable and stylish sweatpants for relaxed casual wear.',
  5499,
  6499,
  5499,
  ARRAY['Black', 'Gray', 'Navy'],
  ARRAY['S', 'M', 'L', 'XL', 'XXL'],
  'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?w=800&h=800&fit=crop',
  true,
  true,
  11
);