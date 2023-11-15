const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento'); // Importando o modelo de Agendamento

// Obtém todos os agendamentos de um dentista específico
router.get('/', async (req, res) => {
  try {
    const { dentistaId } = req.params;
    const agendamentos = await Agendamento.find({ id_dentista: dentistaId });
      // .populate('id_especialidade')
      // .populate('id_paciente')
      // .populate('id_dentista');
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obter um agendamento específico de um dentista
router.get('/:agendamentoId', async (req, res) => {
  try {
    const { dentistaId, agendamentoId } = req.params;

    const agendamento = await Agendamento.findOne({
      _id: agendamentoId,
      id_dentista: dentistaId,
    });
      // .populate('id_especialidade')
      // .populate('id_paciente')
      // .populate('id_dentista');

    if (!agendamento) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }

    res.json(agendamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Criar um novo agendamento para um dentista específico
router.post('/', async (req, res) => {
  try {
    const { dentistaId } = req.params;
    const { id_especialidade, id_paciente, data } = req.body;

    const novoAgendamento = new Agendamento({
      id_especialidade,
      id_paciente,
      id_dentista: dentistaId,
      data
    });

    const agendamentoSalvo = await novoAgendamento.save();
    res.status(201).json(agendamentoSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Atualizar um agendamento específico de um dentista
router.put('/:agendamentoId', async (req, res) => {
  try {
    const { dentistaId, agendamentoId } = req.params;
    const { id_especialidade, id_paciente, data } = req.body;

    // TODO: alterar o paciente do agendamento não parece interessante.
    // Permitir alterar somente o procedimento e a data/hora.
    const agendamento = await Agendamento.findOneAndUpdate(
      { _id: agendamentoId, id_dentista: dentistaId },
      { $set: { id_especialidade, id_paciente, data } },
      { new: true }
    );

    if (!agendamento) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }

    res.json(agendamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Excluir um agendamento específico de um dentista
router.delete('/:agendamentoId', async (req, res) => {
  try {
    const { dentistaId, agendamentoId } = req.params;

    const agendamento = await Agendamento.findOneAndDelete({
      _id: agendamentoId,
      id_dentista: dentistaId,
    });

    if (!agendamento) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }

    res.json({ message: 'Agendamento excluído com sucesso' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
