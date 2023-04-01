import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useCustomToast } from "~/hooks";
import axiosClient from "~/libs/axios/axiosClient";
import { navigationFn } from "~/routes";


type TChangePassword = {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const changePasswordFn = (body: TChangePassword) =>
  trackPromise(axiosClient.post("/auth/admin/changePassword", body));

export const useMutationChangePassword = () => {
  const navigate = useNavigate();
  const { toastSuccess, toastFail } = useCustomToast();

  return useMutation({
    mutationFn: changePasswordFn,
    mutationKey: "change-password",
    onSuccess: () => {
      navigate(navigationFn.HOME);
      toastSuccess({
        title: "Change password successfully",
      });
    },
    onError: () => {
      toastFail({
        title: "Something when wrong, please try again",
      });
    },
  });
};
