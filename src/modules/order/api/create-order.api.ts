import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'
import { debounce } from 'lodash'

type TCreateOrder = {
  district: string
  email: string
  first_name: string
  house_number: string
  last_name: string
  note: string
  order_items: []
  payment_method: string
  payment_note: string
  phone_number: string
  province: string
  shipping_fee: number
  total: number
  ward: string
}

export const useMutationCreateOrder = () => {
  const navigate = useNavigate()

  const createOrderFn = (body: TCreateOrder) => trackPromise(axiosClient.post(`client/order`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: createOrderFn,
    mutationKey: 'createOrder',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      debounce(() => {
        window.location.reload()
      }, 1000)()
      // navigate(navigationFn.ORDER_HISTORY)
    },

    onError: (error: any) => {
      toastError('Đã xảy ra lỗi')
      toastError(error?.response?.data?.message)
    }
  })
}
