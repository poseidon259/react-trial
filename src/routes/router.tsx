import { createBrowserRouter } from 'react-router-dom'

import { adminRoutes } from './admin-routes'
import { authRoutes } from './auth-routes'
import { publicRoutes } from './public-routes'
import { productRoutes } from './product-routes'
import { storeRoutes } from './store-routes'
import { orderRoutes } from './order-routes'

export const router = createBrowserRouter([
  { ...authRoutes },
  { ...adminRoutes },
  { ...publicRoutes },
  { ...productRoutes },
  { ...storeRoutes },
  { ...orderRoutes }
])
