const Anime = require("./api/Models/Anime");

const b = new Anime({
    nome: "Boku No Hero Academia",
    dataLancamento: 03042016,
    dataTermino: 26062016,
    numEpisodios: 13,
    genero: "Shounen",
    produtora: "Bones",
    autor: "60dbcca8633e592814af60e2",
});

b.save().then(function(){
    console.log("Salvo")
})

// const Criador = require("./api/Models/Autor");

// const b = new Criador({
//     nome: "Kentaro Miura",
//     dataNascimento: 11071966,
//     animes: ['Futatabi ', 'NOA ', 'Berserk: The Prototype', 'King of Wolves', 'Berserk'],
//     idade: 54,
//     estaVivo: false,
//     sexo: 'Masculino',
// });

// b.save().then(function(){
//     console.log("Salvo")
// })