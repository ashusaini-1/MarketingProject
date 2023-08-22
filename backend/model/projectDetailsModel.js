const mongoose = require("mongoose");

const ProjectDetail = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subject: {
    type: String,
    required: [true, "Add the Subject Name"],
  },
  number: {
    type: Number,
    required: [true, "Enter Your Number"],
  },
  assigne: {
    type: String,
    required: [true, "Add Assigne"],
  },
  receiptNumber: {
    type: String,
    required: [true, "Enter Receipt Number"],
  },
  expectedDate: {
    type: Date,
    required: [false, "Enter Receipt Number"],
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", ProjectDetail);
