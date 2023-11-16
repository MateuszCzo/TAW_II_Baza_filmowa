const express = require("express");
const router = express.Router();
const { getFilms, getFilmById, createFilm, updateFilm, deleteFilm, addUpdFilmRating} = require("../controllers/film.controller");
const { verifyToken } = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

router.get("/films", getFilms);
router.get("/films/:id", getFilmById);
router.post("/films", verifyToken, isAdmin, createFilm);
router.put("/films/:id", verifyToken, isAdmin, updateFilm);
router.delete("/films/:id", verifyToken, isAdmin, deleteFilm);
router.post("/films/addUpdRating/:id", verifyToken, addUpdFilmRating);

module.exports = router;
