require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")
const leaderboardrouter = require("./leaderboard.routes")
mongoose.connect("mongodb+srv://uwu:uwu@tetris-sfd1x.mongodb.net/tetris", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on("error", () => {
  console.log("fallo la conexion a mongodb")
  process.exit(1)
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/leaderboard', leaderboardrouter)


app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}`);
});