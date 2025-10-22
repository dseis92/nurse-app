import { AlertCircle } from "lucide-react";
import { useMemo } from "react";
import { useListings } from "../hooks/useListings";
import { useFavoritesStore } from "../stores/useFavoritesStore";
import { useFiltersStore } from "../stores/useFiltersStore";
import { EmptyState } from "./empty-state";
import { ListingCard } from "./listing-card";
import { ListingSkeleton } from "./listing-skeleton";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const ListingsGrid = () => {
  const { listings, isLoading, error, refetch, total } = useListings();
  const resetFilters = useFiltersStore((state) => state.reset);
  const favorites = useFavoritesStore((state) => state.favorites);

  const summary = useMemo(() => {
    if (isLoading) return "We’re scouting options...";
    if (total === 0) return "No listings match right now";
    if (total === 1) return "1 home is swooning for your schedule";
    return `${total} homes love your vibe`;
  }, [isLoading, total]);

  if (error) {
    return (
      <div className="space-y-4 rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-5 w-5" aria-hidden />
          <span className="text-sm font-semibold">{error}</span>
        </div>
        <Button variant="secondary" onClick={refetch} size="sm">
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-zinc-900">{summary}</h2>
        <Badge variant="outline">Favorites saved: {favorites.size}</Badge>
      </div>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ListingSkeleton key={index} />
          ))}
        </div>
      ) : total === 0 ? (
        <EmptyState onReset={resetFilters} />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
};
