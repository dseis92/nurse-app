import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "outline" | "subtle" | "success";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-brand-primary/10 text-brand-primary",
  outline: "border border-brand-primary/30 text-brand-primary",
  subtle: "bg-zinc-100 text-zinc-700",
  success: "bg-emerald-100 text-emerald-700"
};

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
      variantStyles[variant],
      className
    )}
    {...props}
  />
);
