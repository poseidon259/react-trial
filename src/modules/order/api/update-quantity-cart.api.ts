import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'

type TUpdateQuantityCart = {
  product_id: number
  quantity: number
  child_master_field_id: number
}

export const useMutationUpdateQuantityCart = () => {

  const updateQuantityCartFn = (body: TUpdateQuantityCart) =>
    trackPromise(axiosClient.post(`client/update_quantity_cart`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: updateQuantityCartFn,
    mutationKey: 'updateQuantityCart',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
