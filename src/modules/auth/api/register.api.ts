import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

type TRegister = {
  email: string
  password: string
  first_name: string
  last_name: string
}

const registerFn = (body: TRegister) => trackPromise(axiosClient.post('/register', body))

export const useMutationRegister = () => {
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: registerFn,
    mutationKey: 'register',
    onSuccess: () => {
      navigate(navigationFn.LOGIN)
      toastSuccess('Register successfully. Please verify your email to login')
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
