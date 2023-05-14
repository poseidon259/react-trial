import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate, useParams } from 'react-router'
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

export const useMutationEditUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const editUserFn = (body: TUser) => trackPromise(axiosClientFormData.post(`/user/update/${id}`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: editUserFn,
    mutationKey: 'editUser',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_USER)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
