export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  imageUrl: string | null;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

const CART_STORAGE_KEY = 'eddjos_cart';

export function getCart(): Cart {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) {
      return { items: [], total: 0 };
    }
    return JSON.parse(stored);
  } catch {
    return { items: [], total: 0 };
  }
}

export function saveCart(cart: Cart): void {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(item: Omit<CartItem, 'id'>): CartItem {
  const cart = getCart();
  const existingIndex = cart.items.findIndex(
    (i) =>
      i.productId === item.productId && i.size === item.size && i.color === item.color
  );

  if (existingIndex > -1) {
    cart.items[existingIndex].quantity += item.quantity;
  } else {
    const newItem: CartItem = {
      id: `${item.productId}-${item.size}-${item.color}-${Date.now()}`,
      ...item,
    };
    cart.items.push(newItem);
  }

  cart.total = calculateTotal(cart.items);
  saveCart(cart);
  return cart.items[existingIndex > -1 ? existingIndex : cart.items.length - 1];
}

export function removeFromCart(itemId: string): void {
  const cart = getCart();
  cart.items = cart.items.filter((i) => i.id !== itemId);
  cart.total = calculateTotal(cart.items);
  saveCart(cart);
}

export function updateCartItemQuantity(itemId: string, quantity: number): void {
  const cart = getCart();
  const item = cart.items.find((i) => i.id === itemId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      item.quantity = quantity;
      cart.total = calculateTotal(cart.items);
      saveCart(cart);
    }
  }
}

export function clearCart(): void {
  saveCart({ items: [], total: 0 });
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
