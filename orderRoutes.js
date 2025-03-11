const express = require("express");
const Order = require("../models/Order");
const User = require("../models/User");

const router = express.Router();

// Place Order
router.post("/", async (req, res) => {
  const { userId, products, totalAmount, address } = req.body;

  const user = await User.findById(userId);
  if (user.walletBalance < totalAmount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  user.walletBalance -= totalAmount;
  await user.save();

  const newOrder = new Order({ userId, products, totalAmount, address });
