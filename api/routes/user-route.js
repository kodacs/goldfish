const express    = require('express')
const mongoose   = require('mongoose')
const bcrypt     = require('bcrypt')

const passcrypt  = require('../middleware/passcrypt')

var User         = mongoose.model('User')
var router       = express.Router()

// auth middleware we dont need that for now
// var checkAuth = require('../checkauth_mw')
// router.use(checkAuth)



// default route: /api/user
router.route('/')
  .get(function (req, res) {
    User.find()
  })
  .post(function (req, res) {
    passcrypt.hash(req.body.password, function (hash){
      res.send('hash ' + hash)
    })
  })

router.route('/add')
  .post(function (req, res) {
    passcrypt.hash(req.body.password, function (passhash) {
      var addUser = new User({ 'name': req.body.name, 'password': passhash, 'email': req.body.email, 'admin': false})
      addUser.save(function (err) {
        if (err) {
          res.send(err)
        } else {
          res.send('OK')
        }
      })
    })
  })

router.route('/name/:name')
  .get(function (req, res) {
    User.findOne({ 'name': req.param.name}, 'email', function (err, useremail) {
      if (err) {
        res.send(err)
      } else {
        res.send(useremail)
      }
    })
  })

router.route('/initsetup')
  .get(function (req, res) {
    passcrypt.hash('26_character_long_password', function(passhash) {
//      var addUser = new User({ 'name': 'superadmin', 'password': passhash, 'email': 'sum_ting_wong@horsecockmail.com', 'admin': true})
      var addUser = new User()
      addUser.name = 'superadmin'
      addUser.password = passhash
      addUser.email = 'sum_ting_wong@horsecockmail.com'
      addUser.admin = true
      addUser.save(function (err) {
        if (err) {
          res.send(err)
        } else {
          res.send('OK')
        }
      })
    })
  })

module.exports = router
