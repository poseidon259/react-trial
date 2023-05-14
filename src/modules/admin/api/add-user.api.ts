import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'

type TUser = {
  first_name: string
  last_name: string
  province_id: number
  district_id: number
  ward_id: number
  house_number: string
  phone_number: string
  email: string
  status: string
  password: string
  avatar: File
}

export const useMutationAddUser = () => {
  const navigate = useNavigate()
  const addUserFn = (body: TUser) => trackPromise(axiosClientFormData.post(`/user/create`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: addUserFn,
    mutationKey: 'addUser',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_USER)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
