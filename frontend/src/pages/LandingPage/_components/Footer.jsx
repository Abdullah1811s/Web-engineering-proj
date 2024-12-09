import React from "react";
import Logo from "../../../components/Logo";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#7A7A7A]">
      <div className="mx-36 max-md:mx-10 flex justify-between flex-wrap gap-10 py-12">
        <div>
          <Logo className="text-7xl" />
          <p className="text-gray-200">
            Compete Fairer. Win better - All with Kode!
          </p>
          <p className="text-gray-200 text-sm">
            Copyright © 2024 - All rights reserved
          </p>
        </div>
        <div className="flex gap-10 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-[#999999]">Links</h1>
            <div className="flex flex-col gap-1 text-gray-200 mt-2">
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                About
              </a>
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Pricing
              </a>
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                FAQs
              </a>
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Support
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#999999]">Legal</h1>
            <div className="flex flex-col gap-1 text-gray-200 mt-2">
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Terms of Service
              </a>
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Privacy Policy
              </a>
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Licenses
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#999999]">Socials</h1>
            <div className="flex flex-col gap-1 text-gray-200 mt-2">
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Instagram
              </a>
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Tiktok
              </a>
              <a className="hover:text-green-300 duration-200 cursor-pointer">
                Meta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
