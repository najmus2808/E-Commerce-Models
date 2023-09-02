const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
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
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0.01, // Ensure a positive value
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
});

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
