const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Paciente = new Schema({
    _id: {
        type: String,
        required: [true, 'Id é obrigatório'],
    },
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório'],
    },
    telefone: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('paciente', Paciente);     