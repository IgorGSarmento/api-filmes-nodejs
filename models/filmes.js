var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filmesSchema = new Schema(
{
	titulo : String,
	dtaestreia : Date,
	diretor : [String],
	genero : [String],
	classindicativa : String
}, 
{
    versionKey: false
});

module.exports = mongoose.model('Filme', filmesSchema, 'filmes');