import { Navigate, RouteObject } from 'react-router-dom'
import { navigationFn } from './navigation-fn'
import { HomePage } from '~/modules'

export const homeRoutes: RouteObject = {
  path: '/',
  element: <HomePage />
}
