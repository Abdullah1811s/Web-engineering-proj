import { AiFillHome } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

export const participantMenuItems = [
  {
    name: "Home",
    component: (
      <AiFillHome
        className=" hover:text-green-600 duration-200 transition-all cursor-pointer"
        size={30}
      />
    ),
    path: "",
  },
  {
    name: "Competitions",
    component: (
      <FaLaptopCode
        className=" hover:text-green-600 duration-200 transition-all cursor-pointer"
        size={30}
      />
    ),
    path: "competitions",
  },
  {
    name: "Leaderboards",
    component: (
      <MdLeaderboard
        className=" hover:text-green-600 duration-200 transition-all cursor-pointer"
        size={30}
      />
    ),
    path: "leaderboards",
  },
  {
    name: "Settings",
    component: (
      <IoMdSettings
        className=" hover:text-green-600 duration-200 transition-all cursor-pointer"
        size={30}
      />
    ),
    path: "settings",
  },
  {
    name: "Logout",
    component: (
      <IoLogOut
        className="text-red-400 hover:text-red-600 duration-200 transition-all cursor-pointer"
        size={30}
      />
    ),
    path: "settings",
  },
];
