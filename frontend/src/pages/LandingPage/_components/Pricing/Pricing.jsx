import React, { useEffect, useState } from "react";
import Logo from "../../../../components/Logo";
import PricingItem from "./_components/PricingItem";
import wireLeft from '../../../../public/assets/landing page/wire-plans-left.png'
import wireRight from '../../../../public/assets/landing page/wire-plans-right.png'


const Pricing = () => {
  const [rangeValue, setRangeValue] = useState(1);
  const [bestPlan, setBestPlan] = useState("Starter");

  useEffect(() => {
    if (rangeValue < 10) {
      setBestPlan("Starter");
    } else if (rangeValue >= 10 && rangeValue < 30) {
      setBestPlan("Pro");
    } else {
      setBestPlan("Team");
    }
  }, [rangeValue]);

  const pricingItems = [
    {
      people: "individual",
      name: "Starter",
      description:
        "Experience Kode!'s core features for free. Best plan to get started.",
      price: "Free",
      priceDesc: "Suited for Beginners and Explorers.",
      cta: "Get started for free",
      features: [
        "Access to a limited number of competitions per month",
        "Basic AI assistance for hints and guidance (limited to 5 uses/month)",
        "Built-in IDE with syntax highlighting",
        "Real-time leaderboards for competition tracking",
      ],
    },
    {
      people: "Recommended",
      name: "Pro",
      description:
        "Level up your skills and compete like a pro with advanced tools and unlimited access.",
      price: "$10",
      priceDesc: "Suited for Competitive Programmers",
      cta: "Upgrade to Pro",
      features: [
        "Access to a limited number of competitions per month",
        "Basic AI assistance for hints and guidance (limited to 5 uses/month)",
        "Built-in IDE with syntax highlighting",
        "Real-time leaderboards for competition tracking",
      ],
    },
    {
      people: "Enterprise",
      name: "Team",
      description:
        "Collaborate and code smarter as a team. Ideal for coding clubs or small groups.",
      price: "$25",
      priceDesc: "Suited for Collaborators and Clubs",
      cta: "Get the Team Plan",
      features: [
        "Everything in the Pro Plan",
        "Shared leaderboards for team competitions",
        "Collaboration tools for group coding challenges",
        "Enhanced support with faster response times",
      ],
    },
  ];

  return (
    <div className="scale-100 z-10 pt-28 relative" id="pricing">
      <img
        src={wireLeft}
        alt="wire"
        className="absolute top-24 left-0 -translate-x-36 "
      />
      <img
        src={wireRight}
        alt="wire"
        className="absolute bottom-0 right-0 translate-x-36 max-md:hidden"
      />
      <h1 className="text-6xl max-sm:text-4xl font-medium z-10">
        Affordable Plans for Every Koder!
      </h1>
      <p className="text-gray-200 mt-3 z-10">
        Whether you're a beginner or a pro, we have the perfect plan to match
        your needs. Start koding smarter today!{" "}
      </p>
      <div className="bg-gray-700 w-full flex flex-col rounded-lg p-4 max-md:px-0 mt-4 py-6 scale-100">
        <div className=" flex justify-around items-center">
          <Logo className="text-4xl max-md:text-3xl" />
          <div className="bg-[#4F4F4F] h-[2em] w-[75%] max-md:w-[60%] rounded-full"></div>
        </div>
        <h2 className="mx-12 max-md:mx-5 text-3xl mt-8">Plans & Pricing</h2>
        <p className="text-[#787878] mx-12 max-md:mx-5">
          Simple Pricing. No Hidden Fees. Advanced Features for your
          Competitions
        </p>
        <div className="mx-14 max-md:mx-5 mt-6">
          <p className="text-[#787878]  ">Number of monthly competitors</p>
          <div className="relative w-full">
            <input
              type="range"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              className="w-full appearance-none h-2 bg-[#4F4F4F] rounded-lg cursor-pointer"
              style={{
                background: `linear-gradient(to right, #0D6459 ${
                  rangeValue * 2 - 1
                }%, #4F4F4F ${rangeValue}%)`,
              }}
              min={1}
              max={50}
            />
            <div
              className="absolute top-6 triangle left-10   transform -translate-x-1/2 text-center text-sm font-bold  w-[2em] h-[2em]"
              style={{ left: `${rangeValue * 2 - 1}%` }}
            ></div>
            <div
              className="absolute top-8 left-10 px-5 py-1  rounded-sm font-light transform -translate-x-1/2 text-center text-sm  z-40 bg-[#4F4F4F]"
              style={{ left: `${rangeValue * 2 - 1}%` }}
            >
              {rangeValue}
            </div>
          </div>
          <div className="mt-14 flex justify-between max-lg:justify-center max-lg:gap-5 flex-wrap">
            {pricingItems.map((item) => (
              <PricingItem item={item} bestPlan={bestPlan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
