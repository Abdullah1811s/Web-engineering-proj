import React, { useEffect, useRef, useState } from "react";
import fullNameimg from "../../public/assets/onboarding/full-name-main.png";
import kodyNoti from "../../public/assets/onboarding/kodyNoti.png";
import userNoti from "../../public/assets/onboarding/userNoti.png";
import greenGrad from "../../public/assets/onboarding/GreenGraf.png";
import greenGrad2 from "../../public/assets/onboarding/greenGrad2.png";
import moneyEmoji from "../../public/assets/onboarding/moneyEmoji.png";
import partyEmoji from "../../public/assets/onboarding/partyEmoji.png";
import handEmoji from "../../public/assets/onboarding/handEmoji.png";
import Logo from "../../components/Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../../components/Button";
import UserField from "./_components/UserField";
import ConfirmDetails from "./_components/ConfirmDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const inputRef = useRef(null);
  gsap.registerPlugin(useGSAP);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [inputVal, setInputVal] = useState(false);
  const [animate, setAnimated] = useState(false);
  const [userType, setUserType] = useState("computer");
  const [userfield, setUserfield] = useState("computer");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userData = {
      name: name,
      type: userfield,
    };

    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`/dashboard/${response.data.user._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  useGSAP(() => {
    gsap.to("#animate-element", {
      opacity: 1,
      duration: 4,
    });
    gsap.to("#animate-element", {
      x: 0,
      scale: 1,
      y: 0,
      ease: "power4.out",
      duration: 30,
    });
  }, [page]);

  useEffect(() => {
    if (page == 1) {
      inputRef.current.focus();

      inputRef.current.select();
    }
  }, []);

  const keepFocused = () => {
    inputRef.current.focus();
  };

  const renderAnimation = () => {
    const tl = gsap.timeline();
    tl.to(["#chat", "#chat-cont"], {
      height: "+=60",
      y: 0,
      delay: 1,
    })
      .to(["#message-cont"], {
        y: 125,
      })
      .to(["#chat", "#chat-cont"], {
        height: "+=60",
        y: 0,
        delay: 1,
      })
      .to(["#message-cont"], {
        y: 68,
      });
  };

  const renderFieldAnimation = () => {
    const tl = gsap.timeline();
    tl.to(["#chat", "#chat-cont"], {
      height: "+=60",
      y: 0,
      delay: 1,
    }).to(["#message-cont"], {
      y: 0,
    });
  };

  const renderComps = () => {
    if (page === 1) {
      return (
        <main className="mt-10 flex flex-col justify-center items-center relative">
          <img
            src={fullNameimg}
            alt="Full name page - main img"
            width={400}
            id="animate-element"
            className="dark:block hidden z-20 scale-[0.9]"
          />
          <h1 className="text-4xl max-md:text-2xl max-md:my-5">
            Get started with your full name
          </h1>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
            className={`text-7xl text-center my-4 text-[#179585] truncate input-onboarding w-2/3 max-md:w-full max-md:text-4xl dark:bg-[#1C1C1C] bg-[#E6E6E6] ${
              inputVal && "red-placeholder"
            }`}
            onBlur={keepFocused}
          />
          <Button
            handleClick={() => {
              if (name === "") {
                alert("Please enter your name");
              } else {
                setPage(2);
                setAnimated(true);
              }
            }}
            className="max-md:text-xl text-2xl px-8 rounded-full font-normal scale-100 hover:scale-105 transition-all duration-200 hover:-rotate-12 "
          >
            Get Started
          </Button>
          <p className="mt-4 w-[40em] max-md:w-full text-center text-gray-400 text-sm">
            By clicking this box, I acknowledge and agree to the terms and
            conditions on behalf of the Company identified above
          </p>
          <img
            src={greenGrad2}
            alt="green grad"
            width={400}
            className="absolute md:dark:block hidden -right-10 -top-32 z-10"
          />
          <img
            src={greenGrad}
            alt="Green grad"
            width={400}
            className="absolute md:dark:block hidden -left-10 top-20  z-0 "
          />
          <div
            id="animate-element"
            className="absolute opacity-0 bottom-14 left-28 dark:bg-[#414141] bg-[#CBCBCB] p-4 rounded-full w-[5em] h-[5em] flex items-center justify-center max-xl:hidden translate-x-[16rem] -translate-y-[6rem] scale-50 "
          >
            <img src={handEmoji} alt="Hand Emoji" />
          </div>
          <div
            id="animate-element"
            className=" opacity-0 absolute translate-x-[5rem] translate-y-10 top-4 left-[22rem] dark:bg-[#414141] bg-[#CBCBCB] p-4 rounded-full w-[4em] h-[4em] flex items-center justify-center max-xl:hidden"
          >
            <img src={moneyEmoji} alt="Money Emoji" />
          </div>
          <div
            id="animate-element"
            className="absolute opacity-0 hidden top-[12rem] left-[2rem] rounded-full md:dark:flex md:hidden items-center justify-center max-xl:hidden translate-x-[10rem] -translate-y-8 scale-50"
          >
            <img src={kodyNoti} width={300} alt="Kody Notification" />
          </div>

          <div
            id="animate-element"
            className="opacity-0 -translate-x-[10rem] -translate-y-[3.5rem] scale-50 absolute bottom-[7rem] right-[10rem] dark:bg-[#414141] bg-[#CBCBCB] p-4 rounded-full w-[4em] h-[4em] flex items-center justify-center max-xl:hidden"
          >
            <img src={partyEmoji} alt="Party Emoji" />
          </div>
          <div
            id="animate-element"
            className="opacity-0 scale-50 -translate-x-[10rem] absolute hidden   md:dark:flex top-[6rem] right-[2rem] rounded-full items-center justify-center max-xl:hidden"
          >
            <img src={userNoti} width={300} alt="Money Emoji" />
          </div>
        </main>
      );
    } else {
      return (
        <div className="w-full justify-between flex items-center">
          {page === 2 ? (
            <UserField
              setPage={setPage}
              userfield={userfield}
              setUserfield={setUserfield}
              renderAnimation={renderAnimation}
            />
          ) : (
            <main className="md:mx-5 max-xl:w-full overflow-y-scroll hide-scrollbar">
              <div className="md:mx-6 mt-12 xl:h-[32rem] ">
                <ConfirmDetails
                  setPage={setPage}
                  userfield={userfield}
                  setUserfield={setUserfield}
                  name={name}
                  handleSubmit={handleSubmit}
                  userType={userType}
                  renderAnimation={renderFieldAnimation}
                />
              </div>
            </main>
          )}
        </div>
      );
    }
  };

  return (
    <section className="max-md:p-6 p-10 h-[100vh] bg-[#E6E6E6] dark:bg-[#1c1c1c] lg:overflow-hidden">
      <nav className="flex justify-between items-center md:mx-5 z-10">
        <Logo />
        <div className="px-8 py-2 cursor-pointer rounded-full border dark:border-gray-100 bg-transparent border-green-300  max-md:px-4 hover:border-green-600  group hover:bg-green-600 z-30 ">
          <p className=" group-hover:text-green-300 ">Help</p>
        </div>
      </nav>
      <form id="animate-main">{renderComps()}</form>
    </section>
  );
};

export default Onboarding;
