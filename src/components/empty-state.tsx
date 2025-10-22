import { Compass } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState = ({ onReset }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-zinc-200 bg-white p-12 text-center shadow-sm">
    <Compass className="h-12 w-12 text-brand-primary" aria-hidden />
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-zinc-900">No perfect match...yet</h3>
      <p className="text-sm text-zinc-600">
        Loosen a filter or peek at other hospitals. Homes refresh daily and we’ll nudge you when a new crush appears.
      </p>
    </div>
    <Button onClick={onReset}>Reset filters</Button>
  </div>
);
