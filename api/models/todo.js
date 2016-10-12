var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

module.exports = mongoose.model('Todo', new Schema({
  todo_id: {type: Number, unique: true},
  name: String,
  owner: String,
  groups: Array,
  content: String,
  submit_date: {type: Date, default: Date.now},
  due_date: Date
}));
