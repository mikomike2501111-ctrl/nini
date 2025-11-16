import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Cart, removeFromCart, updateCartItemQuantity, clearCart } from '../lib/cartStore';
import { generateWhatsAppOrderLink } from '../lib/whatsapp';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Cart;
  onUpdate: () => void;
}

export default function CartSidebar({ isOpen, onClose, cart, onUpdate }: CartSidebarProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    county: '',
    notes: '',
  });

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
    onUpdate();
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    updateCartItemQuantity(itemId, newQuantity);
    onUpdate();
  };

  const handleCheckoutViaWhatsApp = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all required fields (Name, Phone, Address)');
      return;
    }

    const whatsappLink = generateWhatsAppOrderLink(
      cart.items,
      cart.total,
      customerInfo
    );

    window.open(whatsappLink, '_blank');
    clearCart();
    onUpdate();
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white z-50 shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1" style={{ height: 'calc(100vh - 280px)' }}>
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <p className="text-gray-600 font-medium">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-2">Start adding items to get started</p>
            </div>
          ) : (
            <div className="divide-y">
              {cart.items.map((item) => (
                <div key={item.id} className="p-4 space-y-2">
                  <div className="flex gap-3">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate text-sm">
                        {item.productName}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {item.size} • {item.color}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        KSh {item.price.toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1 hover:bg-red-50 rounded transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg w-fit">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="border-t border-gray-200 bg-white p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>KSh {cart.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery</span>
                <span>To be calculated</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>KSh {cart.total.toLocaleString()}</span>
              </div>
            </div>

            {!isCheckingOut ? (
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </button>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <h3 className="font-semibold text-gray-900">Delivery Information</h3>

                <input
                  type="text"
                  placeholder="Full Name *"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Delivery Address *"
                  value={customerInfo.address}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="County"
                  value={customerInfo.county}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, county: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <textarea
                  placeholder="Special instructions or notes"
                  value={customerInfo.notes}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, notes: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  rows={2}
                />

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsCheckingOut(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCheckoutViaWhatsApp}
                    className="flex-1 px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
