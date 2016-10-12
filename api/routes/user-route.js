const express    = require('express')
const mongoose   = require('mongoose')
const passcrypt  = require('../middleware/passcrypt')

var User         = mongoose.model('User')
var router       = express.Router()

// auth middleware we dont need that for now
// var checkAuth = require('../checkauth_mw')
// router.use(checkAuth)



// default route: /api/user
router.route('/')
  .get(function (req, res) {
    User.find(function (err, users) {
      if (err) {
        res.send(err)
      } else {
        res.json(users)
      }
    })
  })
  .post(function (req, res) {
    res.send(passcrypt.create(req.body.password))

//    var salt = crypto.randomBytes(128).toString("base64")
//    var user = new User()
//    user.name = req.body.name
//    user.admin = false
//    crypto.pbkdf2(req.body.password, salt, 10000, 128, 'sha512', function (err, hash) {
//      if (err) {
//        res.send(err)
//      } else {
//        user.salt = salt
//        user.passwordHash = hash.toString('hex')
//        user.save(function (err) {
//          if (err) {
//            res.send(err)
//          } else {
//            res.json({ message: 'User created!' })
//          }
//        })
//      }
//    })
  })

module.exports = router;
