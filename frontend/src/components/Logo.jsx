import React from "react";

const Logo = ({ text = "Kode!", className, handleClick = () => {} }) => {
  return (
    <h1
      className={`text-5xl max-sm:text-4xl text-green-600 tracking-tighter font-medium cursor-default ${className}`}
      onClick={handleClick}
    >
      {text}
    </h1>
  );
};

export default Logo;
