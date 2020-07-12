const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();

const Categories = require("../../models/categories.model");

router.get("/", function (req, res) {
	Categories.find({}).then((properties) => {
		res.send(properties);
	});
});

router.post("/new", function (req, res, next) {
	const newCategory = new Category(req.body);
	newCategory
		.save()
		.then((course) => res.json(course))
		.catch((err) => res.json(err));

	Categories.find({}).then((properties) => {
		res.send(properties);
	});

	Category.insertMany(req.body).then((properties, error) => {
		if (error) {
			res.status(400).send("Did not post");
		} else {
			res.status(200).send("Collection posted");
		}
	});
});

module.exports = router;
