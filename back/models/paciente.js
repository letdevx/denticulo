const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Paciente = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {required: [true, 'E-mail é obrigatório'],
    },
    telefone: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: String,
        required: true,
    },
    documento:{
        tipo:{
            type: String,
            enum:['individual','corporation'],
            required: true,
        },
        numero:{
            type: String,
            required: true,
        }
    },
    endereco: { 
        cidade: String,
        uf: String,
        cep: String, 
        numero: String,
        rua: String,
    },      
    
    dataCadastro:{
    type: Date,
    default: Date.now,
    },

}); 

module.exports = mongoose.model('paciente', Paciente);     