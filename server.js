const express = require('express');
   const funcionarioRoutes = require('./routes/FuncionarioRoutes');

   const app = express();
   const port = 3000;

   // Middleware para permitir JSON
   app.use(express.json());

   // Rotas de funcionários
   app.use('/api', funcionarioRoutes);

   // Inicializar o servidor
   app.listen(port, () => {
     console.log(`Servidor rodando na porta ${port}`);
   });