import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies();

  const signin = async ({ email, password }) => {
    try {
      const res = await api.post("/api/auth/signin", { email, password });
      setCookies("token", res.data.token);
      setCookies("name", res.data.fullname);
      navigate("/user/dashboard");
    } catch (error) {
      throw new Error("Sign-in failed. Please check your credentials.");
    }
  };

  const signup = async ({ fullname, username, email, password }) => {
    try {
      const res = await api.post("/api/auth/signup", {
        fullname,
        username,
        email,
        password,
      });
      setCookies("token", res.data.token);
      setCookies("name", res.data.fullname);
      navigate("/user/dashboard");
    } catch (error) {
      throw new Error("Sign-in failed. Please check your credentials.");
    }
  };

  const logout = () => {
    removeCookies("token");
    removeCookies("name");
    navigate("/signin");
  };

  const value = useMemo(
    () => ({
      cookies,
      signin,
      signup,
      logout,
    }),
    [cookies]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
