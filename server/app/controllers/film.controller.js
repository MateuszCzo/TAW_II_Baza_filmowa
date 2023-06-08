const Film = require("../database/models/film.model");

const getFilms = async (request, response) => {
    try {
        const films = await Film.find({});

        response.status(200).json({ films });
    } catch (error) {
        response.status(500).json({ error: "Error retrieving films." });
    }
}

const getFilmById = async (request, response) => {
    try {
        const { id } = request.params;

        const film = await Film.findById(id);

        if (!film) {
            return response.status(404).json({ error: "Film not found." });
        }

        response.status(200).json({ film });

    } catch (error) {
        response.status(500).json({ error: "Error retrieving film." });
    }
}

const createFilm = async (request, response) => {
    try {
        const { name, description, image } = request.body;

        const film = new Film({ name, description, image });

        await film.save();

        response.status(201).json({ message: "Film created successfully.", film });

    } catch (error) {
        response.status(500).json({ error: "Error creating film." });
    }
}

const updateFilm = async (request, response) => {
    try {
        const { id } = request.params;
        const { name, description, image } = request.body;

        const updatedFilm = await Film.findByIdAndUpdate(
            id,
            { name, description, image },
            { new: true }
        )
        
        if (!updatedFilm) {
            return response.status(404).json({ error: "Film not found." });
        }

        response.status(200).json({ message: "Film updated successfully.", film: updatedFilm });

    } catch (error) {
        response.status(500).json({ error: "Error updating film." });
    }
}

const deleteFilm = async (request, response) => {
    try {
        const  { id } = request.params;

        const deletedFilm = await Film.findByIdAndDelete(id);

        if (!deletedFilm) {
            return response.status(404).json({ error: "Film not found." })
        }

        response.status(200).json({ message: "Film deleted successfully." });

    } catch (error) {
        res.status(500).json({ error: "Error deleting film." });
    }
}

module.exports = {
    getFilms,
    getFilmById,
    createFilm,
    updateFilm,
    deleteFilm
}