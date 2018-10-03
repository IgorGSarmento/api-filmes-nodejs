var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var filmesRouter = require('./routes/filmes');

var app = express();

var dbName = 'api-filmes';
var connectionString = 'mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Content-Type", "application/json");
     next();
 });

app.use('/', indexRouter);

app.use('/filmes', filmesRouter);

module.exports = app;
