'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: String,
  type : String,
  image: String,
  answer: Schema.Types.Mixed,
  options : {}
});

module.exports = mongoose.model('Question', QuestionSchema);