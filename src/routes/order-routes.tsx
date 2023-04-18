import { RouteObject } from "react-router";
import { BlankPage } from "~/modules";
import { navigationFn } from "./navigation-fn";
import { CartPage } from "~/modules/order";

export const orderRoutes: RouteObject = {
  errorElement: <BlankPage />,
  children: [
    {
      children: [
        {
          path: navigationFn.CART,
          element: <CartPage />
        },
      ]
    }
  ]
}
