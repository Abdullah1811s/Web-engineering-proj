import React, { useState } from "react";
import Input from "./Input";
import DateTimePicker from "react-datetime-picker";

const KodespaceForm = ({ compData, setCompdata }) => {
  const handleTimeChange = (e) => {
    const dateTimeValue = e.target.value; // This will be in "YYYY-MM-DDTHH:mm" format
    const isoString = new Date(dateTimeValue).toISOString(); // Convert to ISO 8601
    setCompdata({ ...compData, [e.target.name]: isoString });
  };

  return (
    <div className="p-2 bg-green-600 bg-opacity-50 rounded-lg ">
      <div className="p-3 bg-gray-900 rounded-lg w-[25em]">
        <h1 className="text-2xl text-green-600">Enter Kodespace Details</h1>
        <div className="overflow-y-auto h-[25em] custom-scrollbar">
          <Input
            label="Name"
            name="name"
            className="mt-5"
            handleChange={(e) => {
              setCompdata({ ...compData, [e.target.name]: e.target.value });
            }}
          />
          <Input
            label="Host"
            value={compData.host}
            name="name"
            className="mt-2"
            disabled
          />
          <div>
            <p className="text-sm text-[#c3c3c3] ml-1 mt-2">Description</p>
            <textarea
              name="description"
              onChange={(e) => {
                setCompdata({ ...compData, [e.target.name]: e.target.value });
              }}
              className="p-2 text-sm bg-transparent focus:outline-none border-2 border-green-600 w-full rounded-lg h-[8em]"
            />
          </div>
          <p className="text-sm text-[#c3c3c3] ml-1 mt-2">Start Date/time</p>
          <input
            type="datetime-local"
            name="startTime"
            onChange={(e) => handleTimeChange(e)}
            className="bg-transparent border-2 border-green-600 rounded-lg p-2"
          />
          <p className="text-sm text-[#c3c3c3] ml-1 mt-2">Duration in hours:</p>
          <input
            type="number"
            name="duration"
            onChange={(e) =>
              setCompdata({ ...compData, [e.target.name]: e.target.value })
            }
            className="bg-transparent border-2 border-green-600 rounded-lg p-2"
          />
          <div>
            <p className="text-sm text-[#c3c3c3] ml-1 mt-2">Difficulty</p>
            <div className="p-2 bg-green-600 bg-opacity-50 rounded-lg">
              <div className="p-2 bg-gray-900 rounded-lg flex gap-2">
                <p
                  className="px-4 py-1 bg-gray-800 hover:bg-green-600 hover:bg-opacity-40 transition-all duration-500 rounded-lg cursor-pointer"
                  onClick={() =>
                    setCompdata({ ...compData, difficulty: "Easy" })
                  }
                >
                  Easy
                </p>
                <p
                  className="px-4 py-1 bg-gray-800 hover:bg-yellow-600 hover:bg-opacity-40 transition-all duration-500 rounded-lg cursor-pointer"
                  onClick={() =>
                    setCompdata({ ...compData, difficulty: "Medium" })
                  }
                >
                  Medium
                </p>
                <p
                  className="px-4 py-1 bg-gray-800 hover:bg-red-600 hover:bg-opacity-40 transition-all duration-500 rounded-lg cursor-pointer"
                  onClick={() =>
                    setCompdata({ ...compData, difficulty: "Hard" })
                  }
                >
                  Hard
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#c3c3c3] ml-1 mt-2">Maximum Members</p>
          <input
            type="number"
            name="maxPlayers"
            onChange={(e) =>
              setCompdata({ ...compData, [e.target.name]: e.target.value })
            }
            className="bg-transparent border-2 border-green-600 rounded-lg p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default KodespaceForm;
