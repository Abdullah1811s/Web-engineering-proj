const Problem = require("../models/Problem");

exports.addTestcases = async (req, res) => {
  try {
    const { id } = req.params;
    const { testCase } = req.body;

    console.log(id);

    if (!testCase) {
      return res.status(400).json({ message: "Test case data is required" });
    }

    const updatedProblem = await Problem.findByIdAndUpdate(
      id,
      { $push: { testCases: testCase } },
      { new: true }
    );

    if (!updatedProblem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({
      message: "Test case added successfully",
      updatedProblem,
    });
  } catch (error) {
    console.error("Error adding test case:", error.message);
    res
      .status(500)
      .json({ message: "Failed to add test case", error: error.message });
  }
};

exports.removeTestCase = async (req, res) => {
  try {
    const { id } = req.params;
    const { testCaseIndex } = req.body; 

    if (testCaseIndex === undefined) {
      return res.status(400).json({ message: "Test case index is required" });
    }

    const problem = await Problem.findById(id);
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    problem.testCases.splice(testCaseIndex, 1);
    await problem.save();

    res.status(200).json({
      message: "Test case removed successfully",
      updatedProblem: problem,
    });
  } catch (error) {
    console.error("Error removing test case:", error.message);
    res
      .status(500)
      .json({ message: "Failed to remove test case", error: error.message });
  }
};
