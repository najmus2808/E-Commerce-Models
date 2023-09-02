const mongoose = require("mongoose");

// Define the CartItem schema
const cartItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensure a positive integer quantity
  },
});

// Create the CartItem model
const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
