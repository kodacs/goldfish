module.exports = mongoose.model('Group', new Schema({
  name: String,
  mods: Array,
  users: Array
}));
