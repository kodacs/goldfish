var bcrypt = require('bcrypt');

create = function (password) {
  bcrypt.genSalt(process.env.npm_package_config_pwSaltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      return hash
    })
  })
}

compare = function (password, hash) {
  bcrypt.compare(password, hash, function(err, res) {
    return res
  })
}

module.exports.create = create
module.exports.compare = compare
