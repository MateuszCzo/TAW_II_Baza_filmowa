const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  ratings: [
    {
      username: { type: String, required: true },
      rating: { type: Number, min: 1, max: 5 },
    },
  ],
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;