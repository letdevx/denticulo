// paciente.route.js

const express = require('express');
const router = express.Router();
const Paciente = require('../models/paciente');

// Endpoint para obter todos os pacientes
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para obter um paciente por ID
router.get('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ message: 'Paciente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para criar um novo paciente
router.post('/', async (req, res) => {
  const paciente = new Paciente({
    nome: req.body.nome,
    email: req.body.email,
    // Outros campos do paciente
  });

  try {
    const novoPaciente = await paciente.save();
    res.status(201).json(novoPaciente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para atualizar um paciente por ID
router.put('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ message: 'Paciente não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para excluir um paciente por ID
router.delete('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (paciente) {
      res.json({ message: 'Paciente removido com sucesso' });
    } else {
      res.status(404).json({ message: 'Paciente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
