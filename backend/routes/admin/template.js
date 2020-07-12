const express = require("express");
const router = express.Router();

const Template = require("../../models/templates.model");
const { json } = require("body-parser");

router.get("/", function (req, res) {
	Template.find({}).then((properties) => {
		res.send(properties);
	});
});

router.post("/", (req, res) => {
	console.log(req.body);
	Template.insertMany(req.body).then((properties, error) => {
		if (error) {
			res.status(400).send("did not post");
		} else {
			res.status(200).send("Template posted");
		}
	});
});

module.exports = router;
