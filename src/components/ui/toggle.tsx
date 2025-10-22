import * as TogglePrimitive from "@radix-ui/react-toggle";
import { clsx } from "clsx";
import { forwardRef } from "react";

type ToggleVariant = "default" | "outline";

interface ToggleProps extends TogglePrimitive.ToggleProps {
  variant?: ToggleVariant;
}

const variantStyles: Record<ToggleVariant, string> = {
  default:
    "bg-white text-zinc-800 hover:bg-brand-primary/10 data-[state=on]:bg-brand-primary data-[state=on]:text-white",
  outline:
    "border border-zinc-300 bg-white hover:border-brand-primary data-[state=on]:bg-brand-primary data-[state=on]:text-white"
};

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
);

Toggle.displayName = "Toggle";
