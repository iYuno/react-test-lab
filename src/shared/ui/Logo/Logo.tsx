
export function Logo() {
  return (
    <div className="flex items-center gap-2 h-7">
      <div className="flex -space-x-3">
        <span className="size-6 bg-primary rounded-full z-30" />
        <span className="size-6 bg-background rounded-full" />
      </div>
      <h5 className="text-background font-medium">testLab</h5>
    </div>
  )
}