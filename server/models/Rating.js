const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  stars: {
    type: Number,
    required: true,
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;
