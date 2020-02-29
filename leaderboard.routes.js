const express = require('express')
const bodyParser = require('body-parser')
const leaderboardrouter = express.Router()
const leaderboardcontroller = require("./leaderboard.controller")
leaderboardrouter.use('/leaderboard', leaderboardrouter)

leaderboardrouter.get('/', (req, res) => {
    leaderboardcontroller.obtenerscores()
    .then(scores => {
        res.json(scores)
    })
    .catch(err => {
      res.status(500).send("no se pudo leer los scores")
    })
  })
leaderboardrouter.post('/', (req, res) => {
    leaderboardcontroller.crearscores(req.body.nombre, req.body.score)
    .then(scores => {
        res.json(scores)
    })
    .catch(err => {
      res.status(500).send("no se pudo crear el score")
    })
  })


module.exports = leaderboardrouter