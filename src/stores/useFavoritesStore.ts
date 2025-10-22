import { create } from "zustand";

interface FavoritesStore {
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: new Set(),
  toggleFavorite: (id) =>
    set((state) => {
      const next = new Set(state.favorites);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return { favorites: next };
    }),
  isFavorite: (id) => get().favorites.has(id)
}));
