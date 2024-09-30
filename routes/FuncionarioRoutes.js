const express = require('express');
   const FuncionarioController = require('../controllers/FuncionarioController');

   const router = express.Router();

   router.get('/funcionarios', FuncionarioController.listarFuncionarios);
   router.get('/funcionarios/:id', FuncionarioController.buscarFuncionario);
   router.post('/funcionarios', FuncionarioController.criarFuncionario);
   router.put('/funcionarios/:id', FuncionarioController.atualizarFuncionario);
   router.delete('/funcionarios/:id', FuncionarioController.deletarFuncionario);

   module.exports = router;