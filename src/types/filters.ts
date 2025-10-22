export type PetSize = "small" | "medium" | "large";
export type ParkingType = "standard" | "large" | "covered" | "ev";

export interface FilterState {
  startDate: string | null;
  endDate: string | null;
  hospital: string;
  petFriendly: boolean;
  petSize: PetSize;
  petCount: number;
  parkingType: ParkingType | "any";
  parkingSpots: number;
  quietPreferred: boolean;
  safePreferred: boolean;
  instantApplicationOnly: boolean;
  favoriteOnly: boolean;
}

export type FilterAction =
  | { type: "setDates"; startDate: string | null; endDate: string | null }
  | { type: "setHospital"; hospital: string }
  | { type: "togglePetFriendly"; value?: boolean }
  | { type: "setPetSize"; size: PetSize }
  | { type: "setPetCount"; count: number }
  | { type: "setParkingType"; parking: FilterState["parkingType"] }
  | { type: "setParkingSpots"; spots: number }
  | { type: "toggleQuietPreferred" }
  | { type: "toggleSafePreferred" }
  | { type: "toggleInstantApplication" }
  | { type: "toggleFavoriteOnly" }
  | { type: "reset" };
