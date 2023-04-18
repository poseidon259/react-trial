import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'

type TAddToCart = {
  product_id: number
  quantity: number
  child_master_field_id: string
}

export const useMutationAddToCart = () => {

  const addToCartFn = (body: TAddToCart) =>
    trackPromise(axiosClient.post(`client/add_to_cart`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: addToCartFn,
    mutationKey: 'addToCart',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
