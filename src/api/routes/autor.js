const express = require("express");
const route = express.Router();
const Autor = require("../Models/Autor.js");

//middleware pra transformar o objeto em json
route.use(express.json());

//todos
route.get("/", async function (req, res) {
  let docs = await Autor.find()
  res.json(docs);
});

route.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let autor = await Autor.findById(id).populate('autor')
    res.json(autor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao pesquisar Autor" });
  }
});

//post
route.post("/", async (req, res) => {
  try {
    const autor = new Autor(req.body);
    const resultado = await autor.save();
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro na hora de criar o album" });
  }
});
//update
route.put('/:id', async(req,res) => {
    const id = req.params.id
    const autor = req.body
    const resultado = await Autor.findByIdAndUpdate(id, autor)
    res.json(resultado);
})
//delete
route.delete('/:id', async(req,res) =>{
    try {
        const id = req.params.id
        const resultado = await Autor.findByIdAndDelete(id);
        res.send(resultado)
    } catch (error) {   
        console.error(error);
        res.status(500).send({ error: "Erro na hora de criar o album"})
    }
})

module.exports = route