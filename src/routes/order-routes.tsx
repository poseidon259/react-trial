import { RouteObject } from "react-router";
import { BlankPage } from "~/modules";
import { navigationFn } from "./navigation-fn";
import { CartPage, CheckoutPage } from "~/modules/order";
import { OrderHistoryPage } from "~/modules/order/pages/order-history-page";
import { OrderHistoryDetailPage } from "~/modules/order/pages/order-history-detail-page";
import { CheckoutVNPayPage } from "~/modules/order/pages/checkout-vnpay-page";

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
        {
          path: navigationFn.ORDER_HISTORY,
          element: <OrderHistoryPage />
        },
        {
          path: navigationFn.ORDER_DETAIL,
          element: <OrderHistoryDetailPage />
        },
        {
          path: navigationFn.CHECKOUT_VNPAY,
          element: <CheckoutVNPayPage />
        },
      ]
    }
  ]
}
