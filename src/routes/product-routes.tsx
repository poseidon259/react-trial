import { RouteObject } from "react-router";
import { BlankPage } from "~/modules";
import { ProductDetailPage } from "~/modules/product";

export const productRoutes: RouteObject = {
  errorElement: <BlankPage />,
  children: [
    {
      children: [
        {
          path: '/product/:id',
          element: <ProductDetailPage />
        },
      ]
    }
  ]
}
