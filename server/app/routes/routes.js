const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const filmsRoutes = require("./films.routes");

router.use("/api", userRoutes);
router.use("/api", filmsRoutes);

module.exports = router;
