import { useState, useCallback, useEffect } from 'react';
import { Cart, getCart } from '../lib/cartStore';

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  useEffect(() => {
    setCart(getCart());

    const handleCartChange = () => {
      setCart(getCart());
    };

    window.addEventListener('storage', handleCartChange);
    return () => window.removeEventListener('storage', handleCartChange);
  }, []);

  const refreshCart = useCallback(() => {
    setCart(getCart());
  }, []);

  return {
    cart,
    refreshCart,
    itemCount: cart.items.length,
  };
}
