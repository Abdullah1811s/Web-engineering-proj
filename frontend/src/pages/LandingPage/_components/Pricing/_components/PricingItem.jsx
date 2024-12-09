import React from "react";
import Button from "../../../../../components/Button";
import checkIcon from "../../../../../public/assets/icons/Check.png";
import whiteCheckIcon from "../../../../../public/assets/icons/CheckWhite.png";

const PricingItem = ({ item, bestPlan }) => {
  return (
    <div
      className={`py-4 px-4 border-2 border-[#4F4F4F] w-[22em] rounded-lg ${
        bestPlan === item.name ? "bg-green-600" : "bg-[#1E1E1E]"
      } transition-all duration-1000`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`w-[3em] h-[3em] rounded-full ${
            bestPlan == item.name ? "border-white " : "border-green-600"
          } border-4 `}
        ></div>
        <div
          className={`p-1 border-2 rounded-lg ${
            bestPlan === item.name
              ? "text-green-600 bg-[#BEFFF7] border-none"
              : ""
          }`}
        >
          {item.people}
        </div>
      </div>
      <h1 className="mt-8 text-4xl">{item.name}</h1>
      <p
        className={`text-gray-200 text-sm ${
          bestPlan == item.name ? "text-[#C7C7C7]" : `text-[#808080]`
        }`}
      >
        {item.description}
      </p>
      <h1 className="mt-10 text-5xl">{item.price}</h1>
      <p
        className={bestPlan == item.name ? "text-[#C7C7C7]" : `text-[#808080]`}
      >
        {item.priceDesc}
      </p>
      <Button
        className={`border-2 border-[#4F4F4F] bg-transparent mt-6 py-1 ${
          bestPlan === item.name && "bg-[#BEFFF7] border-none text-gray-300"
        }`}
      >
        <p className="font-normal text-xl text-center ">{item.cta}</p>
      </Button>
      <div className="mt-6 flex flex-col gap-3">
        {item.features.map((feature) => (
          <div className="flex items-center gap-2 mx-2">
            {bestPlan === item.name ? (
              <img src={whiteCheckIcon} />
            ) : (
              <img src={checkIcon} />
            )}
            <p
              className={`text-sm w-full ${
                bestPlan === item.name ? "text-[#C7C7C7]" : "text-gray-200"
              } `}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingItem;
