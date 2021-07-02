const express = require('express')
const app = express()
const routes = require('./api/routes/index')
const PORT = process.env.PORT || 8080;

app.use('/api', routes)

app.get('/', function(req, res) {
    res.send('Olá mundo')
})

app.listen(PORT, function(){
    console.log(`Servidor escutando na porta http://localhost:${PORT}`);
})