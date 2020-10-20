const express = require("express");
const mongoose = require("mongoose");
const path = require ("path");
const logger = require ("morgan");

const app = express();

app.use(logger("dev"));

const PORT = process.env.PORT || 5082


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });
app.use(express.static("public"));

//API Routes
// POST /api/workouts
// PUT /api/workouts/:id
// GET /api/workouts/range (Last 7 days: Limit (7))


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
    console.log( `App is running on http://localhost:${PORT}`);
});