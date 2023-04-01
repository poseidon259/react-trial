import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { trackPromise } from "react-promise-tracker";
import { useCustomToast } from "~/hooks";
import axiosClient from "~/libs/axios/axiosClient";
import { navigationFn } from "~/routes";


type TForgot = {
  email: string;
};

const forgotPasswordFn = (body: TForgot) =>
  trackPromise(axiosClient.post("/auth/admin/forgot", body));

export const useMutationForgotPassword = ({ email }: { email: string }) => {
  const navigate = useNavigate();
  const { toastSuccess, toastFail } = useCustomToast();

  return useMutation({
    mutationFn: forgotPasswordFn,
    mutationKey: "forgot",
    onSuccess: () => {
      toastSuccess({
        title: "Code sent to your email",
      });
      navigate(navigationFn.VERIFY_CODE, {
        state: {
          email,
        },
      });
    },

    onError: (error: any) => {
      toastFail({
        title: error.response.data.errors,
      });
    },
  });
};
