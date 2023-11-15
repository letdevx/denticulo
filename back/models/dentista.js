const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dentistaSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório'],
    },
    // senha: {
    //     type: String,
    //     default: true,

    // }, 
    // foto: {
    //     type: String,
    //     required : true
        
    // },
    // telefone: String,
    
    // dataNascimento: {
    //     type: String,
    //     required: true
    // },
    // recipientId:{
    //     type: String,
    //     required: true
    // }, 
    // dataCadastro:{
    // type: Date,
    // default: Date.now,
    // },

}); 

module.exports = mongoose.model('Dentista ', dentistaSchema);