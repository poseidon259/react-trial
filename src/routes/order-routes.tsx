import { RouteObject } from "react-router";
import { BlankPage } from "~/modules";
import { navigationFn } from "./navigation-fn";
import { CartPage, CheckoutPage } from "~/modules/order";

export const orderRoutes: RouteObject = {
  errorElement: <BlankPage />,
  children: [
    {
      children: [
        {
          path: navigationFn.CART,
          element: <CartPage />
        },
        {
          path: navigationFn.CHECKOUT,
          element: <CheckoutPage variant={'circles-alt'} />
        },
      ]
    }
  ]
}
