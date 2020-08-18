const mongoose = require("mongoose");

const Category = new mongoose.Schema({
  name: String,
  description: String,
  imgUrl: String,
});

module.exports =
  mongoose.models.Category || mongoose.model("Category", Category);
