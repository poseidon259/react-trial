import { useNavigate } from 'react-router'
import { LoginForm } from '../forms'
import { useEffect } from 'react'
import { navigationFn } from '~/routes'
import { SYSTEM_USER } from '~/configs'
import { isObjectEmpty } from '~/helper/isObjectEmpty'

export const LoginPage = () => {
  const userLogin = JSON.parse(localStorage.getItem('user') || '{}')
  const isLogin = !isObjectEmpty(userLogin) && userLogin.role === SYSTEM_USER
  const navigate = useNavigate()

  useEffect(() => {

    if (isLogin) {
      navigate(navigationFn.HOME)
    }
  }, [])

  
  return <LoginForm />
}
