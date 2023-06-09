import { useNavigate, useParams } from 'react-router-dom'
import { useMutation } from 'react-query'
import { trackPromise } from 'react-promise-tracker'
import { useCustomToast } from '~/hooks'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { debounce } from 'lodash'

type TComment = {
  rating: number
  content: string
}

export const useMutationCreateComment = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const createCommentFn = (body: TComment) =>
    trackPromise(axiosClientFormData.post(`client/product/${id}/comment/create`, body))

  const { toastSuccess, toastError } = useCustomToast()

  return useMutation({
    mutationFn: createCommentFn,
    mutationKey: 'createComment',
    onSuccess: (data: any) => {
      toastSuccess(data.message)
      debounce(() => {
        window.location.reload()
    }, 1000)()
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message)
    }
  })
}
