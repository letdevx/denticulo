const URI = 'mongodb+srv://leticiasistemasads:Devx@cluster0.ujechls.mongodb.net/agendador?retryWrites=true&w=majority'; 
const mongoose = require('mongoose');

mongoose.connect(URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB Atlas!');
});




