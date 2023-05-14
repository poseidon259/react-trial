import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate, useParams } from 'react-router'
import { navigationFn } from '~/routes'

type TUpdateStatusOrder = {
    status: string
}

export const useMutationEditStatusOrder = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const editStatusOrderFn = (body: TUpdateStatusOrder) => trackPromise(axiosClientFormData.post(`/order/update_status/${id}`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: editStatusOrderFn,
    mutationKey: 'editStatusOrder',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_ORDER)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
