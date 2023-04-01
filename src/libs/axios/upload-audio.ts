import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";

import axiosClient from "./axiosClient";
import { useCustomToast } from "~/hooks";

type TResponse<T> = {
  success: boolean;
  data: T;
};

type TAudioResponse = {
  Location: string;
};

const uploadAudioFn = (audio: FormData): Promise<TResponse<TAudioResponse>> =>
  trackPromise(
    axiosClient.post("/clouds/upload-audio", audio, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );

export const useMutationUploadAudio = () => {
  const { toastSuccess, toastFail } = useCustomToast();

  return useMutation({
    mutationKey: "upload-audio",
    mutationFn: uploadAudioFn,
    onSuccess: () => {
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
