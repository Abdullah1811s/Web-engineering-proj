import Button from "../../../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import greenGrad from "../../../public/assets/onboarding/GreenGraf.png";
import greenGrad2 from "../../../public/assets/onboarding/greenGrad2.png";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const ConfirmDetails = ({ setPage, handleSubmit }) => {
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
      delay: 0.5,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <main className="md:mx-5 rlative">
      <img
        src={greenGrad2}
        alt="green grad"
        width={400}
        className="absolute md:dark:block hidden right-0 -top-32 z-0"
      />

      <div className="md:mx-6 xl:h-[32rem] max-xl:w-full gap:2 scale-100 mt-32">
        <div className="max-xl:flex flex-wrap w-full justify-between ">
          <div>
            <div
              className="flex gap-2 items-center group cursor-pointer justify-start w-[5rem] "
              onClick={() => {
                setPage(2);
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
              Confirm Details?
            </h1>
            <p id="animate-text" className="opacity-0 text-gray-500 mb-4">
              Confirm your details to explore the endless benefits of Kode!
            </p>
            <Button
              id="animate-text"
              className=" onboarding-btn-grad mt-4 text-center max-md:text-xl text-2xl w-40 rounded-full font-normal hover:scale-105 transition-all duration-200 hover:rotate-12 text-gray-100"
              onClick={(e) => {
                setPage(3);
              }}
              handleClick={handleSubmit}
            >
              Lets Kode!
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConfirmDetails;
