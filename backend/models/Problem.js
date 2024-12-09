const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  input: { type: [String], required: true },
  output: { type: mongoose.Schema.Types.Mixed, required: true }, // Mixed type for string/number
  explanation: { type: String, required: true },
});

const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: mongoose.Schema.Types.Mixed, required: true },
  result: { type: String, default: "" },
  actual_output: { type: String, default: "" },
});

const problemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    topics: { type: [String], default: [] },
    examples: { type: [exampleSchema], default: [] },
    testCases: { type: [testCaseSchema], default: [] },
    constraints: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", problemSchema);
