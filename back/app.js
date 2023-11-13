var express = require('express');
var logger = require('morgan');
var cors = require('cors');
require('./database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pacienteRouter = require('./routes/paciente');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pacientes', pacienteRouter);

module.exports = app;
