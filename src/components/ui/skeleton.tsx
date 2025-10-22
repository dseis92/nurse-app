import { clsx } from "clsx";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    className={clsx("animate-pulse rounded-full bg-zinc-200/80", className)}
    {...props}
  />
);
