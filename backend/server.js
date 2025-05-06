const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para processamento de JSON
app.use(express.json());

// Rota padrão para teste
app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend da plataforma de investimentos!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
