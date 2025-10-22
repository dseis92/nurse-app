import { create } from "zustand";
import type { FilterState, PetSize, ParkingType } from "../types/filters";

const defaultState: FilterState = {
  startDate: null,
  endDate: null,
  hospital: "",
  petFriendly: false,
  petSize: "medium",
  petCount: 0,
  parkingType: "any",
  parkingSpots: 1,
  quietPreferred: false,
  safePreferred: false,
  instantApplicationOnly: false,
  favoriteOnly: false
};

interface FiltersStore extends FilterState {
  setDates: (start: string | null, end: string | null) => void;
  setHospital: (hospital: string) => void;
  togglePetFriendly: (value?: boolean) => void;
  setPetSize: (size: PetSize) => void;
  setPetCount: (count: number) => void;
  setParkingType: (type: ParkingType | "any") => void;
  setParkingSpots: (spots: number) => void;
  toggleQuietPreferred: () => void;
  toggleSafePreferred: () => void;
  toggleInstantApplicationOnly: () => void;
  toggleFavoriteOnly: () => void;
  reset: () => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  ...defaultState,
  setDates: (start, end) => set({ startDate: start, endDate: end }),
  setHospital: (hospital) => set({ hospital }),
  togglePetFriendly: (value) =>
    set((state) => ({ petFriendly: value ?? !state.petFriendly })),
  setPetSize: (size) => set({ petSize: size }),
  setPetCount: (count) => set({ petCount: Math.max(0, count) }),
  setParkingType: (type) => set({ parkingType: type }),
  setParkingSpots: (spots) => set({ parkingSpots: Math.max(0, spots) }),
  toggleQuietPreferred: () => set((state) => ({ quietPreferred: !state.quietPreferred })),
  toggleSafePreferred: () => set((state) => ({ safePreferred: !state.safePreferred })),
  toggleInstantApplicationOnly: () =>
    set((state) => ({ instantApplicationOnly: !state.instantApplicationOnly })),
  toggleFavoriteOnly: () => set((state) => ({ favoriteOnly: !state.favoriteOnly })),
  reset: () => set({ ...defaultState })
}));
