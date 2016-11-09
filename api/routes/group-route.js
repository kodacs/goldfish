const mongoose = require('mongoose')
const express = require('express')

var Group = mongoose.model('Group')
var router = express.Router()


router.route('/')
  .get(function (req, res) {
    Group.find(function(err, groups) {
      if(err) {
        res.send(err)
      }
      else {
        res.json(groups)
      }
    })
  })
  .post(function (req, res) {


  })

router.route('/:group_name')
  .get(function (req, res) {
    Group.find({ name: req.params.group_name}, function(err, group) {
      if(err) {
        res.send(err)
      }
      else {
        res.json(group)
      }
    })
  })

module.exports = router
