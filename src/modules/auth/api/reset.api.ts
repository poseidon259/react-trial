import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";

import { useNavigate } from "react-router-dom";
import { useCustomToast } from "~/hooks";
import axiosClient from "~/libs/axios/axiosClient";
import { navigationFn } from "~/routes";

type TReset = {
  code: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
};

const resetPasswordFn = (body: TReset) =>
  trackPromise(axiosClient.post("/auth/admin/resetPassword", body));

export const useMutationResetPassword = () => {
  const { toastSuccess, toastFail } = useCustomToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: resetPasswordFn,
    mutationKey: "resetPassword",
    onSuccess: () => {
      toastSuccess({
        title: "Reset password successfully",
      });
      navigate(navigationFn.LOGIN);
    },
    onError: () => {
      toastFail({
        title: "Something when wrong, please try again",
      });
    },
  });
};
