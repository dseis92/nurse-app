import { differenceInCalendarDays, parseISO } from "date-fns";
import type { PricingBreakdown } from "../types/listing";

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);

export const formatDateRange = (start: string, end: string) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
  });
  return `${formatter.format(parseISO(start))} – ${formatter.format(parseISO(end))}`;
};

export const calculateAllInWeekly = (pricing: PricingBreakdown) => {
  const { rent, utilities, cleaning, petFees, parking, other } = pricing;
  return rent + utilities + cleaning + petFees + parking + other;
};

export const weeksBetween = (start: string, end: string) => {
  const days = differenceInCalendarDays(parseISO(end), parseISO(start));
  return Math.round(days / 7);
};
