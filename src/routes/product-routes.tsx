import { RouteObject } from "react-router";
import { BlankPage } from "~/modules";
import { ProductDetailPage } from "~/modules/product";
import { navigationFn } from "./navigation-fn";
import { ProductCategoryPage } from "~/modules/product/pages/product-category-page";

export const productRoutes: RouteObject = {
  errorElement: <BlankPage />,
  children: [
    {
      children: [
        {
          path: navigationFn.PRODUCT_DETAIL,
          element: <ProductDetailPage />
        },
        {
          path: navigationFn.PRODUCT_CATEGORY,
          element: <ProductCategoryPage />
        }
      ]
    }
  ]
}
