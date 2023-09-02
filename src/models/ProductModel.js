const mongoose = require("mongoose");

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: 0.01, // Ensure a positive value
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Ensure a non-negative integer
  },
  category: {
    type: String,
    required: true,
  },
  imageURL: String, // Optional field for storing image URLs
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
