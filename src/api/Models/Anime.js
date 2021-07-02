const mongoose = require('../data/index')
const Autor = require('./Autor')

const animeSchema = new mongoose.Schema({
    nome: String,
    dataLancamento: Number,
    dataTermino: Number,
    numEpisodios: Number,
    genero: String,
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Autor,
    },
    date: { type: Date, default: Date.now },
}, {timestramp: true})

const anime = mongoose.model('anime', animeSchema)

module.exports = anime