var express = require('express');
var router = express.Router();

/* GET | lista de filmes. */
router.get('/consultar', function(req, res, next) {
  var db = req.db;
  var collection = db.get('filmes');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/* GET | consulta um filme. */
router.get('/consultar/:filme', function(req, res, next) {
  res.send('Got a GET request');
  console.log('Filme:', req.params.filme);
});

/* GET | consulta filmes entre data de estreia. */
router.get('/consultar/:filmedti/:filmedtf', function(req, res, next) {
  res.send('Got a GET request');
  console.log('Filme data inicio:', req.params.filmedti);
  console.log('Filme data fim:', req.params.filmedtf);
});

/* POST | insere um filme por url. */
router.post('/inserir', function(req, res, next){
	res.send('Got a POST request');
});

/* PUT | atualiza um filme a partir do nome. */
router.put('/atualizar/:filme', function (req, res) {
  res.send('Got a PUT request');
  console.log('Atualiza filme:', req.params.filme);
});

/* DELETE | apaga um filme pelo nome. */
router.delete('/apagar/:filme', function (req, res) {
  res.send('Got a DELETE request');
  console.log('Delata filme:', req.params.filme);
});

module.exports = router;
