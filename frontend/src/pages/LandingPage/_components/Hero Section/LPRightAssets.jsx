import React from "react";
import wireAnalytics from "../../../../public/assets/landing page/wire-analytics.png";
import wireIde from "../../../../public/assets/landing page/wire-ide.png";
import wireRealtime from "../../../../public/assets/landing page/wire-realtime.png";


const LPRightAssets = () => {
  return (
    <div className="absolute bottom-10 top-0 -translate-y-28 left-0 flex items-center gap-2 max-xl:hidden">
      <div className="translate-x-[60em] -translate-y-40 flex flex-col items-center -z-20">
        <img src={wireAnalytics} width={130} />
        <p className=" text-[#5C837E] translate-x-16 -translate-y-6">
          Analytics
        </p>
      </div>
      <div className="translate-x-[75em] -translate-y-8 flex items-center -z-20">
        <p className=" text-[#5C837E] translate-y-16">
          Built in IDE
        </p>
        <img src={wireIde} width={130} />
      </div>
      <div className="translate-x-[55em] translate-y-[28em] flex items-center -z-20">
        <p className=" text-[#5C837E] -translate-y-16">
          Realtime Leaderboards
        </p>
        <img src={wireRealtime} width={130} />
      </div>
    </div>
  );
};

export default LPRightAssets;
