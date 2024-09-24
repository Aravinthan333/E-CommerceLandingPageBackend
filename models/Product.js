const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  image: String,
  quantity: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
