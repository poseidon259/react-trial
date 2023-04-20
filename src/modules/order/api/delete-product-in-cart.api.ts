import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'

type TDeleteProductInCart = {
  product_id: number
  child_master_field_id: number
}

export const useMutationDeleteProductInCart = () => {
  const deleteProductInCartFn = (body: TDeleteProductInCart) =>
    trackPromise(axiosClient.delete(`client/delete_product_in_cart`, { data: body }))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: deleteProductInCartFn,
    mutationKey: 'deleteProductInCart',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
