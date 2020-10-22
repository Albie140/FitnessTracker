const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const Workout = require("./models/workout");
const { db } = require("./models/workout");

const app = express();

app.use(logger("dev"));

const PORT = process.env.PORT || 5082




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", { useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false });

//API Routes
app.get("/api/workouts", (req, res) => {
    Workout.find({

    }).then(
        (workouts) => {
            console.log(workouts);
            res.json(workouts)

        }).catch((err) => {
            res.json(err)
        });
});

// POST /api/workouts
app.post("/api/workouts", (req, res) => {
    Workout.create({

    }).then(
        (workouts) => {

            res.json(workouts)
        });
});
// PUT /api/workouts/:id
app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body }

    }).then(
        (workouts) => {
            res.json(workouts)
        });
});


// GET /api/workouts/range 

app.post("api/workouts/range", (req, res) => {
    Workout.create({})
        .then(

            (workouts) => {

                res.json(workouts)
            });
});
app.get("/api/workouts/range", (req, res) => {
    Workout.find({

    }).then(

        (workouts) => {
            console.log(workouts);
            res.json(workouts);

        }).catch((err) => {
            res.json(err)
        });
});

//HTML Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise.html"))
});
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stats.html"))
});


app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});