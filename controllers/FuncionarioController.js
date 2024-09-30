const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async listarFuncionarios(req, res) {
    try {
      const funcionarios = await prisma.funcionario.findMany();
      res.json(funcionarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar os funcionários.' });
    }
  },

  async buscarFuncionario(req, res) {
    try {
      const { id } = req.params;
      const funcionario = await prisma.funcionario.findUnique({
        where: { id: Number(id) }
      });

      if (!funcionario) {
        return res.status(404).json({ error: 'Funcionário não encontrado.' });
      }

      res.json(funcionario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o funcionário.' });
    }
  },

  async criarFuncionario(req, res) {
    try {
      const { matricula, nome, email, salario_bruto } = req.body;
      const novoFuncionario = await prisma.funcionario.create({
        data: { matricula, nome, email, salario_bruto }
      });
      res.status(201).json(novoFuncionario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o funcionário.' });
    }
  },

  async atualizarFuncionario(req, res) {
    try {
      const { id } = req.params;
      const { matricula, nome, email, salario_bruto } = req.body;

      const funcionario = await prisma.funcionario.update({
        where: { id: Number(id) },
        data: { matricula, nome, email, salario_bruto }
      });

      res.json(funcionario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o funcionário.' });
    }
  },

  async deletarFuncionario(req, res) {
    try {
      const { id } = req.params;

      await prisma.funcionario.delete({
        where: { id: Number(id) }
      });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o funcionário.' });
    }
  }
};
