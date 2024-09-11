import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/Auth";

export const ProtectedRoutes = () => {
  const { cookies } = useAuth();

  return cookies.token ? <Outlet /> : <Navigate to="/signin" exact />;
};
