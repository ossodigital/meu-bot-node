const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Bot Node está rodando na Vercel com sucesso!');
});

module.exports = app;
