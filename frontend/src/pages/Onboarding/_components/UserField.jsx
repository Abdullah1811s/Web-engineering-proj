import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FieldRadio from "./FieldRadio";
import greenGrad from "../../../public/assets/onboarding/GreenGraf.png";
import greenGrad2 from "../../../public/assets/onboarding/greenGrad2.png";
import Button from "../../../components/Button";

export const userFieldItems = [
  {
    value: "computer",
    desc: "Computer Science / IT",
  },
  {
    value: "ai",
    desc: "AI / ML",
  },
  {
    value: "ds",
    desc: "Data Science",
  },
  {
    value: "se",
    desc: "Software Engineering",
  },
  {
    value: "robotics",
    desc: "Robotics",
  },
  {
    value: "cyber",
    desc: "Cyber Security",
  },
  {
    value: "ar",
    desc: "AR / VR",
  },
  {
    value: "coding",
    desc: "Coding",
  },
  {
    value: "dataeng",
    desc: "Data Engineer",
  },
  {
    value: "other",
    desc: "Other",
  },
];

const UserField = ({ userfield, setUserfield, setPage, renderAnimation }) => {
  useGSAP(() => {
    gsap.to(".animate-element", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.to("#animate-text", {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: "power4.inOut",
    });

    gsap.to("#back", {
      x: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <main className="md:mx-5 relative w-full">
      <img
        src={greenGrad2}
        alt="green grad"
        width={400}
        className="absolute md:dark:block hidden -right-20 -top-32 z-0"
      />

      <div className="md:mx-6 mt-12 xl:h-[32rem] relative">
        <div
          className="flex gap-2 items-center group cursor-pointer justify-start w-[5rem] "
          onClick={() => {
            setPage(1);
          }}
        >
          <FaArrowLeftLong
            className="w-7 text-green-600 group-hover:text-green-300 duration-500"
            size={20}
          />
          <p className="text-md text-green-600 group-hover:text-green-300 duration-500">
            Back
          </p>
        </div>
        <h1
          id="animate-text"
          className="opacity-0 md:text-6xl max-sm:text-3xl text-4xl mt-4 max-w-[50rem]"
        >
          What's your field?
        </h1>
        <div className="flex flex-wrap my-8 md:gap-3 gap-6 md:justify-start justify-center max-w-[50rem] ">
          {userFieldItems.map((item, i) => (
            <div key={i} className="animate-element opacity-0">
              <FieldRadio
                name="userfield"
                value={item.value}
                userfield={userfield}
                setUserfield={setUserfield}
                desc={item.desc}
              />
            </div>
          ))}
        </div>

        <Button
          id="animate-text"
          className=" z-20 max-md:text-xl text-2xl w-40 text-center rounded-full font-normal hover:scale-105 transition-all duration-200 hover:rotate-12"
          handleClick={(e) => {
            setPage(3);
            renderAnimation();
          }}
        >
          Continue
        </Button>
      </div>
    </main>
  );
};

export default UserField;
