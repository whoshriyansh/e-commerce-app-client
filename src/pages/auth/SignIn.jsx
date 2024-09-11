import React, { useState } from "react";
import {
  PassInputField,
  TextInputField,
} from "../../components/common/FormFields";
import { ArrowRight } from "@phosphor-icons/react";
import google from "../../assets/svg/google.svg";
import apple from "../../assets/svg/apple.svg";
import { CompanyButton } from "../../components/common/SmallHelperFunctions";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/Auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { signin } = useAuth();
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signin({ email, password });
      Navigate("/user/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ ...errors, general: "Login failed. Please try again." });
    }
  };

  return (
    <div className="flex justify-center items-center px-2 py-2 md:p-20">
      <div className="flex flex-col border-black/10 shadow-lg w-full md:w-3/4 lg:w-2/4 xl:w-1/4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `w-1/2 text-center text-heading-03 hover:scale-110 duration-150 ${
                isActive
                  ? "text-orange border-b-2 border-orange"
                  : "text-black border-b-0"
              }`
            }
          >
            SignIn
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `w-1/2 text-center text-heading-03 hover:scale-110 duration-150 ${
                isActive
                  ? "text-orange border-b-2 border-orange"
                  : "text-black border-b-0"
              }`
            }
          >
            SignUp
          </NavLink>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-5 p-4">
          <TextInputField
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            error={errors.email}
          />
          <PassInputField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            error={errors.password}
          />
          <button
            type="submit"
            className="bg-orange text-white py-2 rounded-sm flex items-center justify-center gap-4 text-heading-05 w-full"
          >
            Submit Now
            <span>
              <ArrowRight size={32} />
            </span>
          </button>
          <div className="text-blue text-body-small text-right">
            Forgot Password?
          </div>
        </form>
        <div className="flex flex-col gap-3 px-4 pb-5">
          <div className="text-black text-body-xs text-center">OR</div>
          <CompanyButton btnText={"Sign in with Google"} imgLink={google} />
          <CompanyButton btnText={"Sign in with Apple"} imgLink={apple} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
