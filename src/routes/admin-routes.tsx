import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

// import { BlankPage } from "@/modules";
// import { DefaultLayout } from "@/layouts";

import { RequiredAuth } from "./required-auth";
import { navigationFn } from "./navigation-fn";
import { DefaultLayout } from "~/layouts";
import { BlankPage } from "~/modules";
import { homeRoutes } from "./home-routes";

export const adminRoutes: RouteObject = {
  element: <RequiredAuth />,
  errorElement: <BlankPage />,
  children: [
    {
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={navigationFn.HOME} replace />
        },
        { ...homeRoutes }
      ]
    }
  ]
}
