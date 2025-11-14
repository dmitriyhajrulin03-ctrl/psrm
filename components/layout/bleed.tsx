import { cn } from "@/lib/utils";

export interface BleedProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Bleed({ className, ...props }: BleedProps) {
  return (
    <div
      className={cn("w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]", className)}
      {...props}
    />
  );
}

