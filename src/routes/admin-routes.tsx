import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import { RequiredAuth } from "./required-auth";
import { navigationFn } from "./navigation-fn";
import { BlankPage } from "~/modules";
import { DashboardPage } from "~/modules/admin/pages/dashboard-page";
import { BrandPage } from "~/modules/admin/pages/brand/brand-page";
import { BrandNewPage } from "~/modules/admin/pages/brand/brand-new-page";
import { BrandEditPage } from "~/modules/admin/pages/brand/brand-edit-page";
import { ProductNewPage } from "~/modules/admin/pages/product/product-new-page";

export const adminRoutes: RouteObject = {
  // element: <RequiredAuth />,
  errorElement: <BlankPage />,
  children: [
    {
      children: [
        {
          path: navigationFn.ADMIN_DASHBOARD,
          element: <DashboardPage />
        },
        {
          path: navigationFn.ADMIN_BRAND,
          element: <BrandPage />
        },
        {
          path: navigationFn.ADMIN_ADD_BRAND,
          element: <BrandNewPage />
        },
        {
          path: navigationFn.ADMIN_EDIT_BRAND,
          element: <BrandEditPage />
        },
        {
          path: navigationFn.ADMIN_PRODUCT,
          element: <BrandEditPage />
        },
        {
          path: navigationFn.ADMIN_ADD_PRODUCT,
          element: <ProductNewPage />
        },
        {
          path: navigationFn.ADMIN_EDIT_PRODUCT,
          element: <BrandEditPage />
        },
      ]
    }
  ]
}
