// api/index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Meu bot está rodando 🚀");
});

module.exports = app;
