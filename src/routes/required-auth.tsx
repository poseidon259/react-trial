import { Navigate, Outlet } from 'react-router'
import { navigationFn } from './navigation-fn'
import { isObjectEmpty } from '~/helper/isObjectEmpty'
import { SYSTEM_ADMIN } from '~/configs'

export function RequiredAuth() {
  const admin = JSON.parse(localStorage.getItem('user') || '{}')
  const isAuth = !isObjectEmpty(admin) && admin.role === SYSTEM_ADMIN
  return isAuth ? <Outlet /> : <Navigate to={navigationFn.ADMIN_LOGIN} replace />
}
