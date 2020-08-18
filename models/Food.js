const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Lütfen ürün ismini belirtiniz."],
    trim: true,
    maxlength: [60, "Ürün ismi en fazla 60 karakter içermelidir."],
  },
  ingredients: {
    type: String,
    required: [true, "Lütfen ürün içeriklerini belirtiniz."],
    trim: true,
    maxlength: [200, "Ürün içerikleri en fazla 200 karakter içermelidir."],
  },
  price: {
    type: Number,
    required: [true, "Lütfen ürün fiyatını belirtiniz."],
    trim: true,
  },
  imgUrl: {
    type: String,
    required: [true, "Lütfen ürün fotoğrafı ekleyiniz."],
    trim: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.models.Food || mongoose.model("Food", FoodSchema);
