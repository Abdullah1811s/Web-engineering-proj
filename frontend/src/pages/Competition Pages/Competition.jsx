import React, { useEffect, useState, version } from "react";
import Logo from "../../components/Logo";
import CodeEditor from "./_components/CodeEditor";
import Dropdown from "../../components/Dropdown";
import axios from "axios";
import Loader from "../../components/Loader";
import ProblemDisplay from "./_components/ProblemDisplay";
import { useLocation, useParams } from "react-router-dom";

const dropDownItems = ["Javascript", "C++", "C", "Python", "Java"];

const problems = [
  {
    title: "First Non-Repeating Character",
    description:
      "Given a string s, find the index of the first non-repeating character in it. If it does not exist, return -1.",
    difficulty: "Easy",
    topics: ["Hash Map", "String", "Two Pointers"],
    examples: [
      {
        input: ["leetcode"],
        output: 0,
        explanation: 'The first non-repeating character is "l" at index 0.',
      },
      {
        input: ["loveleetcode"],
        output: 2,
        explanation: 'The first non-repeating character is "v" at index 2.',
      },
      {
        input: ["aabb"],
        output: -1,
        explanation: "No non-repeating character exists.",
      },
    ],
    testCases: [
      { input: "leetcode", output: 0, result: "", actual_output: "" },
      { input: "loveleetcode", output: 2, result: "", actual_output: "" },
      { input: "aabb", output: -1, result: "", actual_output: "" },
    ],
    constraints:
      "0 <= s.length <= 5 * 10^4. s consists of English letters, digits, symbols, and spaces.",
  },
  {
    title: "Valid Anagram",
    description:
      "Given two strings s and t, return true if t is an anagram of s and false otherwise.",
    difficulty: "Easy",
    topics: ["Hash Map", "String", "Sorting"],
    examples: [
      {
        input: ["anagram", "nagaram"],
        output: true,
        explanation:
          'Both strings "anagram" and "nagaram" have the same characters in the same frequency, so they are anagrams.',
      },
      {
        input: ["rat", "car"],
        output: false,
        explanation:
          'The strings "rat" and "car" do not have the same characters.',
      },
      {
        input: ["", ""],
        output: true,
        explanation:
          "Both strings are empty, so they are considered anagrams of each other.",
      },
    ],
    testCases: [
      {
        input: "anagram\nnagaram",
        output: true,
        result: "",
        actual_output: "",
      },
      { input: "rat\ncar", output: false, result: "", actual_output: "" },
    ],
    code: "",
    constraints:
      "0 <= s.length, t.length <= 5 * 10^4. s and t consist of lowercase English letters.",
  },
];

const Competition = () => {
  const [value, setValue] = useState("Javascript");
  const [problems, setProblems] = useState([]);
  const [code, setCode] = useState([]);
  const [output, setOutput] = useState("output here");
  const [loading, setLoading] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState(0);
  const [selectedProblem, setSelectedProblem] = useState(0);
  const [testCases, setTestCases] = useState([
    {
      input: "anagram\nnagaram",
      output: true,
      result: "",
      actual_output: "",
    },
    { input: "rat\ncar", output: false, result: "", actual_output: "" },
  ]);

  const location = useLocation();
  const { competitionId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const competitionResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/competitions/${competitionId}`
        );

        const problemPromises = competitionResponse.data.problems.map(
          (problemId) =>
            axios.get(
              `${process.env.REACT_APP_BACKEND_URL}/api/problems/${problemId}`
            )
        );

        const problemResponses = await Promise.all(problemPromises);
        const fetchedProblems = problemResponses.map((res) => res.data.problem);
        const fetchedTestCases = fetchedProblems[selectedProblem].testCases;
        console.log(fetchedProblems);

        setProblems(fetchedProblems);
        setTestCases(fetchedTestCases);
        console.log(testCases);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Error fetching competition data. Please try again.");
        console.error("Error fetching competition data:", error);
      }
    };

    if (competitionId) {
      fetchData();
    }
  }, [competitionId, selectedProblem]);

  const runCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/run-code`,
        {
          language: value.toLowerCase(),
          files: [
            {
              content: code[selectedProblem],
            },
          ],
        }
      );
      console.log("RES", response);

      setOutput(response.data.run.output);

      const updatedTestCases = await Promise.all(
        testCases.map(async (testCase, index) => {
          console.log({
            language: value.toLowerCase(),
            input: testCase.input,
            files: [
              {
                content: code[selectedProblem],
              },
            ],
            expected_output: testCase.output,
          });
          const testResponse = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/run-test`,
            {
              language: value.toLowerCase(),
              input: testCase.input,
              files: [
                {
                  content: code[selectedProblem],
                },
              ],
              expected_output: testCase.output,
            }
          );
          console.log(testResponse);
          return {
            ...testCase,
            result: testResponse.data.status,
            actual_output: testResponse.data.actual_output
              ? testResponse.data.actual_output
              : testResponse.data.output,
          };
        })
      );

      setTestCases(updatedTestCases);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <section className="py-3 mx-10 ">
      <div className="mb-3 flex justify-between items-center ">
        <Logo text="Kode{ }!" className="text-[1.8em]" />
        <div
          className={`px-4 bg-[#044139] rounded-lg hover:bg-green-500 hover:text-gray-700 cursor-pointer py-3 duration-500 `}
          onClick={() => runCode()}
        >
          Run
        </div>
      </div>
      <div className="flex w-full justify-between flex-wrap ">
        <div className="bg-gray-800 w-[50%] h-[40em] p-2 rounded-lg ">
          <div className="bg-gray-900 rounded-lg h-full">
            {problems.length != 0 && (
              <ProblemDisplay
                problems={problems}
                selectedProblem={selectedProblem}
                setSelectedProblem={setSelectedProblem}
                setTestCases={setTestCases}
              />
            )}
          </div>
        </div>
        <div className="w-[49%] flex flex-col justify-between ">
          <div className="bg-gray-800  h-[20em] p-2 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-green-600 text-2xl">
                <span className="font-bold">&lt;/&gt;</span> Kode!
              </h1>
              <div className="-translate-y-1">
                <Dropdown
                  value={value}
                  setValue={setValue}
                  items={dropDownItems}
                />
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg h-[87%]">
              <CodeEditor
                language={value.toLowerCase()}
                onCodeChange={setCode}
                code={code}
                selectedProblem={selectedProblem}
              />
            </div>
          </div>

          <div className="bg-gray-800  h-[19em] p-2 rounded-lg relative ">
            {loading ? (
              <Loader />
            ) : (
              <div className="bg-gray-900 h-[18em] rounded-lg overflow-y-scroll">
                <div className="p-2 bg-gray-300 mx-4 rounded-lg my-2">
                  <p className="text-sm mx-2 text-green-500">Test Cases</p>
                  <div className="flex gap-3 flex-wrap mx-2 mt-2">
                    {testCases.map((test, i) => (
                      <div
                        className="bg-gray-900 rounded-lg flex items-center cursor-pointer"
                        onClick={() => setSelectedTestCase(i)}
                      >
                        <div
                          className={`w-[0.5em] h-[0.5em] ${
                            test.result === "success"
                              ? "bg-green-600 "
                              : test.result == "failure"
                              ? "bg-red-600"
                              : "bg-gray-600"
                          } rounded-full ml-2`}
                        />
                        <p className="text-sm p-2">Case {i + 1}</p>
                      </div>
                    ))}
                  </div>
                  <div className="m-2 p-2 bg-gray-900 rounded-lg">
                    <p className="text-green-500 font-semibold">
                      Test Case {selectedTestCase + 1}{" "}
                    </p>
                    <div className="ml-3">
                      <p className="mt-2 text-sm text-green-500  ">Input:</p>
                      <div className="mt-1 bg-gray-300 text-sm text-[#b3b3b3] p-2 rounded-lg ">
                        {testCases[selectedTestCase].input}
                      </div>
                      <p className="mt-2 text-sm text-green-500">
                        Expected Output:
                      </p>
                      <div className="mt-1 bg-gray-300 text-[#b3b3b3] text-sm p-2 rounded-lg ">
                        {String(testCases[selectedTestCase].output)}
                      </div>
                      {testCases[selectedTestCase].actual_output && (
                        <>
                          <p className="mt-2 text-sm text-green-500">
                            Actual Output:
                          </p>
                          <div className="mt-1 bg-gray-300 text-[#b3b3b3] text-sm p-2 rounded-lg mb-1">
                            {testCases[selectedTestCase].actual_output}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-gray-300 mx-4 rounded-lg my-2 relative">
                  <p className="text-sm mx-2 text-green-500">Output </p>
                  <div className="mt-1 bg-gray-900 text-sm p-2 rounded-lg ">
                    <pre className="p-2 text-sm text-[#b3b3b3]">{output}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
