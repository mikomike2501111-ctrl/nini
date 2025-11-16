const FAVORITES_STORAGE_KEY = 'eddjos_favorites';

export function getFavorites(): string[] {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!stored) {
      return [];
    }
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveFavorites(favorites: string[]): void {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}

export function isFavorited(productId: string): boolean {
  return getFavorites().includes(productId);
}

export function toggleFavorite(productId: string): boolean {
  const favorites = getFavorites();
  const index = favorites.indexOf(productId);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }

  saveFavorites(favorites);
  return !isFavorited(productId);
}
