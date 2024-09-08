import React, { useState } from "react";
import {
  PassInputField,
  TextInputField,
} from "../../components/common/FormFields";
import { ArrowRight } from "@phosphor-icons/react";
import google from "../../assets/svg/google.svg";
import apple from "../../assets/svg/apple.svg";
import { CompanyButton } from "../../components/common/SmallHelperFunctions";
import { NavLink } from "react-router-dom";
import { Checkbox, Label } from "flowbite-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form here and set errors using setErrors
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4 ">
          <TextInputField
            label="Full Name"
            type="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            placeholder="Enter your Full Name"
            error={errors.fullname}
          />
          <TextInputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            error={errors.email}
          />
          <PassInputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            error={errors.password}
          />
          <PassInputField
            label="Confirm Password"
            type="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleInputChange}
            placeholder="Again type your Password"
            error={errors.confirmpassword}
          />
          <button className="bg-orange text-white py-2 rounded-sm flex items-center justify-center gap-4 text-heading-05  w-full">
            Submit Now
            <span>
              <ArrowRight size={32} />
            </span>
          </button>
          <div className="text-blue text-body-small text-center flex items-center justify-center gap-4">
            <Checkbox
              id="accept"
              className="focus:ring-0 text-orange"
              defaultChecked:false
            />
            <Label htmlFor="accept" className="flex items-center text-black">
              Are you agree to Clicon&nbsp;
              <a href="#" className="text-blue">
                Terms of Condition
              </a>
            </Label>
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

export default SignUp;
