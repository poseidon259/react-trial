import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate, useParams } from 'react-router'
import { navigationFn } from '~/routes'

type TBrand = {
  name: string
  image: File
}

export const useMutationEditBrand = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const editBrandFn = (body: TBrand) => trackPromise(axiosClientFormData.post(`/category/update/${id}`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: editBrandFn,
    mutationKey: 'editBrand',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_BRAND)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
