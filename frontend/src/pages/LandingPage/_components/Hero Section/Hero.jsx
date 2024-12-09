import React from "react";
import HeroMain from "./HeroMain";
import Button from "../../../../components/Button";
import LPAssets from "./LPAssets";
import LPRightAssets from "./LPRightAssets";

const Hero = () => {
  return (
    <div className=" pt-24 -z-20 overflow-hidden h-[100vh] max-sm:h-full" id="Home">
      <div className="relative flex flex-col items-center">
        <HeroMain />
        <p className="text-gray-200">
          Revolutionizing Competitions. Compete Fairer.
        </p>
        <Button className="mt-10 w-[30em] max-sm:w-[22em]">
          <p className="text-2xl text-center max-sm:text-lg">Get Started - It's Free</p>
        </Button>
        <p className="text-gray-200 mt-2 text-sm max-sm:text-center max-sm:text-xs">
          Experience the most fair and innovative coding competitions!
        </p>
        <LPAssets />
        <LPRightAssets />
      </div>
    </div>
  );
};

export default Hero;
