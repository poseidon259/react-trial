import { useNavigate } from 'react-router'
import { LoginForm } from '../forms'
import { useEffect } from 'react'
import { navigationFn } from '~/routes'

export const LoginPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLogin = localStorage.getItem('user')

    if (isLogin) {
      navigate(navigationFn.HOME)
    }
  }, [navigate])
  return <LoginForm />
}
