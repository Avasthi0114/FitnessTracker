const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  type: String,
  duration: Number, // in minutes
  notes: String
});

module.exports = mongoose.model("Workout", WorkoutSchema);
