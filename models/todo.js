var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: String,
  finish: Boolean,
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
