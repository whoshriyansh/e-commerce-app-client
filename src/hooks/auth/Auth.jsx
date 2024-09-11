import React, { createContext, useContext, useMemo } from "react";
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
      console.log(`After Signin ${res.data}`);
      setCookies("token", res.data.token);
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
      console.log(`Res from SingUp: ${res}`);
      navigate("/signin");
    } catch (error) {
      throw new Error("Sign-in failed. Please check your credentials.");
    }
  };

  const logout = () => {
    removeCookies("token");
    setUser(null);
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
