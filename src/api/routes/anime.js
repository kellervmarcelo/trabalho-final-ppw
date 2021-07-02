const express = require("express");
const route = express.Router();
const Anime = require('../Models/Anime.js');

//middleware pra transformar o objeto em json
route.use(express.json());

//todos
route.get("/", async function (req, res) {
  let docs = await Anime.find().populate('autor')
  res.json(docs);
});
//pesquisa por id
route.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let anime = await Anime.findById(id).populate('autor')
    res.json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao pesquisar anime" });
  }
});
//post
route.post("/", async (req, res) => {
  try {
    const anime = new Anime(req.body);
    const resultado = await anime.save();
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro na hora de criar o album" });
  }
});
//update
route.put('/:id', async(req,res) => {
    const id = req.params.id
    const anime = req.body
    const resultado = await Anime.findByIdAndUpdate(id, anime)
    res.json(resultado);
})
//delete
route.delete('/:id', async(req,res) =>{
    try {
        const id = req.params.id
        const resultado = await Anime.findByIdAndDelete(id);
        res.send(resultado)
    } catch (error) {   
        console.error(error);
        res.status(500).send({ error: "Erro na hora de criar o album"})
    }
})

module.exports = route;
