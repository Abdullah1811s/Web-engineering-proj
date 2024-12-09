import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar.jsx";
import { participantMenuItems } from "../../../public/constants/constants.js";

const ParticipantSidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar will always be present on the dashboard */}
      <div className="w-[80px]">
        <Sidebar menuItems={participantMenuItems} />
      </div>
      <div className="flex overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default ParticipantSidebar;
