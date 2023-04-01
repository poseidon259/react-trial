import React from "react";
import { useToast, UseToastOptions } from "@chakra-ui/react";

interface ToastProps extends UseToastOptions {}

export const useCustomToast = () => {
  const toast = useToast();

  const toastSuccess = (props: ToastProps) =>
    toast({
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top-right",
      ...props,
    });

  const toastFail = (props: ToastProps) =>
    toast({
      status: "error",
      duration: 4000,
      isClosable: true,
      position: "top-right",
      ...props,
    });

  return { toastSuccess, toastFail };
};
