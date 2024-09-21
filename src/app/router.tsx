import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "@/pages/landing";
import { BaseLayout } from "@/widgets/layouts/baseLayout";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      }
    ]
  }
])
