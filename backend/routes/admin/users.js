const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");


const Users = require("../../models/users.model");

router.get('/', function (req, res) {
  Users.find({}).then(properties => {
    res.send(properties)
  });
});

module.exports = router;