const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

module.exports = mongoose.model('Group', new Schema({
  name: String,
  mods: Array,
  users: Array
}, {collection: 'groups'}))
