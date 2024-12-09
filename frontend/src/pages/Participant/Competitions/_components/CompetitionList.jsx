import React from "react";
import moment from "moment";
import { FaRegBookmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const CompetitionList = ({ competitions, text }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="text-2xl my-16">
      <p>{text}</p>
      <div className="">
        <div className="flex gap-3 py-2 overflow-x-auto w-[90vw] custom-scrollbar ">
          {competitions.map((comp, index) => (
            <div
              key={index}
              onClick={() => navigate(`${location.pathname}/${comp._id}`)}
              className={`bg-green-600 cursor-pointer bg-opacity-25 hover:bg-opacity-50 hover:scale-105 transition-all duration-500 rounded-lg p-4 w-[18em] flex-shrink-0 ${
                comp.difficulty === "Easy"
                  ? "bg-green-500"
                  : comp.difficulty === "Medium"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } `}
            >
              <div className="flex justify-between">
                <p className="text-sm bg-[#c3c3c3] text-gray-900 px-2 py-1 rounded-full">
                  {moment(comp.startTime).format("D MMM YYYY")}
                </p>
                <div className="bg-[#c3c3c3] rounded-full text-gray-900 p-1">
                  <FaRegBookmark size={20} color="black" />
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400">{comp.author}</p>
                <h1 className="text-4xl">{comp.name}</h1>
                <p className="text-sm opacity-75 mt-1">{comp.description}</p>
              </div>
              <div className="mt-10 flex justify-between items-center">
                <div className="flex gap-2">
                  <p
                    className={`text-sm px-2 py-1 rounded-full ${
                      comp.difficulty === "Easy"
                        ? "bg-green-100 text-green-600"
                        : comp.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {comp.difficulty}
                  </p>
                  <p
                    className={`text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-600`}
                  >
                    {comp.mode[0].toUpperCase() + comp.mode.slice(1)}
                  </p>
                </div>
                <p className="text-base">
                  <span className="text-opacity-50">Duration:</span>{" "}
                  {comp.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitionList;
