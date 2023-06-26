import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMe, selectAdmin } from "app/auth";
import { isNull } from "lodash";

export function ProtectRoute({ target }) {
  const user = useSelector(selectMe);
  const admin = useSelector(selectAdmin);
  const isAuthorization = React.useMemo(() => {
    const token = target === "user" ? user.authToken : admin.authToken;
    return !isNull(token);
  }, [target, user, admin]);
  return isAuthorization ? (
    <Outlet />
  ) : (
    <Navigate to={target === "user" ? "/" : "/login-manager"} />
  );
}

export function PublicRoute({ target }) {
  const user = useSelector(selectMe);
  const admin = useSelector(selectAdmin);
  const isAuthorization = React.useMemo(() => {
    const token = target === "user" ? user.authToken : admin.authToken;
    return !isNull(token);
  }, [target, user, admin]);
  return isAuthorization ? (
    <Navigate to={target === "user" ? "/home" : "/manager-home"} />
  ) : (
    <Outlet />
  );
}
