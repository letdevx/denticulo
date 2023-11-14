const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Especialidade = new Schema({ 
    descricao: {
        type: String,
        required: [true, 'Descricao é obrigatório'],
    },

}); 

module.exports = mongoose.model('Especialidade', Especialidade);