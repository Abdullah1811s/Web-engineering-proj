import React from "react";

const Input = ({name, placeholder, type, className, handleChange}) => {
  return (
    <input
      name={name}
      type={type}
      className={`bg-transparent border-2 border-[#515151] p-2 rounded-lg ${className}`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
