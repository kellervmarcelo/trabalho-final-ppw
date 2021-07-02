const mongoose = require("mongoose");
const uri = 'mongodb+srv://marcelomkv:8NVzpTrjwmuX7ky@cluster0.vk1if.mongodb.net/Anime?retryWrites=true&w=majority'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

mongoose.connection.on("connected", function () {
  console.log("Conexão com o banco realizada com sucesso");
});

module.exports = mongoose