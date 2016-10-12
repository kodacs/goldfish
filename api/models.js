var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  name: String,
  password: Array,
  email: String,
  admin: Boolean
}));

module.exports = mongoose.model('Group', new Schema({
  name: String,
  mods: Array,
  users: Array
}));