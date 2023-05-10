const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departamentoMunicipioSchema = new Schema({
  departamento: String,
  municipio: String,
});

module.exports = mongoose.model(
  "DepartamentoMunicipio",
  departamentoMunicipioSchema
);
