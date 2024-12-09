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

const Signup = () => {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  const handleSubmit = async () => {
    const { email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      console.log("Password entered is not same");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users`,
        userData
      );
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="p-4 bg-gray-800 rounded-2xl max-w-[27em] mx-auto mt-16 relative h-[35em]">
          <img
            src={kodyHead}
            className="w-32 absolute left-1/2 -translate-x-1/2 -translate-y-[6em] z-0"
          />
          <img
            src={kodyWingLeft}
            className="w-28 absolute left-1/2 -translate-x-[8em] translate-y-[1em] z-0"
          />
          <img
            src={kodyWingRight}
            className="w-28 absolute right-1/2 translate-x-[8em] translate-y-[1em] z-0"
          />
          <div className="pt-5 pb-1 px-10 bg-gray-900 rounded-2xl scale-100">
            <h1 className="text-center text-3xl font-medium mt-0">
              Register & <Logo className="inline text-[1.2em]" />
            </h1>
            <p className="text-center mt-1 text-xs text-[#787878]">
              Experience the most fair and innovative coding competitions!
            </p>
            <Button className="py-0 bg-gray-900 text-[#909090] border-2 border-[#787878] hover:border-none mb-2 mt-5">
              <p className="text-center">Continue with Google</p>
            </Button>
            <div className="flex items-center justify-between ">
              <div className="w-[45%] h-[1px] bg-[#3f3f3f]"></div>
              <p className="text-sm text-[#3f3f3f] font-medium">or</p>
              <div className="w-[45%] h-[1px] bg-[#3f3f3f]"></div>
            </div>
            <form className="mt-2 mb-5">
              <p className="ml-1 text-sm">Email</p>
              <Input
                name="email"
                placeholder="kodyFlies@gmail.com"
                type="email"
                handleChange={(e) =>
                  setUserData({ ...userData, [e.target.name]: e.target.value })
                }
                className="w-full py-2 my-1"
              />
              <p className="ml-1 mt-2 text-sm">Password</p>
              <Input
                name="password"
                placeholder="oooooooo"
                type="password"
                className="w-full py-2 my-1"
                handleChange={(e) => {
                  setIsTyping(true);
                  setUserData({ ...userData, [e.target.name]: e.target.value });
                }}
              />
              <p className="ml-1 mt-2 text-sm">Confirm Password</p>
              <Input
                name="confirmPassword"
                placeholder="oooooooo"
                type="password"
                className="w-full py-2 my-1"
                handleChange={(e) => {
                  setUserData({ ...userData, [e.target.name]: e.target.value });
                  setIsTyping(true);
                  console.log(userData);
                }}
              />
              <Button className="mt-5 py-[5px]" handleClick={handleSubmit}>
                <p className="text-center text-lg ">Sign Up</p>
              </Button>
              <p className="text-center mt-2 text-sm text-[#787878]">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-green-600 hover:text-green-300 cursor-pointer"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
