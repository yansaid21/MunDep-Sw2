const axios = require("axios");
const departamentoMunicipio = require("../models/departamentoMunicipio");
const express = require("express");
const app = express.Router();

app.get("/datosabiertos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.datos.gov.co/resource/xdk5-pm3f.json"
    );
    const data = response.data;
    /* Gestionar la información en la base de datos */
    await departamentoMunicipio.deleteMany();
    await departamentoMunicipio.insertMany(data);
    res.status(201).send("Datos almacenados en la mongoDB");
  } catch {
    console.log("Error accediendo al JSON", error);
    res.status(500).send("Error accediendo al JSON");
  }
});

module.exports = app;
