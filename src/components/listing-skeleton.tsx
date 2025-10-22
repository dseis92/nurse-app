import { Card, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const ListingSkeleton = () => (
  <Card className="flex h-full flex-col overflow-hidden">
    <div className="relative h-56 w-full overflow-hidden">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
    <CardContent className="flex flex-1 flex-col gap-4">
      <Skeleton className="h-4 w-1/3 rounded-full" />
      <Skeleton className="h-6 w-3/4 rounded-full" />
      <Skeleton className="h-4 w-full rounded-full" />
      <div className="grid grid-cols-2 gap-3">
        <Skeleton className="h-16 rounded-2xl" />
        <Skeleton className="h-16 rounded-2xl" />
        <Skeleton className="h-16 rounded-2xl" />
        <Skeleton className="h-16 rounded-2xl" />
      </div>
    </CardContent>
    <CardFooter className="flex flex-col gap-3">
      <Skeleton className="h-10 w-full rounded-full" />
      <Skeleton className="h-4 w-full rounded-full" />
    </CardFooter>
  </Card>
);
