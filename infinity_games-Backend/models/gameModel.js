const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  website: {
    type: String,
    required: [true, "Name cannot cannot be empty"],
  },
  name: {
    type: String,
    required: [true, "Name cannot cannot be empty"],
  },
  href_link: {
    type: String,
    required: [true, "Link cannot cannot be empty"],
  },
  img_link: {
    type: String,
    required: [true, "Link cannot cannot be empty"],
  },
  category: {
    type: String,
    required: [true, "Category cannot cannot be empty"],
  },
});

const Games = mongoose.model("Games", gameSchema);
module.exports = Games;
