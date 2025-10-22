import type { Listing } from "../../../types/listing";

const listings: Listing[] = [
  {
    id: "harbor-loft",
    title: "Quiet 2-bed Suite Seeking Day-Sleeper",
    intro: "Only a 5-min walk to Mercy Hospital. Loves pets and quiet nights.",
    description:
      "Top-floor sanctuary with blackout curtains, double-pane windows, and a dreamy reading nook for winding down after night shifts.",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    address: "124 Harborview Ave, Suite 4B",
    neighborhood: "Harborview",
    hospital: {
      name: "Mercy Hospital",
      distanceMiles: 0.7,
      distanceMinutes: 5
    },
    availability: {
      start: "2024-09-02",
      end: "2024-12-15"
    },
    pricing: {
      rent: 880,
      utilities: 70,
      cleaning: 25,
      petFees: 20,
      parking: 0,
      other: 15
    },
    instantApplication: true,
    pets: {
      allowed: true,
      maxPets: 2,
      sizeAllowance: "medium",
      notes: "Friendly with hypoallergenic pups and declawed cats."
    },
    parking: {
      type: "covered",
      spots: 1,
      notes: "Assigned covered spot with secure entry."
    },
    safety: ["quiet", "safe-area", "secure-entry", "soundproofing"],
    quietHours: "9pm – 9am",
    extensionPolicy:
      "Happy to extend up to 4 additional weeks with two-week notice—no prorate surprises.",
    commuteNotes: "Flat walk with street lights and plenty of late-night cafés nearby.",
    amenities: [
      "In-unit laundry",
      "Fiber Wi-Fi",
      "Adjustable standing desk",
      "Spa-style bathroom"
    ],
    compatibilityTags: [
      "Background check on file",
      "Day-sleeper approved",
      "Pet cuddle zone"
    ]
  },
  {
    id: "garden-casita",
    title: "Sunlit Casita Ready to Spoil Your Off-Days",
    intro: "EV charger out front and a hammock that saves your back.",
    description:
      "Standalone casita tucked behind a family home. Private entrance, mini herb garden, and a ridiculously comfy king bed.",
    imageUrl:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    address: "88 Rosewood St",
    neighborhood: "Willow Glen",
    hospital: {
      name: "Harborview Clinic",
      distanceMiles: 2.1,
      distanceMinutes: 9
    },
    availability: {
      start: "2024-08-19",
      end: "2024-12-01"
    },
    pricing: {
      rent: 820,
      utilities: 65,
      cleaning: 20,
      petFees: 0,
      parking: 25,
      other: 10
    },
    instantApplication: false,
    pets: {
      allowed: false,
      maxPets: 0,
      sizeAllowance: "small",
      notes: "Allergies on site—no pets please."
    },
    parking: {
      type: "ev",
      spots: 1,
      notes: "Dedicated driveway with Level 2 charger."
    },
    safety: ["safe-area", "private-parking"],
    quietHours: "10pm – 7am",
    extensionPolicy: "Extensions available in 2-week increments—just send a message!",
    commuteNotes: "Quick surface-street drive with sunrise views over the marina.",
    amenities: [
      "Private patio",
      "Weekly cleaning included",
      "Smart thermostat",
      "Filtered water station"
    ],
    compatibilityTags: [
      "Loves long stays",
      "Stress-free extensions",
      "EV-ready"
    ]
  },
  {
    id: "parkview-townhome",
    title: "Roomy Townhome Looking for a Travel Nurse Duo",
    intro: "Sleeps two comfortably and won’t judge your 3am meal prep.",
    description:
      "Three-story townhome with dual suites, blackout shades, and a flex loft perfect for yoga or charting.",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    address: "401 Parkview Terrace",
    neighborhood: "Greenbelt",
    hospital: {
      name: "General City Medical",
      distanceMiles: 3.4,
      distanceMinutes: 12
    },
    availability: {
      start: "2024-09-09",
      end: "2025-01-31"
    },
    pricing: {
      rent: 980,
      utilities: 80,
      cleaning: 35,
      petFees: 30,
      parking: 35,
      other: 10
    },
    instantApplication: true,
    pets: {
      allowed: true,
      maxPets: 3,
      sizeAllowance: "large",
      notes: "Happy to host multiple pets with current vaccinations."
    },
    parking: {
      type: "large",
      spots: 2,
      notes: "Garage fits oversized SUVs and includes gear storage."
    },
    safety: ["quiet", "safe-area", "private-parking"],
    quietHours: "8pm – 8am",
    extensionPolicy: "Extend month-to-month after contract with flat weekly rate.",
    commuteNotes: "Dedicated bike lane and express bus stop two blocks away.",
    amenities: [
      "Dual primary suites",
      "Peloton bike",
      "Chef's kitchen",
      "Fenced dog run"
    ],
    compatibilityTags: [
      "Instant application",
      "Multi-pet friendly",
      "Great for car shares"
    ]
  },
  {
    id: "studio-nook",
    title: "Cozy Studio Nook Seeking Solo Superhero",
    intro: "Snuggly studio with white-noise machine and built-in blackout shades.",
    description:
      "Thoughtful micro-studio designed by a former travel nurse. Contains everything you need and nothing you don’t.",
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
    address: "19 Maple Lane, Unit 2C",
    neighborhood: "Maple District",
    hospital: {
      name: "Mercy Hospital",
      distanceMiles: 1.4,
      distanceMinutes: 6
    },
    availability: {
      start: "2024-08-26",
      end: "2024-11-18"
    },
    pricing: {
      rent: 720,
      utilities: 55,
      cleaning: 18,
      petFees: 15,
      parking: 15,
      other: 12
    },
    instantApplication: true,
    pets: {
      allowed: true,
      maxPets: 1,
      sizeAllowance: "small",
      notes: "Ideal for cats or pocket-sized pups."
    },
    parking: {
      type: "standard",
      spots: 1,
      notes: "Reserved spot behind building with motion lights."
    },
    safety: ["quiet", "safe-area", "soundproofing"],
    quietHours: "9pm – 7am",
    extensionPolicy: "Extensions welcome—just text the host a week in advance.",
    commuteNotes: "Tree-lined walk to hospital; rideshare stand on the corner.",
    amenities: [
      "Memory foam mattress",
      "Air purifier",
      "Smart lock",
      "Weekly linen refresh"
    ],
    compatibilityTags: [
      "Soundproofed walls",
      "Night-shift friendly",
      "Instant application"
    ]
  }
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getListings = async (): Promise<Listing[]> => {
  await wait(450);
  return listings;
};
