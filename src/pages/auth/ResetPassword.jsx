import React, { useState } from "react";
import {
  PassInputField,
  TextInputField,
} from "../../components/common/FormFields";
import { ArrowRight } from "@phosphor-icons/react";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    code: "",
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
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-body-xl">Reset Password</h2>
          <p className="text-body-small text-black/60">
            Enter the Code you have recieved on your email and then reset your
            password
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4 ">
          <TextInputField
            label="Enter the Code"
            type="code"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
            placeholder="Enter your Code"
            error={errors.code}
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
            Reset Password
            <span>
              <ArrowRight size={32} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
