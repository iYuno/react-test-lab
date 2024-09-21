import { createBrowserRouter } from "react-router-dom";
import { SignInPage } from "@/pages/auth/sign-in";
import { SignUpPage } from "@/pages/auth/sign-up";
import { AuthLayout } from "@/widgets/layouts/auth";




export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <SignInPage />
      },
      {
        path: 'registration',
        element: <SignUpPage />
      }
    ]
  }
])
