const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");


// need to made model for Brief
// const Briefs = require("../../");

router.get('/', function (req, res) {
    res.send("You are on the brief page")
//   Briefs.find({}).then(properties => {
//     res.send(properties)
//   });
});

router.post('/new', function (req, res) {
    //post method for new brief here
  });

module.exports = router;