import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import kodyHead from "../../../public/assets/Kody/head.png";
import kodyWingLeft from "../../../public/assets/Kody/wing-left.png";
import kodyWingRight from "../../../public/assets/Kody/wing-right.png";
import greenGradient from "../../../public/assets/gradients/green Gradient.png";
import greenGradientLeft from "../../../public/assets/gradients/green gradientl left.png";
import axios from "axios";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const SignIn = () => {
  const navigate = useNavigate();
  gsap.registerPlugin(useGSAP);
  const wingLeftRef = useRef();
  const wingRightRef = useRef();
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        userData
      );
      console.log("Here");
      localStorage.setItem("token", response.data.token);
      if (response.data.user.name) {
        navigate(`/dashboard/${response.data.user._id}`);
      } else {
        navigate("/onboarding");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    if (isTyping) {
      tl.to(
        wingLeftRef.current,
        {
          rotate: -160,
          y: -50,
          x: -90,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      ).to(
        wingRightRef.current,
        {
          rotate: 160,
          x: 90,
          y: -50,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      );
    } else {
      tl.to(
        wingLeftRef.current,
        {
          rotate: 0,
          y: -0,
          x: -110,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      ).to(
        wingRightRef.current,
        {
          rotate: 0,
          x: 110,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      );
    }
  }, [isTyping]);

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  return (
    <div className="relative overflow-hidden">
      <img
        src={greenGradient}
        alt="Green gradient"
        className="absolute -top-8  right-0 z-0"
      />
      <img
        src={greenGradientLeft}
        alt="Green gradient"
        className="absolute -top-8  left-0 z-0"
      />
      <section className="mt-8 mx-16 max-md:mx-5">
        <div className="flex justify-between  items-center relative">
          <Logo className="cursor-pointer" handleClick={() => navigate("/")} />
          <p className="z-10 text-xl border-2 border-green-600 text-green-600 rounded-full px-6 py-1 hover:bg-green-300 hover:text-gray-300 transition-all duration-500 cursor-pointer">
            Help
          </p>
        </div>
        <div className="p-4 bg-gray-800 rounded-2xl  max-w-[27em] mx-auto mt-16 relative h-[35em]">
          <img
            src={kodyHead}
            className="w-32 absolute left-1/2 -translate-x-1/2 -translate-y-[6em] z-0"
          />
          <img
            src={kodyWingLeft}
            ref={wingLeftRef}
            className="w-28 absolute left-1/2 -translate-x-[8em] -translate-y-[1em] z-0"
          />
          <img
            src={kodyWingRight}
            ref={wingRightRef}
            className="w-28 absolute right-1/2 translate-x-[8em] -translate-y-[1em] z-0"
          />
          <div className="pt-5 pb-4 px-10 bg-gray-900 rounded-2xl scale-100">
            <h1 className="text-center text-3xl font-medium mt-2">
              Sign in to <Logo className="inline text-[1.2em]" />
            </h1>
            <p className="text-center mt-1 text-sm text-[#787878]">
              Login to take your coding level to the next level
            </p>
            <Button className="bg-gray-900 text-[#909090]  border-2 border-[#787878] hover:border-none mb-6 mt-5">
              <p className=" text-center">Continue with Google</p>
            </Button>
            <div className="flex items-center justify-between ">
              <div className="w-[45%] h-[1px] bg-[#3f3f3f]"></div>
              <p className="text-sm text-[#3f3f3f] font-medium">or</p>
              <div className="w-[45%] h-[1px] bg-[#3f3f3f]"></div>
            </div>
            <form className="mt-4 mb-5">
              <p className="ml-1 text-sm">Email</p>
              <Input
                name="email"
                placeholder="kodyFlies@gmail.com"
                type="email"
                className="w-full py-2 my-1"
                handleChange={(e) =>
                  setUserData({ ...userData, [e.target.name]: e.target.value })
                }
              />
              <p className="ml-1 mt-4 text-sm">Password</p>
              <Input
                name="password"
                placeholder="oooooooo"
                type="password"
                className="w-full py-2 my-1"
                handleChange={(e) => {
                  setUserData({ ...userData, [e.target.name]: e.target.value });
                  setIsTyping(true);
                }}
              />
              <Button className="mt-8 py-[8px]" handleClick={handleSubmit}>
                <p className="text-center text-lg ">Sign In</p>
              </Button>
              <p className="text-center mt-2 text-sm text-[#787878]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-green-600 hover:text-green-300 cursor-pointer"
                >
                  Make one now!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
