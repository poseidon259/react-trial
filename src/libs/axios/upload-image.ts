import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";

import axiosClient from "./axiosClient";
import { useCustomToast } from "~/hooks";

interface Response {
  success: boolean;
  data: {
    url: string;
  };
}

const uploadImageFn = (file: FormData): Promise<Response> =>
  trackPromise(
    axiosClient.post("/clouds/upload", file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );

export const useMutationUploadImage = () => {
  const { toastSuccess, toastFail } = useCustomToast();
  return useMutation({
    mutationKey: "upload-image",
    mutationFn: uploadImageFn,
    onSuccess: (data: Response) => {
      toastSuccess({
        title: "Upload file successfully",
      });
    },
    onError: () => {
      toastFail({
        title: "Upload file failed",
      });
    },
  });
};
