import React from "react";
import greenGradient from "../../../public/assets/gradients/green Gradient.png";
import greenGradientLeft from "../../../public/assets/gradients/green gradientl left.png";

const Gradients = () => {
  return (
    <div className="">
      <div className="absolute top-0 right-0">
        <img
          src={greenGradient}
          alt="Green Gradient"
          className="-z-10 right-0"
        />
      </div>
      <div className="absolute top-0 left-0 max-sm:hidden">
        <img
          src={greenGradientLeft}
          alt="Green Gradient"
          className="-z-10"
        />
      </div>
      <div className="absolute top-[160em] left-0 max-sm:hidden">
        <img
          src={greenGradientLeft}
          alt="Green Gradient"
          className="-z-10"
        />
      </div>     
    </div>
  );
};

export default Gradients;
