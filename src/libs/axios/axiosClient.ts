import axios from "axios";
import queryString from "query-string";

import { getAccessToken } from "./../../helper/local-storage";

// const accessToken = getAccessToken();

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    charset: "UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": true,
    crossorigin: true,
  },
  // paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config: any) => {
  config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
  config.paramsSerializer = function (params: any) {
    return queryString.stringify(params, { arrayFormat: "bracket" });
  };
  delete axios.defaults.headers.common["Accept-Encoding"];
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // if (response && response.data && response.data.data) {
    //   return response.data.data;
    // }
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: any) => {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    throw error;
  }
);

export default axiosClient;
