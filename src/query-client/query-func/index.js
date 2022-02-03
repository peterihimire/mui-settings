import { handleAuthentication } from "../../store/slices/auth";

import axiosInstance from "./../../config/axios.config";

import * as TokenService from "../../config";

const { REACT_APP_USER, REACT_APP_TOKEN } = process.env;

export const loginFn = async ({ path, payload, dispatch, history }) => {
  console.log(payload);
  try {
    const res = await axiosInstance.post(path, payload);

    console.log("yes man!", res);
    TokenService._setUserData(REACT_APP_USER, JSON.stringify(res.data?.user));
    TokenService._setToken(
      REACT_APP_TOKEN,
      JSON.stringify(res.data?.accessToken)
    );
    dispatch(handleAuthentication(true));
    history.replace("/dashboard/home");
    return res;
  } catch (e) {
    throw new Error(e);
  }
};
