const express = require("express");
const { createProblem } = require("../controllers/ProblemController");
const problemrouter = express.Router();

problemrouter.post("/create", createProblem);

module.exports = problemrouter;
