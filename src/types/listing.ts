export type SafetyFeature =
  | "quiet"
  | "safe-area"
  | "secure-entry"
  | "private-parking"
  | "pet-friendly"
  | "soundproofing";

export interface PricingBreakdown {
  rent: number;
  utilities: number;
  cleaning: number;
  petFees: number;
  parking: number;
  other: number;
}

export interface Listing {
  id: string;
  title: string;
  intro: string;
  description: string;
  imageUrl: string;
  address: string;
  neighborhood: string;
  hospital: {
    name: string;
    distanceMiles: number;
    distanceMinutes: number;
  };
  availability: {
    start: string;
    end: string;
  };
  pricing: PricingBreakdown;
  instantApplication: boolean;
  pets: {
    allowed: boolean;
    maxPets: number;
    sizeAllowance: "small" | "medium" | "large";
    notes: string;
  };
  parking: {
    type: "standard" | "large" | "covered" | "ev";
    spots: number;
    notes: string;
  };
  safety: SafetyFeature[];
  quietHours: string;
  extensionPolicy: string;
  commuteNotes: string;
  amenities: string[];
  compatibilityTags: string[];
}
