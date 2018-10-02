var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/api-filmes');

var indexRouter = require('./routes/index');
var filmesRouter = require('./routes/filmes');

var app = express();

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/filmes', filmesRouter);

module.exports = app;
