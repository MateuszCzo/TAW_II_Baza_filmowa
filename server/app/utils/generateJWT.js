const jwt = require("jsonwebtoken");

const generateJWT = (userId, name, role) => {
  const token = jwt.sign({ userId, name, role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { generateJWT };
