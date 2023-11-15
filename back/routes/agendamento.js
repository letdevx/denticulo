const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento'); // Importe o modelo do Agendamento

// GET - Obter todos os agendamentos
router.get('/', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find();
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Obter um agendamento por ID
router.get('/:id', async (req, res) => {
  try {
    const agendamento = await Agendamento.findById(req.params.id);
    if (!agendamento) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.json(agendamento);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Criar um novo agendamento
router.post('/', async (req, res) => {
  const { id_especialidade, id_paciente, id_dentista, data } = req.body;
  const agendamento = new Agendamento({ id_especialidade, id_paciente, id_dentista, data });

  try {
    const novoAgendamento = await agendamento.save();
    res.status(201).json(novoAgendamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Atualizar um agendamento por ID
router.put('/:id', async (req, res) => {
  try {
    const agendamento = await Agendamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!agendamento) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.json(agendamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remover um agendamento por ID
router.delete('/:id', async (req, res) => {
  try {
    const agendamento = await Agendamento.findByIdAndRemove(req.params.id);
    if (!agendamento) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.json({ message: 'Agendamento removido' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
