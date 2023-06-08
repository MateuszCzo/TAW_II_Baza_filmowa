const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/user.controller");

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

module.exports = router;