import React, { useState } from "react";
import Button from "../../../components/Button";

const ProblemDisplay = ({
  problems,
  selectedProblem,
  setSelectedProblem,
  setTestCases,
}) => {
  return (
    <div className="flex py-5 px-4 gap-5 relative overflow-y-scroll h-full">
      <div className="mr-12 ml-4 ">
        <h1 className="text-3xl text-green-500  mt-2 ">
          {selectedProblem + 1}. {problems[selectedProblem].title}
        </h1>
        <div
          className={`flex mb-6 mt-1 rounded-full justify-start items-center`}
        >
          <p
            className={`ml-6 ${
              problems[selectedProblem].difficulty === "Easy"
                ? "bg-green-600"
                : problems[selectedProblem].difficulty === "Medium"
                ? "bg-yellow-400"
                : "bg-red-500"
            } px-2 rounded-full py-[1px] text-sm`}
          >
            {problems[selectedProblem].difficulty}
          </p>
        </div>
        <div className="ml-7">
          <h2 className="text-2xl text-green-500">Description</h2>
          <p className="text-[#c4c4c4]">
            {problems[selectedProblem].description}
          </p>
          <div className="my-10">
            <h2 className="text-2xl mt-6 text-green-500">Examples</h2>
            <div className="ml-4">
              {problems[selectedProblem].examples.map((example, i) => (
                <div className="mb-6">
                  <p className=" text-green-500 text-lg opacity-75">
                    Example {i + 1} :
                  </p>
                  <p className="ml-4  text-[#c4c4c4] ">
                    <span className="text-[#898989] mr-2 text-sm">Input: </span>
                    {example.input.map((input, i) => {
                      if (i != example.input.length - 1) return input + ", ";
                      else return input;
                    })}
                  </p>
                  <p className="ml-4  text-[#c4c4c4]">
                    <span className="text-[#898989]  mr-2 text-sm">
                      Output:
                    </span>
                    {String(example.output)}
                  </p>
                  <p className="ml-4 text-[#c4c4c4] text">
                    <span className="text-[#898989]  mr-2 text-sm">
                      Explanation:
                    </span>
                    {example.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl text-green-500">Topics</h2>
            <div className="flex gap-2 py-4">
              {problems[selectedProblem].topics.map((topic, i) => (
                <div className="bg-gray-700 p-1 rounded-lg flex items-center cursor-pointer">
                  <div className="bg-gray-900  rounded-lg ">
                    <p className="text-sm p-2">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-12 items-center absolute right-6 top-0 h-full">
        {problems.map((item, i) => (
          <div
            className={`rounded-full w-7 h-7 text-center text-xl ${
              i == selectedProblem ? "bg-green-600" : " bg-gray-800 "
            }  hover:bg-green-600 duration-500 cursor-pointer transition-all gap-2`}
            onClick={() => {
              setSelectedProblem(i);
              setTestCases(problems[i].testCases)
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemDisplay;
