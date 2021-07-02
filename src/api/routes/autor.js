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

module.exports = route