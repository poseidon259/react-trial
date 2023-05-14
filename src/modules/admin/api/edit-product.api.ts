import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate, useParams } from 'react-router'
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

export const useMutationEditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const editProductFn = (body: TProduct) => trackPromise(axiosClientFormData.post(`/product/update/${id}`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: editProductFn,
    mutationKey: 'editProduct',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_PRODUCT)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
