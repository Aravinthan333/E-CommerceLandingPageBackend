const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  image: {
    type: String,
    default: "https://placehold.jp/150x150.png",
  },
  quantity: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
