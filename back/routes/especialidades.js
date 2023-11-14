// especialidade.route.js

const express = require('express');
const router = express.Router();
const Especialidade = require('../models/especialidades');

// Endpoint para obter todas as especialidades
router.get('/', async (req, res) => {
  try {
    const especialidades = await Especialidade.find();
    res.json(especialidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para obter uma especialidade por ID
router.get('/:id', async (req, res) => {
  try {
    const especialidade = await Especialidade.findById(req.params.id);
    if (especialidade) {
      res.json(especialidade);
    } else {
      res.status(404).json({ message: 'Especialidade não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para criar uma nova especialidade
router.post('/', async (req, res) => {
  const especialidade = new Especialidade({
    descricao: req.body.descricao,
    // Outros campos da especialidade
  });

  try {
    const novaEspecialidade = await especialidade.save();
    res.status(201).json(novaEspecialidade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para atualizar uma especialidade por ID
router.put('/:id', async (req, res) => {
  try {
    const especialidade = await Especialidade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (especialidade) {
      res.json(especialidade);
    } else {
      res.status(404).json({ message: 'Especialidade não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para excluir uma especialidade por ID
router.delete('/:id', async (req, res) => {
  try {
    const especialidade = await Especialidade.findByIdAndRemove(req.params.id);
    if (especialidade) {
      res.json({ message: 'Especialidade removida com sucesso' });
    } else {
      res.status(404).json({ message: 'Especialidade não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
