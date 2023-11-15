const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Agendamento = new Schema({
    id_especialidade: {
        type: String,
        required: [true, 'id_especialidade é obrigatório'],
    },
    id_dentista:{
        type: String,
        required: [true, 'id_dentista é obrigatório'],
    },
    id_paciente :{
        type: String,
        required: [true, 'id_paciente é obrigatório'],
    },
    data :{
        type: String,
        required: [true, 'data é obrigatório'],
    },
});

module.exports = mongoose.model('agendamento ', Agendamento);