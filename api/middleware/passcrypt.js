var bcrypt = require('bcrypt');

module.exports.create = function (password, callback) {
  bcrypt.genSalt(process.env.npm_package_config_pwSaltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      callback(hash)
    })
  })
}

module.exports.compare = function (password, hash, callback) {
  bcrypt.compare(password, hash, function(err, res) {
    callback(res)
  })
}

