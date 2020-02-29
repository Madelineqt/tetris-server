const scores = require("./leaderboard.model")

function obtenerscores(){
    return scores.find({})
}
function crearscores(nombre, score){
    return new scores({
        nombre,
        score
    }).save()
}
module.exports = {
    obtenerscores,
    crearscores
}