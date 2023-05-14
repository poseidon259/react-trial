import { RouteObject } from "react-router";
import { RequiredAuth } from "./required-auth";
import { navigationFn } from "./navigation-fn";
import { BlankPage } from "~/modules";
import { DashboardPage } from "~/modules/admin/pages/dashboard-page";
import { BrandPage } from "~/modules/admin/pages/brand/brand-page";
import { BrandNewPage } from "~/modules/admin/pages/brand/brand-new-page";
import { BrandEditPage } from "~/modules/admin/pages/brand/brand-edit-page";
import { ProductNewPage } from "~/modules/admin/pages/product/product-new-page";
import { ProductPage } from "~/modules/admin/pages/product/product-page";
import { ProductEditPage } from "~/modules/admin/pages/product/product-edit-page";
import { UserPage } from "~/modules/admin/pages/user/user-page";
import { UserNewPage } from "~/modules/admin/pages/user/user-new-page";
import { UserEditPage } from "~/modules/admin/pages/user/user-edit-page";

export const adminRoutes: RouteObject = {
  element: <RequiredAuth />,
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
          element: <ProductPage />
        },
        {
          path: navigationFn.ADMIN_ADD_PRODUCT,
          element: <ProductNewPage />
        },
        {
          path: navigationFn.ADMIN_EDIT_PRODUCT,
          element: <ProductEditPage />
        },
        {
          path: navigationFn.ADMIN_USER,
          element: <UserPage />
        },
        {
          path: navigationFn.ADMIN_ADD_USER,
          element: <UserNewPage />
        },
        {
          path: navigationFn.ADMIN_EDIT_USER,
          element: <UserEditPage />
        },
      ]
    }
  ]
}
