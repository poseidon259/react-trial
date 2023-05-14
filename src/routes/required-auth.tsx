import { Navigate, Outlet } from 'react-router'
import { navigationFn } from './navigation-fn'

export function RequiredAuth() {
  const isAuth = localStorage.getItem('user') ? true : false
  return isAuth ? <Outlet /> : <Navigate to={navigationFn.ADMIN_LOGIN} replace />
}
