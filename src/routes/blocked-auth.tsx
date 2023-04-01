import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { navigationFn } from "./navigation-fn";
import { getAccessToken } from "~/helper";

export const BlockedAuth = () => {
  const isAuth = getAccessToken();
   console.log('isAuth:' + isAuth)

  return true ? <Navigate to={navigationFn.HOME} replace /> : <Outlet />;
};
