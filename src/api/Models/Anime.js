const mongoose = require('../data/index')
const Autor = require('./Autor')

const animeSchema = new mongoose.Schema({
    nome: String,
    dataLancamento: Number,
    dataTermino: Number,
    numEpisodios: Number,
    genero: String,
    produtora: String,
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Autor,
    },
})

const anime = mongoose.model('anime', animeSchema)

module.exports = anime