import { cn } from "@/shared/lib";

interface ILogo {
  className?: string;
}

export function Logo({ className }: ILogo) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 h-7 z-20",
        className
      )}
    >
      <div className="flex -space-x-3">
        <span className="size-6 bg-primary rounded-full z-30" />
        <span className="size-6 bg-muted rounded-full" />
      </div>
      <h5 className="text-current font-medium">testLab</h5>
    </div>
  )
}