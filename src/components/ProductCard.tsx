import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../lib/supabase';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { addToCart } from '../lib/cartStore';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: () => void;
}

export default function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.in_stock) return;

    const whatsappLink = generateWhatsAppLink(product.name);
    window.open(whatsappLink, '_blank');
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(product);
  };

  const handleAddCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.in_stock) return;

    addToCart({
      productId: product.id,
      productName: product.name,
      price: product.discounted_price || product.price,
      size: product.sizes[0] || 'One Size',
      color: product.colors[0] || 'Default',
      quantity: 1,
      imageUrl: product.image_url,
    });
    onAddToCart();
  };

  const displayPrice = product.discounted_price || product.price;
  const originalPrice = product.original_price;
  const showDiscount = originalPrice && originalPrice > displayPrice;

  return (
    <div
      className={`relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${
        product.in_stock ? '' : 'opacity-60'
      }`}
    >
      <div className="aspect-square bg-gray-100 overflow-hidden relative group">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-6xl">👕</span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-medium text-lg text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        {product.sizes.length > 0 && (
          <div className="flex gap-1 flex-wrap">
            {product.sizes.slice(0, 3).map((size) => (
              <span key={size} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {size}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{product.sizes.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-baseline gap-2">
          {showDiscount ? (
            <>
              <span className="text-sm text-gray-400 line-through">
                KSh {originalPrice.toLocaleString()}
              </span>
              <span className="text-xl font-bold text-gray-900">
                KSh {displayPrice.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              KSh {displayPrice.toLocaleString()}
            </span>
          )}
        </div>

        {!product.in_stock && (
          <p className="text-sm text-red-600 font-medium">Out of Stock</p>
        )}

        <div className="flex gap-2 pt-2">
          <button
            onClick={handleViewDetails}
            disabled={!product.in_stock}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            <Eye className="w-4 h-4" />
            Details
          </button>
          <button
            onClick={handleBuyNow}
            disabled={!product.in_stock}
            className="flex-1 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
