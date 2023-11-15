const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Agendamento = new Schema({
    id_especialidade: {
        type: String,
        required: [true, 'id_especialidade é obrigatório'],
    },
    "id_dentista": "4738294739",
    "id_paciente": "4738294738",
    "id_especialidade": "4738294732",
    "data": "2020-10-10",
});

module.exports = mongoose.model('agendamento ', Agendamento);