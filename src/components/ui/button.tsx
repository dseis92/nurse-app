import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white hover:bg-brand-primary/90",
  secondary:
    "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:outline-zinc-900",
  ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100",
  outline: "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base"
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, variant = "primary", size = "md", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
