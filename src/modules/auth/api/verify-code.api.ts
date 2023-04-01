import { useNavigate } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";
import { useCustomToast } from "~/hooks";
import axiosClient from "~/libs/axios/axiosClient";
import { navigationFn } from "~/routes";


type TVerifyCode = {
  code: string;
  email: string;
};

const verifyCodeFn = (body: TVerifyCode) =>
  trackPromise(axiosClient.post("/auth/admin/verify", body));

export const useMutationVerifyCode = (email: string, code: string) => {
  const { toastSuccess, toastFail } = useCustomToast();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: "verify-code",
    mutationFn: verifyCodeFn,
    onSuccess: () => {
      toastSuccess({
        title: "Verify code successfully",
      });
      navigate(navigationFn.RESET_PASSWORD, {
        state: {
          email,
          code,
        },
      });
    },
    onError: () => {
      toastFail({
        title: "Verify code failed",
      });
    },
  });
};
