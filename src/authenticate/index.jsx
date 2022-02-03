import React from "react";

import { _getToken } from "../config";

import { protectedRoutes } from "./routes";

import { useSelector } from "react-redux";

import { useHistory, useLocation } from "react-router-dom";

const { REACT_APP_TOKEN } = process.env;

export default function Authenticate({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const history = useHistory();

  const location = useLocation();

  const token = _getToken(REACT_APP_TOKEN);

  const isPathProtected = protectedRoutes.indexOf(location.pathname);

  React.useLayoutEffect(() => {
    if ((location.pathname === "/" && isLoggedIn) || !!token) {
      history.push("/dashboard/home");
    }
    if (isPathProtected >= 0 && !isLoggedIn && !!token === false) {
      history.push("/");
    }

    //eslint-disable-next-line
  }, [history]);

  return children;
}
