const express = require("express");
const router = express.Router();
const { getFilms, getFilmById, createFilm, updateFilm, deleteFilm } = require("../controllers/film.controller");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/films", getFilms);
router.get("/films/:id", getFilmById);
router.post("/films", verifyToken, createFilm);
router.put("/films/:id", verifyToken, updateFilm);
router.delete("/films/:id", verifyToken, deleteFilm);

module.exports = router;