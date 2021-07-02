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
// //pesquisa por id
// route.get("/albuns/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     let album = await Album.findById(id).populate('artista')
//     res.json(album);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Erro ao pesquisar album" });
//   }
// });
// //post
// route.post("/albuns", async (req, res) => {
//   try {
//     const album = new Album(req.body);
//     const resultado = await album.save();
//     res.json(resultado);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: "Erro na hora de criar o album" });
//   }
// });
// //update
// route.put('/albuns/:id', async(req,res) => {
//     const id = req.params.id
//     const album = req.body
//     const resultado = await Album.findByIdAndUpdate(id, album)
//     res.json(resultado);
// })
// //delete
// route.delete('/albuns/:id', async(req,res) =>{
//     try {
//         const id = req.params.id
//         const resultado = await Album.findByIdAndDelete(id);
//         res.send(resultado)
//     } catch (error) {   
//         console.error(error);
//         res.status(500).send({ error: "Erro na hora de criar o album"})
//     }
// })

module.exports = route;
