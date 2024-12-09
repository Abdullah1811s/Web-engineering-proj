const express = require("express");
const {
  createUser,
  loginUser,
  updateUser,
} = require("../controllers/UserController");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const axios = require("axios");
const problemrouter = require("./problemRoutes");
const {
  updateProblem,
  getAllProblems,
  getProblemById,
  deleteProblem,
} = require("../controllers/ProblemController");
const {
  addTestcases,
  removeTestCase,
} = require("../controllers/TestCaseController");
const {
  createCompetition,
  getCompetitions,
  getCompetitionById,
  updateCompetition,
  deleteCompetition,
  joinRoom,
  leaveRoom,
} = require("../controllers/CompetitionController");

router.post("/run-code", async (req, res) => {
  try {
    const { language, files } = req.body;
    const runtimes = await axios.get("https://emkc.org/api/v2/piston/runtimes");
    const data = runtimes.data;

    const findData = data.find((item) => item.language == language);

    // Extract code, language, and other params from request body

    // Set up the request to Piston API
    const response = await axios.post(
      "https://emkc.org/api/v2/piston/execute",
      {
        language: findData.aliases[0],
        version: findData.version,
        files,
      }
    );

    // Send the response from Piston API back to frontend
    res.json(response.data);
  } catch (error) {
    // Handle errors and send appropriate response
    res.status(500).json({ error: error.message });
  }
});

router.post("/run-test", async (req, res) => {
  try {
    const { language, files, input, expected_output } = req.body;
    const runtimes = await axios.get("https://emkc.org/api/v2/piston/runtimes");
    const data = runtimes.data;

    const findData = data.find((item) => item.language == language);

    // Call Piston API
    const response = await axios.post(
      "https://emkc.org/api/v2/piston/execute",
      {
        language: findData.aliases[0],
        version: findData.version,
        stdin: input,
        files: files,
      }
    );

    const actual_output = response.data.run.output.trim();

    if (actual_output == expected_output) {
      res.json({ status: "success", message: "Test passed!" });
    } else {
      res.json({
        status: "failure",
        message: "Test failed.",
        actual_output,
        expected_output,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to execute test case.", details: error.message });
  }
});

router.post("/users", (req, res) => createUser(req, res));
router.post("/login", (req, res) => loginUser(req, res));
router.put("/users", authMiddleware, (req, res, next) => updateUser(req, res));

//Problem Statement Routes
router.use("/problems", problemrouter);
router.get("/problems", getAllProblems);
router.get("/problems/:id", getProblemById);
router.put("/problems/:id", updateProblem);
router.delete("/problems/:id", deleteProblem);

//Test Case Routes
router.put("/problems/:id/test-cases", addTestcases);
router.put("/problems/:id/remove-test-cases", removeTestCase);

//Competition Routes
router.post("/competitions", createCompetition);
router.get("/competitions", getCompetitions);
router.get("/competitions/:id", getCompetitionById);
router.put("/competitions/:id", updateCompetition);
router.delete("/competitions/:id", deleteCompetition);
router.post("/competitions/join", joinRoom);
router.post("/competitions/leave", leaveRoom);

//Leaderboard Routes

module.exports = router;
