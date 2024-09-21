import { Outlet } from "react-router-dom";
import { cn } from "@/shared/lib";
import styles from './BaseLayout.module.css'

export function BaseLayout() {
  return (
    <div className={cn(
      "flex flex-col min-h-screen m-auto",
      styles.root
    )}>
      <Outlet />
    </div>
  )
}