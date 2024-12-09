const Competition = require("../models/Competition");

const generateRoomCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

const createUniqueRoomCode = async () => {
  let roomCode;
  let isUnique = false;

  while (!isUnique) {
    roomCode = generateRoomCode();
    const existing = await Competition.findOne({ roomCode });
    if (!existing) isUnique = true;
  }

  return roomCode;
};

exports.createCompetition = async (req, res) => {
  try {
    const roomCode = await createUniqueRoomCode();
    const competitionData = { ...req.body, roomCode };

    const newCompetition = new Competition(competitionData);
    await newCompetition.save();

    res.status(201).json({
      message: "Competition created successfully",
      competition: newCompetition,
    });
  } catch (error) {
    console.error("Error creating competition:", error.message);
    res
      .status(500)
      .json({ message: "Failed to create competition", error: error.message });
  }
};

exports.getCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.find();
    res.status(200).json(competitions);
  } catch (error) {
    console.error("Error fetching competitions:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch competitions", error: error.message });
  }
};

exports.getCompetitionById = async (req, res) => {
  try {
    const { id } = req.params;
    const competition = await Competition.findById(id);

    if (!competition) {
      return res.status(404).json({ message: "Competition not found" });
    }

    res.status(200).json(competition);
  } catch (error) {
    console.error("Error fetching competition:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch competition", error: error.message });
  }
};

exports.updateCompetition = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCompetition = await Competition.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedCompetition) {
      return res.status(404).json({ message: "Competition not found" });
    }

    res.status(200).json({
      message: "Competition updated successfully",
      competition: updatedCompetition,
    });
  } catch (error) {
    console.error("Error updating competition:", error.message);
    res
      .status(500)
      .json({ message: "Failed to update competition", error: error.message });
  }
};

exports.deleteCompetition = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCompetition = await Competition.findByIdAndDelete(id);

    if (!deletedCompetition) {
      return res.status(404).json({ message: "Competition not found" });
    }

    res.status(200).json({
      message: "Competition deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting competition:", error.message);
    res
      .status(500)
      .json({ message: "Failed to delete competition", error: error.message });
  }
};

exports.joinRoom = async (req, res) => {
  try {
    const { roomCode, player } = req.body;

    if (!roomCode || !player) {
      return res
        .status(400)
        .json({ message: "Room code and player are required" });
    }

    const competition = await Competition.findOne({ roomCode: roomCode });

    if (!competition) {
      return res.status(404).json({ message: "Competition not found" });
    }

    if (competition.players.length >= competition.maxPlayers) {
      return res.status(400).json({ message: "Competition room is full" });
    }

    if (competition.players.includes(player)) {
      return res.status(400).json({ message: "Player already joined" });
    }

    competition.players.push(player);
    await competition.save();

    res.status(200).json({
      message: "Player joined successfully",
      competition,
    });
  } catch (error) {
    console.error("Error joining competition room:", error.message);
    res.status(500).json({
      message: "Failed to join competition room",
      error: error.message,
    });
  }
};

exports.leaveRoom = async (req, res) => {
  const { roomCode, player } = req.body;

  try {
    const competition = await Competition.findOne({ roomCode });
    if (!competition) {
      return res.status(404).json({ message: "Competition not found" });
    }

    if (!competition.players.includes(player)) {
      return res
        .status(400)
        .json({ message: "Player not found in the competition" });
    }

    competition.players = competition.players.filter((p) => p !== player);

    await competition.save();

    res.json({
      message: "Player left the competition room successfully",
      competition,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
