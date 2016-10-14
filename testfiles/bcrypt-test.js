//for testting

var bcrypt = require('bcrypt');
const saltRounds = 11;
const myPlaintextPassword = 'hideyowife';
var typedPW =  process.argv[2];

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
      console.log(saltRounds, '\n' , salt, '\n', hash)
      bcrypt.compare(typedPW, hash, function(err, res) {
        if (res) {
          console.log('good');
        } else {
          console.log('nongood')
        }
      })

    });
});
