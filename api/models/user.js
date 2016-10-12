module.exports = mongoose.model('User', new Schema({
  name: String,
  password: String,
  email: String,
  admin: Boolean
}));
