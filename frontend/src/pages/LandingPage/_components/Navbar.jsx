import React from "react";
import Logo from "../../../components/Logo";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import sun from "../../../public/assets/icons/sun.png";
import menu from "../../../public/assets/icons/menu.png";
import kodyHead from "../../../public/assets/Kody/head.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full z-20">
      <nav className="bg-gray-700 shadow-2xl border-green-600 border border-opacity-40 my-5 max-sm:mx-3 mx-10 px-6 py-2 rounded-lg flex items-center justify-between relative">
        <div className="logo">
          <Logo />
        </div>
        <img
          src={kodyHead}
          alt="Kody"
          width={80}
          className="absolute top-0 left-[2.5em] rotate-180 -z-10 owl max-sm:hidden"
        />
        <div className="flex gap-6 text-green-500">
          <Link
            to="Home"
            smooth={true}
            duration={500}
            spy={true}
            className="hover:text-green-300 cursor-pointer duration-300 transition-all max-md:text-sm max-lg:hidden"
            activeClass="active"
          >
            Home
          </Link>
          <Link
            to="why"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="hover:text-green-300 cursor-pointer duration-300 transition-all max-lg:hidden"
          >
            Why Kode?
          </Link>
          <Link
            to="kody"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="hover:text-green-300 cursor-pointer duration-300 transition-all max-lg:hidden"
          >
            Meet Kody
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="hover:text-green-300 cursor-pointer duration-300 transition-all max-lg:hidden"
          >
            How it works?
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="hover:text-green-300 cursor-pointer  duration-300 transition-all max-lg:hidden"
          >
            Pricing
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="hover:text-green-300 cursor-pointer duration-300 transition-all max-lg:hidden"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const token = localStorage.getItem("token");
              if (token) navigate("/dashboard");
              navigate("/signin");
            }}
            className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-300 hover:text-gray-700 duration-300 transition-all cursor-pointer"
          >
            Sign in
          </button>
          <div className="w-[2em] h-[2em] border-2 border-green-600 rounded-lg flex items-center justify-center">
            <img
              src={sun}
              alt="Light mode"
              width={20}
              className="max-lg:hidden"
            />
            <img src={menu} alt="Light mode" width={20} className="lg:hidden" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
