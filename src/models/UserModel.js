const mongoose = require("mongoose");
const CartItem = require('./CartModel');
const Order = require('./OrderModel');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: String, // Optional field
  phoneNumber: String, // Optional field
});

// Middleware to remove associated cart items and orders when a user is deleted
userSchema.pre('remove', async function (next) {
    await CartItem.deleteMany({ user: this._id });
    await Order.deleteMany({ user: this._id });
    next();
  });

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
