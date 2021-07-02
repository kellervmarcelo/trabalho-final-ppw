const mongoose = require('../data/index')

const autorSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: Number,
    animes: Array,
    idade: Number,
    estaVivo: Boolean,
    sexo: String,
    date: { type: Date, default: Date.now },
}, {timestramp: true})

const autor = mongoose.model('autor', autorSchema)

module.exports = autor