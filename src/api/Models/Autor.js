const mongoose = require('../data/index')

const autorSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: Number,
    animes: Array,
    idade: Number,
    estaVivo: Boolean,
    sexo: String,
})

const autor = mongoose.model('autor', autorSchema)

module.exports = autor