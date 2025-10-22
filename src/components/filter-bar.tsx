import { useMemo } from "react";
import { CalendarRange, Dog, Heart, ParkingCircle, Shield, Sparkles } from "lucide-react";
import { hospitals } from "../lib/hospitals";
import { useFiltersStore } from "../stores/useFiltersStore";
import { useUserStore } from "../stores/useUserStore";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Toggle } from "./ui/toggle";

export const FilterBar = () => {
  const profile = useUserStore((state) => state.profile);
  const setPreferredHospital = useUserStore((state) => state.setPreferredHospital);
  const filters = useFiltersStore();
  const {
    startDate,
    endDate,
    hospital,
    petFriendly,
    petSize,
    petCount,
    parkingType,
    parkingSpots,
    instantApplicationOnly,
    quietPreferred,
    safePreferred,
    favoriteOnly
  } = filters;

  const contractRange = useMemo(() => `${profile.contractLengthWeeks} week assignment`, [
    profile.contractLengthWeeks
  ]);

  return (
    <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-zinc-900">Dial in your match</span>
          <Badge variant="subtle">{contractRange}</Badge>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Shield className="h-4 w-4 text-brand-primary" aria-hidden />
          Saved screening applies everywhere. Toggle instant approvals to see hosts who skip extra paperwork.
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="flex flex-col gap-2 text-sm text-zinc-600">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
            <CalendarRange className="h-4 w-4 text-brand-primary" aria-hidden />
            Start date
          </span>
          <input
            type="date"
            value={startDate ?? ""}
            onChange={(event) => filters.setDates(event.target.value || null, endDate)}
            className="w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-zinc-600">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
            <CalendarRange className="h-4 w-4 text-brand-primary" aria-hidden />
            End date
          </span>
          <input
            type="date"
            value={endDate ?? ""}
            onChange={(event) => filters.setDates(startDate, event.target.value || null)}
            className="w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-zinc-600">
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">Hospital</span>
          <select
            value={hospital}
            onChange={(event) => {
              filters.setHospital(event.target.value);
              if (event.target.value) setPreferredHospital(event.target.value);
            }}
            className="w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          >
            <option value="">Anywhere welcoming</option>
            {hospitals.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <div className="flex flex-col gap-2 text-sm text-zinc-600">
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">Pet pals</span>
          <div className="flex flex-wrap gap-3">
            <Toggle
              pressed={petFriendly}
              onPressedChange={(value) => filters.togglePetFriendly(value)}
              aria-label="Pet friendly"
            >
              <Dog className="h-4 w-4" aria-hidden /> Pets ok
            </Toggle>
            <select
              value={petSize}
              disabled={!petFriendly}
              onChange={(event) => filters.setPetSize(event.target.value as typeof petSize)}
              className="rounded-2xl border border-zinc-200 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 disabled:opacity-50"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <input
              type="number"
              min={0}
              max={3}
              value={petCount}
              disabled={!petFriendly}
              onChange={(event) => filters.setPetCount(Number(event.target.value))}
              className="w-20 rounded-2xl border border-zinc-200 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 disabled:opacity-50"
              aria-label="Pet count"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2 text-sm text-zinc-600">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
            <ParkingCircle className="h-4 w-4 text-brand-primary" aria-hidden /> Parking
          </span>
          <div className="flex flex-wrap gap-3">
            <select
              value={parkingType}
              onChange={(event) => filters.setParkingType(event.target.value as typeof parkingType)}
              className="rounded-2xl border border-zinc-200 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            >
              <option value="any">Any type</option>
              <option value="standard">Standard</option>
              <option value="large">Large vehicle</option>
              <option value="covered">Covered</option>
              <option value="ev">EV charging</option>
            </select>
            <input
              type="number"
              min={0}
              max={3}
              value={parkingSpots}
              onChange={(event) => filters.setParkingSpots(Number(event.target.value))}
              className="w-24 rounded-2xl border border-zinc-200 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              aria-label="Parking spots"
            />
          </div>
        </div>

        <label className="flex items-center gap-3 rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 shadow-sm">
          <Checkbox
            checked={instantApplicationOnly}
            onCheckedChange={() => filters.toggleInstantApplicationOnly()}
            aria-label="Show instant application homes"
          />
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-primary" aria-hidden />
            Instant application only
          </span>
        </label>

        <label className="flex items-center gap-3 rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 shadow-sm">
          <Checkbox
            checked={favoriteOnly}
            onCheckedChange={() => filters.toggleFavoriteOnly()}
            aria-label="Show favorites only"
          />
          <span className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-brand-primary" aria-hidden />
            Favorites only
          </span>
        </label>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
        <label className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2">
          <Checkbox checked={quietPreferred} onCheckedChange={() => filters.toggleQuietPreferred()} />
          Quiet neighborhood please
        </label>
        <label className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2">
          <Checkbox checked={safePreferred} onCheckedChange={() => filters.toggleSafePreferred()} />
          Prioritize safety badges
        </label>
        <Button variant="ghost" onClick={() => filters.reset()}>
          Reset filters
        </Button>
      </div>
    </div>
  );
};
