import React from 'react'
import { toast } from 'react-toastify'

export const useCustomToast = () => {
  const toastSuccess = (message: string) =>
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const toastError = (message: string) =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })

  return { toastSuccess, toastError }
}
