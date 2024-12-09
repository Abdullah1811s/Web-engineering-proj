const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  startTime: { type: Date, required: true },
  duration: { type: String, required: true },
  problems: [{ type: String }], 
  koins: { type: Number, required: true },
  mode: { type: String, enum: ["singleplayer", "multiplayer"], required: true },
  preferredTech: [{ type: String }], 
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  numQuestions: { type: Number, required: true },
  maxPlayers: { type: Number, required: true },
  roomCode: { type: String, unique: true, required: true },
  players: [{ type: String }], 
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;
