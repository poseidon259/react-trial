import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'

type TMasterField = {
  name: string
  stock: number
  sale_price: string
  origin_price: string
}

type TProduct = {
  name: string
  category_id: string
  description_list: string
  description_detail: string
  stock: number
  sale_price: string
  origin_price: string
  product_code: string
  status: string
  images: File[]
  master_fields: TMasterField[]
}

export const useMutationAddProduct = () => {
  const navigate = useNavigate()
  const addProductFn = (body: TProduct) => trackPromise(axiosClientFormData.post(`/product/create`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: addProductFn,
    mutationKey: 'addProduct',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_PRODUCT)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
