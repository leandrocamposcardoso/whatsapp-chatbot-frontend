var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userdata = new mongoose.Schema({
    nome: String,
    presente: Boolean,
    respondeu: Boolean,
    motivo: Number,
    opiniao: Number,
    feedback: String
  
  });

  module.exports = mongoose.model('userdata', userdata);        