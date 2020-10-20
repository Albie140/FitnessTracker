const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: Array

    // need more info
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;