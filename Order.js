const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products: Array,
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  address: String,
});

module.exports = mongoose.model("Order", OrderSchema);
