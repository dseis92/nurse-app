import { Heart } from "lucide-react";
import { clsx } from "clsx";
import { useFavoritesStore } from "../stores/useFavoritesStore";

interface FavoriteButtonProps {
  listingId: string;
  size?: "sm" | "md";
}

export const FavoriteButton = ({ listingId, size = "md" }: FavoriteButtonProps) => {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(listingId));

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(listingId)}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className={clsx(
        "inline-flex items-center justify-center rounded-full border border-transparent transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
        size === "sm" ? "h-9 w-9" : "h-11 w-11",
        isFavorite ? "bg-brand-primary text-white shadow-md" : "bg-white text-zinc-500 hover:text-brand-primary hover:shadow"
      )}
    >
      <Heart
        className={size === "sm" ? "h-4 w-4" : "h-5 w-5"}
        fill={isFavorite ? "currentColor" : "none"}
      />
    </button>
  );
};
