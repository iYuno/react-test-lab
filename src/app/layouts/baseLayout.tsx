import { Outlet } from "react-router-dom";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { cn } from "@/shared/lib";
import styles from './BaseLayout.module.css'

export function BaseLayout() {
  return (
    <div className={cn(
      "flex flex-col min-h-screen mx-auto",
      styles.root
    )}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}