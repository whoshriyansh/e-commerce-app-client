import React, { useState } from "react";
import { TextInputField } from "../../components/common/FormFields";
import { ArrowRight } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
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
          <h2 className="text-body-xl">Forget Password</h2>
          <p className="text-body-small text-black/60">
            Enter the email address or mobile phone number associated with your
            Clicon account.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4 ">
          <TextInputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            error={errors.email}
          />

          <button className="bg-orange text-white py-2 rounded-sm flex items-center justify-center gap-4 text-heading-05  w-full">
            Send Code
            <span>
              <ArrowRight size={32} />
            </span>
          </button>
          <div className="text-black/80 text-body-small flex flex-col items-start justify-start">
            <p>
              Already have an Account ?&nbsp;
              <span className="text-blue">
                <Link to="/signin">Sign In</Link>
              </span>
            </p>
            <p>
              Don’t have account ?&nbsp;
              <span className="text-blue">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
