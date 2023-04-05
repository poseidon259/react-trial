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
  trackPromise(axiosClient.post("/login", body));

export const useMutationLogin = () => {
  const navigate = useNavigate();
  const { toastSuccess, toastError } = useCustomToast();

  return useMutation({
    mutationFn: loginFn,
    mutationKey: "login",
    onSuccess: (data) => {
      setStorage("user", data?.data);
      navigate(navigationFn.HOME);
      toastSuccess("Login successfully");
    },

    onError: (error: any) => {
      toastError(error?.response?.data?.message);
    },
  });
};
