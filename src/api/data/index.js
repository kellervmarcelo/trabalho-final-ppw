const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

mongoose.connection.on("connected", function () {
  console.log("Conexão com o banco realizada com sucesso");
});

module.exports = mongoose
