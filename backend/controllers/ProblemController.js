const Problem = require("../models/Problem");

exports.createProblem = async (req, res) => {
  try {
    const problemData = req.body;

    if (
      !problemData.title ||
      !problemData.description ||
      !problemData.difficulty
    ) {
      return res
        .status(400)
        .json({ message: "Title, description, and difficulty are required." });
    }

    const newProblem = new Problem(problemData);
    const savedProblem = await newProblem.save();

    res.status(201).json({
      message: "Problem created successfully",
      problem: savedProblem,
    });
  } catch (error) {
    console.error("Error creating problem:", error.message);
    res
      .status(500)
      .json({ message: "Failed to create problem", error: error.message });
  }
};

exports.updateProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProblem = await Problem.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProblem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({
      message: "Problem updated successfully",
      problem: updatedProblem,
    });
  } catch (error) {
    console.error("Error updating problem:", error.message);
    res
      .status(500)
      .json({ message: "Failed to update problem", error: error.message });
  }
};

exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find();

    res.status(200).json({
      message: "Problems retrieved successfully",
      problems,
    });
  } catch (error) {
    console.error("Error fetching problems:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve problems", error: error.message });
  }
};

exports.getProblemById = async (req, res) => {
  try {
    const { id } = req.params;

    const problem = await Problem.findById(id);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({
      message: "Problem retrieved successfully",
      problem,
    });
  } catch (error) {
    console.error("Error fetching problem by ID:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve problem", error: error.message });
  }
};

exports.deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProblem = await Problem.findByIdAndDelete(id);

    if (!deletedProblem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({
      message: "Problem deleted successfully",
      deletedProblem,
    });
  } catch (error) {
    console.error("Error deleting problem:", error.message);
    res
      .status(500)
      .json({ message: "Failed to delete problem", error: error.message });
  }
};
