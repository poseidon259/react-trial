import { RouteObject } from "react-router";

import { BlockedAuth } from "./blocked-auth";
import { BlankPage, LoginPage } from "~/modules";
import { AuthLayout } from "~/layouts";

export const authRoutes: RouteObject = {
  element: <BlockedAuth />,
  errorElement: <BlankPage />,
  children: [
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/forgot-password',
          element: <></>
        },
        {
          path: '/reset-password',
          element: <></>
        },
        {
          path: 'verify-code',
          element: <></>
        }
      ]
    }
  ]
}
