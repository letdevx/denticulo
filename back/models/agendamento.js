const mongoose = require('mongoose');

// Definição do Schema do Agendamento
const agendamentoSchema = new mongoose.Schema({
  id_especialidade:{ type: mongoose.Schema.Types.ObjectId, ref: 'Especialidade', required: true },
  id_paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  id_dentista: { type: mongoose.Schema.Types.ObjectId, ref: 'Dentista', required: true },
  data: { type: Date, required: true }
});

// Criar o modelo Agendamento a partir do Schema
module.exports = mongoose.model('Agendamento', agendamentoSchema);
