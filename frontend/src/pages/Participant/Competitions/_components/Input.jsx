import React from "react";

const Input = ({ name, label, handleChange, className, disabled, value }) => {
  return (
    <div className={`${className}`}>
      <p className="text-sm text-[#c3c3c3] ml-1">{label}</p>
      <input
        type="text"
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          handleChange(e);
        }}
        className="text-sm bg-transparent p-2  focus:outline-none border-2 border-green-600 rounded-lg w-full"
      />
    </div>
  );
};

export default Input;
