import { createBrowserRouter } from 'react-router-dom'

import { adminRoutes } from './admin-routes'
import { authRoutes } from './auth-routes'
import { lazyImport } from '~/helper'
import { HomePage } from '~/modules'
import { publicRoutes } from './public-routes'

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
])
