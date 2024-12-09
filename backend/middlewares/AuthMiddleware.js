const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  try {
    // Extract the token from the authorization header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT NOT VERIFIED:", err.message);
    return res
      .status(403)
      .json({ message: err.message });
  }
};
