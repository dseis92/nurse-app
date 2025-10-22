import { clsx } from "clsx";

interface MatchBadgeProps {
  score: number;
}

const getTone = (score: number) => {
  if (score >= 85) return "bg-emerald-100 text-emerald-700";
  if (score >= 70) return "bg-brand-primary/10 text-brand-primary";
  return "bg-zinc-100 text-zinc-600";
};

export const MatchBadge = ({ score }: MatchBadgeProps) => (
  <div
    className={clsx(
      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
      getTone(score)
    )}
  >
    <span>{score}% match</span>
  </div>
);
