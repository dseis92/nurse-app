import { useCallback, useEffect, useMemo, useState } from "react";
import { getListings } from "../app/api/listings/route";
import { calculateMatchScore } from "../lib/calcMatchScore";
import { calculateAllInWeekly } from "../lib/formatters";
import { filterListings } from "../lib/listingFilters";
import { useFiltersStore } from "../stores/useFiltersStore";
import { useFavoritesStore } from "../stores/useFavoritesStore";
import type { Listing } from "../types/listing";
import type { FilterState } from "../types/filters";

export interface ListingViewModel extends Listing {
  matchScore: number;
  allInWeekly: number;
  isFavorite: boolean;
}

interface ListingsResponse {
  listings: ListingViewModel[];
  isLoading: boolean;
  error: string | null;
  total: number;
  refetch: () => void;
}

export const useListings = (): ListingsResponse => {
  const filters = useFiltersStore(
    (state) =>
      ({
        startDate: state.startDate,
        endDate: state.endDate,
        hospital: state.hospital,
        petFriendly: state.petFriendly,
        petSize: state.petSize,
        petCount: state.petCount,
        parkingType: state.parkingType,
        parkingSpots: state.parkingSpots,
        quietPreferred: state.quietPreferred,
        safePreferred: state.safePreferred,
        instantApplicationOnly: state.instantApplicationOnly,
        favoriteOnly: state.favoriteOnly
      } satisfies FilterState)
  );
  const favorites = useFavoritesStore((state) => state.favorites);
  const [rawListings, setRawListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = useCallback(() => {
    setIsLoading(true);
    getListings()
      .then((data) => {
        setRawListings(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("We hit a snag loading homes. Try again in a moment.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  const listings = useMemo(() => {
    const filtered = filterListings(rawListings, filters, favorites);
    return filtered
      .map((listing) => ({
        ...listing,
        matchScore: calculateMatchScore(listing, filters),
        allInWeekly: calculateAllInWeekly(listing.pricing),
        isFavorite: favorites.has(listing.id)
      }))
      .sort((a, b) => b.matchScore - a.matchScore);
  }, [favorites, filters, rawListings]);

  return {
    listings,
    total: listings.length,
    isLoading,
    error,
    refetch: fetchListings
  };
};
