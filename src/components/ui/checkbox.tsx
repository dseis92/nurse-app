import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Check } from "lucide-react";
import { forwardRef } from "react";

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={clsx(
        "flex h-5 w-5 items-center justify-center rounded-md border border-zinc-300 bg-white transition hover:border-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary data-[state=checked]:border-brand-primary data-[state=checked]:bg-brand-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="text-white">
        <Check className="h-4 w-4" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);

Checkbox.displayName = "Checkbox";
