import React from "react";
import { Navigate, Outlet } from "react-router";

import { navigationFn } from "./navigation-fn";
import { getAccessToken } from "~/helper";

export function RequiredAuth() {
  const isAuth = getAccessToken();

  return false ? <Outlet /> : <Navigate to={navigationFn.LOGIN} replace />;
}
