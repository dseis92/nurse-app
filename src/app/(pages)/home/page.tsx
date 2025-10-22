import { CalendarHeart, HomeHeart, MapPinned } from "lucide-react";
import { FilterBar } from "../../../components/filter-bar";
import { ListingsGrid } from "../../../components/listings-grid";
import { Badge } from "../../../components/ui/badge";
import { useUserStore } from "../../../stores/useUserStore";

const PageHero = () => {
  const profile = useUserStore((state) => state.profile);

  return (
    <section className="space-y-6 rounded-3xl bg-gradient-to-br from-rose-100 via-white to-zinc-50 p-8 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-secondary shadow-sm">
            <HomeHeart className="h-4 w-4" aria-hidden /> Nurse Nest Finder
          </span>
          <h1 className="text-3xl font-semibold text-zinc-900 text-balance">
            Meet furnished homes that vibe with your next contract
          </h1>
          <p className="text-sm text-zinc-600 max-w-xl">
            We pair travel nurses with cozy, contract-ready rentals that love day-sleepers, pet parents, and last-minute extensions. Your saved screening travels with you, so matches can say yes instantly.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
            <Badge variant="subtle" className="flex items-center gap-1">
              <CalendarHeart className="h-3.5 w-3.5 text-brand-primary" aria-hidden />
              {profile.contractLengthWeeks}-week stay
            </Badge>
            <Badge variant="subtle" className="flex items-center gap-1">
              <MapPinned className="h-3.5 w-3.5 text-brand-primary" aria-hidden />
              Favorite hospitals: {profile.preferredHospitals.join(", ")}
            </Badge>
            <Badge variant="subtle">Background check stored</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-3xl bg-white p-4 text-sm text-zinc-600 shadow-inner">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-brand-primary/10" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Why nurses swipe right</p>
              <p>Transparent weekly pricing, instant applications, and chill neighborhoods.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-brand-secondary/10" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Extend stress-free</p>
              <p>Tap the extension button on any listing to lock extra weeks without prorate math.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-8 md:px-8 lg:px-12">
      <PageHero />
      <FilterBar />
      <section className="pb-16">
        <ListingsGrid />
      </section>
    </main>
  );
};

export default HomePage;
