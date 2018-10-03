var express = require('express');

var mongoose = require('mongoose');

var Filme = require('../models/filmes')

var router = express.Router();

function invert_date (oldDate){
  var data = oldDate.split("-");
  let newDate = data[2]+'-'+data[1]+'-'+data[0];

  return newDate;
}

/* GET | lista de filmes. */
router.get('/consultar', function(req, res, next) {
  Filme.find({}, function(err, filmes){
    if (err) {
      return res.send(err)
    }

    res.json(filmes);
  });
});

/* GET | consulta um filme por titulo. */
router.get('/consultar/:titulo', function(req, res, next) {
  let titulo_filme = req.params.titulo;

  Filme.find({titulo: new RegExp(titulo_filme, 'i')}, function(err, filmes){
    if (err) {
      return res.send(err)
    }

    res.json(filmes);
  });
});

/* GET | consulta filmes entre data de estreia. */
router.get('/consultar/:dtainicio/:dtafim', function(req, res, next) {
  let data_inicio = invert_date(req.params.dtainicio);
  let data_fim = invert_date(req.params.dtafim);

  console.log(data_inicio);
  console.log(data_fim);

  Filme.find({
    dtaestreia : {
      '$gte': new Date(data_inicio),
      '$lte': new Date(data_fim)
    }
  }, function(err, filmes){
    if (err) {
      return res.send(err)
    }

    res.json(filmes);
  });
});

/* POST | insere um filme por url. */
router.post('/inserir', function(req, res, next){
	res.send('Got a POST request');
});

/* PUT | atualiza um filme a partir do titulo. */
router.put('/atualizar/:titulo', function (req, res) {
  res.send('Got a PUT request');
  console.log('Atualiza filme:', req.params.filme);
});

/* DELETE | apaga um filme pelo titulo. */
router.delete('/apagar/:titulo', function (req, res) {
  res.send('Got a DELETE request');
  console.log('Delata filme:', req.params.filme);
});

module.exports = router;
