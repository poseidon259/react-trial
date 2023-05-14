import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'
import { debounce } from 'lodash'


export const useMutationDeleteUser= () => {
  const navigate = useNavigate()
  const deleteUserFn = (id: any) => trackPromise(axiosClientFormData.delete(`/user/delete/${id}`))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: deleteUserFn,
    mutationKey: 'deleteUser',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      navigate(navigationFn.ADMIN_USER)
      debounce(() => {
          window.location.reload()
      }, 1000)()
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
