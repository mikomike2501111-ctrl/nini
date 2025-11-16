import { X } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../lib/supabase';
import { generateWhatsAppLink } from '../lib/whatsapp';
import ImageCarousel from './ImageCarousel';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  productImages?: string[];
}

export default function ProductDetailModal({
  product,
  onClose,
  productImages = [],
}: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  const displayPrice = product.discounted_price || product.price;
  const originalPrice = product.original_price;
  const showDiscount = originalPrice && originalPrice > displayPrice;

  const images = productImages.length > 0 ? productImages : [product.image_url || ''];
  const filteredImages = images.filter((img) => img && img.trim() !== '');

  const handleWhatsAppOrder = () => {
    const whatsappLink = generateWhatsAppLink(
      product.name,
      selectedSize || 'Not specified',
      selectedColor || 'Not specified',
      quantity
    );
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div>
              {filteredImages.length > 0 ? (
                <ImageCarousel images={filteredImages} height="h-96" autoPlayInterval={3000} />
              ) : (
                <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg">
                  <span className="text-6xl">👕</span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  {showDiscount ? (
                    <>
                      <span className="text-sm text-gray-400 line-through">
                        KSh {originalPrice.toLocaleString()}
                      </span>
                      <span className="text-3xl font-bold text-gray-900">
                        KSh {displayPrice.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">
                      KSh {displayPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {showDiscount && (
                  <p className="text-sm text-green-600 font-medium">
                    Save KSh {(originalPrice - displayPrice).toLocaleString()}
                  </p>
                )}
              </div>

              {product.description && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              )}

              {product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg transition-all ${
                          selectedSize === size
                            ? 'bg-black text-white border-black'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${
                          selectedColor === color
                            ? 'border-black bg-gray-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={!product.in_stock}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {product.in_stock ? 'Order via WhatsApp' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
