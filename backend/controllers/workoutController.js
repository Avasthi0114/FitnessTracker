const Workout = require("../models/Workout");

exports.addWorkout = async (req, res) => {
  const { type, duration, notes } = req.body;
  const workout = await Workout.create({
    userId: req.user.id,
    date: new Date(),
    type,
    duration,
    notes
  });
  res.status(201).json(workout);
};

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ userId: req.user.id });
  res.json(workouts);
};
