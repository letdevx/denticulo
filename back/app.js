var express = require('express');
var logger = require('morgan');
var cors = require('cors');
require('./database');

var pacienteRouter = require('./routes/paciente');
var dentistaRouter = require('./routes/dentista');
var especialidadesRouter = require('./routes/especialidades');
var agendamentosRouter = require('./routes/agendamento');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/pacientes', pacienteRouter);
app.use('/dentistas', dentistaRouter);
app.use('/dentistas/:dentistaId/agendamentos', agendamentosRouter);
app.use('/especialidades', especialidadesRouter);


module.exports = app;
