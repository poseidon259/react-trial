import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'

type TBrand = {
  name: string
  image: File
}

export const useMutationAddBrand = () => {
  const navigate = useNavigate()
  const addBrandFn = (body: TBrand) => trackPromise(axiosClientFormData.post(`/category/create`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: addBrandFn,
    mutationKey: 'addBrand',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_BRAND)
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
