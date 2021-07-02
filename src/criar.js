const Anime = require("./api/Models/Anime");

const b = new Anime({
    nome: "Boku No Hero Academia",
    dataLancamento: 03042016,
    dataTermino: 26062016,
    numEpisodios: 13,
    genero: "Shounen",
    autor: "60de851ed2aa4927080b2e5e",
});

b.save().then(function(){
    console.log("Salvo")
})

const c = new Anime({
    nome: "Fullmetal Alchemist: Brotherhood",
    dataLancamento: 03042016,
    dataTermino: 26062016,
    numEpisodios: 13,
    genero: "Shounen",
    autor: "60de851ed2aa4927080b2e5d",
});

c.save().then(function(){
    console.log("Salvo")
})

const d = new Anime({
    nome: "Hunter x Hunter",
    dataLancamento: 03042016,
    dataTermino: 26062016,
    numEpisodios: 13,
    genero: "Shounen",
    autor: "60de851ed2aa4927080b2e5c",
});

d.save().then(function(){
    console.log("Salvo")
})



// const Criador = require("./api/Models/Autor");

// const b = new Criador({
//     nome: "Yoshihiro Togashi",
//     dataNascimento: 27041966,
//     animes: ['Hunter x Hunter ', 'Level E ', 'Yu Yu Hakusho'],
//     idade: 55,
//     estaVivo: true,
//     sexo: 'Masculino',
// });

// b.save().then(function(){
//     console.log("Salvo")
// })

// const c = new Criador({
//     nome: "Hiroshi Ōnogi",
//     dataNascimento: 23081959,
//     animes: ['Fullmetal Alchemist: Brotherhood', 'Eureka Seven', 'Doraemon '],
//     idade: 64,
//     estaVivo: true,
//     sexo: 'Masculino',
// });

// c.save().then(function(){
//     console.log("Salvo")
// })

// const d = new Criador({
//     nome: "Kōhei Horikoshi ",
//     dataNascimento: 20111986,
//     animes: ["Boku No Hero Academia", "Tenko"],
//     idade: 34,
//     estaVivo: true,
//     sexo: 'Feminino',
// });

// d.save().then(function(){
//     console.log("Salvo")
// })