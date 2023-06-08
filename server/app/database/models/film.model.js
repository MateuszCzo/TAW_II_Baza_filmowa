const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;