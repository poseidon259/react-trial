import { createBrowserRouter } from 'react-router-dom'

import { adminRoutes } from './admin-routes'
import { authRoutes } from './auth-routes'
import { publicRoutes } from './public-routes'
import { productRoutes } from './product-routes'
import { storeRoutes } from './store-routes'
import { orderRoutes } from './order-routes'

// const { PrivacyPocily } = lazyImport(
//   () => import("@/modules"),
//   "PrivacyPocily"
// );
console.log('router routes')
const PrivacyPocily = () => {
  console.log('privacy')
  return <div>ok</div>
}
export const router = createBrowserRouter([
  { ...authRoutes },
  // { ...adminRoutes },
  { ...publicRoutes},
  { ...productRoutes },
  { ...storeRoutes },
  { ...orderRoutes },
])
