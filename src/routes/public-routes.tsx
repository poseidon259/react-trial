import { RouteObject } from 'react-router'
import { BlankPage, HomePage } from '~/modules'

export const publicRoutes: RouteObject = {
  errorElement: <BlankPage />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
  ]
}
