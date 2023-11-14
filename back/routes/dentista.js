// dentista.route.js

const express = require('express');
const router = express.Router();
const Dentista = require('./dentista.model');

// Endpoint para obter todos os dentistas
router.get('/', async (req, res) => {
  try {
    const dentistas = await Dentista.find();
    res.json(dentistas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para obter um dentista por ID
router.get('/:id', async (req, res) => {
  try {
    const dentista = await Dentista.findById(req.params.id);
    if (dentista) {
      res.json(dentista);
    } else {
      res.status(404).json({ message: 'Dentista não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para criar um novo dentista
router.post('/', async (req, res) => {
  const dentista = new Dentista({
    nome: req.body.nome,
    email: req.email,
    // Outros campos do dentista
  });

  try {
    const novoDentista = await dentista.save();
    res.status(201).json(novoDentista);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para atualizar um dentista por ID
router.put('/:id', async (req, res) => {
  try {
    const dentista = await Dentista.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (dentista) {
      res.json(dentista);
    } else {
      res.status(404).json({ message: 'Dentista não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para excluir um dentista por ID
router.delete('/:id', async (req, res) => {
  try {
    const dentista = await Dentista.findByIdAndRemove(req.params.id);
    if (dentista) {
      res.json({ message: 'Dentista removido com sucesso' });
    } else {
      res.status(404).json({ message: 'Dentista não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
