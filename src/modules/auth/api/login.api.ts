import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { trackPromise } from "react-promise-tracker";
import { setStorage } from "~/helper";
import { useCustomToast } from "~/hooks";
import axiosClient from "~/libs/axios/axiosClient";
import { navigationFn } from "~/routes";


type TLogin = {
  email: string;
  password: string;
};

const loginFn = (body: TLogin) =>
  trackPromise(axiosClient.post("/auth/login/admin", body));

export const useMutationLogin = () => {
  const navigate = useNavigate();
  const { toastSuccess, toastFail } = useCustomToast();

  return useMutation({
    mutationFn: loginFn,
    mutationKey: "login",
    onSuccess: (data) => {
      setStorage("user", data?.data);
      // navigate(navigationFn.ADMIN_INFORMATION);
      toastSuccess({
        title: "Login successfully",
      });
    },

    onError: (error: any) => {
      toastFail({
        title: Array.isArray(error.response.data.errors)
          ? error.response.data.errors[0]
          : error.response.data.errors,
      });
    },
  });
};
