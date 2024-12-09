import React, { useState } from "react";
import kodyHead from "../public/assets/Kody/head.png";
import { Link, useLocation, useParams } from "react-router-dom";

const Sidebar = ({ menuItems }) => {
  const [active, setActive] = useState(menuItems[0].name);
  const location = useLocation();
  const { userId } = useParams();

  return (
    <div className=" fixed flex flex-col border-r-gray-800 border-r-2 gap-5 items-center w-[5em] h-[100vh] top-0 py-5">
      <img src={kodyHead} alt="Kode mini logo" width={60} className="mb-5" />
      {menuItems.map((item, i) => (
        <Link
          onClick={() => setActive(item.name)}
          to={`/dashboard/${userId}/${item.path}`}
          className={`${i == menuItems.length - 1 && "mt-auto mb-10"} ${
            item.name == active ? "text-green-600" : "text-gray-400"
          }  group relative flex items-center cursor-pointer`}
        >
          {item.component}
          <div
            className={`${
              i == menuItems.length - 1 ? "bg-red-600" : "bg-green-600"
            } bg-opacity-35 absolute left-10 rounded-lg max-w-[7.2em] opacity-0 group-hover:opacity-100 duration-200 transition-all`}
          >
            <p className="text-sm px-2 py-1 text-white">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
