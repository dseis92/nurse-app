import { differenceInCalendarDays, isWithinInterval, parseISO } from "date-fns";
import type { Listing } from "../types/listing";
import type { FilterState } from "../types/filters";

const MAX_SCORE = 100;
const MIN_SCORE = 35;

export const calculateMatchScore = (listing: Listing, filters: FilterState) => {
  let score = 60;

  if (filters.startDate && filters.endDate) {
    const start = parseISO(filters.startDate);
    const end = parseISO(filters.endDate);
    const availabilityInterval = {
      start: parseISO(listing.availability.start),
      end: parseISO(listing.availability.end)
    };
    const coversAssignment =
      isWithinInterval(start, availabilityInterval) &&
      isWithinInterval(end, availabilityInterval);

    if (coversAssignment) {
      score += 20;
      const assignmentLength = differenceInCalendarDays(end, start);
      if (assignmentLength >= 56) {
        score += 5;
      }
    } else {
      score -= 25;
    }
  }

  if (filters.hospital && filters.hospital === listing.hospital.name) {
    score += 8;
  } else if (filters.hospital) {
    score -= 5;
  }

  if (filters.petFriendly) {
    if (listing.pets.allowed && listing.pets.maxPets >= filters.petCount) {
      score += 6;
      if (listing.pets.sizeAllowance === filters.petSize || listing.pets.sizeAllowance === "large") {
        score += 4;
      }
    } else {
      score -= 10;
    }
  } else if (!filters.petFriendly && listing.pets.allowed) {
    score += 2;
  }

  if (filters.parkingType !== "any") {
    if (listing.parking.type === filters.parkingType) {
      score += 5;
    }
    if (listing.parking.spots >= filters.parkingSpots) {
      score += 3;
    }
  }

  if (filters.instantApplicationOnly && listing.instantApplication) {
    score += 5;
  } else if (filters.instantApplicationOnly && !listing.instantApplication) {
    score -= 8;
  }

  if (filters.quietPreferred && listing.safety.includes("quiet")) {
    score += 4;
  }

  if (filters.safePreferred && listing.safety.includes("safe-area")) {
    score += 4;
  }

  if (listing.parking.type === "ev" && filters.parkingType === "ev") {
    score += 4;
  }

  score = Math.min(MAX_SCORE, Math.max(MIN_SCORE, score));
  return score;
};
