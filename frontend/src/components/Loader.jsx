import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
    </div>
  );
};

export default Loader;
