import { Outlet } from "react-router-dom";
import { Card } from "@/shared/ui";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-background content-center">
      <Card className="mx-auto max-w-sm border-neutral-400">
        <Outlet />
      </Card>
    </div>
  )
}