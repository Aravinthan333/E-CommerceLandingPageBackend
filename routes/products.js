const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Search products by name
router.get("/products/search", async (req, res) => {
  const { name } = req.query;
  const products = await Product.find({ name: new RegExp(name, "i") });
  res.json(products);
});

// Filter products by category
router.get("/products/category/:category", async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.json(products);
});

// Get product details by ID
router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

module.exports = router;
