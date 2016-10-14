var bcrypt = require('bcrypt');

module.exports.hash = function (password, callback) {
  bcrypt.genSalt(Number(process.env.npm_package_config_pwsr), function(err, salt) {
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

