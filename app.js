const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");
const app = express();
/* Cargar rutas */
//const userRoutes = require("./src/routes/user");
//const authRoutes = require("./src/routes/auth");
/* const departamentoMunicipio = require("./src/routes/departamentoMunicipio"); */

/* Trabajar con la extensión client-rest */
app.use(bodyParser.json());
/* Pruebas de request utilizando postman */
app.use(bodyParser.urlencoded({ extended: true }));

/* Evitar bloqueos en el navegador cuando estemos trabajando con
el backend y el front end a la vez */
app.use(cors());
console.log(`api/${API_VERSION}/`);
app.use(`/api/${API_VERSION}`,userRoutes);
/* app.use(`/api/${API_VERSION}/`, departamentoMunicipio);
console.log(`/api/${API_VERSION}/datosabiertos`); */

module.exports = app;
