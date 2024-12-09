import React from "react";


const FieldRadio = ({ name, value, userfield, setUserfield, desc }) => {
  return (
    <div
      className={`p-[5px] rounded-full cursor-pointer ${
        value === userfield
          ? "bg-green-300"
          : "bg-[#2C2C2C] hover:bg-green-600 transition-all duration-300"
      }`}
      onClick={() => setUserfield(value)}
    >
      <p className={`px-4 py-1 $ rounded-full bg-[#1c1c1c]`}>{desc}</p>
    </div>
  );
};

export default FieldRadio;
