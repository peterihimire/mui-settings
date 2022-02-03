import axios from "axios";

import { _getToken } from "./";

const { REACT_APP_BASE_URL, REACT_APP_TOKEN } = process.env;

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = _getToken(REACT_APP_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
