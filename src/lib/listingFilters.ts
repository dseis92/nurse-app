import { isWithinInterval, parseISO } from "date-fns";
import type { Listing } from "../types/listing";
import type { FilterState } from "../types/filters";

export const matchesDateRange = (listing: Listing, start?: string | null, end?: string | null) => {
  if (!start || !end) return true;
  const interval = {
    start: parseISO(listing.availability.start),
    end: parseISO(listing.availability.end)
  };
  return isWithinInterval(parseISO(start), interval) && isWithinInterval(parseISO(end), interval);
};

export const filterListings = (listings: Listing[], filters: FilterState, favoriteIds: Set<string>) => {
  return listings.filter((listing) => {
    if (!matchesDateRange(listing, filters.startDate, filters.endDate)) {
      return false;
    }

    if (filters.hospital && listing.hospital.name !== filters.hospital) {
      return false;
    }

    if (filters.petFriendly) {
      if (!listing.pets.allowed) return false;
      if (listing.pets.maxPets < filters.petCount) return false;
      const sizePriority = ["small", "medium", "large"];
      if (sizePriority.indexOf(listing.pets.sizeAllowance) < sizePriority.indexOf(filters.petSize)) {
        return false;
      }
    }

    if (filters.parkingType !== "any" && listing.parking.type !== filters.parkingType) {
      return false;
    }

    if (filters.parkingSpots > listing.parking.spots) {
      return false;
    }

    if (filters.instantApplicationOnly && !listing.instantApplication) {
      return false;
    }

    if (filters.favoriteOnly && !favoriteIds.has(listing.id)) {
      return false;
    }

    if (filters.quietPreferred && !listing.safety.includes("quiet")) {
      return false;
    }

    if (filters.safePreferred && !listing.safety.includes("safe-area")) {
      return false;
    }

    return true;
  });
};
