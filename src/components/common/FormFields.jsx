import React, { useState } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react";

export const TextInputField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-black text-body-medium" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`py-2 bg-white border border-[#E4E7E9] rounded-sm flex-grow-0 flex-none ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export const PassInputField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-black text-body-medium" htmlFor={name}>
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`py-2 px-3 pr-10 bg-white border border-[#E4E7E9] rounded-sm w-full focus:border-orange ${
            error ? "border-red-500" : ""
          }`}
        />
        {/* Icon */}
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <Eye size={24} className="text-orange" weight="bold" />
          ) : (
            <EyeClosed size={24} className="text-orange" weight="bold" />
          )}
        </div>
      </div>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export const SearchNumberInput = ({ name, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`py-1 bg-transparent text-black/80 text-body-small rounded-sm border[0.1px] border-black/10 focus:outline-none focus:ring-0 focus:border-black/20 text-left w-36`}
      />
    </div>
  );
};

export const DropdownInputField = ({
  name,
  value,
  onChange,
  options,
  error,
  mainOption,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`py-2 rounded-sm border[0.1px] border-black/10 focus:outline-none focus:ring-0 focus:border-black/20 text-black/80 font-light text-sm ${
          error ? "border-red-500" : ""
        }`}
      >
        <option
          value=""
          className="border[0.1px] border-black/10 focus:outline-none focus:ring-0 focus:border-black/20 text-black/80 font-light text-sm "
          disabled
        >
          {mainOption}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="border[0.1px] border-black/10 focus:outline-none focus:ring-0 focus:border-black/20 text-black/80 font-light text-sm "
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};
