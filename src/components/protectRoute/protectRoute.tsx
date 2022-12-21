import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const ProtectedRoutes = () => {
  const { Logged } = useContext(UserContext);
  const location = useLocation();

  console.log("oi", Logged);
  return window.localStorage.getItem("session") ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};
