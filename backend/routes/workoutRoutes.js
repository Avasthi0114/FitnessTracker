const express = require("express");
const { addWorkout, getWorkouts } = require("../controllers/workoutController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, addWorkout);
router.get("/", auth, getWorkouts);

module.exports = router;
