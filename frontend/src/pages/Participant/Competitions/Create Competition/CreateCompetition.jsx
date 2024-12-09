import React, { useEffect, useState } from "react";
import KodespaceForm from "../_components/KodespaceForm";
import axios from "axios";
import Button from "../../../../components/Button";

const CreateCompetition = () => {
  const [problems, setProblems] = useState([]);
  const [compData, setCompdata] = useState({
    author: "Tamim",
    koins: 100,
    mode: "multiplayer",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/problems`
      );

      setProblems(response.data.problems);
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    console.log(compData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/competitions`,
        { ...compData, numQuestions: compData.problems.length }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-5 px-8 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="my-4">
          <h1 className={`text-[2.5em] text-green-500`}>
            Create your Kodespace!
          </h1>
          <p className="text-gray-200 max-w-[60em] text-sm">
            Kodespace is your virtual competition room — designed to bring
            together coders from around the world for thrilling, real-time
            competitions. Enter a unique room using a simple 6-digit code, and
            collaborate or compete against others in a seamless, engaging
            environment.
          </p>
        </div>
      </div>
      <div className="flex mt-10 gap-4 flex-wrap ">
        <KodespaceForm compData={compData} setCompdata={setCompdata} />
        <div className="bg-green-600 rounded-lg bg-opacity-40 p-2 w-[25em]">
          <div className="bg-gray-900 p-2 rounded-lg h-full">
            <div>
              <h1 className="text-2xl text-green-600 mb-4">
                Choose Problem Statements
              </h1>
              <div className="flex flex-col gap-2">
                {problems.map((problem) => (
                  <div
                    className={`p-2 bg-gray-800 ${
                      compData.problems &&
                      (compData.problems.includes(problem._id)
                        ? "bg-green-600"
                        : "bg-gray-800")
                    }  hover:bg-green-600 duration-500 transition-all rounded-lg cursor-pointer`}
                    onClick={() => {
                      let bool = false;
                      if (compData.problems) {
                        compData.problems.map((item) => {
                          if (item == problem._id) bool = true;
                        });
                      }
                      if (bool) {
                        let array = [];
                        compData.problems.map((item) => {
                          if (problem._id != item) array.push(item);
                        });
                        setCompdata({ ...compData, problems: array });
                        console.log(compData);
                      } else {
                        const array = compData.problems
                          ? [...compData.problems, problem._id]
                          : [problem._id];
                        setCompdata({ ...compData, problems: array });
                        console.log(compData);
                      }
                    }}
                  >
                    <div className="p-2 bg-gray-900 rounded-lg">
                      <p className="text-[#c3c3c3]">{problem.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-600 rounded-lg bg-opacity-40 p-2 h-[18.4em] w-[25em]">
          <div className="bg-gray-900 p-2 rounded-lg flex">
            <Button handleClick={handleSubmit}>
              <p>Create KodeSpace</p>
            </Button>
          </div>
          <div className="bg-gray-900 p-4 py-4 rounded-lg mt-2 flex flex-col">
            <p className="text-3xl">Room Code</p>
            <div className="bg-gray-800 mt-4 p-2 rounded-lg ">
              <div className="bg-gray-900 p-2 rounded-lg">
                <p className="text-center text-4xl text-green-500">ABC123</p>
              </div>
            </div>
            <p className="text-center text-sm mt-2 text-[#999999]">
              This is the code to your room. You may share this with your
              friends to join this room immediately!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompetition;
