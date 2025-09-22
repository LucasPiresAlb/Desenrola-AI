const express = require('express');
const providerRoutes = require('./routes/providerRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', providerRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor "Desenrola Aí" rodando na porta ${PORT}`);
  });
}

module.exports = app;