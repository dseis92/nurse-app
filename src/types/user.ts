export interface UserProfile {
  id: string;
  fullName: string;
  preferredHospitals: string[];
  contractLengthWeeks: number;
  petDetails: {
    hasPets: boolean;
    count: number;
    size: "small" | "medium" | "large";
  };
  parkingNeeds: {
    required: boolean;
    type: "standard" | "large" | "covered" | "ev";
    spots: number;
  };
  backgroundCheckCompleted: boolean;
}
