import { RouteObject } from 'react-router'
import { Navigate } from 'react-router-dom'

// import { BlankPage } from "@/modules";
// import { DefaultLayout } from "@/layouts";

import { RequiredAuth } from './required-auth'
import { navigationFn } from './navigation-fn'
import { DefaultLayout } from '~/layouts'
import { BlankPage, HomePage } from '~/modules'
import { homeRoutes } from './home-routes'

export const publicRoutes: RouteObject = {
  element: <DefaultLayout />,
  errorElement: <BlankPage />,
  children: [
    { 
      index: true,
      element: <HomePage />
    }
  ]
}
