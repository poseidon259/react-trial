import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { setStorage } from '~/helper'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'
import { SYSTEM_ADMIN, SYSTEM_USER } from '~/configs'

type TLogin = {
  email: string
  password: string
}

const loginFn = (body: TLogin) => trackPromise(axiosClient.post('/login', body))

export const useMutationLogin = () => {
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: loginFn,
    mutationKey: 'login',
    onSuccess: (data) => {
      setStorage('role', data?.data?.role)
      setStorage('user', data?.data)

      if (data?.data?.role === SYSTEM_ADMIN) {
        navigate(navigationFn.ADMIN_DASHBOARD)
      } else if (data?.data?.role === SYSTEM_USER) {
        navigate(navigationFn.HOME)
      }

      toastSuccess('Đăng nhập thành công')
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
