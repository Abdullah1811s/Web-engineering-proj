import React from "react";
import codeReviewWire from "../../../../public/assets/landing page/wire-code-review.png";
import mlSupWire from "../../../../public/assets/landing page/wire-mlsup.png";
import wirePlag from "../../../../public/assets/landing page/wire-plag.png";

const LPAssets = () => {
  return (
    <div className="absolute bottom-10 top-4 -translate-y-28 left-0 flex items-center gap-2 max-lg:hidden">
      <img src={codeReviewWire} width={100} />
      <p className="-translate-y-[3.6em] text-[#5C837E]">Instant Code Review</p>
      <div className="relative translate-y-28 -translate-x-[17.5em] flex items-center gap-2 multilang group">
        <div className="absolute inset-0 bg-gray-900 opacity-50 multilang-rect group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
        <img src={mlSupWire} width={50} className="z-10" />
        <p className="text-[#5C837E] z-10">Multilanguage Support</p>
      </div>
      <div className="translate-y-[22.5em] -translate-x-[57.5em] flex items-center">
        <img src={wirePlag} width={600} />
        <p className=" text-[#5C837E] translate-y-24 -translate-x-10">
          Plagiarism Free
        </p>
      </div>
    </div>
  );
};

export default LPAssets;
