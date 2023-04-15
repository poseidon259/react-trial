import { RouteObject } from "react-router";
import { BlankPage } from "~/modules";
import { navigationFn } from "./navigation-fn";
import { StoreDetailPage } from "~/modules/store/pages/store-detail-page";

export const productRoutes: RouteObject = {
  errorElement: <BlankPage />,
  children: [
    {
      children: [
        {
          path: navigationFn.STORE_DETAIL,
          element: <StoreDetailPage />
        },
      ]
    }
  ]
}
