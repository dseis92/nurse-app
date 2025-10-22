import {
  BadgeCheck,
  CalendarDays,
  Car,
  Clock3,
  Dog,
  MapPin,
  ShieldCheck
} from "lucide-react";
import { formatCurrency, formatDateRange, weeksBetween } from "../lib/formatters";
import type { ListingViewModel } from "../hooks/useListings";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { FavoriteButton } from "./favorite-button";
import { MatchBadge } from "./match-badge";

interface ListingCardProps {
  listing: ListingViewModel;
  onRequestExtension?: (listing: ListingViewModel) => void;
}

const SafetyIcon = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1 text-xs text-zinc-600">
    <ShieldCheck className="h-4 w-4 text-brand-secondary" aria-hidden />
    {label}
  </span>
);

export const ListingCard = ({ listing, onRequestExtension }: ListingCardProps) => {
  const totalWeeks = weeksBetween(listing.availability.start, listing.availability.end);

  const handleExtension = () => {
    if (onRequestExtension) {
      onRequestExtension(listing);
      return;
    }

    window.alert(
      `Extension request sent! We'll confirm availability at ${listing.address} within 24 hours.`
    );
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <MatchBadge score={listing.matchScore} />
          {listing.instantApplication ? (
            <Badge variant="success" className="shadow-sm">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden /> Instant application
            </Badge>
          ) : null}
        </div>
        <div className="absolute right-4 top-4">
          <FavoriteButton listingId={listing.id} />
        </div>
      </div>

      <CardHeader className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">{listing.neighborhood}</p>
          <h2 className="text-lg font-semibold text-zinc-900 text-balance">{listing.title}</h2>
          <p className="text-sm text-zinc-600 text-balance">{listing.intro}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-primary" aria-hidden />
            {listing.hospital.distanceMiles} mi / {listing.hospital.distanceMinutes} min to {" "}
            <span className="font-medium text-zinc-800">{listing.hospital.name}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-brand-primary" aria-hidden />
            {formatDateRange(listing.availability.start, listing.availability.end)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-brand-primary" aria-hidden />
            {totalWeeks} week run
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-6">
        <section className="rounded-2xl bg-zinc-50 p-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">All-in weekly rate</p>
              <p className="text-2xl font-semibold text-zinc-900">
                {formatCurrency(listing.allInWeekly)}
                <span className="ml-1 text-sm font-normal text-zinc-600">/ week</span>
              </p>
            </div>
            <div className="text-xs text-zinc-500">
              No surprise fees—rent, utilities, pet fees, parking, and extras bundled.
            </div>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-600">
            <div className="flex justify-between rounded-xl bg-white p-3 shadow-sm">
              <dt>Rent</dt>
              <dd className="font-medium text-zinc-800">{formatCurrency(listing.pricing.rent)}</dd>
            </div>
            <div className="flex justify-between rounded-xl bg-white p-3 shadow-sm">
              <dt>Utilities</dt>
              <dd className="font-medium text-zinc-800">{formatCurrency(listing.pricing.utilities)}</dd>
            </div>
            <div className="flex justify-between rounded-xl bg-white p-3 shadow-sm">
              <dt>Cleaning</dt>
              <dd className="font-medium text-zinc-800">{formatCurrency(listing.pricing.cleaning)}</dd>
            </div>
            <div className="flex justify-between rounded-xl bg-white p-3 shadow-sm">
              <dt>Pet fees</dt>
              <dd className="font-medium text-zinc-800">{formatCurrency(listing.pricing.petFees)}</dd>
            </div>
            <div className="flex justify-between rounded-xl bg-white p-3 shadow-sm">
              <dt>Parking</dt>
              <dd className="font-medium text-zinc-800">{formatCurrency(listing.pricing.parking)}</dd>
            </div>
            <div className="flex justify-between rounded-xl bg-white p-3 shadow-sm">
              <dt>Other</dt>
              <dd className="font-medium text-zinc-800">{formatCurrency(listing.pricing.other)}</dd>
            </div>
          </dl>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-900">Compatibility vibes</h3>
          <ul className="grid gap-2 text-sm text-zinc-600">
            {listing.compatibilityTags.map((tag) => (
              <li key={tag} className="flex items-center gap-2 rounded-2xl bg-zinc-50 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" aria-hidden />
                {tag}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-3 text-sm text-zinc-600">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="subtle" className="flex items-center gap-1">
              <Dog className="h-3.5 w-3.5 text-brand-primary" aria-hidden />
              {listing.pets.allowed
                ? `${listing.pets.maxPets} pets (${listing.pets.sizeAllowance}) welcome`
                : "Pet-free zone"}
            </Badge>
            <Badge variant="subtle" className="flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-brand-primary" aria-hidden />
              {listing.parking.type === "ev" ? "EV charger" : `${listing.parking.type} parking`}
            </Badge>
            <Badge variant="outline">{listing.parking.spots} reserved spot(s)</Badge>
          </div>

          <p className="text-xs text-zinc-500">{listing.pets.notes}</p>
          <p className="text-xs text-zinc-500">{listing.parking.notes}</p>

          <div className="flex flex-wrap gap-3">
            {listing.safety.includes("quiet") && <SafetyIcon label="Quiet block" />}
            {listing.safety.includes("safe-area") && <SafetyIcon label="Safe area" />}
            {listing.safety.includes("secure-entry") && <SafetyIcon label="Secure entry" />}
            {listing.safety.includes("soundproofing") && <SafetyIcon label="Soundproofed" />}
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-zinc-900">Commute intel</h4>
            <p className="mt-2 text-sm text-zinc-600">{listing.commuteNotes}</p>
            <p className="mt-2 text-xs text-zinc-500">Quiet hours {listing.quietHours}</p>
          </div>
        </section>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 border-t border-zinc-100 pt-4">
        <div className="flex w-full flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              One-and-done screening
            </span>
            <span className="text-sm text-zinc-700">
              {listing.instantApplication
                ? "Instant yes — your background check is already accepted"
                : "Host reviews your saved profile within 12 hours"}
            </span>
          </div>
          <Button onClick={handleExtension} size="md">
            Request extension
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
          {listing.amenities.map((amenity) => (
            <Badge key={amenity} variant="subtle">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
