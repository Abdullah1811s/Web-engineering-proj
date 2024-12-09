const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: "New user Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(500).json({ message: "User does not exist" });
  }

  try {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = await jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      res.json({ token, user });
    } else {
      console.log("Password does not match.");
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { name, type, email } = req.body;

  try {
    const user = await User.findOne({ email: req.user.email });
    console.log(req.user);
    if (user) {
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        {
          name: name,
          type: type,
        },
        { new: true }
      );

      res.json({ user: updatedUser, message: "Updated User" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};
