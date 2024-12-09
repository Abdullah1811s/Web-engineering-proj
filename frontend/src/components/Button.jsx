import React from "react";

const Button = ({ children, className, handleClick = () => {} }) => {
  return (
    <div
      onClick={() => handleClick()}
      className={`px-4 bg-[#044139] rounded-lg hover:bg-green-500 hover:text-gray-700 cursor-pointer py-3 duration-500 ${className} `}
    >
      {children}
    </div>
  );
};

export default Button;
