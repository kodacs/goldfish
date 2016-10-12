var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

module.exports = mongoose.model('Todo', new Schema({
  name: String,
  owner: String,
  group: String,
  todo: Array
}));
