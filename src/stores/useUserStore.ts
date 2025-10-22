import { create } from "zustand";
import type { UserProfile } from "../types/user";

const defaultProfile: UserProfile = {
  id: "nurse-ava",
  fullName: "Ava Johnson, RN",
  preferredHospitals: ["Mercy Hospital", "Harborview Clinic"],
  contractLengthWeeks: 12,
  petDetails: {
    hasPets: true,
    count: 1,
    size: "medium"
  },
  parkingNeeds: {
    required: true,
    type: "large",
    spots: 1
  },
  backgroundCheckCompleted: true
};

interface UserStore {
  profile: UserProfile;
  setPreferredHospital: (hospital: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  profile: defaultProfile,
  setPreferredHospital: (hospital) =>
    set((state) => ({
      profile: {
        ...state.profile,
        preferredHospitals: [hospital, ...state.profile.preferredHospitals.filter((h) => h !== hospital)]
      }
    }))
}));
