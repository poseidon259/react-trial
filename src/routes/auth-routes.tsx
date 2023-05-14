import { RouteObject } from 'react-router'

import { BlockedAuth } from './blocked-auth'
import { BlankPage, ForgotPasswordPage, LoginPage, ResetPasswordPage } from '~/modules'
import RegisterForm from '~/modules/auth/forms/register-form'
import { LoginPageAdmin } from '~/modules/admin/pages/login-admin-page'

export const authRoutes: RouteObject = {
  element: <BlockedAuth />,
  errorElement: <BlankPage />,
  children: [
    {
      // element: <AuthLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/forgot-password',
          element: <ForgotPasswordPage />
        },
        {
          path: '/register',
          element: <RegisterForm />
        },
        {
          path: '/logout',
          element: <></>
        },
        {
          path: '/reset-password',
          element: <ResetPasswordPage />
        },
        {
          path: '/admin/login',
          element: <LoginPageAdmin />
        }
      ]
    }
  ]
}
