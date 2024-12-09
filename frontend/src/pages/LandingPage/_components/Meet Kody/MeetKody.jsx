import React from "react";
import Button from "../../../../components/Button";
import AnimatedKody from "./_components/AnimatedKody";

const MeetKody = () => {
  return (
    <div id="kody" className="pt-40 max-sm:pt-32 mb-24 flex items-end">
      <div className="max-w-[52em] ">
        <h1 className="text-6xl max-sm:text-3xl font-medium mb-10">
          Meet Kody...Your Competition Companion!
        </h1>
        <p className="text-3xl max-sm:text-xl text-green-600 mb-2 mt-8">
          Meet Kody: The Heart of Your Coding Journey
        </p>
        <p className="max-w-[33em] max-sm:text-sm text-gray-200">
          Kody is your friendly guide through every coding challenge—ensuring
          fairness, offering helpful tips, and cheering you on all the way!
        </p>
        <div className="mt-16 xl:hidden scale-75">
            <AnimatedKody />
        </div>
        <Button className="max-w-[42em] mt-20 max-lg:mt-10">
          <p className="text-2xl text-center z-20 max-sm:text-lg">
            Ready to start your journey with Kody? Let’s go!
          </p>
        </Button>
      </div>
      <div className="max-xl:hidden">
      <AnimatedKody />
      </div>
    </div>
  );
};

export default MeetKody;
